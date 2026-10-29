export type Jenjang = 'SD' | 'SMP' | 'SMA';
export type KelasSD = 4 | 5 | 6;
export type KelasSMP = 7 | 8 | 9;
export type KelasSMA = 10 | 11 | 12;
export type Kelas = KelasSD | KelasSMP | KelasSMA;

export type KompetensiType = 
  | 'Pemahaman Tekstual' 
  | 'Pemahaman Inferensial' 
  | 'Evaluasi dan Apresiasi';

export type TingkatKesulitan = 'Mudah' | 'Sedang' | 'Sulit';

export type BentukSoal = 
  | 'Pilihan Ganda' 
  | 'Pilihan Ganda Kompleks' 
  | 'Benar/Salah' 
  | 'Menjodohkan' 
  | 'Isian Singkat' 
  | 'Uraian';

export type StatusValidasi = 
  | 'Draf' 
  | 'Perlu Ditinjau' 
  | 'Lolos Validasi Otomatis' 
  | 'Disetujui Guru' 
  | 'Ditolak/Revisi';

export type UserRole = 'siswa' | 'guru' | 'admin';

export type LicenseType = 'demo' | 'siswa_pro' | 'guru_pro' | 'admin';

export interface UserSession {
  id: string;
  nama: string;
  nisn?: string;
  kelasRombel?: string;
  sekolah?: string;
  role: UserRole;
  license: LicenseType;
  jenjangAkses: Jenjang | 'Semua';
  activationCode?: string;
  activatedAt?: string;
  isDemo: boolean;
}

export interface RombelKelas {
  id: string;
  namaKelas: string; // e.g. "Kelas 8A", "Kelas 7B"
  jenjang: Jenjang;
  kodeAktivasi: string;
  guruPengampu: string;
  kuotaSiswa: number;
  totalPeserta: number;
  createdAt: string;
}

export interface OnlineUserPresence {
  userId: string;
  nama: string;
  role: UserRole;
  kelasRombel?: string;
  jenjang?: Jenjang;
  lastActive: string;
}

export interface ActivationCode {
  code: string;
  role: UserRole;
  license: LicenseType;
  label: string;
  maxUses: number;
  usedCount: number;
  jenjang: Jenjang | 'Semua';
  createdAt: string;
  isActive: boolean;
}

export interface IndikatorAsesmen {
  kode: string;
  jenjang: Jenjang;
  kompetensi: KompetensiType;
  rumusan: string;
  contohAktivitas: string[];
}

export interface PilihanJawaban {
  kode: string; // 'A', 'B', 'C', 'D', 'E'
  teks: string;
  alasanDistraktor?: string; // Penjelasan mengapa pilihan ini pengecoh/salah
}

export interface PasanganMenjodohkan {
  id: string;
  kiri: string;
  kanan: string;
}

export interface PernyataanBenarSalah {
  id: string;
  pernyataan: string;
  kunci: boolean; // true = Benar, false = Salah
  alasan?: string;
}

export interface StimulusItem {
  id: string;
  jenjang: Jenjang;
  kelas: Kelas;
  jenisTeks: string;
  topik: string;
  judul: string;
  isiTeks: string;
  isDual?: boolean; // Teks jamak
  teks2Judul?: string;
  teks2Isi?: string;
  teks2Jenis?: string;
  jumlahKata: number;
  jumlahKataTeks2?: number;
  rataKataPerKalimat?: number;
  statusValidasi: StatusValidasi;
  sumber: string; // 'Simulasi Mandiri' | 'Karya Penulis' | 'Data Penelitian Simulasi'
  createdAt: string;
}

export interface SoalItem {
  id: string;
  jenjang: Jenjang;
  kelas: Kelas;
  kompetensi: KompetensiType;
  indikatorId: string;
  indikator: string;
  jenisStimulus: string;
  stimulusIds: string[];
  stimulusJudul?: string; // Judul stimulus wacana terkait (selalu menyatu)
  stimulusTeks?: string; // Teks isi stimulus wacana agar tidak terpisah
  stimulusJenis?: string;
  tingkatKesulitan: TingkatKesulitan;
  bentukSoal: BentukSoal;
  pertanyaan: string;
  pilihan: PilihanJawaban[];
  kunciJawaban: string; // 'A' | 'B' | 'A,C' untuk PG Kompleks | json
  pasanganMenjodohkan?: PasanganMenjodohkan[];
  pernyataanBenarSalah?: PernyataanBenarSalah[];
  rubrikUraian?: string;
  pembahasan: string;
  buktiTekstual: string;
  bobot: number;
  statusValidasi: StatusValidasi;
  catatanValidasi?: string;
  versi: number;
  createdAt: string;
}

export interface KisiKisiItem {
  nomor: number;
  jenjang: Jenjang;
  kelas: Kelas;
  kompetensi: KompetensiType;
  kodeIndikator: string;
  rumusanIndikator: string;
  jenisStimulus: string;
  topik: string;
  tingkatKesulitan: TingkatKesulitan;
  bentukSoal: BentukSoal;
  nomorStimulus: string;
  bobot: number;
}

export interface PaketLatihan {
  id: string;
  judul: string;
  jenjang: Jenjang;
  kelas: Kelas;
  deskripsi: string;
  waktuMenit: number;
  soalIds: string[];
  isSimulasi: boolean;
  isDemoAllowed?: boolean; // Dapat diakses oleh pengguna demo gratis
  createdAt: string;
}

export interface AnalisisKompetensiItem {
  kompetensi: KompetensiType;
  benar: number;
  total: number;
  persentase: number;
}

export interface HasilPengerjaan {
  id: string;
  userId: string;
  userName: string;
  jenjang: Jenjang;
  kelas: Kelas;
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
  jawabanUser: Record<string, any>;
  analisisKompetensi: Record<KompetensiType, AnalisisKompetensiItem>;
  indikatorDikuasai: string[];
  indikatorPerluPerkuat: string[];
  rekomendasi: string[];
}
