import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  FileSpreadsheet, 
  Database, 
  BarChart3, 
  HelpCircle, 
  UserCheck, 
  Clock, 
  ChevronDown,
  KeyRound,
  LogOut,
  ShieldCheck,
  Lock,
  Users,
  UserPlus
} from 'lucide-react';
import { Jenjang, UserSession, UserRole } from '../types/assessment';
import { getSavedProfiles, switchProfile } from '../services/auth';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedJenjang: Jenjang;
  setSelectedJenjang: (jenjang: Jenjang) => void;
  currentUser: UserSession;
  onOpenAuthModal: () => void;
  onLogout: () => void;
  onSwitchProfile?: (profile: UserSession) => void;
  onlineCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedJenjang,
  setSelectedJenjang,
  currentUser,
  onOpenAuthModal,
  onLogout,
  onSwitchProfile,
  onlineCount = 1,
}) => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const otherProfiles = getSavedProfiles().filter(p => p.id !== currentUser.id);

  const handleQuickSwitch = (targetId: string) => {
    const updated = switchProfile(targetId);
    if (onSwitchProfile) onSwitchProfile(updated);
    setShowUserMenu(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro-bar with Multi-user & Demo/PRO status */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">TKA LITERASI SMART PRO 2026</span>
          <span className="hidden md:inline text-slate-400">| "Latihan Cerdas, Pahami Teks, Raih Prestasi!"</span>
        </div>

        <div className="flex items-center gap-3">
          {/* User status badge */}
          {currentUser.isDemo ? (
            <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded-md text-amber-300 font-semibold text-[11px]">
              <Lock className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Mode Demo Terbatas</span>
              <button
                onClick={onOpenAuthModal}
                className="ml-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase shadow-xs transition-colors"
              >
                Aktivasi PRO
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 rounded-md text-emerald-300 font-semibold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="capitalize">{currentUser.license.replace('_', ' ')}</span>
              <span className="text-slate-400 hidden sm:inline">({currentUser.nama})</span>
            </div>
          )}

          {/* Jenjang Switcher pill */}
          <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
            {(['SD', 'SMP', 'SMA'] as Jenjang[]).map((j) => (
              <button
                key={j}
                onClick={() => setSelectedJenjang(j)}
                className={`px-2.5 py-0.5 text-xs font-semibold rounded transition-all ${
                  selectedJenjang === j
                    ? j === 'SD'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : j === 'SMP'
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {j}
              </button>
            ))}
          </div>

            {/* Online users presence badge */}
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-md text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{onlineCount} Pengguna Aktif</span>
            </div>

            {/* User Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-md px-2 py-0.5 text-xs text-slate-200"
              >
                <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span className="max-w-[100px] truncate">{currentUser.nama}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showUserMenu && (
                <div 
                  className="absolute right-0 mt-1 w-72 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-200 p-3 z-50 space-y-2 text-xs"
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <div className="border-b border-slate-100 pb-2">
                    <strong className="block font-bold text-slate-900 truncate">{currentUser.nama}</strong>
                    <div className="text-slate-500 text-[11px] truncate">
                      {currentUser.kelasRombel && <span className="font-semibold text-slate-700">{currentUser.kelasRombel} • </span>}
                      <span>{currentUser.sekolah || 'Akses Publik'}</span>
                    </div>
                    {currentUser.nisn && (
                      <div className="text-[10px] text-slate-400">NISN: {currentUser.nisn}</div>
                    )}
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      currentUser.isDemo ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {currentUser.license.toUpperCase()} ({currentUser.role})
                    </span>
                  </div>

                  {/* Switch to other saved profiles on this device */}
                  {otherProfiles.length > 0 && (
                    <div className="border-b border-slate-100 pb-2 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                        Ganti Profil Cepat (Lab/Komputer Ini):
                      </span>
                      {otherProfiles.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleQuickSwitch(p.id)}
                          className="w-full text-left p-1.5 rounded-lg hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 flex items-center justify-between text-xs"
                        >
                          <span className="truncate font-medium">{p.nama} ({p.kelasRombel || p.role})</span>
                          <span className="text-[9px] px-1 py-0.5 bg-slate-100 rounded text-slate-600 uppercase">
                            {p.role}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onOpenAuthModal();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 font-semibold text-indigo-600 flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>{otherProfiles.length > 0 ? 'Kelola Akun / Tambah Siswa' : (currentUser.isDemo ? 'Aktivasi Lisensi PRO' : 'Ganti Lisensi')}</span>
                  </button>

                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        setActiveTab('dashboard-guru');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-slate-50 font-semibold text-purple-700 flex items-center gap-2"
                    >
                      <KeyRound className="w-4 h-4" />
                      <span>Kelola Kode Aktivasi</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onLogout();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-rose-50 font-semibold text-rose-600 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Keluar Akun (Ke Mode Tamu)</span>
                  </button>
                </div>
              )}
            </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div 
          onClick={() => setActiveTab('beranda')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                TKA LITERASI <span className="text-indigo-600 font-black">SMART PRO</span>
              </span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                selectedJenjang === 'SD'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : selectedJenjang === 'SMP'
                  ? 'bg-sky-100 text-sky-800 border border-sky-200'
                  : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
              }`}>
                {selectedJenjang}/MI
              </span>
            </div>
            <p className="text-[11px] text-slate-500 -mt-0.5 hidden sm:block">
              Asesmen & Generator Soal Literasi Membaca
            </p>
          </div>
        </div>

        {/* Tab Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setActiveTab('beranda')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'beranda'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => setActiveTab('latihan')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'latihan'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Latihan Mandiri
          </button>
          <button
            onClick={() => setActiveTab('simulasi')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'simulasi'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4 h-4 text-amber-500" />
            Simulasi TKA
            {currentUser.isDemo && <Lock className="w-3 h-3 text-amber-500 ml-0.5" />}
          </button>
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'generator'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Generator AI
            {currentUser.isDemo && <span className="text-[10px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">Demo</span>}
          </button>
          <button
            onClick={() => setActiveTab('kisi-kisi')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'kisi-kisi'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Kisi-Kisi
          </button>
          <button
            onClick={() => setActiveTab('bank-soal')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'bank-soal'
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Bank Soal
          </button>

          <button
            onClick={() => setActiveTab('dashboard-guru')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'dashboard-guru'
                ? 'bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Dashboard Guru
            {currentUser.isDemo && <Lock className="w-3 h-3 text-amber-500 ml-0.5" />}
          </button>

          <button
            onClick={() => setActiveTab('panduan')}
            className={`p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors`}
            title="Panduan Matriks Asesmen"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile menu selector */}
        <div className="flex lg:hidden items-center gap-2">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="bg-slate-100 border border-slate-300 text-slate-800 text-sm rounded-lg px-2.5 py-1.5 font-medium"
          >
            <option value="beranda">Beranda</option>
            <option value="latihan">Latihan Mandiri</option>
            <option value="simulasi">Simulasi TKA</option>
            <option value="generator">Generator AI</option>
            <option value="kisi-kisi">Kisi-Kisi</option>
            <option value="bank-soal">Bank Soal</option>
            <option value="dashboard-guru">Dashboard Guru</option>
            <option value="panduan">Panduan Asesmen</option>
          </select>
        </div>
      </div>
    </header>
  );
};
