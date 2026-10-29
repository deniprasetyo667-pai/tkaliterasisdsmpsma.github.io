import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Copy, 
  Trash2, 
  Download, 
  FileText, 
  CheckCircle, 
  Eye, 
  Layers,
  Sparkles,
  Check
} from 'lucide-react';
import { 
  Jenjang, 
  SoalItem, 
  StimulusItem, 
  StatusValidasi, 
  KompetensiType 
} from '../types/assessment';
import { 
  getStoredSoal, 
  getStoredStimuli, 
  saveSoal, 
  deleteSoal, 
  saveStimulus, 
  deleteStimulus 
} from '../services/storage';
import { countWords } from '../data/matrix';

interface BankSoalProps {
  currentJenjang: Jenjang;
  onNavigate: (tab: string) => void;
}

export const BankSoal: React.FC<BankSoalProps> = ({
  currentJenjang,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'soal' | 'stimulus'>('soal');
  const [soalList, setSoalList] = useState<SoalItem[]>([]);
  const [stimulusList, setStimulusList] = useState<StimulusItem[]>([]);

  // Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterJenjang, setFilterJenjang] = useState<string>(currentJenjang);
  const [filterKompetensi, setFilterKompetensi] = useState<string>('Semua');
  const [filterStatus, setFilterStatus] = useState<string>('Semua');

  // Preview or Edit Modal
  const [previewSoal, setPreviewSoal] = useState<SoalItem | null>(null);
  const [previewStimulus, setPreviewStimulus] = useState<StimulusItem | null>(null);

  useEffect(() => {
    setFilterJenjang(currentJenjang);
    refreshData();
  }, [currentJenjang]);

  useEffect(() => {
    refreshData();
  }, [filterJenjang]);

  const refreshData = () => {
    setSoalList(getStoredSoal());
    setStimulusList(getStoredStimuli());
  };

  const handleDeleteSoal = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus butir soal ini dari bank data?')) {
      deleteSoal(id);
      refreshData();
      if (previewSoal?.id === id) setPreviewSoal(null);
    }
  };

  const handleDuplicateSoal = (soal: SoalItem) => {
    const dup: SoalItem = {
      ...soal,
      id: `SOAL-${Date.now()}`,
      pertanyaan: `${soal.pertanyaan} (Duplikat)`,
      versi: 1,
      createdAt: new Date().toISOString(),
    };
    saveSoal(dup);
    refreshData();
  };

  const handleDeleteStimulus = (id: string) => {
    if (confirm('Hapus wacana stimulus ini?')) {
      deleteStimulus(id);
      refreshData();
      if (previewStimulus?.id === id) setPreviewStimulus(null);
    }
  };

  const handleExportJSON = () => {
    const dataToExport = activeTab === 'soal' ? filteredSoals : filteredStimuli;
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bank_${activeTab}_tka_${Date.now()}.json`;
    a.click();
  };

  // Filter logic
  const filteredSoals = soalList.filter(s => {
    if (filterJenjang !== 'Semua' && s.jenjang !== filterJenjang) return false;
    if (filterKompetensi !== 'Semua' && s.kompetensi !== filterKompetensi) return false;
    if (filterStatus !== 'Semua' && s.statusValidasi !== filterStatus) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        s.pertanyaan.toLowerCase().includes(q) ||
        s.indikator.toLowerCase().includes(q) ||
        s.indikatorId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredStimuli = stimulusList.filter(st => {
    if (filterJenjang !== 'Semua' && st.jenjang !== filterJenjang) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        st.judul.toLowerCase().includes(q) ||
        st.isiTeks.toLowerCase().includes(q) ||
        st.topik.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
            <Database className="w-3.5 h-3.5" />
            Manajemen Repositori Instrumen Asesmen
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bank Soal & Manajemen Stimulus
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kelola, filter, periksa versi, dan ekspor koleksi butir soal dan wacana wacana terakreditasi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportJSON}
            className="px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-4 h-4" />
            Ekspor JSON
          </button>
          <button
            onClick={() => onNavigate('generator')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            Buat Soal Baru
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('soal')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'soal'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          Bank Butir Soal ({filteredSoals.length})
        </button>
        <button
          onClick={() => setActiveTab('stimulus')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'stimulus'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          Bank Wacana Stimulus ({filteredStimuli.length})
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berdasarkan kata kunci, judul wacana, atau indikator..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            value={filterJenjang}
            onChange={(e) => setFilterJenjang(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 font-medium"
          >
            <option value="Semua">Semua Jenjang</option>
            <option value="SD">SD/MI</option>
            <option value="SMP">SMP/MTs</option>
            <option value="SMA">SMA/Sederajat</option>
          </select>

          {activeTab === 'soal' && (
            <>
              <select
                value={filterKompetensi}
                onChange={(e) => setFilterKompetensi(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="Semua">Semua Kompetensi</option>
                <option value="Pemahaman Tekstual">Pemahaman Tekstual</option>
                <option value="Pemahaman Inferensial">Pemahaman Inferensial</option>
                <option value="Evaluasi dan Apresiasi">Evaluasi dan Apresiasi</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="Semua">Semua Status</option>
                <option value="Disetujui Guru">Disetujui Guru</option>
                <option value="Lolos Validasi Otomatis">Lolos Validasi Otomatis</option>
                <option value="Perlu Ditinjau">Perlu Ditinjau</option>
              </select>
            </>
          )}
        </div>
      </div>

      {/* Main Table or Card List */}
      {activeTab === 'soal' ? (
        <div className="space-y-4">
          {filteredSoals.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredSoals.map((soal) => (
                <div
                  key={soal.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                        {soal.jenjang} - Kls {soal.kelas}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {soal.indikatorId}
                      </span>
                      <span className="text-xs text-slate-400">|</span>
                      <span className="text-xs text-slate-500">{soal.kompetensi}</span>
                      <span className="text-[11px] text-slate-400">v{soal.versi || 1}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {soal.statusValidasi}
                      </span>
                      <button
                        onClick={() => handleDuplicateSoal(soal)}
                        className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                        title="Duplikasi Butir Soal"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteSoal(soal.id)}
                        className="p-1.5 text-rose-500 hover:text-rose-700 rounded-lg hover:bg-rose-50"
                        title="Hapus Soal"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                    {soal.pertanyaan}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {soal.pilihan.map((p) => (
                      <div
                        key={p.kode}
                        className={`p-2 rounded-lg border flex items-center gap-2 ${
                          p.kode === soal.kunciJawaban
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full flex items-center justify-center font-bold text-[10px] bg-black/10">
                          {p.kode}
                        </span>
                        <span className="truncate">{p.teks}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
                    <span className="italic truncate max-w-lg">
                      Bukti: "{soal.buktiTekstual}"
                    </span>
                    <button
                      onClick={() => setPreviewSoal(soal)}
                      className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Lihat Rincian Pembahasan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-xs sm:text-sm">
              Tidak ada butir soal yang sesuai dengan kriteria filter saat ini.
            </div>
          )}
        </div>
      ) : (
        /* STIMULUS TAB */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStimuli.map((st) => (
            <div
              key={st.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                    {st.jenjang} - Kls {st.kelas}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-slate-500">
                      {st.jumlahKata} kata
                    </span>
                    <button
                      onClick={() => handleDeleteStimulus(st.id)}
                      className="p-1 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50 ml-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {st.judul}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 font-serif leading-relaxed">
                  {st.isiTeks}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>Topik: {st.topik}</span>
                <button
                  onClick={() => setPreviewStimulus(st)}
                  className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Buka Wacana Lengkap
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Preview Soal */}
      {previewSoal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                  {previewSoal.indikatorId}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{previewSoal.kompetensi}</h3>
              </div>
              <button
                onClick={() => setPreviewSoal(null)}
                className="text-slate-400 hover:text-slate-800 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-sm font-semibold text-slate-900">{previewSoal.pertanyaan}</p>

            <div className="space-y-2 text-xs">
              {previewSoal.pilihan.map((p) => (
                <div
                  key={p.kode}
                  className={`p-3 rounded-xl border ${
                    p.kode === previewSoal.kunciJawaban
                      ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-950'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="mr-2 font-black">{p.kode}.</span> {p.teks}
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-950 space-y-2">
              <div>
                <strong>Bukti Tekstual:</strong>
                <p className="italic mt-0.5">"{previewSoal.buktiTekstual}"</p>
              </div>
              <div>
                <strong>Pembahasan:</strong>
                <p className="mt-0.5 leading-relaxed">{previewSoal.pembahasan}</p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewSoal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Preview Stimulus */}
      {previewStimulus && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase">
                  {previewStimulus.jenisTeks} ({previewStimulus.jumlahKata} kata)
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{previewStimulus.judul}</h3>
              </div>
              <button
                onClick={() => setPreviewStimulus(null)}
                className="text-slate-400 hover:text-slate-800 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="prose text-xs sm:text-sm font-serif text-slate-800 leading-relaxed whitespace-pre-line">
              {previewStimulus.isiTeks}
            </div>

            {previewStimulus.isDual && previewStimulus.teks2Isi && (
              <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-600 uppercase">
                  Teks 2: {previewStimulus.teks2Judul} ({previewStimulus.jumlahKataTeks2 || 0} kata)
                </span>
                <div className="prose text-xs sm:text-sm font-serif text-slate-800 leading-relaxed whitespace-pre-line">
                  {previewStimulus.teks2Isi}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewStimulus(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
