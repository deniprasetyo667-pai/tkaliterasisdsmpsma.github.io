import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight, 
  Flag, 
  Check, 
  ShieldAlert, 
  FileText,
  Play,
  RotateCcw
} from 'lucide-react';
import { 
  Jenjang, 
  PaketLatihan, 
  SoalItem, 
  StimulusItem, 
  HasilPengerjaan,
  UserSession
} from '../types/assessment';
import { getStoredPaket, getStoredSoal, getStoredStimuli, calculateAndSaveResult } from '../services/storage';

interface ModeSimulasiProps {
  currentJenjang: Jenjang;
  onFinishSimulation: (hasil: HasilPengerjaan) => void;
  onNavigate: (tab: string) => void;
  currentUser: UserSession;
  onOpenAuthModal: () => void;
  initialPackageId?: string | null;
}

export const ModeSimulasi: React.FC<ModeSimulasiProps> = ({
  currentJenjang,
  onFinishSimulation,
  onNavigate,
  currentUser,
  onOpenAuthModal,
  initialPackageId,
}) => {
  const [packages, setPackages] = useState<PaketLatihan[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<PaketLatihan | null>(null);
  const [soalList, setSoalList] = useState<SoalItem[]>([]);
  const [stimulusMap, setStimulusMap] = useState<Record<string, StimulusItem>>({});

  // Simulation status: 'briefing' | 'running' | 'completed'
  const [simStatus, setSimStatus] = useState<'briefing' | 'running' | 'completed'>('briefing');
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(false);

  // Active exam state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeTeksTab, setActiveTeksTab] = useState<'teks1' | 'teks2'>('teks1');

  const timerRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const all = getStoredPaket().filter(p => p.jenjang === currentJenjang);
    setPackages(all);
    if (all.length > 0) {
      if (initialPackageId) {
        const found = all.find(p => p.id === initialPackageId);
        if (found) {
          setSelectedPackage(found);
          return;
        }
      }
      const simPkt = all.find(p => p.isSimulasi) || all[0];
      setSelectedPackage(simPkt);
    }
  }, [currentJenjang, initialPackageId]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleStartExam = () => {
    if (!selectedPackage) return;
    if (currentUser.isDemo && selectedPackage.isDemoAllowed === false) {
      onOpenAuthModal();
      return;
    }

    const allSoal = getStoredSoal();
    const allStim = getStoredStimuli();

    let loaded = allSoal.filter(s => selectedPackage.soalIds.includes(s.id));
    if (shuffleQuestions) {
      loaded = [...loaded].sort(() => Math.random() - 0.5);
    }

    const sMap: Record<string, StimulusItem> = {};
    for (const stim of allStim) {
      sMap[stim.id] = stim;
    }
    setStimulusMap(sMap);
    setSoalList(loaded);

    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged({});
    setIsSubmitting(false);

    const totalSeconds = (selectedPackage.waktuMenit || 30) * 60;
    setTimeRemainingSeconds(totalSeconds);
    startTimeRef.current = Date.now();
    setSimStatus('running');

    // Start timer interval
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAutoSubmit = () => {
    if (isSubmitting || !selectedPackage) return;
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const durasiDetik = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    const hasil = calculateAndSaveResult(
      selectedPackage,
      soalList,
      userAnswers,
      durasiDetik,
      currentUser.nama,
      currentUser.nama
    );
    onFinishSimulation(hasil);
  };

  const handleManualSubmit = () => {
    setShowConfirmModal(false);
    handleAutoSubmit();
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Briefing View
  if (simStatus === 'briefing') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {currentUser.isDemo && (
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs text-amber-950 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
              <span>
                <strong>Mode Demo Terbatas:</strong> Paket simulasi resmi TKA memerlukan Lisensi Siswa PRO. Klik aktivasi untuk memasukkan kode aktivasi.
              </span>
            </div>
            <button
              onClick={onOpenAuthModal}
              className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs"
            >
              Aktivasi Siswa PRO
            </button>
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Simulasi Resmi Berwaktu TKA 2026 Terstandar
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Simulasi Tes Kemampuan Akademik (TKA) - Jenjang {currentJenjang}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Sesuai spesifikasi instrumen TKA Kemendikbudristek/Pusmendik: 
              {currentJenjang === 'SD' && ' Jenjang SD/MI mengujikan 25 - 30 butir soal dengan stimulus ramah anak dan teks prosedur.'}
              {currentJenjang === 'SMP' && ' Jenjang SMP/MTs mengujikan 30 - 35 butir soal dengan wacana eksplanasi maritim, sains, dan apresiasi prosa.'}
              {currentJenjang === 'SMA' && ' Jenjang SMA/Sederajat mengujikan 35 - 40 butir soal dengan komparasi teks jamak (dual text) dan wacana analitis kritis.'}
            </p>
            {/* Authentic Standards Highlight Banner */}
            <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50 border border-indigo-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-indigo-950 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Standar Asli TKA {currentJenjang}:</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-extrabold">
                  {currentJenjang === 'SD' ? '25 - 30 Soal' : currentJenjang === 'SMP' ? '30 - 35 Soal' : '35 - 40 Soal'}
                </span>
              </div>
              <span className="text-slate-600 font-medium text-[11px]">
                Wacana stimulus & butir soal menyatu utuh, tidak terpisah
              </span>
            </div>
          </div>

          {/* Package Selector */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Pilih Paket Simulasi Resmi:
              </label>
              <span className="text-[11px] text-slate-500 font-medium">
                Tersedia {packages.length} paket siap uji
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packages.map((pkg) => {
                const isLocked = currentUser.isDemo && pkg.isDemoAllowed === false;
                const isFullStandard = (currentJenjang === 'SD' && pkg.soalIds.length >= 30) ||
                                       (currentJenjang === 'SMP' && pkg.soalIds.length >= 35) ||
                                       (currentJenjang === 'SMA' && pkg.soalIds.length >= 40);
                return (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      if (isLocked) {
                        onOpenAuthModal();
                      } else {
                        setSelectedPackage(pkg);
                      }
                    }}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                      selectedPackage?.id === pkg.id
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-xs ring-2 ring-indigo-200'
                        : isLocked
                        ? 'border-slate-200 bg-slate-50 opacity-80 hover:border-amber-400'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-bold text-sm text-slate-900">{pkg.judul}</h3>
                          {isFullStandard && (
                            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                              STANDAR LENGKAP
                            </span>
                          )}
                        </div>
                      </div>
                      {isLocked ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                          🔒 Perlu PRO
                        </span>
                      ) : (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                          Kelas {pkg.kelas}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pkg.deskripsi}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200/50">
                      <span className="font-semibold">Durasi: {pkg.waktuMenit} Menit</span>
                      <span className="font-bold text-indigo-700 bg-indigo-100/60 px-2 py-0.5 rounded">
                        {pkg.soalIds.length} Butir Soal
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Options */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900">Pengaturan Simulasi</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-slate-700 font-medium">Acak urutan nomor butir soal saat ujian dimulai</span>
              </label>
            </div>
          </div>

          {/* Exam Rules */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Petunjuk & Tata Tertib Pengerjaan:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-amber-900/90 pl-1">
              <li>Pengerjaan menggunakan batas waktu mundur ({selectedPackage?.waktuMenit || 60} menit). Saat waktu habis, jawaban tersimpan otomatis.</li>
              <li>Setiap butir pertanyaan menyatu langsung dengan wacana stimulus terkait. Baca wacana di panel samping untuk menemukan bukti jawaban.</li>
              <li>Gunakan tombol ragu-ragu jika masih belum yakin dengan pilihan jawaban Anda.</li>
              <li>Kunci jawaban dan pembahasan tidak akan ditampilkan selama simulasi berlangsung demi objektivitas asesmen.</li>
            </ul>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={() => onNavigate('beranda')}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
            >
              Kembali ke Menu
            </button>
            <button
              onClick={handleStartExam}
              disabled={!selectedPackage}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-sm shadow-md flex items-center gap-2 hover:scale-[1.01]"
            >
              <Play className="w-4 h-4 fill-white" />
              Mulai Ujian Simulasi
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Exam View
  const currentSoal = soalList[currentIndex];
  const currentStimulus = (currentSoal && currentSoal.stimulusIds.length > 0 
    ? stimulusMap[currentSoal.stimulusIds[0]] 
    : null) || (currentSoal?.stimulusTeks ? {
      id: currentSoal.stimulusIds?.[0] || 'STIM-INLINE',
      jenjang: currentSoal.jenjang,
      kelas: currentSoal.kelas,
      jenisTeks: currentSoal.jenisStimulus || 'Teks Informasi',
      topik: currentSoal.kompetensi,
      judul: currentSoal.stimulusJudul || 'Wacana Stimulus Terkait',
      isiTeks: currentSoal.stimulusTeks,
      jumlahKata: currentSoal.stimulusTeks.split(/\s+/).length,
      statusValidasi: 'Lolos Validasi Otomatis',
      sumber: 'Stimulus Terintegrasi TKA',
      createdAt: currentSoal.createdAt,
    } as StimulusItem : null);
  const answeredCount = Object.keys(userAnswers).length;
  const isTimeCritical = timeRemainingSeconds <= 300; // less than 5 min

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Exam Sticky Top Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-lg flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
              SIMULASI TKA {currentJenjang}
            </span>
            <span className="font-bold text-sm text-slate-200">
              {selectedPackage?.judul}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Nomor {currentIndex + 1} dari {soalList.length} | Terjawab: {answeredCount}/{soalList.length}
          </p>
        </div>

        {/* Timer & Submit */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-base font-extrabold shadow-inner ${
            isTimeCritical 
              ? 'bg-rose-600 text-white animate-pulse' 
              : 'bg-slate-800 text-emerald-400 border border-slate-700'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTimer(timeRemainingSeconds)}</span>
          </div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Kumpulkan Ujian
          </button>
        </div>
      </div>

      {/* Critical time alert banner */}
      {isTimeCritical && (
        <div className="bg-rose-50 border border-rose-300 rounded-xl p-3 text-xs text-rose-800 font-bold flex items-center gap-2 animate-bounce">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Waktu pengerjaan tersisa kurang dari 5 menit! Mohon periksa kembali nomor yang masih ragu-ragu.</span>
        </div>
      )}

      {/* Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Stimulus */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Wacana Stimulus {currentStimulus?.isDual ? '(Teks Jamak)' : ''}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {currentStimulus?.jumlahKata} kata
            </span>
          </div>

          {currentStimulus?.isDual && (
            <div className="flex gap-2 border-b border-slate-100 pb-2">
              <button
                onClick={() => setActiveTeksTab('teks1')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTeksTab === 'teks1'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Teks 1 ({currentStimulus.jumlahKata} kata)
              </button>
              <button
                onClick={() => setActiveTeksTab('teks2')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTeksTab === 'teks2'
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Teks 2 ({currentStimulus.jumlahKataTeks2 || 0} kata)
              </button>
            </div>
          )}

          {currentStimulus && (
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold font-serif text-slate-900 leading-snug">
                {activeTeksTab === 'teks1' || !currentStimulus.isDual
                  ? currentStimulus.judul
                  : currentStimulus.teks2Judul}
              </h2>
              <div className="prose text-xs sm:text-sm font-serif text-slate-700 leading-relaxed whitespace-pre-line select-text">
                {activeTeksTab === 'teks1' || !currentStimulus.isDual
                  ? currentStimulus.isiTeks
                  : currentStimulus.teks2Isi}
              </div>
            </div>
          )}
        </div>

        {/* Right: Question */}
        <div className="lg:col-span-6 space-y-6">
          {currentSoal && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
                    {currentIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {currentSoal.kompetensi}
                  </span>
                </div>

                <button
                  onClick={() => setFlagged(prev => ({ ...prev, [currentSoal.id]: !prev[currentSoal.id] }))}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    flagged[currentSoal.id]
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flagged[currentSoal.id] ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>Ragu-ragu</span>
                </button>
              </div>

              {/* Integrated Stimulus Header: Never Separate Soal from Stimulus */}
              <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-indigo-950 font-semibold truncate">
                  <FileText className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="truncate">Wacana Terkait: <strong className="font-bold">{currentStimulus?.judul || currentSoal.stimulusJudul || 'Wacana Asesmen'}</strong></span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200/70 text-indigo-900 shrink-0">
                  {currentStimulus?.jenisTeks || currentSoal.jenisStimulus || 'Wacana Literasi'}
                </span>
              </div>

              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                {currentSoal.pertanyaan}
              </div>

              <div className="space-y-2.5">
                {currentSoal.pilihan.map((p) => {
                  const isSelected = userAnswers[currentSoal.id] === p.kode;
                  return (
                    <button
                      key={p.kode}
                      type="button"
                      onClick={() => setUserAnswers(prev => ({ ...prev, [currentSoal.id]: p.kode }))}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-medium ring-2 ring-indigo-200'
                          : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {p.kode}
                      </span>
                      <span className="flex-1">{p.teks}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border ${
                    currentIndex === 0
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Sebelumnya
                </button>

                {currentIndex < soalList.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    Selanjutnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowConfirmModal(true)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    <Check className="w-4 h-4" />
                    Selesai & Kumpulkan
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Palette */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Navigasi Nomor Soal</span>
              <span className="text-[11px] font-normal text-slate-500">
                {answeredCount} / {soalList.length} Terisi
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {soalList.map((s, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[s.id] !== undefined;
                const isFlagged = flagged[s.id];

                let btnBg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isFlagged) {
                  btnBg = 'bg-amber-400 text-slate-900 font-bold';
                } else if (isAnswered) {
                  btnBg = 'bg-emerald-600 text-white font-bold';
                }

                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs font-bold transition-all relative ${btnBg} ${
                      isCurrent ? 'ring-2 ring-indigo-600 ring-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Konfirmasi Penyelesaian Ujian
              </h3>
              <p className="text-xs text-slate-500">
                Apakah Anda yakin ingin menyelesaikan dan mengirimkan seluruh lembar jawaban sekarang?
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3 space-y-1 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Total Soal:</span>
                <strong>{soalList.length}</strong>
              </div>
              <div className="flex justify-between">
                <span>Sudah Dijawab:</span>
                <strong className="text-emerald-600">{answeredCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Belum Dijawab:</span>
                <strong className="text-rose-600">{soalList.length - answeredCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Ditandai Ragu-ragu:</span>
                <strong className="text-amber-600">{Object.values(flagged).filter(Boolean).length}</strong>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                type="button"
                onClick={handleManualSubmit}
                disabled={isSubmitting}
                className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
              >
                {isSubmitting ? 'Menyimpan...' : 'Ya, Selesaikan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
