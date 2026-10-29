import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  Layers, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Award,
  ChevronRight
} from 'lucide-react';
import { Jenjang } from '../types/assessment';
import { 
  INDIKATOR_SD, 
  INDIKATOR_SMP, 
  INDIKATOR_SMA, 
  KOMPETENSI_LIST 
} from '../data/matrix';

export const PanduanAsesmen: React.FC = () => {
  const [activeJenjang, setActiveJenjang] = useState<Jenjang>('SD');

  const getIndicators = () => {
    switch (activeJenjang) {
      case 'SD':
        return INDIKATOR_SD;
      case 'SMP':
        return INDIKATOR_SMP;
      case 'SMA':
        return INDIKATOR_SMA;
    }
  };

  const indicators = getIndicators();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          Pedoman Pengembangan Instrumen & Standar Mutu
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Panduan Asesmen Literasi Membaca TKA 2026
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
          Rujukan resmi operasional mengenai 3 kelompok kompetensi dasar, matriks indikator asesmen berjenjang, dan standar mutu penulisan butir soal.
        </p>
      </div>

      {/* 3 Core Competencies Conceptual Reference */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          Tiga Kelompok Kompetensi Utama Literasi Membaca
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KOMPETENSI_LIST.map((comp, idx) => (
            <div key={comp.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-slate-900">{comp.label}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{comp.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indicators Matrix per Jenjang */}
      <section className="space-y-4">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            Matriks Indikator Operasional ({activeJenjang})
          </h2>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            {(['SD', 'SMP', 'SMA'] as Jenjang[]).map((j) => (
              <button
                key={j}
                onClick={() => setActiveJenjang(j)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeJenjang === j
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {j}/MI
              </button>
            ))}
          </div>
        </div>

        {/* Level specific notes */}
        {activeJenjang === 'SMA' && (
          <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 text-xs text-indigo-950 space-y-1.5">
            <strong className="font-bold block text-indigo-900">Ketentuan Khusus Jenjang SMA/Sederajat:</strong>
            <p>1. Target panjang stimulus teks informasi dan prosa fiksi adalah <strong>250–300 kata</strong>.</p>
            <p>2. Karakteristik kalimat kompleks bervariasi dengan sasaran <strong>8–12 kata per kalimat</strong>.</p>
            <p>3. Untuk teks informasi jamak (dual text), sediakan 2 teks bertopik sama dengan sudut pandang berbeda untuk mengukur perbandingan antarteks.</p>
            <p>4. Teks fiksi mencakup realisme hingga absurditas dengan tokoh berkarakter bulat dan alur terbuka.</p>
          </div>
        )}

        {/* Table of indicators */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
              <tr>
                <th className="p-3 w-28">Kode</th>
                <th className="p-3 w-48">Kompetensi</th>
                <th className="p-3">Rumusan Indikator Operasional</th>
                <th className="p-3 max-w-sm">Contoh Aktivitas Soal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {indicators.map((ind) => (
                <tr key={ind.kode} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-bold text-indigo-700 font-mono">{ind.kode}</td>
                  <td className="p-3 text-slate-700 font-medium">{ind.kompetensi}</td>
                  <td className="p-3 font-semibold text-slate-900 leading-relaxed">{ind.rumusan}</td>
                  <td className="p-3 text-slate-600 space-y-1">
                    {ind.contohAktivitas.map((act, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <span className="text-slate-400">•</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Standard Quality Rules (Bagian 9) */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Pedoman Standar Mutu
          </h2>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Standar Kualitas & Kriteria Validitas Butir Soal TKA
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">1. Validasi Kompetensi</strong>
            <p className="text-slate-300 leading-relaxed">
              Soal inferensial wajib menuntut penalaran makna tersirat, dilarang menanyakan kata yang tertulis langsung tanpa penggabungan informasi.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">2. Validasi Kunci Jawaban</strong>
            <p className="text-slate-300 leading-relaxed">
              Jawaban benar wajib memiliki bukti tekstual eksplisit atau implisit tak terbantahkan di dalam wacana.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">3. Validasi Distraktor</strong>
            <p className="text-slate-300 leading-relaxed">
              Distraktor harus masuk akal, relevan, tidak absurd, tidak tumpang tindih dengan kunci, dan memiliki alasan kekeliruan yang jelas.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">4. Validasi Stimulus</strong>
            <p className="text-slate-300 leading-relaxed">
              Stimulus tidak boleh mengandung kontradiksi internal, mendidik, bebas bias SARA, dan sesuai sasaran kognitif usia peserta didik.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">5. Validasi Pembahasan</strong>
            <p className="text-slate-300 leading-relaxed">
              Menjelaskan alasan logis mengapa kunci benar, mengutip bukti wacana, dan menguraikan mengapa distraktor tidak tepat.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <strong className="font-bold text-indigo-300 block">6. Status Validasi Bertingkat</strong>
            <p className="text-slate-300 leading-relaxed">
              Status berpindah dari Draf, Lolos Validasi Otomatis AI, hingga Disetujui Guru untuk menjamin akuntabilitas instrumen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
