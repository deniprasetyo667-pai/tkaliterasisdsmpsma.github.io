import { 
  StimulusItem, 
  SoalItem, 
  PaketLatihan, 
  HasilPengerjaan, 
  Jenjang, 
  Kelas, 
  KompetensiType 
} from '../types/assessment';
import { SEED_STIMULI, SEED_SOAL, SEED_PAKET } from '../data/seedData';
import { getCurrentSession } from './auth';
import { syncResultToServer } from './multiUser';

const STIMULI_KEY = 'tka_stimuli_v2';
const SOAL_KEY = 'tka_soal_v2';
const PAKET_KEY = 'tka_paket_v2';
const HASIL_KEY = 'tka_hasil_v1';

export function getStoredStimuli(): StimulusItem[] {
  try {
    const raw = localStorage.getItem(STIMULI_KEY);
    if (!raw) {
      localStorage.setItem(STIMULI_KEY, JSON.stringify(SEED_STIMULI));
      return SEED_STIMULI;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length < SEED_STIMULI.length) {
      localStorage.setItem(STIMULI_KEY, JSON.stringify(SEED_STIMULI));
      return SEED_STIMULI;
    }
    return parsed;
  } catch (e) {
    return SEED_STIMULI;
  }
}

export function saveStimulus(stimulus: StimulusItem): void {
  const all = getStoredStimuli();
  const idx = all.findIndex(s => s.id === stimulus.id);
  if (idx >= 0) {
    all[idx] = stimulus;
  } else {
    all.unshift(stimulus);
  }
  localStorage.setItem(STIMULI_KEY, JSON.stringify(all));
}

export function deleteStimulus(id: string): void {
  const all = getStoredStimuli().filter(s => s.id !== id);
  localStorage.setItem(STIMULI_KEY, JSON.stringify(all));
}

export function getStoredSoal(): SoalItem[] {
  try {
    const raw = localStorage.getItem(SOAL_KEY);
    if (!raw) {
      localStorage.setItem(SOAL_KEY, JSON.stringify(SEED_SOAL));
      return SEED_SOAL;
    }
    const parsed: SoalItem[] = JSON.parse(raw);
    // Auto-migrate if stored questions are fewer than seed bank or lack stimulus binding
    if (!Array.isArray(parsed) || parsed.length < 50) {
      const mergedMap = new Map<string, SoalItem>();
      SEED_SOAL.forEach(s => mergedMap.set(s.id, s));
      parsed.forEach(s => {
        if (!mergedMap.has(s.id)) mergedMap.set(s.id, s);
      });
      const merged = Array.from(mergedMap.values());
      localStorage.setItem(SOAL_KEY, JSON.stringify(merged));
      return merged;
    }
    return parsed;
  } catch (e) {
    return SEED_SOAL;
  }
}

export function saveSoal(soal: SoalItem): void {
  const all = getStoredSoal();
  const idx = all.findIndex(s => s.id === soal.id);
  if (idx >= 0) {
    // increment version
    all[idx] = { ...soal, versi: (soal.versi || 1) + 1 };
  } else {
    all.unshift(soal);
  }
  localStorage.setItem(SOAL_KEY, JSON.stringify(all));
}

export function saveMultipleSoal(soals: SoalItem[]): void {
  const all = getStoredSoal();
  const map = new Map(all.map(s => [s.id, s]));
  for (const s of soals) {
    map.set(s.id, s);
  }
  localStorage.setItem(SOAL_KEY, JSON.stringify(Array.from(map.values())));
}

export function deleteSoal(id: string): void {
  const all = getStoredSoal().filter(s => s.id !== id);
  localStorage.setItem(SOAL_KEY, JSON.stringify(all));
}

export function getStoredPaket(): PaketLatihan[] {
  try {
    const raw = localStorage.getItem(PAKET_KEY);
    if (!raw) {
      localStorage.setItem(PAKET_KEY, JSON.stringify(SEED_PAKET));
      return SEED_PAKET;
    }
    const parsed: PaketLatihan[] = JSON.parse(raw);
    // Check if simulation packages match authentic TKA count standards (SD: >=25, SMP: >=30, SMA: >=35)
    const simSD = parsed.find(p => p.id === 'PKT-SD-SIM-01');
    if (!simSD || simSD.soalIds.length < 25) {
      // Merge with SEED_PAKET
      const mergedMap = new Map<string, PaketLatihan>();
      SEED_PAKET.forEach(p => mergedMap.set(p.id, p));
      parsed.forEach(p => {
        if (!mergedMap.has(p.id)) mergedMap.set(p.id, p);
      });
      const merged = Array.from(mergedMap.values());
      localStorage.setItem(PAKET_KEY, JSON.stringify(merged));
      return merged;
    }
    return parsed;
  } catch (e) {
    return SEED_PAKET;
  }
}

