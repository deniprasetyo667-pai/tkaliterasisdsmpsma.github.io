import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Layers, 
  FileText, 
  Settings2, 
  Save, 
  Download, 
  Edit3, 
  RefreshCw, 
  Check, 
  Sliders, 
  Info,
  BookOpen,
  Clock,
  FileSpreadsheet,
  Database,
  School,
  ArrowRight
} from 'lucide-react';
import { 
  Jenjang, 
  Kelas, 
  KompetensiType, 
  TingkatKesulitan, 
  BentukSoal, 
  IndikatorAsesmen, 
  StimulusItem, 
  SoalItem, 
  KisiKisiItem,
  PaketLatihan,
  UserSession
} from '../types/assessment';
import { 
  KELAS_MAP, 
  JENIS_TEKS_MAP, 
  getIndikatorByJenjang, 
  countWords, 
  analyzeSentences,
  KOMPETENSI_LIST 
} from '../data/matrix';
import { runGenerationPipeline, TAHAPAN_PIPELINE } from '../services/aiGenerator';
import { saveStimulus, saveMultipleSoal, savePaket } from '../services/storage';

interface GeneratorSoalProps {
  currentJenjang: Jenjang;
  onJenjangChange: (j: Jenjang) => void;
  onNavigate: (tab: string) => void;
  currentUser: UserSession;
  onOpenAuthModal: () => void;
  onLaunchPackage?: (packageId: string, mode: 'latihan' | 'simulasi') => void;
}

