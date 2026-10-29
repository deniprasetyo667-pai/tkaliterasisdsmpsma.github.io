import { IndikatorAsesmen, Jenjang, Kelas, KompetensiType } from '../types/assessment';

export const KOMPETENSI_LIST: { id: KompetensiType; label: string; deskripsi: string }[] = [
  {
    id: 'Pemahaman Tekstual',
    label: 'Pemahaman Tekstual',
    deskripsi: 'Kemampuan memahami informasi eksplisit, mengidentifikasi kosakata, objek, ikhtisar, dan informasi tersurat.',
  },
  {
    id: 'Pemahaman Inferensial',
    label: 'Pemahaman Inferensial',
    deskripsi: 'Kemampuan menemukan makna tersirat, menyimpulkan gagasan pokok, memprediksi, dan menafsirkan hubungan antargagasan.',
  },
  {
    id: 'Evaluasi dan Apresiasi',
    label: 'Evaluasi dan Apresiasi',
    deskripsi: 'Kemampuan menilai ide, fakta/opini, keakuratan isi, bahasa, relevansi dengan kehidupan, dan respons emosional/estetis.',
  },
];

export const KELAS_MAP: Record<Jenjang, number[]> = {
  SD: [4, 5, 6],
  SMP: [7, 8, 9],
  SMA: [10, 11, 12],
};

export const JENIS_TEKS_MAP: Record<Jenjang, string[]> = {
  SD: [
    'Cerita anak',
    'Fabel',
    'Cerita rakyat',
    'Teks informasi',
    'Teks deskripsi',
    'Teks prosedur',
    'Pengumuman',
    'Poster',
    'Jadwal',
    'Tabel',
  ],
  SMP: [
    'Cerita pendek',
    'Fabel',
    'Cerita realistis',
    'Artikel informasi',
    'Teks eksplanasi',
    'Teks prosedur',
    'Deskripsi',
    'Laporan',
    'Teks sastra',
    'Tabel dan informasi multimodal',
  ],
  SMA: [
    'Teks informasi tunggal',
    'Teks informasi jamak',
    'Artikel argumentatif',
    'Teks ilmiah populer',
    'Teks eksplanatif',
    'Teks prosedural',
    'Prosa fiksi',
    'Puisi',
    'Drama',
    'Teks dengan kombinasi informasi dan data',
  ],
};

