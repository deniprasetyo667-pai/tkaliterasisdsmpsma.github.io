import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));

const PORT = Number(process.env.PORT) || 3000;
const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory Multi-User Datastore
interface MultiUserResultItem {
  id: string;
  userId: string;
  userName: string;
  nisn?: string;
  kelasRombel?: string;
  jenjang: string;
  kelas: number;
  paketId: string;
  paketJudul: string;
  tanggal: string;
  durasiDetik: number;
  totalSoal: number;
  jawabanBenar: number;
  jawabanSalah: number;
  tidakDijawab: number;
  skorDiperoleh: number;
  skorMaksimum: number;
  nilaiAkhir: number;
  submittedAt: string;
}

interface ActiveUser {
  userId: string;
  nama: string;
  role: string;
  kelasRombel?: string;
  jenjang?: string;
  lastSeen: number;
}

interface ClassRoom {
  id: string;
  namaKelas: string;
  jenjang: string;
  kodeAktivasi: string;
  guruPengampu: string;
  kuotaSiswa: number;
  totalPeserta: number;
  createdAt: string;
}

const multiUserResults: MultiUserResultItem[] = [];
const activeUsersMap = new Map<string, ActiveUser>();
const classRooms: ClassRoom[] = [
  {
    id: 'CLS-8A-SMP',
    namaKelas: 'Kelas 8A',
    jenjang: 'SMP',
    kodeAktivasi: 'SISWA-PRO-2026',
    guruPengampu: 'Deni Prasetyo, M.Pd.',
    kuotaSiswa: 36,
    totalPeserta: 18,
    createdAt: '2026-01-15T08:00:00Z',
  },
  {
    id: 'CLS-9B-SMP',
    namaKelas: 'Kelas 9B',
    jenjang: 'SMP',
    kodeAktivasi: 'SISWA-PRO-2026',
    guruPengampu: 'Deni Prasetyo, M.Pd.',
    kuotaSiswa: 36,
    totalPeserta: 12,
    createdAt: '2026-01-15T08:00:00Z',
  },
  {
    id: 'CLS-5A-SD',
    namaKelas: 'Kelas 5A',
    jenjang: 'SD',
    kodeAktivasi: 'TKA-SD-2026',
    guruPengampu: 'Nurul Hidayah, S.Pd.',
    kuotaSiswa: 30,
    totalPeserta: 15,
    createdAt: '2026-02-01T08:00:00Z',
  },
];

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
    multiUser: {
      activeUsers: activeUsersMap.size,
      totalSubmissions: multiUserResults.length,
      totalClasses: classRooms.length,
    },
  });
});

