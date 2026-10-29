import React, { useState, useEffect } from 'react';
import { 
  KeyRound, 
  Plus, 
  Copy, 
  Check, 
  Trash2, 
  ToggleLeft, 
  ToggleRight, 
  ShieldCheck, 
  Users, 
  Share2,
  Sparkles
} from 'lucide-react';
import { ActivationCode, Jenjang, UserRole, LicenseType } from '../types/assessment';
import { 
  getActivationCodes, 
  createActivationCode, 
  toggleActivationCode, 
  deleteActivationCode 
} from '../services/auth';

export const ManajemenKodeAktivasi: React.FC = () => {
  const [codes, setCodes] = useState<ActivationCode[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Form states
  const [newCodeStr, setNewCodeStr] = useState<string>('');
  const [newRole, setNewRole] = useState<UserRole>('siswa');
  const [newJenjang, setNewJenjang] = useState<Jenjang | 'Semua'>('Semua');
  const [maxQuota, setMaxQuota] = useState<number>(50);
  const [labelDesc, setLabelDesc] = useState<string>('');
  const [feedbackMsg, setFeedbackMsg] = useState<{ success: boolean; text: string } | null>(null);

  useEffect(() => {
    refreshCodes();
  }, []);

  const refreshCodes = () => {
    setCodes(getActivationCodes());
  };

  const handleGenerateRandom = () => {
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const prefix = newRole === 'guru' ? 'GURU' : 'SISWA';
    setNewCodeStr(`TKA-${prefix}-${randomHex}`);
  };

  const handleCreateCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCodeStr.trim()) return;

    const license: LicenseType = newRole === 'guru' ? 'guru_pro' : newRole === 'admin' ? 'admin' : 'siswa_pro';

    const res = createActivationCode({
      code: newCodeStr,
      role: newRole,
      license,
      label: labelDesc.trim() || `Lisensi ${newRole.toUpperCase()} (${newJenjang})`,
      maxUses: Number(maxQuota) || 50,
      jenjang: newJenjang,
    });

    setFeedbackMsg({ success: res.success, text: res.message });
    if (res.success) {
      setNewCodeStr('');
      setLabelDesc('');
      refreshCodes();
    }
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const handleToggle = (code: string) => {
    toggleActivationCode(code);
    refreshCodes();
  };

  const handleDelete = (code: string) => {
    if (confirm(`Hapus kode aktivasi ${code}?`)) {
      deleteActivationCode(code);
      refreshCodes();
    }
  };

  const handleCopyShare = (c: ActivationCode) => {
    navigator.clipboard.writeText(c.code);
    setCopiedCode(c.code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-1">
            <KeyRound className="w-3.5 h-3.5" />
            Manajemen Kode Aktivasi & Multi-User
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pusat Penerbitan Kode Lisensi Pengguna
          </h2>
          <p className="text-xs text-slate-500">
            Buat kode aktivasi baru untuk kelas, sekolah, atau bimbingan belajar dengan pembatasan kuota dan jenjang akses.
          </p>
        </div>
      </div>

      {feedbackMsg && (
        <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
          feedbackMsg.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          <span>{feedbackMsg.text}</span>
        </div>
      )}

      {/* Generator Form */}
      <form onSubmit={handleCreateCode} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 text-xs sm:text-sm">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
          <Plus className="w-4 h-4 text-indigo-600" />
          Terbitkan Kode Aktivasi Baru
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kode Akses
            </label>
            <div className="flex gap-1.5">
              <input
                type="text"
                required
                value={newCodeStr}
                onChange={(e) => setNewCodeStr(e.target.value.toUpperCase())}
                placeholder="Misal: KELAS-8A-2026"
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono font-bold uppercase focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={handleGenerateRandom}
                className="px-2.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold shrink-0"
                title="Buat Acak"
              >
                Acak
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Peran Hak Akses
            </label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value as UserRole)}
              className="w-full bg-white border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
            >
              <option value="siswa">Siswa PRO</option>
              <option value="guru">Guru PRO</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenjang Akses
            </label>
            <select
              value={newJenjang}
              onChange={(e) => setNewJenjang(e.target.value as any)}
              className="w-full bg-white border border-slate-300 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Semua">Semua Jenjang (SD, SMP, SMA)</option>
              <option value="SD">Khusus SD/MI</option>
              <option value="SMP">Khusus SMP/MTs</option>
              <option value="SMA">Khusus SMA/Sederajat</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Maksimum Kuota Siswa
            </label>
            <input
              type="number"
              min={1}
              max={5000}
              value={maxQuota}
              onChange={(e) => setMaxQuota(Number(e.target.value))}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Label / Keterangan Lembaga
          </label>
          <input
            type="text"
            value={labelDesc}
            onChange={(e) => setLabelDesc(e.target.value)}
            placeholder="Contoh: Siswa Kelas 8 SMP Bina Bangsa - Semester Genap 2026"
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            Terbitkan Kode Aktivasi
          </button>
        </div>
      </form>

      {/* Codes Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
          <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
            <tr>
              <th className="p-3">Kode Aktivasi</th>
              <th className="p-3">Peran</th>
              <th className="p-3">Jenjang</th>
              <th className="p-3">Keterangan</th>
              <th className="p-3">Penggunaan / Kuota</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {codes.map((c) => (
              <tr key={c.code} className="hover:bg-slate-50 transition-colors">
                <td className="p-3 font-mono font-bold text-indigo-900 text-xs sm:text-sm">
                  {c.code}
                </td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    c.role === 'admin'
                      ? 'bg-purple-100 text-purple-800'
                      : c.role === 'guru'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-sky-100 text-sky-800'
                  }`}>
                    {c.role}
                  </span>
                </td>
                <td className="p-3 font-medium text-slate-700">{c.jenjang}</td>
                <td className="p-3 max-w-xs text-slate-600 truncate">{c.label}</td>
                <td className="p-3">
                  <span className="font-bold text-slate-900">{c.usedCount}</span>
                  <span className="text-slate-400"> / {c.maxUses} siswa</span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleToggle(c.code)}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      c.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {c.isActive ? 'Aktif' : 'Nonaktif'}
                  </button>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => handleCopyShare(c)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100"
                      title="Salin Kode"
                    >
                      {copiedCode === c.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(c.code)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50"
                      title="Hapus Kode"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
