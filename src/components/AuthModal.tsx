import React, { useState } from 'react';
import { 
  KeyRound, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  GraduationCap, 
  School,
  HelpCircle,
  X
} from 'lucide-react';
import { UserSession } from '../types/assessment';
import { activateCode, setDemoSession, getSavedProfiles, switchProfile, removeProfile } from '../services/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (session: UserSession) => void;
  initialCode?: string;
  initialKelas?: string;
  initialNama?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialCode = '',
  initialKelas = '',
  initialNama = '',
}) => {
  const [activeTab, setActiveTab] = useState<'aktivasi' | 'demo' | 'profil' | 'informasi'>(
    getSavedProfiles().length > 1 ? 'profil' : 'aktivasi'
  );
  const [code, setCode] = useState<string>(initialCode);
  const [nama, setNama] = useState<string>(initialNama);
  const [nisn, setNisn] = useState<string>('');
  const [kelasRombel, setKelasRombel] = useState<string>(initialKelas);
  const [sekolah, setSekolah] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [savedProfiles, setSavedProfiles] = useState<UserSession[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSavedProfiles(getSavedProfiles());
      if (initialCode) setCode(initialCode);
      if (initialKelas) setKelasRombel(initialKelas);
      if (initialNama) setNama(initialNama);
    }
  }, [isOpen, initialCode, initialKelas, initialNama]);

  if (!isOpen) return null;

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!code.trim()) {
      setErrorMsg('Silakan masukkan kode aktivasi lisensi resmi Anda.');
      return;
    }

    const res = activateCode(code.trim(), nama, sekolah, {
      nisn: nisn.trim(),
      kelasRombel: kelasRombel.trim(),
    });
    if (res.success && res.session) {
      onSuccess(res.session);
      onClose();
    } else {
      setErrorMsg(res.message || 'Kode aktivasi tidak valid, kedaluwarsa, atau kuota telah habis.');
    }
  };

  const handleUseDemo = () => {
    const session = setDemoSession(
      nama || 'Pengguna Tamu (Demo)', 
      sekolah || 'Akses Publik',
      {
        nisn: nisn.trim(),
        kelasRombel: kelasRombel.trim() || 'Tamu Publik',
      }
    );
    onSuccess(session);
    onClose();
  };

  const handleSelectExistingProfile = (prof: UserSession) => {
    const active = switchProfile(prof.id);
    onSuccess(active);
    onClose();
  };

  const handleRemoveProfile = (profId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    removeProfile(profId);
    setSavedProfiles(getSavedProfiles());
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
            <Lock className="w-3.5 h-3.5" />
            Otentikasi & Lisensi Terproteksi
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Aktivasi Lisensi Resmi
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Masukkan kode aktivasi rahasia yang diterbitkan untuk akun Anda atau gunakan Mode Demo publik.
          </p>

          {/* Sub Navigation */}
          <div className="flex gap-2 mt-4 pt-3 border-t border-white/10 text-xs font-bold overflow-x-auto pb-1">
            {savedProfiles.length > 0 && (
              <button
                onClick={() => setActiveTab('profil')}
                className={`py-1.5 px-3 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'profil'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ganti Akun ({savedProfiles.length})
              </button>
            )}
            <button
              onClick={() => setActiveTab('aktivasi')}
              className={`py-1.5 px-3 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'aktivasi'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Masukkan Kode
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`py-1.5 px-3 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'demo'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mode Demo Terbatas
            </button>
            <button
              onClick={() => setActiveTab('informasi')}
              className={`py-1.5 px-3 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'informasi'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bantuan Lisensi
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {initialCode && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-3 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tautan Kelas / Undangan Terdeteksi! Kode aktivasi telah terisi otomatis.</span>
            </div>
          )}

          {/* TAB 0: MULTI-PROFILE SELECTION */}
          {activeTab === 'profil' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-slate-800">
                  Akun yang Pernah Masuk di Perangkat Ini:
                </span>
                <span className="text-[11px] text-slate-500">
                  Multi-User Ready
                </span>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {savedProfiles.map((prof) => (
                  <div
                    key={prof.id}
                    onClick={() => handleSelectExistingProfile(prof)}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-400 bg-slate-50 hover:bg-indigo-50/50 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">
                        {prof.nama.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 text-xs truncate group-hover:text-indigo-700">
                          {prof.nama}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate flex items-center gap-1.5">
                          {prof.kelasRombel && <span>{prof.kelasRombel} •</span>}
                          <span>{prof.sekolah || 'Akses Publik'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        prof.isDemo ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {prof.license.replace('_', ' ')}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleRemoveProfile(prof.id, e)}
                        title="Hapus profil dari perangkat ini"
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-md transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('aktivasi')}
                className="w-full py-2.5 rounded-xl border border-dashed border-indigo-300 hover:border-indigo-500 text-indigo-700 font-bold text-xs bg-indigo-50/40 hover:bg-indigo-50 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>+ Masuk Sebagai Siswa / Pengguna Baru</span>
              </button>
            </div>
          )}

          {/* TAB 1: FORM AKTIVASI KODE */}
          {activeTab === 'aktivasi' && (
            <form onSubmit={handleActivate} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Kode Aktivasi Lisensi Rahasia *
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="MASUKKAN KODE (CONTOH: XXXX-XXXX-XXXX)"
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 font-mono font-bold tracking-wider text-indigo-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 uppercase placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Kode aktivasi dapat diperoleh dari guru pengampu atau tautan kelas resmi.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Lengkap Siswa / Guru *
                  </label>
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    NISN / Nomor Induk (Opsional)
                  </label>
                  <input
                    type="text"
                    value={nisn}
                    onChange={(e) => setNisn(e.target.value)}
                    placeholder="Contoh: 0081234567"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Kelas / Rombel
                  </label>
                  <input
                    type="text"
                    value={kelasRombel}
                    onChange={(e) => setKelasRombel(e.target.value)}
                    placeholder="Contoh: Kelas 8A / Kelas 7B"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Sekolah / Institusi
                  </label>
                  <input
                    type="text"
                    value={sekolah}
                    onChange={(e) => setSekolah(e.target.value)}
                    placeholder="Contoh: SMP Negeri 1 / MTs 2"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Verifikasi & Masuk Akun
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: EXPLANATION ABOUT DEMO MODE */}
          {activeTab === 'demo' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-600">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Fitur Mode Demo Terbatas (Untuk Siapapun Pemilik Link):</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>Latihan Mandiri:</strong> Tersedia paket latihan uji coba gratis untuk jenjang SD, SMP, dan SMA.</li>
                  <li><strong>Generator Soal AI:</strong> Uji coba pembuatan stimulus wacana & butir soal.</li>
                  <li><strong>Eksplorasi Matriks:</strong> Dapat melihat seluruh indikator kompetensi dan panduan asesmen.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <strong className="block text-slate-800 font-bold">Fitur Lengkap yang Dibuka dengan Kode Lisensi:</strong>
                <p className="text-slate-500">
                  • Simulasi TKA resmi berwaktu lengkap dengan penilaian baku.<br />
                  • Pembuatan soal tak terbatas dan penyimpanan bank soal.<br />
                  • Dashboard Guru, manajemen kelas, dan pencetakan naskah soal siswa tanpa kunci.
                </p>
              </div>

              <button
                type="button"
                onClick={handleUseDemo}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Lanjutkan Sebagai Pengguna Tamu (Demo)</span>
              </button>
            </div>
          )}

          {/* TAB 3: CONFIDENTIAL LICENSE INFORMATION */}
          {activeTab === 'informasi' && (
            <div className="space-y-4 text-xs text-slate-600">
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-indigo-950">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>Kebijakan Kerahasiaan Kode Akses</span>
                </div>
                <p className="leading-relaxed text-indigo-900 text-[11px]">
                  Kode lisensi platform ini bersifat rahasia dan hanya diberikan kepada peserta didik terdaftar, guru, atau institusi mitra yang memiliki otorisasi resmi.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    <span>Untuk Peserta Didik / Siswa</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Mintalah kode aktivasi siswa kepada Guru Bahasa Indonesia atau Wali Kelas Anda di sekolah.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <School className="w-4 h-4 text-indigo-600" />
                    <span>Untuk Guru & Tenaga Pendidik</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Kode akses pendidik disediakan oleh Koordinator Kurikulum atau Kepala Sekolah Anda. Setelah diaktifkan, Anda dapat menerbitkan kode siswa melalui Dashboard Guru.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('aktivasi')}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
                >
                  Kembali ke Form Masukkan Kode
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
