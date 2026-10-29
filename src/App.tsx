import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { GeneratorSoal } from './components/GeneratorSoal';
import { ModeLatihan } from './components/ModeLatihan';
import { ModeSimulasi } from './components/ModeSimulasi';
import { AnalisisHasil } from './components/AnalisisHasil';
import { BankSoal } from './components/BankSoal';
import { KisiKisiView } from './components/KisiKisiView';
import { DashboardGuru } from './components/DashboardGuru';
import { PanduanAsesmen } from './components/PanduanAsesmen';
import { AuthModal } from './components/AuthModal';
import { Jenjang, HasilPengerjaan, UserSession } from './types/assessment';
import { getCurrentSession, logoutSession } from './services/auth';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [selectedJenjang, setSelectedJenjang] = useState<Jenjang>('SD');
  const [currentUser, setCurrentUser] = useState<UserSession>(getCurrentSession());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [lastHasil, setLastHasil] = useState<HasilPengerjaan | null>(null);
  const [activePackageId, setActivePackageId] = useState<string | null>(null);

  useEffect(() => {
    // If user's licensed jenjang is specific, preselect that jenjang
    if (currentUser.jenjangAkses && currentUser.jenjangAkses !== 'Semua') {
      setSelectedJenjang(currentUser.jenjangAkses);
    }
  }, [currentUser]);

  const handleLaunchPackage = (packageId: string, mode: 'latihan' | 'simulasi') => {
    setActivePackageId(packageId);
    setActiveTab(mode);
  };

  const handleFinishExercise = (hasil: HasilPengerjaan) => {
    setLastHasil(hasil);
    setActiveTab('analisis');
  };

  const handleFinishSimulation = (hasil: HasilPengerjaan) => {
    setLastHasil(hasil);
    setActiveTab('analisis');
  };

  const handleRetryExercise = () => {
    setActiveTab('latihan');
  };

  const handleLogout = () => {
    const defaultDemo = logoutSession();
    setCurrentUser(defaultDemo);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedJenjang={selectedJenjang}
        setSelectedJenjang={setSelectedJenjang}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {activeTab === 'beranda' && (
          <LandingPage
            selectedJenjang={selectedJenjang}
            onSelectJenjang={(j) => setSelectedJenjang(j)}
            onNavigate={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {activeTab === 'latihan' && (
          <ModeLatihan
            currentJenjang={selectedJenjang}
            onFinishExercise={handleFinishExercise}
            onNavigate={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            initialPackageId={activePackageId}
          />
        )}

        {activeTab === 'simulasi' && (
          <ModeSimulasi
            currentJenjang={selectedJenjang}
            onFinishSimulation={handleFinishSimulation}
            onNavigate={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            initialPackageId={activePackageId}
          />
        )}

        {activeTab === 'generator' && (
          <GeneratorSoal
            currentJenjang={selectedJenjang}
            onJenjangChange={(j) => setSelectedJenjang(j)}
            onNavigate={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            onLaunchPackage={handleLaunchPackage}
          />
        )}

        {activeTab === 'kisi-kisi' && (
          <KisiKisiView currentJenjang={selectedJenjang} />
        )}

        {activeTab === 'bank-soal' && (
          <BankSoal
            currentJenjang={selectedJenjang}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'dashboard-guru' && (
          <DashboardGuru
            currentJenjang={selectedJenjang}
            onNavigate={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {activeTab === 'panduan' && <PanduanAsesmen />}

        {activeTab === 'analisis' && lastHasil && (
          <AnalisisHasil
            hasil={lastHasil}
            onRetry={handleRetryExercise}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}
      </main>

      {/* Global Multi-User Activation Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(session) => {
          setCurrentUser(session);
        }}
      />

      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <span className="font-extrabold text-white text-base">
                TKA LITERASI <span className="text-indigo-400">SMART PRO</span> 2026
              </span>
              <p className="text-slate-400 mt-1 max-w-md">
                Platform latihan cerdas, generator stimulus soal AI, dan evaluasi kompetensi membaca untuk SD/MI, SMP/MTs, dan SMA/Sederajat.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-medium">
              <button onClick={() => setIsAuthModalOpen(true)} className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
                Aktivasi Kode Lisensi
              </button>
              <button onClick={() => setActiveTab('panduan')} className="hover:text-white transition-colors">
                Matriks Kompetensi
              </button>
              <button onClick={() => setActiveTab('kisi-kisi')} className="hover:text-white transition-colors">
                Kisi-Kisi Soal
              </button>
              <button onClick={() => setActiveTab('bank-soal')} className="hover:text-white transition-colors">
                Bank Repositori
              </button>
              <button onClick={() => setActiveTab('dashboard-guru')} className="hover:text-white transition-colors">
                Panel Guru
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-2 text-[11px] text-slate-500">
            <span>
              &copy; {new Date().getFullYear()} TKA LITERASI SMART PRO. Hak Cipta Dilindungi.
            </span>
            <span>
              Status Akses: <strong className="text-slate-300">{currentUser.nama} ({currentUser.license.toUpperCase()})</strong>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
