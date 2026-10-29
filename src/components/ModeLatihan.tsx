import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Flag, 
  Sparkles, 
  RotateCcw, 
  HelpCircle, 
  Check, 
  FileText,
  SlidersHorizontal,
  Bookmark,
  Eye,
  Award
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

interface ModeLatihanProps {
  currentJenjang: Jenjang;
  onFinishExercise: (hasil: HasilPengerjaan) => void;
  onNavigate: (tab: string) => void;
  currentUser: UserSession;
  onOpenAuthModal: () => void;
  initialPackageId?: string | null;
}

export const ModeLatihan: React.FC<ModeLatihanProps> = ({
  currentJenjang,
  onFinishExercise,
  onNavigate,
  currentUser,
  onOpenAuthModal,
  initialPackageId,
}) => {
  const [packages, setPackages] = useState<PaketLatihan[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<PaketLatihan | null>(null);
  const [activeSoals, setActiveSoals] = useState<SoalItem[]>([]);
  const [stimulusMap, setStimulusMap] = useState<Record<string, StimulusItem>>({});

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  
  // Reading customizations
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [readingTheme, setReadingTheme] = useState<'white' | 'sepia' | 'dark'>('white');
  const [activeTeksTab, setActiveTeksTab] = useState<'teks1' | 'teks2'>('teks1');

  // Exercise mode: 'belajar' (instant feedback) vs 'tes' (feedback at end)
  const [studyMode, setStudyMode] = useState<boolean>(true);
  const [showPembahasan, setShowPembahasan] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Load packages for this jenjang and auto-select if initialPackageId is passed
  useEffect(() => {
    const allPkts = getStoredPaket().filter(p => p.jenjang === currentJenjang);
    setPackages(allPkts);
    if (allPkts.length > 0) {
      if (initialPackageId) {
        const target = allPkts.find(p => p.id === initialPackageId);
        if (target) {
          loadPackage(target);
          return;
        }
      }
      loadPackage(allPkts[0]);
    }
  }, [currentJenjang, initialPackageId]);

  const loadPackage = (pkt: PaketLatihan) => {
    if (currentUser.isDemo && pkt.isDemoAllowed === false) {
      onOpenAuthModal();
      return;
    }
    setSelectedPackage(pkt);
    const allSoal = getStoredSoal();
    const allStim = getStoredStimuli();

    const filtered = allSoal.filter(s => pkt.soalIds.includes(s.id));
    setActiveSoals(filtered);

    const sMap: Record<string, StimulusItem> = {};
    for (const stim of allStim) {
      sMap[stim.id] = stim;
    }
    setStimulusMap(sMap);

    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged({});
    setShowPembahasan(false);
    setActiveTeksTab('teks1');
    setStartTime(Date.now());
  };

  const currentSoal = activeSoals[currentIndex];
  const currentStimulus = currentSoal && currentSoal.stimulusIds.length > 0 
    ? stimulusMap[currentSoal.stimulusIds[0]] 
    : null;

  const handleSelectAnswer = (pilihanKode: string) => {
    if (!currentSoal) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentSoal.id]: pilihanKode,
    }));
    if (studyMode) {
      setShowPembahasan(true);
    }
  };

  const handleToggleFlag = () => {
    if (!currentSoal) return;
    setFlagged(prev => ({
      ...prev,
      [currentSoal.id]: !prev[currentSoal.id],
    }));
  };

  const handleFinish = () => {
    if (!selectedPackage || activeSoals.length === 0) return;
    const durasiDetik = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    const hasil = calculateAndSaveResult(
      selectedPackage,
      activeSoals,
      userAnswers,
      durasiDetik,
      'SISWA-01',
      'Peserta Latihan Mandiri'
    );
    onFinishExercise(hasil);
  };

  if (!selectedPackage || activeSoals.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">
          Belum Ada Paket Latihan untuk Jenjang {currentJenjang}
        </h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Silakan buat paket soal baru menggunakan menu Generator Soal AI atau pilih jenjang pendidikan lainnya.
        </p>
        <button
          onClick={() => onNavigate('generator')}
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md"
        >
          Buka Generator Soal AI
        </button>
      </div>
    );
  }

  const answeredCount = Object.keys(userAnswers).length;
  const currentAnswer = currentSoal ? userAnswers[currentSoal.id] : undefined;

  // Reading Theme Classes
  const themeClasses = {
    white: 'bg-white text-slate-800 border-slate-200',
    sepia: 'bg-[#fbf0d9] text-[#433422] border-[#e8d8be]',
    dark: 'bg-slate-900 text-slate-200 border-slate-800',
  };

  const fontClasses = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm leading-relaxed sm:text-base',
    lg: 'text-base leading-loose sm:text-lg',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Demo Warning Banner */}
      {currentUser.isDemo && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-amber-950 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
            <span>
              <strong>Mode Demo Terbatas:</strong> Anda mengakses paket latihan gratis. Gunakan kode aktivasi untuk membuka seluruh simulasi dan paket lengkap PRO.
            </span>
          </div>
          <button
            onClick={onOpenAuthModal}
            className="px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs"
          >
            Aktivasi PRO
          </button>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 uppercase">
              Modul {currentJenjang}
            </span>
            <span className="text-xs text-slate-400">|</span>
            {packages.length > 1 ? (
              <select
                value={selectedPackage.id}
                onChange={(e) => {
                  const target = packages.find(p => p.id === e.target.value);
                  if (target) loadPackage(target);
                }}
                className="font-extrabold text-slate-900 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 max-w-xs sm:max-w-md focus:ring-2 focus:ring-indigo-500"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.judul} {currentUser.isDemo && p.isDemoAllowed === false ? '🔒 (Perlu PRO)' : ''}
                  </option>
                ))}
              </select>
            ) : (
              <h1 className="font-extrabold text-slate-900 text-base sm:text-lg truncate max-w-md">
                {selectedPackage.judul}
              </h1>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Soal {currentIndex + 1} dari {activeSoals.length} | Progres: {answeredCount}/{activeSoals.length} Terjawab
          </p>
        </div>

        {/* Study Mode Switch & Package Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => {
                setStudyMode(true);
                setShowPembahasan(Boolean(currentAnswer));
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                studyMode ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              Mode Belajar (Umpan Balik Cepat)
            </button>
            <button
              onClick={() => {
                setStudyMode(false);
                setShowPembahasan(false);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                !studyMode ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              Mode Ujian
            </button>
          </div>

          <button
            onClick={handleFinish}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            Selesai & Nilai
          </button>
        </div>
      </div>

      {/* Main Split Layout: Left (Stimulus Wacana) vs Right (Pertanyaan) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Reading Passage (6 or 7 cols) */}
        <div className={`lg:col-span-6 rounded-2xl border p-6 shadow-xs space-y-4 transition-colors ${themeClasses[readingTheme]}`}>
          {/* Reading Controls Bar */}
          <div className="flex justify-between items-center border-b border-current/10 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-wider opacity-75">
                Wacana Stimulus
              </span>
              {currentStimulus && (
                <span className="px-2 py-0.5 rounded-full text-[11px] bg-black/5 font-semibold">
                  {currentStimulus.jumlahKata} kata
                </span>
              )}
            </div>

            {/* Reading preferences: Font & Theme */}
            <div className="flex items-center gap-3">
              {/* Font Size */}
              <div className="flex items-center bg-black/5 rounded-lg p-0.5 font-bold text-xs">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'sm' ? 'bg-white text-slate-900 shadow-xs' : 'opacity-60'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'base' ? 'bg-white text-slate-900 shadow-xs' : 'opacity-60'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'lg' ? 'bg-white text-slate-900 shadow-xs' : 'opacity-60'}`}
                >
                  A+
                </button>
              </div>

              {/* Theme */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setReadingTheme('white')}
                  className={`w-5 h-5 rounded-full border border-slate-300 bg-white ${readingTheme === 'white' ? 'ring-2 ring-indigo-500' : ''}`}
                  title="Tema Putih"
                />
                <button
                  onClick={() => setReadingTheme('sepia')}
                  className={`w-5 h-5 rounded-full border border-amber-300 bg-[#fbf0d9] ${readingTheme === 'sepia' ? 'ring-2 ring-indigo-500' : ''}`}
                  title="Tema Sepia Lembut"
                />
                <button
                  onClick={() => setReadingTheme('dark')}
                  className={`w-5 h-5 rounded-full border border-slate-700 bg-slate-900 ${readingTheme === 'dark' ? 'ring-2 ring-indigo-500' : ''}`}
                  title="Tema Gelap"
                />
              </div>
            </div>
          </div>

          {/* Dual Text Tabs (if Stimulus is Jamak) */}
          {currentStimulus?.isDual && (
            <div className="flex gap-2 border-b border-current/10 pb-2">
              <button
                onClick={() => setActiveTeksTab('teks1')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTeksTab === 'teks1'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-black/5 hover:bg-black/10'
                }`}
              >
                Teks 1 ({currentStimulus.jumlahKata} kata)
              </button>
              <button
                onClick={() => setActiveTeksTab('teks2')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTeksTab === 'teks2'
                    ? 'bg-teal-600 text-white'
                    : 'bg-black/5 hover:bg-black/10'
                }`}
              >
                Teks 2 ({currentStimulus.jumlahKataTeks2 || 0} kata)
              </button>
            </div>
          )}

          {/* Stimulus Body Content */}
          {currentStimulus ? (
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold font-serif leading-snug">
                {activeTeksTab === 'teks1' || !currentStimulus.isDual
                  ? currentStimulus.judul
                  : currentStimulus.teks2Judul || 'Teks Pembanding'}
              </h2>

              <div className={`prose max-w-none font-serif leading-relaxed whitespace-pre-line select-text ${fontClasses[fontSize]}`}>
                {activeTeksTab === 'teks1' || !currentStimulus.isDual
                  ? currentStimulus.isiTeks
                  : currentStimulus.teks2Isi || ''}
              </div>

              <div className="pt-3 border-t border-current/10 text-[11px] opacity-70 flex justify-between">
                <span>Sumber: {currentStimulus.sumber}</span>
                <span>Jenis: {currentStimulus.jenisTeks}</span>
              </div>
            </div>
          ) : (
            <p className="text-xs italic opacity-75">
              Tidak ada teks stimulus tertaut.
            </p>
          )}
        </div>

        {/* Right: Question Card & Interaction (6 or 5 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {currentSoal ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
              {/* Question Header */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center">
                    {currentIndex + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-900">
                      {currentSoal.indikatorId}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {currentSoal.kompetensi}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleFlag}
                    className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                      flagged[currentSoal.id]
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flagged[currentSoal.id] ? 'fill-amber-600 text-amber-600' : ''}`} />
                    <span className="hidden sm:inline">Ragu-ragu</span>
                  </button>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    Bobot: {currentSoal.bobot}
                  </span>
                </div>
              </div>

              {/* Pertanyaan */}
              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                {currentSoal.pertanyaan}
              </div>

              {/* Pilihan Jawaban */}
              <div className="space-y-2.5">
                {currentSoal.pilihan.map((p) => {
                  const isSelected = currentAnswer === p.kode;
                  const isKey = p.kode === currentSoal.kunciJawaban;
                  const showFeedback = studyMode && currentAnswer !== undefined;

                  let optionBorder = 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50';
                  let badgeBg = 'bg-slate-200 text-slate-700';

                  if (isSelected) {
                    optionBorder = 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-medium ring-2 ring-indigo-200';
                    badgeBg = 'bg-indigo-600 text-white';
                  }

                  if (showFeedback) {
                    if (isKey) {
                      optionBorder = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-medium ring-2 ring-emerald-200';
                      badgeBg = 'bg-emerald-600 text-white';
                    } else if (isSelected && !isKey) {
                      optionBorder = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-2 ring-rose-200';
                      badgeBg = 'bg-rose-600 text-white';
                    }
                  }

                  return (
                    <button
                      key={p.kode}
                      type="button"
                      onClick={() => handleSelectAnswer(p.kode)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionBorder}`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 ${badgeBg}`}>
                        {p.kode}
                      </span>
                      <div className="flex-1">
                        <span>{p.teks}</span>
                        {showFeedback && isKey && (
                          <span className="ml-2 text-xs font-bold text-emerald-700 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 inline" /> Kunci Tepat
                          </span>
                        )}
                        {showFeedback && isSelected && !isKey && (
                          <span className="ml-2 text-xs font-bold text-rose-700 inline-flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5 inline" /> Jawaban Anda Kurang Tepat
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Pembahasan Panel in Study Mode */}
              {studyMode && showPembahasan && (
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 text-xs">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Pembahasan & Bukti Tekstual</span>
                  </div>

                  <div>
                    <strong className="text-amber-900 block font-semibold">Bukti dalam teks:</strong>
                    <p className="text-amber-950 italic mt-0.5 bg-white/70 p-2 rounded-lg border border-amber-200/60 font-serif">
                      "{currentSoal.buktiTekstual}"
                    </p>
                  </div>

                  <div>
                    <strong className="text-amber-900 block font-semibold">Penjelasan Penalaran:</strong>
                    <p className="text-amber-950 leading-relaxed mt-0.5">
                      {currentSoal.pembahasan}
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setCurrentIndex(Math.max(0, currentIndex - 1));
                    setShowPembahasan(studyMode && Boolean(userAnswers[activeSoals[Math.max(0, currentIndex - 1)].id]));
                  }}
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

                {currentIndex < activeSoals.length - 1 ? (
                  <button
                    onClick={() => {
                      setCurrentIndex(currentIndex + 1);
                      setShowPembahasan(studyMode && Boolean(userAnswers[activeSoals[currentIndex + 1].id]));
                    }}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    Selanjutnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    <Check className="w-4 h-4" />
                    Kumpulkan Jawaban
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {/* Question Palette / Number Grid */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Palet Nomor Soal</span>
              <div className="flex items-center gap-3 text-[11px] font-normal text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Terjawab
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  Ragu-ragu
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                  Kosong
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {activeSoals.map((s, idx) => {
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
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowPembahasan(studyMode && Boolean(userAnswers[s.id]));
                    }}
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
    </div>
  );
};