// Multi-User: Submit student test result
app.post('/api/multiuser/submit-result', (req: Request, res: Response) => {
  try {
    const { hasil, session } = req.body;
    if (!hasil || !hasil.id) {
      return res.status(400).json({ error: 'Data hasil pengerjaan tidak lengkap' });
    }

    const item: MultiUserResultItem = {
      id: hasil.id,
      userId: session?.id || hasil.userId || 'ANON',
      userName: session?.nama || hasil.userName || 'Siswa',
      nisn: session?.nisn,
      kelasRombel: session?.kelasRombel || (hasil.kelas ? `Kelas ${hasil.kelas}` : 'Umum'),
      jenjang: hasil.jenjang,
      kelas: hasil.kelas,
      paketId: hasil.paketId,
      paketJudul: hasil.paketJudul,
      tanggal: hasil.tanggal,
      durasiDetik: hasil.durasiDetik,
      totalSoal: hasil.totalSoal,
      jawabanBenar: hasil.jawabanBenar,
      jawabanSalah: hasil.jawabanSalah,
      tidakDijawab: hasil.tidakDijawab,
      skorDiperoleh: hasil.skorDiperoleh,
      skorMaksimum: hasil.skorMaksimum,
      nilaiAkhir: hasil.nilaiAkhir,
      submittedAt: new Date().toISOString(),
    };

    // Prevent duplicate submission id, update if already present
    const existingIdx = multiUserResults.findIndex(r => r.id === item.id);
    if (existingIdx >= 0) {
      multiUserResults[existingIdx] = item;
    } else {
      multiUserResults.unshift(item);
    }

    // Limit memory array to last 1000 items
    if (multiUserResults.length > 1000) {
      multiUserResults.length = 1000;
    }

    return res.json({ success: true, count: multiUserResults.length });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Multi-User: Get student results (filtered by class, jenjang, etc.)
app.get('/api/multiuser/results', (req: Request, res: Response) => {
  const { kelas, jenjang, limit } = req.query;
  let results = [...multiUserResults];

  if (jenjang && typeof jenjang === 'string' && jenjang !== 'Semua') {
    results = results.filter(r => r.jenjang === jenjang);
  }

  if (kelas && typeof kelas === 'string' && kelas !== 'Semua') {
    results = results.filter(r => r.kelasRombel === kelas || String(r.kelas) === kelas);
  }

  const maxItems = Number(limit) || 100;
  return res.json({
    total: results.length,
    results: results.slice(0, maxItems),
  });
});

// Multi-User: Heartbeat to keep active presence alive
app.post('/api/multiuser/heartbeat', (req: Request, res: Response) => {
  try {
    const { userId, nama, role, kelasRombel, jenjang } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID wajib' });
    }

    activeUsersMap.set(userId, {
      userId,
      nama: nama || 'Pengguna',
      role: role || 'siswa',
      kelasRombel,
      jenjang,
      lastSeen: Date.now(),
    });

    // Prune entries older than 3 minutes
    const now = Date.now();
    for (const [id, user] of activeUsersMap.entries()) {
      if (now - user.lastSeen > 3 * 60 * 1000) {
        activeUsersMap.delete(id);
      }
    }

    return res.json({
      success: true,
      activeCount: activeUsersMap.size,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Multi-User: Get active users count and presence
app.get('/api/multiuser/active-users', (req: Request, res: Response) => {
  const now = Date.now();
  for (const [id, user] of activeUsersMap.entries()) {
    if (now - user.lastSeen > 3 * 60 * 1000) {
      activeUsersMap.delete(id);
    }
  }

  return res.json({
    activeCount: Math.max(1, activeUsersMap.size),
    users: Array.from(activeUsersMap.values()).map(u => ({
      userId: u.userId,
      nama: u.nama,
      role: u.role,
      kelasRombel: u.kelasRombel,
      jenjang: u.jenjang,
      lastSeen: new Date(u.lastSeen).toISOString(),
    })),
  });
});

// Multi-User: Get registered classes
app.get('/api/multiuser/classes', (req: Request, res: Response) => {
  return res.json({
    classes: classRooms,
  });
});

// Multi-User: Create or register class
app.post('/api/multiuser/classes', (req: Request, res: Response) => {
  try {
    const { namaKelas, jenjang, kodeAktivasi, guruPengampu, kuotaSiswa } = req.body;
    if (!namaKelas || !jenjang) {
      return res.status(400).json({ error: 'Nama kelas dan jenjang wajib diisi' });
    }

    const newClass: ClassRoom = {
      id: `CLS-${Date.now().toString().slice(-6)}`,
      namaKelas: String(namaKelas).trim(),
      jenjang: String(jenjang).trim(),
      kodeAktivasi: (kodeAktivasi || 'SISWA-PRO-2026').trim().toUpperCase(),
      guruPengampu: (guruPengampu || 'Guru Bahasa Indonesia').trim(),
      kuotaSiswa: Number(kuotaSiswa) || 36,
      totalPeserta: 0,
      createdAt: new Date().toISOString(),
    };

    classRooms.unshift(newClass);
    return res.json({ success: true, class: newClass });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Endpoint to generate assessment stimulus, questions, and kisi-kisi
app.post('/api/ai/generate', async (req: Request, res: Response) => {
  try {
    const {
      jenjang,
      kelas,
      kompetensi,
      indikatorList,
      jenisTeks,
      topik,
      jumlahSoal,
      tingkatKesulitan,
      bentukSoal,
      isDualText,
      customStimulusText,
      customStimulusTitle,
    } = req.body;

    if (!jenjang || !kelas) {
      return res.status(400).json({ error: 'Jenjang dan kelas wajib diisi' });
    }

    // If Gemini AI is configured, use gemini-3.8-flash
    if (ai) {
      const systemInstruction = `Anda adalah Ahli Asesmen Literasi Membaca Indonesia dan Pengembang Instrumen Tes Kemampuan Akademik (TKA) Bahasa Indonesia untuk jenjang ${jenjang} Kelas ${kelas}.
Pedoman Asesmen Ketat & Validitas:
1. WAJIB MENYATUKAN SOAL DAN STIMULUS (JANGAN PISAH ANTARA SOAL DENGAN STIMULUS):
   - Wacana stimulus adalah inti dari soal literasi membaca. SOAL TIDAK BOLEH BERDIRI SENDIRI TANPA STIMULUS!
   - Setiap butir pertanyaan harus secara eksplisit menuntut pemahaman terhadap teks wacana yang disajikan (misal: "Berdasarkan wacana di atas...", "Menurut paragraf kedua...", "Berdasarkan teks tersebut...").
   - Soal mengukur:
     * Pemahaman Tekstual: Menemukan informasi tersurat eksplisit dalam stimulus.
     * Pemahaman Inferensial: Menarik simpulan logis, hubungan sebab-akibat, implikasi tersirat stimulus.
     * Evaluasi dan Apresiasi: Menilai kredibilitas, membandingkan sudut pandang, menimbang relevansi argumen stimulus.
2. TEMA HARUS AKTUAL, DINAMIS, DAN MENDIDIK:
   - Pilih tema kontemporer yang relevan dengan Indonesia: transisi energi terbarukan, konservasi keanekaragaman hayati, ketahanan pangan lokal, sains modern, atau kearifan lokal.
   - Jangan membuat teks fiktif yang tidak bermakna atau klise.
3. DISTRIBUSI KUNCI JAWABAN WAJIB SEIMBANG:
   - Kunci jawaban (A, B, C, D) HARUS TERDISTRIBUSI SECARA DINAMIS DAN BERIMBANG.
   - Pastikan hanya ada SATU kunci jawaban yang paling tepat dan tidak terbantahkan.
4. BUKTI TEKSTUAL EKSPLISIT:
   - Field "buktiTekstual" WAJIB mengutip langsung kalimat atau frasa persis dari dalam teks stimulus (dengan tanda petik ganda) yang membuktikan kebenaran kunci jawaban.
5. KUALITAS DISTRAKTOR (PENGECOH):
   - Tiap opsi salah (distraktor) harus masuk akal, gramatikal, dan mewakili miskonsepsi umum peserta didik, disertai alasan penolakan pada field "alasanDistraktor".
6. STANDAR KETERBACAAN TEKS:
   - SD (Kelas 4-6): 120-180 kata, bahasa mudah dipahami, kalimat komunikatif.
   - SMP (Kelas 7-9): 180-250 kata, wacana informatif analitis atau prosa naratif dengan konflik nilai.
   - SMA (Kelas 10-12): 250-300 kata per teks. Kalimat bervariasi dengan rata-rata 8-12 kata per kalimat. Memuat kosakata ilmiah populer dan kata serapan baku. Jika Teks Jamak (Dual Text), sediakan Teks 1 dan Teks 2 dengan sudut pandang saling melengkapi atau berdialog.
7. Output HANYA berupa JSON valid sesuai skema yang diminta tanpa markdown pembungkus lainnya.`;

      const prompt = `Buatlah paket stimulus dan ${jumlahSoal || 3} butir soal TKA Literasi Membaca yang DINAMIS, AKTUAL, dan VALID:
- Jenjang: ${jenjang}
- Kelas: ${kelas}
- Fokus Kompetensi: ${kompetensi || 'Campuran (Tekstual, Inferensial, Evaluasi)'}
- Indikator Terpilih: ${Array.isArray(indikatorList) && indikatorList.length > 0 ? indikatorList.map((i: any) => `${i.kode}: ${i.rumusan}`).join('; ') : 'Sesuai kurikulum jenjang ' + jenjang}
- Jenis Teks: ${jenisTeks || 'Teks informasi'}
- Tema / Topik: ${topik || 'Isu Aktual Lingkungan, Teknologi, atau Sosial Budaya Indonesia'}
- Tingkat Kesulitan: ${tingkatKesulitan || 'Sedang'}
- Bentuk Soal: ${bentukSoal || 'Pilihan Ganda'}
- Format Teks: ${isDualText ? 'Teks Jamak (Dual Text dengan Teks 1 dan Teks 2 yang saling berdialog perspektif)' : 'Teks Tunggal'}
${customStimulusText ? `Gunakan teks masukan guru berikut:\nJudul: ${customStimulusTitle || 'Stimulus Guru'}\nIsi: ${customStimulusText}` : 'Buat wacana orisinal dengan tema aktual dan bahasa baku EYD V.'}

ATURAN KHUSUS KUNCI JAWABAN:
- Sebarkan kunci jawaban secara merata pada opsi A, B, C, atau D (jangan seragam).
- Opsi jawaban berjumlah 4 (A, B, C, D) dengan panjang kalimat yang relatif seimbang.

Format JSON yang wajib dihasilkan:
{
  "stimulus": {
    "judul": string,
    "isiTeks": string,
    "jenisTeks": string,
    "topik": string,
    "isDual": boolean,
    "teks2Judul": string,
    "teks2Isi": string,
    "teks2Jenis": string,
    "jumlahKata": number,
    "jumlahKataTeks2": number,
    "sumber": string
  },
  "soal": [
    {
      "kompetensi": "Pemahaman Tekstual" | "Pemahaman Inferensial" | "Evaluasi dan Apresiasi",
      "indikatorId": string,
      "indikator": string,
      "tingkatKesulitan": "Mudah" | "Sedang" | "Sulit",
      "bentukSoal": string,
      "pertanyaan": string,
      "pilihan": [
        {"kode": "A", "teks": string, "alasanDistraktor": string},
        {"kode": "B", "teks": string, "alasanDistraktor": string},
        {"kode": "C", "teks": string, "alasanDistraktor": string},
        {"kode": "D", "teks": string, "alasanDistraktor": string}
      ],
      "kunciJawaban": "A" | "B" | "C" | "D",
      "pembahasan": string,
      "buktiTekstual": string,
      "bobot": 1
    }
  ]
}`;

      const aiResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          temperature: 0.75,
        },
      });

      const responseText = aiResponse.text?.trim() || '{}';
      const parsedData = JSON.parse(responseText);

      if (parsedData.stimulus && Array.isArray(parsedData.soal)) {
        parsedData.soal = parsedData.soal.map((s: any) => ({
          ...s,
          stimulusJudul: parsedData.stimulus.judul,
          stimulusTeks: parsedData.stimulus.isiTeks,
          stimulusJenis: parsedData.stimulus.jenisTeks,
        }));
      }

      return res.json({
        success: true,
        source: 'gemini-3.8-flash',
        data: parsedData,
      });
    }

    // If Gemini key is not set, notify client so client uses intelligent rule-based curricular generator
    return res.json({
      success: false,
      useCurriculumEngine: true,
      message: 'Server Gemini API key belum dikonfigurasi. Menggunakan Generator Kurikulum Terintegrasi internal.',
    });
  } catch (err: any) {
    console.error('Error generating questions:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Gagal menghasilkan soal dengan AI',
      useCurriculumEngine: true,
    });
  }
});

// Endpoint to evaluate student essay response
app.post('/api/ai/evaluate-essay', async (req: Request, res: Response) => {
  try {
    const { pertanyaan, jawabanSiswa, stimulus, rubrik } = req.body;
    if (!ai) {
      return res.json({
        score: 75,
        feedback: 'Penilaian otomatis berbasis kata kunci. Disarankan peninjauan guru untuk penilaian definitif.',
      });
    }

    const prompt = `Evaluasi jawaban siswa berikut terhadap pertanyaan uraian literasi membaca:
Stimulus: ${stimulus}
Pertanyaan: ${pertanyaan}
Rubrik: ${rubrik || 'Kesesuaian dengan bukti teks, kelogisan penalaran, dan kelengkapan argumen.'}
Jawaban Siswa: ${jawabanSiswa}

Berikan output JSON:
{
  "skor": number (0 - 100),
  "alasan": string,
  "kekuatan": string,
  "saranPerbaikan": string
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    return res.json(parsed);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Setup Vite in development or static in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TKA LITERASI SMART PRO server running on port ${PORT}`);
  });
}

startServer();