export const INDIKATOR_SD: IndikatorAsesmen[] = [
  // Kompetensi 1: Pemahaman Tekstual
  {
    kode: 'SD-T01',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi penggunaan kosakata umum dan khusus dalam berbagai bidang.',
    contohAktivitas: ['Menentukan arti kata berdasarkan penggunaannya dalam kalimat', 'Memilih sinonim atau padanan kata dalam teks'],
  },
  {
    kode: 'SD-T02',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi objek berdasarkan kosakata yang digunakan dalam teks fiksi atau nonfiksi.',
    contohAktivitas: ['Mengidentifikasi objek yang dideskripsikan', 'Menentukan ciri fisik benda atau tokoh dari kosakata yang dipakai'],
  },
  {
    kode: 'SD-T03',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Menyusun kembali informasi dari teks dalam bentuk ikhtisar atau bagan.',
    contohAktivitas: ['Menyusun urutan kejadian', 'Memilih bagan atau ringkasan yang mewakili isi bacaan'],
  },
  {
    kode: 'SD-T04',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi informasi tersurat dalam teks.',
    contohAktivitas: ['Menemukan informasi yang dinyatakan secara langsung (siapa, apa, di mana, kapan)', 'Menentukan informasi penting tersurat'],
  },
  // Kompetensi 2: Pemahaman Inferensial
  {
    kode: 'SD-I01',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menyimpulkan ide pokok, gagasan pendukung, amanat, tokoh, peristiwa, dan/atau nilai-nilai dalam teks.',
    contohAktivitas: ['Menentukan ide pokok paragraf', 'Menyimpulkan amanat moral cerita fabel', 'Menyimpulkan sifat tokoh dari perbuatannya'],
  },
  {
    kode: 'SD-I02',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menyimpulkan perubahan sederhana pada objek, karakter, dan/atau latar dalam teks fiksi atau nonfiksi.',
    contohAktivitas: ['Menyimpulkan perubahan sikap tokoh dari awal hingga akhir cerita', 'Menjelaskan perubahan keadaan lingkungan akibat suatu peristiwa'],
  },
  {
    kode: 'SD-I03',
    jenjang: 'SD',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menjelaskan makna ungkapan yang digunakan dalam teks.',
    contohAktivitas: ['Menentukan arti ungkapan kiasan (seperti panjang tangan, ringan tangan, buah hati)', 'Menafsirkan makna peribahasa sederhana kontekstual'],
  },
  // Kompetensi 3: Evaluasi dan Apresiasi
  {
    kode: 'SD-E01',
    jenjang: 'SD',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai relevansi peristiwa dalam teks dengan kehidupan sehari-hari berdasarkan pengalaman atau pengetahuan pribadi.',
    contohAktivitas: ['Menghubungkan tindakan tokoh dengan sikap positif sehari-hari', 'Menilai keteladanan yang dapat dipraktikkan di sekolah atau keluarga'],
  },
  {
    kode: 'SD-E02',
    jenjang: 'SD',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai kesesuaian antarunsur dan/atau antarinformasi dalam teks.',
    contohAktivitas: ['Menilai kesesuaian judul dengan isi bacaan', 'Menemukan pernyataan yang tidak konsisten atau tidak sejalan dengan teks'],
  },
  {
    kode: 'SD-E03',
    jenjang: 'SD',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menyimpulkan respons emosional terhadap unsur teks fiksi.',
    contohAktivitas: ['Menentukan perasaan empati yang timbul terhadap nasib tokoh', 'Menilai rasa bangga, sedih, atau kagum setelah membaca kisah perjuangan'],
  },
];