export function savePaket(paket: PaketLatihan): void {
  const all = getStoredPaket();
  const idx = all.findIndex(p => p.id === paket.id);
  if (idx >= 0) {
    all[idx] = paket;
  } else {
    all.unshift(paket);
  }
  localStorage.setItem(PAKET_KEY, JSON.stringify(all));
}

export function deletePaket(id: string): void {
  const all = getStoredPaket().filter(p => p.id !== id);
  localStorage.setItem(PAKET_KEY, JSON.stringify(all));
}

export function getStoredHasil(): HasilPengerjaan[] {
  try {
    const raw = localStorage.getItem(HASIL_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveHasil(hasil: HasilPengerjaan): void {
  const all = getStoredHasil();
  all.unshift(hasil);
  localStorage.setItem(HASIL_KEY, JSON.stringify(all));
}

export function calculateAndSaveResult(
  paket: PaketLatihan,
  soalList: SoalItem[],
  userAnswers: Record<string, any>,
  durasiDetik: number,
  userId: string = 'SISWA-01',
  userName: string = 'Peserta Latihan'
): HasilPengerjaan {
  let benar = 0;
  let salah = 0;
  let tidakDijawab = 0;
  let skorDiperoleh = 0;
  let skorMaksimum = 0;

  const kompetensiStats: Record<KompetensiType, { benar: number; total: number; bobotBenar: number; bobotTotal: number }> = {
    'Pemahaman Tekstual': { benar: 0, total: 0, bobotBenar: 0, bobotTotal: 0 },
    'Pemahaman Inferensial': { benar: 0, total: 0, bobotBenar: 0, bobotTotal: 0 },
    'Evaluasi dan Apresiasi': { benar: 0, total: 0, bobotBenar: 0, bobotTotal: 0 },
  };

  const indicatorMap: Record<string, { benar: number; total: number; rumusan: string }> = {};

  for (const soal of soalList) {
    const ans = userAnswers[soal.id];
    const bobot = soal.bobot || 1;
    skorMaksimum += bobot;

    // track indicator
    if (!indicatorMap[soal.indikatorId]) {
      indicatorMap[soal.indikatorId] = { benar: 0, total: 0, rumusan: soal.indikator };
    }
    indicatorMap[soal.indikatorId].total += 1;

    // track competency
    if (kompetensiStats[soal.kompetensi]) {
      kompetensiStats[soal.kompetensi].total += 1;
      kompetensiStats[soal.kompetensi].bobotTotal += bobot;
    }

    if (ans === undefined || ans === '' || ans === null) {
      tidakDijawab += 1;
    } else {
      let isCorrect = false;
      if (soal.bentukSoal === 'Pilihan Ganda') {
        isCorrect = String(ans).trim().toUpperCase() === String(soal.kunciJawaban).trim().toUpperCase();
      } else if (soal.bentukSoal === 'Pilihan Ganda Kompleks') {
        const expected = String(soal.kunciJawaban).split(',').map(s => s.trim().toUpperCase()).sort().join(',');
        const given = Array.isArray(ans) ? ans.map(s => String(s).trim().toUpperCase()).sort().join(',') : String(ans).trim().toUpperCase();
        isCorrect = expected === given;
      } else if (soal.bentukSoal === 'Benar/Salah') {
        isCorrect = String(ans) === String(soal.kunciJawaban);
      } else if (soal.bentukSoal === 'Isian Singkat') {
        isCorrect = String(ans).trim().toLowerCase() === String(soal.kunciJawaban).trim().toLowerCase();
      } else {
        // default fallback
        isCorrect = String(ans).trim().toUpperCase() === String(soal.kunciJawaban).trim().toUpperCase();
      }

      if (isCorrect) {
        benar += 1;
        skorDiperoleh += bobot;
        indicatorMap[soal.indikatorId].benar += 1;
        if (kompetensiStats[soal.kompetensi]) {
          kompetensiStats[soal.kompetensi].benar += 1;
          kompetensiStats[soal.kompetensi].bobotBenar += bobot;
        }
      } else {
        salah += 1;
      }
    }
  }

  const nilaiAkhir = skorMaksimum > 0 ? Math.round((skorDiperoleh / skorMaksimum) * 100) : 0;

  const analisisKompetensi: Record<KompetensiType, { kompetensi: KompetensiType; benar: number; total: number; persentase: number }> = {
    'Pemahaman Tekstual': {
      kompetensi: 'Pemahaman Tekstual',
      benar: kompetensiStats['Pemahaman Tekstual'].benar,
      total: kompetensiStats['Pemahaman Tekstual'].total,
      persentase: kompetensiStats['Pemahaman Tekstual'].total > 0
        ? Math.round((kompetensiStats['Pemahaman Tekstual'].benar / kompetensiStats['Pemahaman Tekstual'].total) * 100)
        : 0,
    },
    'Pemahaman Inferensial': {
      kompetensi: 'Pemahaman Inferensial',
      benar: kompetensiStats['Pemahaman Inferensial'].benar,
      total: kompetensiStats['Pemahaman Inferensial'].total,
      persentase: kompetensiStats['Pemahaman Inferensial'].total > 0
        ? Math.round((kompetensiStats['Pemahaman Inferensial'].benar / kompetensiStats['Pemahaman Inferensial'].total) * 100)
        : 0,
    },
    'Evaluasi dan Apresiasi': {
      kompetensi: 'Evaluasi dan Apresiasi',
      benar: kompetensiStats['Evaluasi dan Apresiasi'].benar,
      total: kompetensiStats['Evaluasi dan Apresiasi'].total,
      persentase: kompetensiStats['Evaluasi dan Apresiasi'].total > 0
        ? Math.round((kompetensiStats['Evaluasi dan Apresiasi'].benar / kompetensiStats['Evaluasi dan Apresiasi'].total) * 100)
        : 0,
    },
  };

  const indikatorDikuasai: string[] = [];
  const indikatorPerluPerkuat: string[] = [];

  for (const [kode, data] of Object.entries(indicatorMap)) {
    const pct = data.total > 0 ? (data.benar / data.total) * 100 : 0;
    const label = `${kode} - ${data.rumusan} (${data.benar}/${data.total} benar)`;
    if (pct >= 70) {
      indikatorDikuasai.push(label);
    } else {
      indikatorPerluPerkuat.push(label);
    }
  }

  // Pedagogical actionable recommendation
  const rekomendasi: string[] = [];
  if (analisisKompetensi['Pemahaman Tekstual'].persentase < 70) {
    rekomendasi.push('Tingkatkan kecermatan dalam menemukan informasi eksplisit, kata kunci penting, dan pemahaman makna istilah/kosakata khusus dalam bacaan.');
  } else {
    rekomendasi.push('Penguasaan pemahaman tekstual Anda sudah solid. Pertahankan ketelitian ini.');
  }

  if (analisisKompetensi['Pemahaman Inferensial'].persentase < 70) {
    rekomendasi.push('Perbanyak latihan dalam mengaitkan hubungan sebab-akibat antarkalimat atau antarparagraf dan menarik kesimpulan berdasarkan bukti tersembunyi.');
  }

  if (analisisKompetensi['Evaluasi dan Apresiasi'].persentase < 70) {
    rekomendasi.push('Kembangkan daya kritis untuk menilai keakuratan data, validitas argumen antarteks, dan keefektifan gaya bahasa atau respons estetis penulis.');
  }

  if (rekomendasi.length === 1 && nilaiAkhir >= 85) {
    rekomendasi.push('Luar biasa! Tingkatkan kecepatan membaca dan eksplorasi teks multimodal atau teks jamak dengan topik kontemporer.');
  }

  const hasil: HasilPengerjaan = {
    id: `RES-${Date.now()}`,
    userId,
    userName,
    jenjang: paket.jenjang,
    kelas: paket.kelas,
    paketId: paket.id,
    paketJudul: paket.judul,
    tanggal: new Date().toISOString(),
    durasiDetik,
    totalSoal: soalList.length,
    jawabanBenar: benar,
    jawabanSalah: salah,
    tidakDijawab,
    skorDiperoleh,
    skorMaksimum,
    nilaiAkhir,
    jawabanUser: userAnswers,
    analisisKompetensi,
    indikatorDikuasai,
    indikatorPerluPerkuat,
    rekomendasi,
  };

  saveHasil(hasil);

  // Sync to multi-user server in background
  try {
    const currentSession = getCurrentSession();
    syncResultToServer(hasil, currentSession);
  } catch (err) {
    // Non-blocking
  }

  return hasil;
}

export function resetToDefaults(): void {
  localStorage.setItem(STIMULI_KEY, JSON.stringify(SEED_STIMULI));
  localStorage.setItem(SOAL_KEY, JSON.stringify(SEED_SOAL));
  localStorage.setItem(PAKET_KEY, JSON.stringify(SEED_PAKET));
  localStorage.removeItem(HASIL_KEY);
}
