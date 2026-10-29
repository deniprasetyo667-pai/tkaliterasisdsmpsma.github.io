import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  FileCheck, 
  Layers, 
  Printer, 
  Download, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Plus, 
  Share2, 
  Filter,
  Check,
  FileText
} from 'lucide-react';
import { 
  Jenjang, 
  SoalItem, 
  PaketLatihan, 
  HasilPengerjaan,
  UserSession
} from '../types/assessment';
import { 
  getStoredSoal, 
  getStoredPaket, 
  getStoredHasil, 
  saveSoal, 
  savePaket 
} from '../services/storage';
import { 
  fetchServerResults, 
  fetchServerClasses, 
  createServerClass, 
  generateStudentInviteLink, 
  fetchActiveOnlineUsers,
  MultiUserClassInfo
} from '../services/multiUser';
import { ManajemenKodeAktivasi } from './ManajemenKodeAktivasi';
import { KeyRound, Lock, ShieldCheck, RefreshCw, Copy, Radio, School, UserPlus } from 'lucide-react';

interface DashboardGuruProps {
  currentJenjang: Jenjang;
  onNavigate: (tab: string) => void;
  currentUser: UserSession;
  onOpenAuthModal: () => void;
}

export const DashboardGuru: React.FC<DashboardGuruProps> = ({
  currentJenjang,
  onNavigate,
  currentUser,
  onOpenAuthModal,
}) => {
  const [soalList, setSoalList] = useState<SoalItem[]>([]);
  const [paketList, setPaketList] = useState<PaketLatihan[]>([]);
  const [hasilList, setHasilList] = useState<HasilPengerjaan[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<'rekap' | 'rombel' | 'approval' | 'export' | 'kode'>('rekap');

  // Multi-user state
  const [serverClasses, setServerClasses] = useState<MultiUserClassInfo[]>([]);
  const [activeUsersCount, setActiveUsersCount] = useState<number>(1);
  const [activePresences, setActivePresences] = useState<any[]>([]);
  const [selectedRombel, setSelectedRombel] = useState<string>('Semua');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // New Class Form
  const [showAddClass, setShowAddClass] = useState<boolean>(false);
  const [newClassName, setNewClassName] = useState<string>('');
  const [newClassJenjang, setNewClassJenjang] = useState<Jenjang>(currentJenjang);
  const [newClassQuota, setNewClassQuota] = useState<number>(36);

  // Filter
  const [filterJenjang, setFilterJenjang] = useState<string>(currentJenjang);

  useEffect(() => {
    setFilterJenjang(currentJenjang);
    setNewClassJenjang(currentJenjang);
    refreshData();
  }, [currentJenjang]);

  useEffect(() => {
    refreshData();
  }, [filterJenjang]);

  const refreshData = async () => {
    const localSoal = getStoredSoal();
    const localPaket = getStoredPaket();
    const localHasil = getStoredHasil();

    setSoalList(localSoal);
    setPaketList(localPaket);

    // Sync with multi-user server
    try {
      setIsSyncing(true);
      const [remoteResults, classesData, onlineData] = await Promise.all([
        fetchServerResults({ jenjang: filterJenjang !== 'Semua' ? filterJenjang : undefined }),
        fetchServerClasses(),
        fetchActiveOnlineUsers(),
      ]);

      // Merge local and remote results (deduplicate by id)
      const resultMap = new Map<string, any>();
      for (const item of localHasil) {
        resultMap.set(item.id, item);
      }
      for (const item of remoteResults) {
        resultMap.set(item.id, {
          ...item,
          // ensure compatible fields
          jawabanUser: item.jawabanUser || {},
        });
      }

      setHasilList(Array.from(resultMap.values()));
      setServerClasses(classesData);
      setActiveUsersCount(onlineData.activeCount);
      setActivePresences(onlineData.users);
    } catch (e) {
      setHasilList(localHasil);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCreateNewClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;

    const success = await createServerClass({
      namaKelas: newClassName.trim(),
      jenjang: newClassJenjang,
      kodeAktivasi: 'SISWA-PRO-2026',
      guruPengampu: currentUser.nama || 'Guru Bahasa Indonesia',
      kuotaSiswa: newClassQuota,
    });

    if (success) {
      setNewClassName('');
      setShowAddClass(false);
      refreshData();
    }
  };

  const handleCopyInviteLink = (targetClass?: MultiUserClassInfo) => {
    const link = generateStudentInviteLink({
      code: targetClass?.kodeAktivasi || 'SISWA-PRO-2026',
      kelas: targetClass?.namaKelas || (selectedRombel !== 'Semua' ? selectedRombel : undefined),
      jenjang: targetClass?.jenjang || (filterJenjang !== 'Semua' ? (filterJenjang as Jenjang) : undefined),
      sekolah: currentUser.sekolah || undefined,
    });

    navigator.clipboard.writeText(link);
    setCopiedLink(targetClass?.id || 'GLOBAL');
    setTimeout(() => setCopiedLink(null), 3000);
  };

  const handleExportCsv = () => {
    const filtered = hasilList.filter(h => {
      if (filterJenjang !== 'Semua' && h.jenjang !== filterJenjang) return false;
      if (selectedRombel !== 'Semua' && (h as any).kelasRombel !== selectedRombel && String(h.kelas) !== selectedRombel) return false;
      return true;
    });

    if (filtered.length === 0) return;

    const headers = ['No', 'Tanggal', 'Nama Siswa', 'NISN', 'Rombel/Kelas', 'Jenjang', 'Paket Ujian', 'Durasi (detik)', 'Skor Benar', 'Total Soal', 'Nilai Akhir', 'Status Tuntas'];
    const rows = filtered.map((h, i) => [
      i + 1,
      new Date(h.tanggal).toLocaleDateString('id-ID'),
      `"${h.userName.replace(/"/g, '""')}"`,
      `"${(h as any).nisn || '-'}"`,
      `"${(h as any).kelasRombel || `Kelas ${h.kelas}`}"`,
      h.jenjang,
      `"${h.paketJudul.replace(/"/g, '""')}"`,
      h.durasiDetik,
      h.jawabanBenar,
      h.totalSoal,
      h.nilaiAkhir,
      h.nilaiAkhir >= 75 ? 'Tuntas' : 'Perlu Remedial'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rekap_Nilai_TKA_Literasi_${selectedRombel}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApproveSoal = (soal: SoalItem) => {
    const updated: SoalItem = {
      ...soal,
      statusValidasi: 'Disetujui Guru',
      catatanValidasi: 'Telah ditinjau dan divalidasi oleh Guru Bahasa Indonesia.',
    };
    saveSoal(updated);
    refreshData();
  };

  const handleRejectSoal = (soal: SoalItem) => {
    const updated: SoalItem = {
      ...soal,
      statusValidasi: 'Ditolak/Revisi',
    };
    saveSoal(updated);
    refreshData();
  };

  const handlePrintStudentQuestions = (paketId: string) => {
    const targetPaket = paketList.find(p => p.id === paketId);
    if (!targetPaket) return;
    const targetSoals = soalList.filter(s => targetPaket.soalIds.includes(s.id));

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Naskah Soal Ujian - ${targetPaket.judul}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; color: #111; line-height: 1.6; }
            h1 { font-size: 18px; text-align: center; margin-bottom: 4px; text-transform: uppercase; }
            h2 { font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: normal; }
            .header-info { border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 24px; font-size: 12px; }
            .question-item { margin-bottom: 20px; page-break-inside: avoid; }
            .question-title { font-weight: bold; margin-bottom: 6px; }
            .option { margin-left: 20px; margin-bottom: 4px; }
            .footer { margin-top: 40px; border-top: 1px dashed #666; font-size: 11px; text-align: center; padding-top: 10px; }
          </style>
        </head>
        <body>
          <h1>NASKAH SOAL TES KEMAMPUAN AKADEMIK (TKA) LITERASI</h1>
          <h2>${targetPaket.judul} | Jenjang: ${targetPaket.jenjang} Kelas ${targetPaket.kelas}</h2>
          <div class="header-info">
            <table width="100%">
              <tr><td>Mata Uji: Bahasa Indonesia / Literasi Membaca</td><td align="right">Waktu: ${targetPaket.waktuMenit} Menit</td></tr>
              <tr><td>Nama Peserta: ___________________________</td><td align="right">Nomor Ujian: _______________</td></tr>
            </table>
          </div>
          ${targetSoals.map((s, idx) => `
            <div class="question-item">
              <div class="question-title">${idx + 1}. ${s.pertanyaan}</div>
              ${s.pilihan.map(p => `
                <div class="option">(${p.kode}) ${p.teks}</div>
              `).join('')}
            </div>
          `).join('')}
          <div class="footer">Naskah Ujian Mandiri TKA SMART PRO 2026 - Hak Cipta Dilindungi</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handlePrintAnswerKey = (paketId: string) => {
    const targetPaket = paketList.find(p => p.id === paketId);
    if (!targetPaket) return;
    const targetSoals = soalList.filter(s => targetPaket.soalIds.includes(s.id));

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Kunci Jawaban Resmi - ${targetPaket.judul}</title>
          <style>
            body { font-family: sans-serif; padding: 40px; color: #111; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
            th, td { border: 1px solid #333; padding: 8px 12px; }
            th { background: #f0f0f0; }
          </style>
        </head>
        <body>
          <h2>LEMBAR KUNCI JAWABAN TERPISAH (DOKUMEN GURU)</h2>
          <p>Paket: ${targetPaket.judul} (${targetPaket.jenjang})</p>
          <table>
            <thead>
              <tr><th>No</th><th>Kode Indikator</th><th>Kompetensi</th><th>Kunci</th><th>Bobot</th><th>Bukti Tekstual</th></tr>
            </thead>
            <tbody>
              ${targetSoals.map((s, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${s.indikatorId}</td>
                  <td>${s.kompetensi}</td>
                  <td><strong>${s.kunciJawaban}</strong></td>
                  <td>${s.bobot}</td>
                  <td>${s.buktiTekstual}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const pendingSoals = soalList.filter(s => s.statusValidasi !== 'Disetujui Guru');

  if (currentUser.isDemo || currentUser.license === 'siswa_pro') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-md">
          <Lock className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            <Lock className="w-3.5 h-3.5" />
            Fitur Khusus Pendidik & Guru PRO
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Dashboard Guru Terkunci
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Halaman ini khusus untuk manajemen kelas, antrean validasi butir soal, pencetakan naskah soal siswa & kunci jawaban terpisah, serta penerbitan kode aktivasi siswa.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-xs text-slate-600 space-y-2">
          <p className="font-semibold text-slate-800">
            Akses Terproteksi Khusus Tenaga Pendidik
          </p>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Silakan masukkan kode lisensi guru resmi yang telah diterbitkan untuk institusi Anda melalui tombol aktivasi di bawah.
          </p>
        </div>

        <button
          onClick={onOpenAuthModal}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md"
        >
          Aktivasi Lisensi Guru Sekarang
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            Panel Kontrol & Manajemen Guru
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Pengajar & Evaluasi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pantau rekap hasil belajar siswa, validasi butir soal AI, dan cetak naskah ujian resmi terpisah.
          </p>
        </div>

        <button
          onClick={() => onNavigate('generator')}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          Buat Soal / Paket Baru
        </button>
      </div>

      {/* 4 Stat Widgets */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Total Butir Soal</span>
          <div className="text-2xl font-black text-slate-900">{soalList.length}</div>
          <p className="text-[11px] text-slate-400">Dalam repositori bank soal</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Paket Ujian Aktif</span>
          <div className="text-2xl font-black text-indigo-600">{paketList.length}</div>
          <p className="text-[11px] text-slate-400">Latihan & Simulasi siap pakai</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Pengerjaan Siswa</span>
          <div className="text-2xl font-black text-emerald-600">{hasilList.length}</div>
          <p className="text-[11px] text-slate-400">Hasil tes tersimpan</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Menunggu Validasi</span>
          <div className="text-2xl font-black text-amber-600">{pendingSoals.length}</div>
          <p className="text-[11px] text-slate-400">Perlu persetujuan guru</p>
        </div>
      </div>

      {/* Sub tabs */}
      <div className="flex border-b border-slate-200 text-xs sm:text-sm font-bold overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('rekap')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-all ${
            activeSubTab === 'rekap'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          Rekap Nilai Siswa ({hasilList.length})
        </button>

        <button
          onClick={() => setActiveSubTab('rombel')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-all ${
            activeSubTab === 'rombel'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <School className="w-4 h-4 text-emerald-600" />
          Rombel & Tautan Undangan Massal
        </button>

        <button
          onClick={() => setActiveSubTab('approval')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-all ${
            activeSubTab === 'approval'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          Antrean Persetujuan Soal ({pendingSoals.length})
        </button>

        <button
          onClick={() => setActiveSubTab('export')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-all ${
            activeSubTab === 'export'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Printer className="w-4 h-4" />
          Pusat Ekspor & Cetak Naskah
        </button>

        <button
          onClick={() => setActiveSubTab('kode')}
          className={`py-3 px-5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-all ${
            activeSubTab === 'kode'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <KeyRound className="w-4 h-4 text-purple-600" />
          Kode Aktivasi Multi-User
        </button>
      </div>

      {/* SUB-TAB 1: REKAP NILAI SISWA DENGAN MULTI-USER SINKRONISASI */}
      {activeSubTab === 'rekap' && (
        <div className="space-y-4">
          {/* Multi-user rekap toolbar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Server Multi-User Aktif</span>
                <span className="text-emerald-600 font-normal">({activeUsersCount} Online)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-600">Filter Rombel:</span>
                <select
                  value={selectedRombel}
                  onChange={(e) => setSelectedRombel(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Semua">Semua Rombel / Kelas</option>
                  {serverClasses.map(c => (
                    <option key={c.id} value={c.namaKelas}>{c.namaKelas} ({c.jenjang})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={refreshData}
                disabled={isSyncing}
                className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 font-bold text-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-indigo-600' : ''}`} />
                <span>{isSyncing ? 'Sinkronisasi...' : 'Sinkronkan Nilai'}</span>
              </button>

              <button
                onClick={handleExportCsv}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Rekap CSV / Excel</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            {hasilList.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Tanggal</th>
                      <th className="p-3">Peserta Didik</th>
                      <th className="p-3">NISN</th>
                      <th className="p-3">Rombel / Jenjang</th>
                      <th className="p-3">Paket Ujian</th>
                      <th className="p-3">Durasi</th>
                      <th className="p-3">Skor Benar</th>
                      <th className="p-3 text-center">Nilai Akhir</th>
                      <th className="p-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {hasilList
                      .filter(h => {
                        if (filterJenjang !== 'Semua' && h.jenjang !== filterJenjang) return false;
                        if (selectedRombel !== 'Semua' && (h as any).kelasRombel !== selectedRombel && String(h.kelas) !== selectedRombel) return false;
                        return true;
                      })
                      .map((h) => (
                        <tr key={h.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 text-slate-500 whitespace-nowrap">
                            {new Date(h.tanggal).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </td>
                          <td className="p-3 font-bold text-slate-900">
                            <div>{h.userName}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{h.userId}</div>
                          </td>
                          <td className="p-3 text-slate-600 font-mono text-[11px]">
                            {(h as any).nisn || '-'}
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 font-semibold text-[11px]">
                              {(h as any).kelasRombel || `Kls ${h.kelas}`} ({h.jenjang})
                            </span>
                          </td>
                          <td className="p-3 max-w-xs truncate text-slate-700">{h.paketJudul}</td>
                          <td className="p-3 text-slate-500">
                            {Math.floor(h.durasiDetik / 60)}m {h.durasiDetik % 60}s
                          </td>
                          <td className="p-3 text-slate-700 font-medium">
                            {h.jawabanBenar} / {h.totalSoal}
                          </td>
                          <td className="p-3 text-center">
                            <span className={`px-2.5 py-1 rounded-full font-black ${
                              h.nilaiAkhir >= 75
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {h.nilaiAkhir}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              h.nilaiAkhir >= 75 ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'
                            }`}>
                              {h.nilaiAkhir >= 75 ? 'Tuntas' : 'Remedial'}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500 text-xs sm:text-sm">
                Belum ada riwayat hasil pengerjaan siswa yang tersimpan. Lakukan latihan atau bagikan tautan kelas kepada siswa.
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB BARU: ROMBEL & TAUTAN UNDANGAN MASSAL */}
      {activeSubTab === 'rombel' && (
        <div className="space-y-5">
          {/* Card Penjelasan & Buat Kelas */}
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2 border border-emerald-400/30">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  Multi-User Ready • Distribusi Massal
                </div>
                <h2 className="text-xl sm:text-2xl font-black">
                  Distribusi Tautan Kelas & Pengerjaan Siswa
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Bagikan tautan langsung kelas melalui WhatsApp atau Google Classroom. Peserta didik dapat langsung mengakses tes dengan identitas dan kode lisensi resmi tanpa input rumit.
                </p>
              </div>

              <button
                onClick={() => setShowAddClass(!showAddClass)}
                className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>{showAddClass ? 'Tutup Formulir' : 'Tambah Rombel Baru'}</span>
              </button>
            </div>

            {/* Form Tambah Rombel Baru */}
            {showAddClass && (
              <form onSubmit={handleCreateNewClass} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-xs space-y-3 mt-4">
                <h3 className="font-bold text-sm text-white">Daftarkan Rombongan Belajar (Kelas) Baru</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nama Rombel / Kelas</label>
                    <input
                      type="text"
                      required
                      value={newClassName}
                      onChange={(e) => setNewClassName(e.target.value)}
                      placeholder="Contoh: Kelas 8A / Kelas 7C"
                      className="w-full bg-white text-slate-900 rounded-xl px-3 py-2 font-semibold focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Jenjang Pendidikan</label>
                    <select
                      value={newClassJenjang}
                      onChange={(e) => setNewClassJenjang(e.target.value as Jenjang)}
                      className="w-full bg-white text-slate-900 rounded-xl px-3 py-2 font-semibold focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                    >
                      <option value="SD">SD (Sekolah Dasar)</option>
                      <option value="SMP">SMP (Sekolah Menengah Pertama)</option>
                      <option value="SMA">SMA/MA/SMK</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Target Kuota Siswa</label>
                    <input
                      type="number"
                      value={newClassQuota}
                      onChange={(e) => setNewClassQuota(Number(e.target.value))}
                      min={10}
                      max={100}
                      className="w-full bg-white text-slate-900 rounded-xl px-3 py-2 font-semibold focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddClass(false)}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black shadow-md"
                  >
                    Simpan Rombel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Daftar Rombel & Tautan Undangan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serverClasses.map((cls) => {
              const classResults = hasilList.filter(h => (h as any).kelasRombel === cls.namaKelas || String(h.kelas) === cls.namaKelas);
              const inviteUrl = generateStudentInviteLink({
                code: cls.kodeAktivasi,
                kelas: cls.namaKelas,
                jenjang: cls.jenjang,
                sekolah: currentUser.sekolah || undefined,
              });

              return (
                <div key={cls.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                        {cls.jenjang}
                      </span>
                      <h3 className="font-black text-lg text-slate-900 mt-1">{cls.namaKelas}</h3>
                      <p className="text-xs text-slate-500">Pengampu: {cls.guruPengampu}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-700">{classResults.length} / {cls.kuotaSiswa} Siswa</div>
                      <div className="text-[10px] text-slate-400">telah mengerjakan</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-500 text-[11px]">
                      <span>Kode Akses Lisensi:</span>
                      <span className="font-mono font-bold text-indigo-700">{cls.kodeAktivasi}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 truncate font-mono">
                      {inviteUrl}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyInviteLink(cls)}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    {copiedLink === cls.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Tautan Kelas Berhasil Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin Tautan Akses Siswa</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Real-time active students roster */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Peserta Didik Aktif Saat Ini ({activeUsersCount} Siswa)</span>
              </div>
              <span className="text-xs text-slate-400">Sinkronisasi otomatis setiap 30 detik</span>
            </div>

            {activePresences.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                {activePresences.map((u) => (
                  <div key={u.userId} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px]">
                      {u.nama.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 truncate text-[11px]">{u.nama}</div>
                      <div className="text-[10px] text-slate-400 truncate">{u.kelasRombel || 'Siswa'}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                Siswa yang sedang membuka tautan latihan akan muncul secara langsung di sini.
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: APPROVAL QUEUE */}
      {activeSubTab === 'approval' && (
        <div className="space-y-4">
          {pendingSoals.length > 0 ? (
            pendingSoals.map((soal) => (
              <div 
                key={soal.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      {soal.statusValidasi}
                    </span>
                    <span className="text-xs font-bold text-slate-800 ml-2">
                      {soal.indikatorId} | {soal.kompetensi}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRejectSoal(soal)}
                      className="px-3 py-1.5 rounded-xl border border-rose-300 text-rose-700 font-bold text-xs hover:bg-rose-50 flex items-center gap-1"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      Minta Revisi
                    </button>
                    <button
                      onClick={() => handleApproveSoal(soal)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      Setujui Soal
                    </button>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  {soal.pertanyaan}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {soal.pilihan.map((p) => (
                    <div
                      key={p.kode}
                      className={`p-2 rounded-lg border ${
                        p.kode === soal.kunciJawaban
                          ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{p.kode}. {p.teks}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <strong>Bukti Tekstual:</strong> "{soal.buktiTekstual}"
                </div>
              </div>
            ))
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-emerald-900 text-xs sm:text-sm">
              Semua butir soal telah diperiksa dan disetujui oleh Guru.
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 3: EXPORT CENTER */}
      {activeSubTab === 'export' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paketList.map((pkt) => (
            <div 
              key={pkt.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                    {pkt.jenjang} - Kls {pkt.kelas}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {pkt.soalIds.length} Butir Soal
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 mt-2">
                  {pkt.judul}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {pkt.deskripsi}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={() => handlePrintStudentQuestions(pkt.id)}
                  className="py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Naskah Siswa (Tanpa Kunci)
                </button>
                <button
                  onClick={() => handlePrintAnswerKey(pkt.id)}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Printer className="w-4 h-4 text-emerald-400" />
                  Kunci Terpisah (Guru)
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 4: MANAJEMEN KODE AKTIVASI */}
      {activeSubTab === 'kode' && (
        <ManajemenKodeAktivasi />
      )}
    </div>
  );
};