export const INDIKATOR_SMP: IndikatorAsesmen[] = [
  // Kompetensi 1: Pemahaman Tekstual
  {
    kode: 'SMP-T01',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi penggunaan istilah dalam berbagai bidang.',
    contohAktivitas: ['Menentukan arti istilah teknis/ilmiah sesuai konteks teks', 'Mengidentifikasi padanan kata dalam bidang ekologi, sains, atau teknologi'],
  },
  {
    kode: 'SMP-T02',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi objek dan/atau latar berdasarkan kosakata yang digunakan dalam teks fiksi atau nonfiksi.',
    contohAktivitas: ['Mengidentifikasi latar waktu dan tempat berdasarkan deskripsi indrawi', 'Menentukan objek sentral dalam teks deskriptif'],
  },
  {
    kode: 'SMP-T03',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi informasi penting yang tersurat dalam teks.',
    contohAktivitas: ['Memilih pernyataan yang tepat sesuai fakta dalam bacaan', 'Menemukan rincian spesifik data statistik atau langkah prosedur'],
  },
  {
    kode: 'SMP-T04',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Menyusun kerangka atau bagan berdasarkan bagian-bagian penting dalam teks.',
    contohAktivitas: ['Menyusun diagram alur informasi', 'Memilih bagan hubungan sebab-akibat yang mewakili struktur teks eksplanasi'],
  },
  // Kompetensi 2: Pemahaman Inferensial
  {
    kode: 'SMP-I01',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menyimpulkan ide pokok, gagasan pendukung, tokoh, peristiwa, latar, dan/atau nilai-nilai dalam dan/atau antarteks.',
    contohAktivitas: ['Menyimpulkan gagasan utama teks argumentatif/eksposisi', 'Membandingkan nilai moral dari dua teks fiksi berlainan'],
  },
  {
    kode: 'SMP-I02',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menjelaskan kelogisan hubungan antarperistiwa, antargagasan, dan/atau antarinformasi dalam dan/atau antarteks.',
    contohAktivitas: ['Menjelaskan hubungan kausalitas antarparagraf', 'Menilai apakah suatu peristiwa logis terjadi berdasarkan premis teks'],
  },
  {
    kode: 'SMP-I03',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Memprediksi peristiwa dalam teks.',
    contohAktivitas: ['Memprediksi kelanjutan narasi berdasarkan motif tokoh', 'Memprediksi dampak lingkungan di masa depan berdasarkan tren data'],
  },
  {
    kode: 'SMP-I04',
    jenjang: 'SMP',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menjelaskan bahasa kias dan citraan yang digunakan dalam teks fiksi.',
    contohAktivitas: ['Menafsirkan makna metafora atau personifikasi dalam cerpen/puisi', 'Mengidentifikasi jenis citraan pendengaran atau penglihatan dalam bait'],
  },
  // Kompetensi 3: Evaluasi dan Apresiasi
  {
    kode: 'SMP-E01',
    jenjang: 'SMP',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai relevansi peristiwa dalam teks dengan kehidupan sehari-hari.',
    contohAktivitas: ['Menilai apakah isu perundungan/persahabatan dalam cerpen relevan dengan dinamika remaja saat ini'],
  },
  {
    kode: 'SMP-E02',
    jenjang: 'SMP',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai kesesuaian dan/atau keakuratan unsur, kebahasaan, atau isi berdasarkan perbandingan informasi dalam dan/atau antarteks.',
    contohAktivitas: ['Menilai keakuratan klaim penulis dengan membandingkan teks rujukan', 'Menilai ketepatan diksi dalam menyampaikan opini'],
  },
  {
    kode: 'SMP-E03',
    jenjang: 'SMP',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menyimpulkan respons emosional terhadap unsur teks fiksi.',
    contohAktivitas: ['Menganalisis bagaimana pilihan kata penulis memicu ketegangan atau simpati pembaca'],
  },
];