export const GeneratorSoal: React.FC<GeneratorSoalProps> = ({
  currentJenjang,
  onJenjangChange,
  onNavigate,
  currentUser,
  onOpenAuthModal,
  onLaunchPackage,
}) => {
  const [kelas, setKelas] = useState<Kelas>(KELAS_MAP[currentJenjang][0] as Kelas);
  const [selectedKompetensi, setSelectedKompetensi] = useState<string>('Semua');
  const [selectedIndikators, setSelectedIndikators] = useState<string[]>([]);
  const [jenisTeks, setJenisTeks] = useState<string>(JENIS_TEKS_MAP[currentJenjang][0]);
  const [topik, setTopik] = useState<string>('Konservasi Lingkungan dan Ketahanan Pangan');
  const [mode, setMode] = useState<'Latihan' | 'Simulasi'>('Simulasi');
  const [jumlahSoal, setJumlahSoal] = useState<number>(currentJenjang === 'SD' ? 30 : currentJenjang === 'SMP' ? 35 : 40);
  const [tingkatKesulitan, setTingkatKesulitan] = useState<TingkatKesulitan>('Sedang');
  const [bentukSoal, setBentukSoal] = useState<BentukSoal>('Pilihan Ganda');
  const [isDualText, setIsDualText] = useState<boolean>(false);
  const [useCustomText, setUseCustomText] = useState<boolean>(false);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customBody, setCustomBody] = useState<string>('');
  const [showStimulusInReview, setShowStimulusInReview] = useState<boolean>(true);
  const [stimulusReviewTab, setStimulusReviewTab] = useState<'teks1' | 'teks2'>('teks1');

  // Generation state
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [stageDetail, setStageDetail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Result state
  const [generatedStimulus, setGeneratedStimulus] = useState<StimulusItem | null>(null);
  const [generatedSoals, setGeneratedSoals] = useState<SoalItem[]>([]);
  const [generatedKisiKisi, setGeneratedKisiKisi] = useState<KisiKisiItem[]>([]);
  const [generatedPaket, setGeneratedPaket] = useState<PaketLatihan | null>(null);
  const [activeTab, setActiveTab] = useState<'soal' | 'stimulus' | 'kisi-kisi'>('soal');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Update default class, text types, and TKA question count when jenjang changes
  useEffect(() => {
    setKelas(KELAS_MAP[currentJenjang][0] as Kelas);
    setJenisTeks(JENIS_TEKS_MAP[currentJenjang][0]);
    setSelectedIndikators([]);
    setIsDualText(false);
    if (mode === 'Simulasi') {
      setJumlahSoal(currentJenjang === 'SD' ? 30 : currentJenjang === 'SMP' ? 35 : 40);
    }
  }, [currentJenjang]);

  const allIndicators = getIndikatorByJenjang(currentJenjang);
  const filteredIndicators = selectedKompetensi === 'Semua'
    ? allIndicators
    : allIndicators.filter(i => i.kompetensi === selectedKompetensi);

  const toggleIndicator = (kode: string) => {
    if (selectedIndikators.includes(kode)) {
      setSelectedIndikators(selectedIndikators.filter(k => k !== kode));
    } else {
      setSelectedIndikators([...selectedIndikators, kode]);
    }
  };

  const handleStartGenerate = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    setSaveSuccess(false);

    const targetIndicators = selectedIndikators.length > 0
      ? allIndicators.filter(i => selectedIndikators.includes(i.kode))
      : filteredIndicators;

    const effectiveCount = currentUser.isDemo ? Math.min(2, jumlahSoal) : jumlahSoal;

    try {
      const res = await runGenerationPipeline(
        {
          jenjang: currentJenjang,
          kelas,
          kompetensi: selectedKompetensi as any,
          indikatorList: targetIndicators,
          jenisTeks,
          topik,
          jumlahSoal: effectiveCount,
          tingkatKesulitan,
          bentukSoal,
          mode,
          isDualText: currentJenjang === 'SMA' ? isDualText : false,
          customStimulusText: useCustomText ? customBody : undefined,
          customStimulusTitle: useCustomText ? customTitle : undefined,
        },
        (stageNum, stageName, detail) => {
          setCurrentStage(stageNum);
          setStageDetail(`${stageName} - ${detail}`);
        }
      );

      setGeneratedStimulus(res.stimulus);
      setGeneratedSoals(res.soalList);
      setGeneratedKisiKisi(res.kisiKisi);
      setGeneratedPaket(res.paket);
      setSaveSuccess(true);
    } catch (e: any) {
      setErrorMsg(e.message || 'Terjadi kesalahan saat memproses generator soal.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveToBank = () => {
    if (currentUser.isDemo) {
      onOpenAuthModal();
      return;
    }
    if (!generatedStimulus || generatedSoals.length === 0) return;
    saveStimulus(generatedStimulus);
    saveMultipleSoal(generatedSoals);

    // Also auto-create a package
    const paketId = `PKT-${currentJenjang}-${Date.now().toString().slice(-4)}`;
    savePaket({
      id: paketId,
      judul: `${mode} ${currentJenjang} Kls ${kelas}: ${topik.slice(0, 30)}`,
      jenjang: currentJenjang,
      kelas,
      deskripsi: `Paket soal ${bentukSoal} (${tingkatKesulitan}) hasil generasi AI.`,
      waktuMenit: jumlahSoal * 2 + 10,
      soalIds: generatedSoals.map(s => s.id),
      isSimulasi: mode === 'Simulasi',
      createdAt: new Date().toISOString(),
    });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Demo Warning Banner */}
      {currentUser.isDemo && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs text-amber-950">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
            <span>
              <strong>Mode Demo Terbatas Aktif:</strong> Pembuatan soal dibatasi maksimal <strong>2 butir soal</strong> dan penyimpanan bank data memerlukan aktivasi akun.
            </span>
          </div>
          <button
            onClick={onOpenAuthModal}
            className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs"
          >
            Aktivasi Lisensi PRO
          </button>
        </div>
      )}

      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Mesin Pembuatan Butir Soal Berbasis AI & Kurikulum
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Generator Soal AI Asesmen Literasi
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Rancang stimulus dan paket soal secara dinamis berdasarkan jenjang pendidikan, kelas, kompetensi, indikator resmi, jenis teks, dan kriteria validitas butir soal.
            </p>
          </div>

          {/* Jenjang Switcher */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-300">
            {(['SD', 'SMP', 'SMA'] as Jenjang[]).map((j) => (
              <button
                key={j}
                onClick={() => onJenjangChange(j)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  currentJenjang === j
                    ? j === 'SD'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : j === 'SMP'
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {j}/MI
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Form Config vs Output Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Configuration Form (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <h2 className="font-bold text-base text-slate-900">
              Parameter Pembuatan Soal ({currentJenjang})
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Kelas Selector */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Tingkat Kelas ({currentJenjang})
              </label>
              <div className="grid grid-cols-3 gap-2">
                {KELAS_MAP[currentJenjang].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKelas(k as Kelas)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      kelas === k
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Kelas {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Kompetensi */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Fokus Kompetensi Literasi
              </label>
              <select
                value={selectedKompetensi}
                onChange={(e) => setSelectedKompetensi(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Semua">Semua Kompetensi (Berimbang)</option>
                {KOMPETENSI_LIST.map((k) => (
                  <option key={k.id} value={k.id}>{k.label}</option>
                ))}
              </select>
            </div>

            {/* Indikator Selector */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-slate-700 text-xs">
                  Pilih Indikator Matriks ({currentJenjang})
                </label>
                <span className="text-[11px] text-indigo-600 font-medium">
                  {selectedIndikators.length === 0 ? 'Semua terpilih otomatis' : `${selectedIndikators.length} dipilih`}
                </span>
              </div>
              <div className="max-h-40 overflow-y-auto space-y-1.5 border border-slate-200 rounded-xl p-2.5 bg-slate-50">
                {filteredIndicators.map((ind) => (
                  <label
                    key={ind.kode}
                    className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-white text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedIndikators.includes(ind.kode)}
                      onChange={() => toggleIndicator(ind.kode)}
                      className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <strong className="text-indigo-900 font-semibold">{ind.kode}:</strong>{' '}
                      <span className="text-slate-700">{ind.rumusan}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Jenis Teks & Tema */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Jenis Wacana / Teks
                </label>
                <select
                  value={jenisTeks}
                  onChange={(e) => setJenisTeks(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  {JENIS_TEKS_MAP[currentJenjang].map((jt) => (
                    <option key={jt} value={jt}>{jt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Jumlah Soal
                </label>
                <select
                  value={jumlahSoal}
                  onChange={(e) => setJumlahSoal(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  <option value={1}>1 Soal (Kilat)</option>
                  <option value={3}>3 Soal (Standar)</option>
                  <option value={5}>5 Soal (Paket Latihan)</option>
                  <option value={10}>10 Soal (Paket Komprehensif)</option>
                </select>
              </div>
            </div>

            {/* Topik / Tema input */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Topik / Tema Wacana
              </label>
              <input
                type="text"
                value={topik}
                onChange={(e) => setTopik(e.target.value)}
                placeholder="Contoh: Transisi Energi, Ekosistem Laut, Persahabatan"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Tingkat Kesulitan & Bentuk Soal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tingkat Kesulitan
                </label>
                <select
                  value={tingkatKesulitan}
                  onChange={(e) => setTingkatKesulitan(e.target.value as TingkatKesulitan)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Mudah">Mudah (Informasi langsung)</option>
                  <option value="Sedang">Sedang (Penafsiran konteks)</option>
                  <option value="Sulit">Sulit (Analisis & Evaluasi)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Bentuk Soal
                </label>
                <select
                  value={bentukSoal}
                  onChange={(e) => setBentukSoal(e.target.value as BentukSoal)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Pilihan Ganda">Pilihan Ganda (Tunggal)</option>
                  <option value="Pilihan Ganda Kompleks">Pilihan Ganda Kompleks</option>
                  <option value="Benar/Salah">Benar / Salah</option>
                  <option value="Isian Singkat">Isian Singkat</option>
                  <option value="Uraian">Uraian / Esai Berubrik</option>
                </select>
              </div>
            </div>

            {/* SMA Feature: Teks Jamak Toggle */}
            {currentJenjang === 'SMA' && (
              <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="dualText"
                  checked={isDualText}
                  onChange={(e) => setIsDualText(e.target.checked)}
                  className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="dualText" className="text-xs text-indigo-950 cursor-pointer">
                  <strong className="block font-bold">Hasilkan Teks Jamak (Dual Text)</strong>
                  Menghasilkan 2 teks artikel dengan sudut pandang berbeda (masing-masing ~250-300 kata) untuk menguji kemampuan inferensi dan evaluasi antarteks.
                </label>
              </div>
            )}

            {/* Custom Teacher Text Toggle */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setUseCustomText(!useCustomText)}
                className="text-xs text-indigo-600 font-bold hover:underline flex items-center gap-1"
              >
                {useCustomText ? '- Tutup Input Teks Mandiri' : '+ Guru memiliki teks wacana sendiri?'}
              </button>

              {useCustomText && (
                <div className="mt-2 space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="Judul Wacana Guru"
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium"
                  />
                  <textarea
                    value={customBody}
                    onChange={(e) => setCustomBody(e.target.value)}
                    rows={4}
                    placeholder="Tempelkan isi teks wacana di sini..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-mono"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Submit Generate Button */}
            <button
              onClick={handleStartGenerate}
              disabled={isGenerating}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 transition-all ${
                isGenerating
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 hover:scale-[1.01]'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Memproses Alur 12 Tahap ({currentStage}/12)...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Buat Soal Literasi Sekarang</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Pipeline Stepper & Result Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Progress Indicator when Generating */}
          {isGenerating && (
            <div className="bg-white border border-indigo-200 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-indigo-900">
                <span>Eksekusi Pipeline Pembuatan Soal</span>
                <span>Tahap {currentStage} dari 12</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-indigo-600 h-2.5 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStage / 12) * 100}%` }}
                ></div>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-xs text-indigo-800 flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-indigo-600" />
                <p className="leading-relaxed font-medium">
                  {stageDetail || 'Sedang memproses...'}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                {TAHAPAN_PIPELINE.map((st) => (
                  <div 
                    key={st.nomor}
                    className={`flex items-center gap-1.5 p-1 rounded ${
                      currentStage === st.nomor
                        ? 'text-indigo-600 font-bold bg-indigo-50'
                        : currentStage > st.nomor
                        ? 'text-emerald-600 font-medium'
                        : 'text-slate-400'
                    }`}
                  >
                    {currentStage > st.nomor ? (
                      <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                    ) : (
                      <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[9px]">
                        {st.nomor}
                      </span>
                    )}
                    <span className="truncate">{st.nama}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-4 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Results Display */}
          {generatedStimulus && generatedSoals.length > 0 ? (
            <div className="space-y-4">
              {/* Synchronized Across All Features Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-indigo-500/30 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                      Tersinkronisasi Otomatis ke Semua Fitur
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                      Valid & Siap Diujikan
                    </span>
                  </div>
                  {generatedPaket && (
                    <span className="text-[11px] font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-lg">
                      {generatedPaket.id}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
                  Wacana stimulus aktual dan <strong>{generatedSoals.length} butir soal</strong> telah tersimpan di bank data dan <strong>langsung aktif</strong> pada Mode Latihan, Mode Simulasi, Matriks Kisi-Kisi, Bank Soal, serta Dashboard Guru.
                </p>

                {/* Instant Launch Action Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
                  <button
                    onClick={() => {
                      if (generatedPaket && onLaunchPackage) {
                        onLaunchPackage(generatedPaket.id, 'latihan');
                      } else {
                        onNavigate('latihan');
                      }
                    }}
                    className="px-3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-200" />
                    <span>Mode Latihan</span>
                  </button>

                  <button
                    onClick={() => {
                      if (generatedPaket && onLaunchPackage) {
                        onLaunchPackage(generatedPaket.id, 'simulasi');
                      } else {
                        onNavigate('simulasi');
                      }
                    }}
                    className="px-3 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-amber-200" />
                    <span>Mode Simulasi</span>
                  </button>

                  <button
                    onClick={() => onNavigate('kisi-kisi')}
                    className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-teal-400" />
                    <span>Kisi-Kisi</span>
                  </button>

                  <button
                    onClick={() => onNavigate('bank-soal')}
                    className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <Database className="w-4 h-4 text-sky-400" />
                    <span>Bank Soal</span>
                  </button>

                  <button
                    onClick={() => onNavigate('dashboard-guru')}
                    className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <School className="w-4 h-4 text-rose-400" />
                    <span>Dashboard Guru</span>
                  </button>
                </div>
              </div>

              {/* Main Results Card */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                {/* Action Toolbar */}
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Lolos Validasi Otomatis
                    </span>
                    <span className="text-xs text-slate-500">
                      ({generatedSoals.length} Butir Soal Terbentuk)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveToBank}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Tersimpan di Bank Data
                    </button>
                  </div>
                </div>

              {/* Sub-tab Navigation */}
              <div className="flex border-b border-slate-200 px-6 bg-white text-xs font-bold">
                <button
                  onClick={() => setActiveTab('soal')}
                  className={`py-3 px-4 border-b-2 transition-all ${
                    activeTab === 'soal'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Daftar Soal & Pembahasan ({generatedSoals.length})
                </button>
                <button
                  onClick={() => setActiveTab('stimulus')}
                  className={`py-3 px-4 border-b-2 transition-all ${
                    activeTab === 'stimulus'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Wacana Stimulus {generatedStimulus.isDual ? '(Teks Jamak)' : '(Teks Tunggal)'}
                </button>
                <button
                  onClick={() => setActiveTab('kisi-kisi')}
                  className={`py-3 px-4 border-b-2 transition-all ${
                    activeTab === 'kisi-kisi'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Kisi-Kisi Matriks ({generatedKisiKisi.length})
                </button>
              </div>

              {/* Content Panel */}
              <div className="p-6">
                {/* 1. SOAL TAB */}
                {activeTab === 'soal' && (
                  <div className="space-y-6">
                    {generatedSoals.map((soal, idx) => (
                      <div 
                        key={soal.id}
                        className="border border-slate-200 rounded-xl p-5 space-y-4 hover:border-slate-300 transition-colors"
                      >
                        {/* Question Meta Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-900">
                              {soal.indikatorId}
                            </span>
                            <span className="text-xs text-slate-500">
                              | {soal.kompetensi}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {soal.tingkatKesulitan}
                          </span>
                        </div>

                        {/* Pertanyaan */}
                        <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                          {soal.pertanyaan}
                        </p>

                        {/* Pilihan Jawaban */}
                        <div className="space-y-2">
                          {soal.pilihan.map((p) => {
                            const isKey = p.kode === soal.kunciJawaban;
                            return (
                              <div
                                key={p.kode}
                                className={`p-3 rounded-xl border text-xs leading-relaxed transition-all ${
                                  isKey
                                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium'
                                    : 'bg-slate-50 border-slate-200 text-slate-700'
                                }`}
                              >
                                <div className="flex items-start gap-2">
                                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold ${
                                    isKey ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {p.kode}
                                  </span>
                                  <div className="flex-1">
                                    <span>{p.teks}</span>
                                    {isKey && (
                                      <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] bg-emerald-200 text-emerald-900 font-bold">
                                        KUNCI JAWABAN
                                      </span>
                                    )}
                                    {p.alasanDistraktor && (
                                      <p className="text-[11px] text-slate-500 mt-1 italic">
                                        Catatan Distraktor: {p.alasanDistraktor}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bukti Tekstual & Pembahasan */}
                        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5 space-y-2 text-xs">
                          <div>
                            <strong className="text-amber-950 font-bold">Bukti Tekstual:</strong>
                            <p className="text-amber-900 italic mt-0.5">
                              "{soal.buktiTekstual}"
                            </p>
                          </div>
                          <div>
                            <strong className="text-amber-950 font-bold">Pembahasan Mendidik:</strong>
                            <p className="text-amber-900 mt-0.5 leading-relaxed">
                              {soal.pembahasan}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. STIMULUS TAB */}
                {activeTab === 'stimulus' && (
                  <div className="space-y-6">
                    {/* Stimulus Validation Metrics */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
                      <div>
                        <span className="text-slate-500">Panjang Teks 1:</span>{' '}
                        <strong className="text-slate-900 font-bold">{generatedStimulus.jumlahKata} kata</strong>
                      </div>
                      {generatedStimulus.isDual && (
                        <div>
                          <span className="text-slate-500">Panjang Teks 2:</span>{' '}
                          <strong className="text-slate-900 font-bold">{generatedStimulus.jumlahKataTeks2 || 0} kata</strong>
                        </div>
                      )}
                      <div>
                        <span className="text-slate-500">Rata-rata Kata/Kalimat:</span>{' '}
                        <strong className="text-slate-900 font-bold">{generatedStimulus.rataKataPerKalimat || 10} kata</strong>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold">
                        {currentJenjang === 'SMA' ? 'Sasaran SMA: 250-300 kata' : 'Sesuai Jenjang'}
                      </span>
                    </div>

                    {/* Teks 1 */}
                    <div className="border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase">
                          {generatedStimulus.isDual ? 'Teks 1' : 'Wacana Utama'} ({generatedStimulus.jenisTeks})
                        </span>
                        <span className="text-xs text-slate-400">
                          {generatedStimulus.sumber}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {generatedStimulus.judul}
                      </h3>
                      <div className="prose text-xs sm:text-sm text-slate-700 font-serif leading-relaxed whitespace-pre-line">
                        {generatedStimulus.isiTeks}
                      </div>
                    </div>

                    {/* Teks 2 if Dual */}
                    {generatedStimulus.isDual && generatedStimulus.teks2Isi && (
                      <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                          <span className="text-xs font-bold text-teal-600 uppercase">
                            Teks 2 (Perspektif Pembanding)
                          </span>
                          <span className="text-xs text-slate-400">
                            {generatedStimulus.teks2Jenis || 'Wacana Jamak'}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {generatedStimulus.teks2Judul || 'Teks Pembanding'}
                        </h3>
                        <div className="prose text-xs sm:text-sm text-slate-700 font-serif leading-relaxed whitespace-pre-line">
                          {generatedStimulus.teks2Isi}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. KISI-KISI TAB */}
                {activeTab === 'kisi-kisi' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5">No</th>
                          <th className="p-2.5">Kode</th>
                          <th className="p-2.5">Kompetensi</th>
                          <th className="p-2.5">Rumusan Indikator</th>
                          <th className="p-2.5">Kesulitan</th>
                          <th className="p-2.5">Bentuk</th>
                          <th className="p-2.5">Bobot</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {generatedKisiKisi.map((k) => (
                          <tr key={k.nomor} className="hover:bg-slate-50">
                            <td className="p-2.5 font-bold text-slate-900">{k.nomor}</td>
                            <td className="p-2.5 font-semibold text-indigo-700">{k.kodeIndikator}</td>
                            <td className="p-2.5">{k.kompetensi}</td>
                            <td className="p-2.5 max-w-xs">{k.rumusanIndikator}</td>
                            <td className="p-2.5">
                              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                {k.tingkatKesulitan}
                              </span>
                            </td>
                            <td className="p-2.5">{k.bentukSoal}</td>
                            <td className="p-2.5 font-bold">{k.bobot}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
            </div>
          ) : (
            /* Empty Placeholder when not yet generated */
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-xs">
                <FileText className="w-7 h-7" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Belum Ada Soal Dihasilkan
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tentukan parameter di panel kiri dan klik tombol <strong>"Buat Soal Literasi Sekarang"</strong> untuk menginisiasi pipeline 12 tahap otomatis.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
