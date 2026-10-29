import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  RotateCcw, 
  Printer, 
  ArrowLeft, 
  BookOpen, 
  BarChart3, 
  Sparkles, 
  Check, 
  Layers,
  FileText
} from 'lucide-react';
import { HasilPengerjaan, SoalItem } from '../types/assessment';
import { getStoredSoal } from '../services/storage';

interface AnalisisHasilProps {
  hasil: HasilPengerjaan;
  onRetry: () => void;
  onNavigate: (tab: string) => void;
}

export const AnalisisHasil: React.FC<AnalisisHasilProps> = ({
  hasil,
  onRetry,
  onNavigate,
}) => {
  const allSoal = getStoredSoal();
  // Filter questions used in this exercise
  const answeredSoalList = allSoal.filter(s => Object.keys(hasil.jawabanUser).includes(s.id));

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m} menit ${s} detik`;
  };

  const handlePrint = () => {
    window.print();
  };

  // Grade badge color
  let scoreColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let scoreVerdict = 'Sangat Memuaskan';
  if (hasil.nilaiAkhir < 60) {
    scoreColor = 'text-rose-600 bg-rose-50 border-rose-200';
    scoreVerdict = 'Perlu Bimbingan Intensif';
  } else if (hasil.nilaiAkhir < 75) {
    scoreColor = 'text-amber-600 bg-amber-50 border-amber-200';
    scoreVerdict = 'Cukup Baik';
  } else if (hasil.nilaiAkhir < 85) {
    scoreColor = 'text-sky-600 bg-sky-50 border-sky-200';
    scoreVerdict = 'Baik';
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print:p-0">
      {/* Action Bar */}
      <div className="flex justify-between items-center print:hidden">
        <button
          onClick={() => onNavigate('beranda')}
          className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            Cetak Laporan / PDF
          </button>
          <button
            onClick={onRetry}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            Ulangi Latihan Ini
          </button>
        </div>
      </div>

      {/* Main Score & Profile Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 uppercase">
                {hasil.jenjang} - Kelas {hasil.kelas}
              </span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs text-slate-500">
                {new Date(hasil.tanggal).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              {hasil.paketJudul}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Peserta: <strong className="text-slate-800">{hasil.userName}</strong> ({hasil.userId})
            </p>
          </div>

          {/* Final Score Circle/Pill */}
          <div className={`p-4 sm:p-6 rounded-3xl border-2 text-center min-w-[150px] shadow-xs ${scoreColor}`}>
            <span className="text-xs font-extrabold uppercase tracking-wider block opacity-80">
              Nilai Akhir TKA
            </span>
            <div className="text-4xl sm:text-5xl font-black tracking-tight my-1">
              {hasil.nilaiAkhir}
            </div>
            <span className="text-xs font-bold block">
              {scoreVerdict}
            </span>
          </div>
        </div>

        {/* 4 Metrics Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Benar</span>
            <div className="text-2xl font-black text-emerald-600 mt-0.5">
              {hasil.jawabanBenar} <span className="text-xs font-normal text-slate-400">/ {hasil.totalSoal}</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Salah</span>
            <div className="text-2xl font-black text-rose-600 mt-0.5">
              {hasil.jawabanSalah} <span className="text-xs font-normal text-slate-400">soal</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Tidak Dijawab</span>
            <div className="text-2xl font-black text-slate-600 mt-0.5">
              {hasil.tidakDijawab} <span className="text-xs font-normal text-slate-400">soal</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Durasi Pengerjaan</span>
            <div className="text-lg font-black text-indigo-600 mt-1">
              {formatDuration(hasil.durasiDetik)}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Competencies Breakdown */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-bold text-slate-900">
            Analisis Capaian Berdasarkan Tiga Pilar Kompetensi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(hasil.analisisKompetensi).map(([compName, data]) => {
            let barColor = 'bg-emerald-500';
            if (data.persentase < 60) barColor = 'bg-rose-500';
            else if (data.persentase < 75) barColor = 'bg-amber-500';

            return (
              <div 
                key={compName}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-slate-900 leading-tight">
                    {compName}
                  </h3>
                  <span className="text-lg font-black text-slate-800">
                    {data.persentase}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-2.5 rounded-full ${barColor}`} 
                    style={{ width: `${data.persentase}%` }}
                  ></div>
                </div>

                <div className="text-xs text-slate-500 flex justify-between">
                  <span>Skor Benar:</span>
                  <strong className="text-slate-800">{data.benar} dari {data.total} soal</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diagnostic Diagnosis: Indicators Mastered vs Need Reinforcement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mastered */}
        <div className="bg-emerald-50/50 border border-emerald-200 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Indikator yang Sudah Dikuasai</span>
          </div>

          {hasil.indikatorDikuasai.length > 0 ? (
            <ul className="space-y-2 text-xs text-emerald-950">
              {hasil.indikatorDikuasai.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-500 italic">
              Belum ada indikator yang mencapai ambang batas ketuntasan 70%.
            </p>
          )}
        </div>

        {/* Needs Reinforcement */}
        <div className="bg-rose-50/50 border border-rose-200 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
            <AlertCircle className="w-5 h-5 text-rose-600" />
            <span>Indikator yang Perlu Diperkuat</span>
          </div>

          {hasil.indikatorPerluPerkuat.length > 0 ? (
            <ul className="space-y-2 text-xs text-rose-950">
              {hasil.indikatorPerluPerkuat.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                  <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    !
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-emerald-700 font-medium">
              Selamat! Seluruh indikator telah diselesaikan dengan sangat baik.
            </p>
          )}
        </div>
      </div>

      {/* Pedagogical Actionable Recommendation */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-3">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Rekomendasi Tindak Lanjut Pembelajaran Berbasis Data Aktual</span>
        </div>
        <div className="space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
          {hasil.rekomendasi.map((rec, i) => (
            <p key={i} className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span>{rec}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Review Questions Breakdown */}
      {answeredSoalList.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Pembahasan Lengkap & Kunci Jawaban
            </h2>
          </div>

          <div className="space-y-6">
            {answeredSoalList.map((soal, idx) => {
              const userAns = hasil.jawabanUser[soal.id];
              const isCorrect = String(userAns).trim().toUpperCase() === String(soal.kunciJawaban).trim().toUpperCase();

              return (
                <div 
                  key={soal.id}
                  className={`border rounded-2xl p-5 space-y-3 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">
                      Soal Nomor {idx + 1} ({soal.indikatorId} - {soal.kompetensi})
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isCorrect ? 'Jawaban Benar' : 'Jawaban Kurang Tepat'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                    {soal.pertanyaan}
                  </p>

                  <div className="text-xs space-y-1">
                    <p className="text-slate-600">
                      Jawaban Anda: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>{userAns || '(Tidak Dijawab)'}</strong>
                    </p>
                    <p className="text-slate-600">
                      Kunci Jawaban Tepat: <strong className="text-emerald-700">{soal.kunciJawaban}</strong>
                    </p>
                  </div>

                  {/* Bukti & Pembahasan */}
                  <div className="bg-white/90 border border-slate-200 rounded-xl p-3 text-xs space-y-1.5 text-slate-700">
                    <div>
                      <strong className="text-slate-900">Bukti Tekstual:</strong>
                      <p className="italic text-slate-600 font-serif">"{soal.buktiTekstual}"</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">Pembahasan:</strong>
                      <p className="text-slate-600 leading-relaxed">{soal.pembahasan}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