export const INDIKATOR_SMA: IndikatorAsesmen[] = [
  // Kompetensi 1: Pemahaman Tekstual
  {
    kode: 'SMA-T01',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi penggunaan kata serapan dari bahasa daerah atau bahasa asing dalam berbagai bidang.',
    contohAktivitas: ['Menentukan fungsi dan makna kata serapan bidang sosio-ekonomi atau sains', 'Mengidentifikasi transliterasi kata serapan baku'],
  },
  {
    kode: 'SMA-T02',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Mengidentifikasi latar, karakter, dan/atau fenomena berdasarkan kosakata yang digunakan dalam teks fiksi atau nonfiksi.',
    contohAktivitas: ['Menemukan petunjuk latar sosio-historis melalui diksi arkais atau terminologi khusus', 'Mengidentifikasi karakter tokoh bulat (round character) dari pilihan bahasa monolog'],
  },
  {
    kode: 'SMA-T03',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Tekstual',
    rumusan: 'Menyusun kerangka atau bagan berdasarkan bagian-bagian penting dalam teks.',
    contohAktivitas: ['Menyusun skema penalaran tesis-argumen-penegasan', 'Merumuskan bagan relasi dialektis antara teks 1 dan teks 2'],
  },
  // Kompetensi 2: Pemahaman Inferensial
  {
    kode: 'SMA-I01',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menyimpulkan ide pokok, gagasan pendukung, tokoh, peristiwa, latar, konflik, atau nilai-nilai dalam teks.',
    contohAktivitas: ['Menemukan pesan eksistensial dalam fiksi realis atau absurd', 'Menyimpulkan orientasi ideologis atau perspektif penulis artikel ilmiah'],
  },
  {
    kode: 'SMA-I02',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Menjelaskan hubungan makna antarkalimat dan/atau antarparagraf dalam teks.',
    contohAktivitas: ['Menganalisis hubungan pertentangan, konsesif, atau kausalitas kompleks antarklausa', 'Menjelaskan fungsi kohesif konjungsi antarkalimat dalam memperkuat argumen'],
  },
  {
    kode: 'SMA-I03',
    jenjang: 'SMA',
    kompetensi: 'Pemahaman Inferensial',
    rumusan: 'Memprediksi lanjutan atau akhir uraian/cerita berdasarkan bagian tertentu dalam teks.',
    contohAktivitas: ['Memprediksi resolusi cerita berakhiran terbuka (open ending)', 'Memprediksi skenario lanjutan dari dinamika kebijakan yang diuraikan'],
  },
  // Kompetensi 3: Evaluasi dan Apresiasi
  {
    kode: 'SMA-E01',
    jenjang: 'SMA',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai relevansi peristiwa dalam teks dengan kehidupan sehari-hari.',
    contohAktivitas: ['Mengevaluasi relevansi kritik sosial dalam teks dengan problematika kontemporer masyarakat modern'],
  },
  {
    kode: 'SMA-E02',
    jenjang: 'SMA',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai keakuratan, kesesuaian, kecukupan, atau ketepatan informasi dalam teks.',
    contohAktivitas: ['Mengevaluasi validitas premis dan kecukupan data empiris pendukung opini', 'Menilai kekeliruan bernalar (logical fallacy) dalam wacana argumentasi antarteks'],
  },
  {
    kode: 'SMA-E03',
    jenjang: 'SMA',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai ketepatan dan kesesuaian penggunaan bahasa dalam teks.',
    contohAktivitas: ['Menilai efektivitas gaya retoris, majas ironi, atau register bahasa ilmiah dalam meyakinkan pembaca'],
  },
  {
    kode: 'SMA-E04',
    jenjang: 'SMA',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menilai ketepatan bagian teks untuk menggambarkan karakter, peristiwa, atau latar dalam teks fiksi.',
    contohAktivitas: ['Menilai fragmen dialog paling efektif dalam membangun ketegangan psikologis antartokoh', 'Menilai kekuatan simbolisme dalam memperkuat latar suasana'],
  },
  {
    kode: 'SMA-E05',
    jenjang: 'SMA',
    kompetensi: 'Evaluasi dan Apresiasi',
    rumusan: 'Menyimpulkan respons emosional terhadap unsur puisi, prosa, dan drama.',
    contohAktivitas: ['Menganalisis efek katarsis atau keterasingan yang dibangkitkan oleh dramaturgi atau puisi liris'],
  },
];

export function getIndikatorByJenjang(jenjang: Jenjang): IndikatorAsesmen[] {
  switch (jenjang) {
    case 'SD':
      return INDIKATOR_SD;
    case 'SMP':
      return INDIKATOR_SMP;
    case 'SMA':
      return INDIKATOR_SMA;
  }
}

export function countWords(text: string): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export interface SentenceAnalysis {
  totalSentences: number;
  totalWords: number;
  avgWordsPerSentence: number;
  isWithinSmaTarget: boolean; // 8 - 12 kata per kalimat
}

export function analyzeSentences(text: string): SentenceAnalysis {
  if (!text) {
    return { totalSentences: 0, totalWords: 0, avgWordsPerSentence: 0, isWithinSmaTarget: false };
  }
  const clean = text.trim();
  const words = clean.split(/\s+/).filter(Boolean);
  const totalWords = words.length;
  // Sentence splitting by punctuation . ! ? followed by space or end
  const sentences = clean.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
  const totalSentences = Math.max(1, sentences.length);
  const avg = Number((totalWords / totalSentences).toFixed(1));
  const isWithinSmaTarget = avg >= 8 && avg <= 15; // flexible range around 8-12
  return {
    totalSentences,
    totalWords,
    avgWordsPerSentence: avg,
    isWithinSmaTarget,
  };
}
