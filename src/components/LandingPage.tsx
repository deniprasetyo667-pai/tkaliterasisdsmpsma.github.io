import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Layers, 
  Award, 
  ShieldCheck, 
  FileCheck2, 
  FileText,
  School,
  GraduationCap
} from 'lucide-react';
import { Jenjang, UserSession } from '../types/assessment';
import { KeyRound, Lock, UserCheck } from 'lucide-react';

interface LandingPageProps {
  selectedJenjang: Jenjang;
  onSelectJenjang: (j: Jenjang) => void;
  onNavigate: (tab: string) => void;
  currentUser?: UserSession;
  onOpenAuthModal?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  selectedJenjang,
  onSelectJenjang,
  onNavigate,
  currentUser,
  onOpenAuthModal,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Multi-user Activation & Demo Info Banner */}
      {currentUser?.isDemo && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-gradient-to-r from-indigo-500/10 via-sky-50 to-amber-50 border border-indigo-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                <KeyRound className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900 block">
                  Selamat Datang! Anda Menggunakan Mode Demo Publik (Gratis).
                </span>
                <span>
                  Siapapun yang memiliki link dapat mencoba latihan secara instan. Punya kode aktivasi dari sekolah atau guru? Masukkan kode untuk membuka semua simulasi berwaktu dan generator tak terbatas.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAuthModal}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
              >
                <KeyRound className="w-3.5 h-3.5" />
                Aktivasi Kode Lisensi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer Announcement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold text-amber-950">Pemberitahuan Resmi:</strong> Aplikasi ini dirancang sebagai platform edukatif latihan mandiri, generator soal berbasis AI kurikuler, dan analisis kompetensi literasi membaca. Aplikasi ini <span className="underline font-semibold">bukan penyelenggaraan resmi Tes Kemampuan Akademik (TKA) pemerintah</span>, melainkan sarana persiapan akademik komprehensif bagi peserta didik dan instrumen pendukung guru.
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 py-16 sm:py-20 shadow-2xl border border-indigo-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Platform Asesmen Literasi Membaca Berstandar Nasional
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Latihan Cerdas, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300">
              Pahami Teks, Raih Prestasi!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            TKA LITERASI SMART PRO adalah ekosistem latihan literasi membaca terstruktur untuk <strong className="text-white font-medium">SD/MI, SMP/MTs, dan SMA/Sederajat</strong>. Dilengkapi Generator Soal AI dengan validasi bukti tekstual, analisis 3 kelompok kompetensi, simulasi ujian akurat, dan kisi-kisi otomatis.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('latihan')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4" />
              Mulai Latihan Mandiri
            </button>
            <button
              onClick={() => onNavigate('simulasi')}
              className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              Simulasi Ujian TKA
            </button>
            <button
              onClick={() => onNavigate('generator')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              Generator Soal AI
            </button>
          </div>
        </div>
      </section>

      {/* 3 Jenjang Selection Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pilih Modul Jenjang Pendidikan
          </h2>
          <p className="text-sm text-slate-600">
            Setiap jenjang memiliki konfigurasi kompetensi, matriks indikator, karakteristik stimulus, dan tingkat kesulitan yang terpisah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MODUL A: SD/MI */}
          <div
            onClick={() => {
              onSelectJenjang('SD');
              onNavigate('latihan');
            }}
            className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl relative flex flex-col justify-between ${
              selectedJenjang === 'SD'
                ? 'border-amber-500 bg-amber-50/40 shadow-md ring-4 ring-amber-100'
                : 'border-slate-200 bg-white hover:border-amber-300'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xl shadow-xs">
                  SD
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  Kelas 4, 5, 6
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  MODUL A: SD / MI
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Bahasa Indonesia & Literasi Membaca Dasar
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Kosakata umum, objek fiksi/nonfiksi, ikhtisar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Ide pokok, amanat, watak tokoh, makna ungkapan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cerita anak, fabel, prosedur, pengumuman, tabel</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-amber-800 font-bold text-xs">
              <span>Buka Modul SD/MI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* MODUL B: SMP/MTs */}
          <div
            onClick={() => {
              onSelectJenjang('SMP');
              onNavigate('latihan');
            }}
            className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl relative flex flex-col justify-between ${
              selectedJenjang === 'SMP'
                ? 'border-sky-500 bg-sky-50/40 shadow-md ring-4 ring-sky-100'
                : 'border-slate-200 bg-white hover:border-sky-300'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xl shadow-xs">
                  SMP
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-200">
                  Kelas 7, 8, 9
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                  MODUL B: SMP / MTs
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Literasi Menengah, Kausalitas & Apresiasi Sastra
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Istilah berbagai bidang, struktur informasi & bagan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Kelogisan antarperistiwa, prediksi, majas & citraan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Eksplanasi, cerpen realistis, laporan, multimodal</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sky-800 font-bold text-xs">
              <span>Buka Modul SMP/MTs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* MODUL C: SMA/SEDERAJAT */}
          <div
            onClick={() => {
              onSelectJenjang('SMA');
              onNavigate('latihan');
            }}
            className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl relative flex flex-col justify-between ${
              selectedJenjang === 'SMA'
                ? 'border-indigo-500 bg-indigo-50/40 shadow-md ring-4 ring-indigo-100'
                : 'border-slate-200 bg-white hover:border-indigo-300'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black text-xl shadow-xs">
                  SMA
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200">
                  Kelas 10, 11, 12
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                  MODUL C: SMA / Sederajat
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Teks Jamak, Analisis Kritis & Fiksi Realis/Absurd
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Kata serapan asing/daerah, dialektika wacana ilmiah</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Target teks 250-300 kata, rata-rata 8-12 kata/kalimat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Teks jamak (perbandingan 2 artikel), evaluasi kecukupan bukti</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-indigo-800 font-bold text-xs">
              <span>Buka Modul SMA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Competencies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Kerangka Konseptual Asesmen
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tiga Pilar Kompetensi Literasi Membaca
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Seluruh butir soal dikembangkan dengan indikator terukur untuk menjamin validitas konstruksi psikometrik:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-white">Pemahaman Tekstual</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kemampuan mengidentifikasi, mengelompokkan, menyusun ikhtisar, dan menemukan informasi eksplisit serta kosakata khusus yang tertera langsung dalam teks.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-white">Pemahaman Inferensial</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kemampuan menemukan makna tersirat, menyimpulkan ide pokok antarteks, menganalisis hubungan sebab-akibat, memprediksi peristiwa, dan memahami gaya bahasa.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-white">Evaluasi & Apresiasi</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kemampuan menilai keabsahan informasi, kecukupan data empiris, efektivitas gaya penulisan, relevansi dengan kehidupan nyata, serta respons emosional karya sastra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight text-center">
          Keunggulan Arsitektur Sistem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Alur 12 Tahap Pembuatan Soal</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pipeline bertahap dari pemuatan indikator, penulisan stimulus, pembentukan distraktor logis, hingga verifikasi kunci.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Validasi Bukti Tekstual</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Setiap kunci jawaban wajib merujuk kutipan kalimat teks nyata untuk mencegah ambiguitas dan penilaian subjektif.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Spesifikasi Teks SMA Ketat</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Penghitungan kata otomatis target 250-300 kata, evaluasi rentang kalimat 8-12 kata, dan dukungan stimulus jamak ganda.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Rekomendasi Berbasis Kesalahan</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Diagnosis pedagogis otomatis menghasilkan saran penguatan indikator spesifik yang belum dikuasai siswa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
