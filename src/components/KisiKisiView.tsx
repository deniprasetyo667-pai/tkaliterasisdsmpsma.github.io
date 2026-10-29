import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  Download, 
  Printer, 
  Filter, 
  Search, 
  Plus, 
  Trash2, 
  Edit3,
  Check
} from 'lucide-react';
import { Jenjang, KisiKisiItem, KompetensiType } from '../types/assessment';
import { getStoredSoal, getStoredStimuli } from '../services/storage';

interface KisiKisiViewProps {
  currentJenjang: Jenjang;
}

export const KisiKisiView: React.FC<KisiKisiViewProps> = ({ currentJenjang }) => {
  const [selectedJenjang, setSelectedJenjang] = useState<string>(currentJenjang);
  const [filterKompetensi, setFilterKompetensi] = useState<string>('Semua');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setSelectedJenjang(currentJenjang);
  }, [currentJenjang]);

  const soals = getStoredSoal();
  const stimuli = getStoredStimuli();

  // Construct active Kisi-Kisi from saved questions
  const items: KisiKisiItem[] = soals
    .filter(s => selectedJenjang === 'Semua' || s.jenjang === selectedJenjang)
    .filter(s => filterKompetensi === 'Semua' || s.kompetensi === filterKompetensi)
    .filter(s => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        s.indikatorId.toLowerCase().includes(q) ||
        s.indikator.toLowerCase().includes(q) ||
        s.pertanyaan.toLowerCase().includes(q)
      );
    })
    .map((s, idx) => ({
      nomor: idx + 1,
      jenjang: s.jenjang,
      kelas: s.kelas,
      kompetensi: s.kompetensi,
      kodeIndikator: s.indikatorId,
      rumusanIndikator: s.indikator,
      jenisStimulus: s.jenisStimulus,
      topik: s.jenisStimulus,
      tingkatKesulitan: s.tingkatKesulitan,
      bentukSoal: s.bentukSoal,
      nomorStimulus: s.stimulusIds[0] || 'Stimulus 1',
      bobot: s.bobot,
    }));

  const handleExportCSV = () => {
    const headers = ['Nomor', 'Jenjang', 'Kelas', 'Kompetensi', 'Kode_Indikator', 'Rumusan_Indikator', 'Jenis_Stimulus', 'Tingkat_Kesulitan', 'Bentuk_Soal', 'Bobot'];
    const rows = items.map(i => [
      i.nomor,
      i.jenjang,
      i.kelas,
      `"${i.kompetensi}"`,
      `"${i.kodeIndikator}"`,
      `"${i.rumusanIndikator.replace(/"/g, '""')}"`,
      `"${i.jenisStimulus}"`,
      i.tingkatKesulitan,
      `"${i.bentukSoal}"`,
      i.bobot,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kisi_kisi_tka_${selectedJenjang}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Matriks Distribusi & Kisi-Kisi Butir Soal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kisi-Kisi Instrumen Asesmen Literasi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pemetaan keterkaitan butir soal dengan kode indikator, kompetensi, tingkat kesulitan kognitif, dan bentuk soal.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            Cetak Kisi-Kisi
          </button>
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            Ekspor CSV / Excel
          </button>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari rumusan indikator atau kata kunci..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <select
            value={selectedJenjang}
            onChange={(e) => setSelectedJenjang(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 font-medium"
          >
            <option value="Semua">Semua Jenjang</option>
            <option value="SD">SD/MI</option>
            <option value="SMP">SMP/MTs</option>
            <option value="SMA">SMA/Sederajat</option>
          </select>

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
        </div>
      </div>

      {/* Kisi-kisi Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3">No</th>
                <th className="p-3">Jenjang/Kls</th>
                <th className="p-3">Kompetensi</th>
                <th className="p-3">Kode</th>
                <th className="p-3 max-w-sm">Rumusan Indikator Asesmen</th>
                <th className="p-3">Jenis Stimulus</th>
                <th className="p-3">Kesulitan</th>
                <th className="p-3">Bentuk</th>
                <th className="p-3 text-center">Bobot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {items.map((it) => (
                <tr key={it.nomor} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 font-bold text-slate-900">{it.nomor}</td>
                  <td className="p-3 font-semibold">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      {it.jenjang} - Kls {it.kelas}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700 font-medium">{it.kompetensi}</td>
                  <td className="p-3 font-bold text-indigo-700">{it.kodeIndikator}</td>
                  <td className="p-3 max-w-sm text-slate-800 leading-relaxed">{it.rumusanIndikator}</td>
                  <td className="p-3 text-slate-600">{it.jenisStimulus}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                      it.tingkatKesulitan === 'Mudah'
                        ? 'bg-emerald-100 text-emerald-800'
                        : it.tingkatKesulitan === 'Sedang'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {it.tingkatKesulitan}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700">{it.bentukSoal}</td>
                  <td className="p-3 font-bold text-center">{it.bobot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
