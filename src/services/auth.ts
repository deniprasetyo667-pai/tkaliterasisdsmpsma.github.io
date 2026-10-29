import { UserSession, ActivationCode, UserRole, LicenseType, Jenjang } from '../types/assessment';

const SESSION_KEY = 'tka_user_session_v1';
const CODES_KEY = 'tka_activation_codes_v1';

export const SEED_ACTIVATION_CODES: ActivationCode[] = [
  {
    code: 'SISWA-PRO-2026',
    role: 'siswa',
    license: 'siswa_pro',
    label: 'Akses Lengkap Siswa PRO (SD, SMP, SMA)',
    maxUses: 1000,
    usedCount: 14,
    jenjang: 'Semua',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
  {
    code: 'GURU-SMART-2026',
    role: 'guru',
    license: 'guru_pro',
    label: 'Akses Pendidik & Guru Bahasa Indonesia PRO',
    maxUses: 200,
    usedCount: 7,
    jenjang: 'Semua',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
  {
    code: 'ADMIN-MASTER-2026',
    role: 'admin',
    license: 'admin',
    label: 'Akses Super Administrator Sistem',
    maxUses: 20,
    usedCount: 2,
    jenjang: 'Semua',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
  {
    code: 'TKA-SD-2026',
    role: 'siswa',
    license: 'siswa_pro',
    label: 'Lisensi Khusus Siswa SD/MI',
    maxUses: 500,
    usedCount: 22,
    jenjang: 'SD',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
  {
    code: 'TKA-SMP-2026',
    role: 'siswa',
    license: 'siswa_pro',
    label: 'Lisensi Khusus Siswa SMP/MTs',
    maxUses: 500,
    usedCount: 31,
    jenjang: 'SMP',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
  {
    code: 'TKA-SMA-2026',
    role: 'siswa',
    license: 'siswa_pro',
    label: 'Lisensi Khusus Siswa SMA/MA/SMK',
    maxUses: 500,
    usedCount: 19,
    jenjang: 'SMA',
    createdAt: '2026-01-01T00:00:00Z',
    isActive: true,
  },
];

export const DEFAULT_DEMO_USER: UserSession = {
  id: 'DEMO-GUEST',
  nama: 'Pengguna Demo (Tamu)',
  sekolah: 'Akses Publik / Tamu',
  role: 'siswa',
  license: 'demo',
  jenjangAkses: 'Semua',
  isDemo: true,
};

export function getCurrentSession(): UserSession {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      // Default to Demo user so anyone with the link can explore instantly
      localStorage.setItem(SESSION_KEY, JSON.stringify(DEFAULT_DEMO_USER));
      return DEFAULT_DEMO_USER;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_DEMO_USER;
  }
}

export function saveCurrentSession(session: UserSession): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getActivationCodes(): ActivationCode[] {
  try {
    const raw = localStorage.getItem(CODES_KEY);
    if (!raw) {
      localStorage.setItem(CODES_KEY, JSON.stringify(SEED_ACTIVATION_CODES));
      return SEED_ACTIVATION_CODES;
    }
    return JSON.parse(raw);
  } catch (e) {
    return SEED_ACTIVATION_CODES;
  }
}

export function saveActivationCodes(codes: ActivationCode[]): void {
  localStorage.setItem(CODES_KEY, JSON.stringify(codes));
}

const PROFILES_KEY = 'tka_user_profiles_v1';

export function getSavedProfiles(): UserSession[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveUserProfile(session: UserSession): void {
  try {
    const profiles = getSavedProfiles();
    const idx = profiles.findIndex(p => p.id === session.id);
    if (idx >= 0) {
      profiles[idx] = session;
    } else {
      profiles.unshift(session);
    }
    // Keep max 10 profiles on device
    if (profiles.length > 10) profiles.length = 10;
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch (e) {
    // Ignore storage quota errors
  }
}

export function switchProfile(userId: string): UserSession {
  const profiles = getSavedProfiles();
  const target = profiles.find(p => p.id === userId);
  if (target) {
    saveCurrentSession(target);
    return target;
  }
  return getCurrentSession();
}

export function removeProfile(userId: string): void {
  const profiles = getSavedProfiles().filter(p => p.id !== userId);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

export function activateCode(
  inputCode: string,
  nama: string,
  sekolah?: string,
  options?: { nisn?: string; kelasRombel?: string }
): { success: boolean; message: string; session?: UserSession } {
  const cleanCode = inputCode.trim().toUpperCase();
  if (!cleanCode) {
    return { success: false, message: 'Kode aktivasi tidak boleh kosong.' };
  }

  const allCodes = getActivationCodes();
  const foundIdx = allCodes.findIndex(c => c.code.toUpperCase() === cleanCode);

  if (foundIdx === -1) {
    return { 
      success: false, 
      message: 'Kode aktivasi tidak valid atau belum terdaftar. Silakan periksa kembali atau hubungi pengampu kelas Anda.' 
    };
  }

  const codeData = allCodes[foundIdx];
  if (!codeData.isActive) {
    return { success: false, message: 'Kode aktivasi ini saat ini sedang dinonaktifkan oleh administrator.' };
  }

  if (codeData.usedCount >= codeData.maxUses) {
    return { success: false, message: 'Batas kuota penggunaan untuk kode aktivasi ini telah tercapai.' };
  }

  // Increment usage
  allCodes[foundIdx] = {
    ...codeData,
    usedCount: codeData.usedCount + 1,
  };
  saveActivationCodes(allCodes);

  const newSession: UserSession = {
    id: `USR-${Date.now().toString().slice(-6)}`,
    nama: nama.trim() || (codeData.role === 'guru' ? 'Guru Terverifikasi' : 'Siswa PRO'),
    nisn: options?.nisn?.trim(),
    kelasRombel: options?.kelasRombel?.trim() || (codeData.role === 'guru' ? 'Pengampu Guru' : 'Kelas Reguler'),
    sekolah: sekolah?.trim() || 'Lembaga Pendidikan',
    role: codeData.role,
    license: codeData.license,
    jenjangAkses: codeData.jenjang,
    activationCode: codeData.code,
    activatedAt: new Date().toISOString(),
    isDemo: false,
  };

  saveCurrentSession(newSession);
  saveUserProfile(newSession);

  return {
    success: true,
    message: `Aktivasi berhasil! Selamat datang di akun ${codeData.label}.`,
    session: newSession,
  };
}

export function setDemoSession(
  nama?: string, 
  sekolah?: string, 
  options?: { nisn?: string; kelasRombel?: string }
): UserSession {
  const demo: UserSession = {
    id: `DEMO-${Date.now().toString().slice(-4)}`,
    nama: nama?.trim() || 'Pengguna Demo (Tamu)',
    nisn: options?.nisn?.trim(),
    kelasRombel: options?.kelasRombel?.trim() || 'Tamu Publik',
    sekolah: sekolah?.trim() || 'Akses Publik / Tamu',
    role: 'siswa',
    license: 'demo',
    jenjangAkses: 'Semua',
    isDemo: true,
  };
  saveCurrentSession(demo);
  saveUserProfile(demo);
  return demo;
}

export function logoutSession(): UserSession {
  saveCurrentSession(DEFAULT_DEMO_USER);
  return DEFAULT_DEMO_USER;
}

export function createActivationCode(newCode: {
  code: string;
  role: UserRole;
  license: LicenseType;
  label: string;
  maxUses: number;
  jenjang: Jenjang | 'Semua';
}): { success: boolean; message: string } {
  const codes = getActivationCodes();
  const clean = newCode.code.trim().toUpperCase();

  if (codes.some(c => c.code.toUpperCase() === clean)) {
    return { success: false, message: 'Kode aktivasi tersebut sudah ada. Gunakan kombinasi kode lain.' };
  }

  codes.unshift({
    code: clean,
    role: newCode.role,
    license: newCode.license,
    label: newCode.label || `Lisensi ${newCode.role.toUpperCase()}`,
    maxUses: newCode.maxUses || 50,
    usedCount: 0,
    jenjang: newCode.jenjang || 'Semua',
    createdAt: new Date().toISOString(),
    isActive: true,
  });

  saveActivationCodes(codes);
  return { success: true, message: `Kode aktivasi ${clean} berhasil diterbitkan!` };
}

export function toggleActivationCode(code: string): void {
  const codes = getActivationCodes();
  const idx = codes.findIndex(c => c.code === code);
  if (idx >= 0) {
    codes[idx].isActive = !codes[idx].isActive;
    saveActivationCodes(codes);
  }
}

export function deleteActivationCode(code: string): void {
  const codes = getActivationCodes().filter(c => c.code !== code);
  saveActivationCodes(codes);
}

// Permission & restriction checks
export function checkFeatureAccess(
  feature: 'generator_unlimited' | 'full_latihan' | 'full_simulasi' | 'dashboard_guru' | 'export_docs',
  user: UserSession
): { allowed: boolean; reason?: string } {
  // Admin & Guru PRO have full access
  if (user.role === 'admin' || user.license === 'guru_pro') {
    return { allowed: true };
  }

  // Siswa PRO has full access to exercises and simulations
  if (user.license === 'siswa_pro') {
    if (feature === 'dashboard_guru') {
      return { 
        allowed: false, 
        reason: 'Dashboard Guru hanya dapat diakses dengan lisensi Guru PRO (Gunakan kode aktivasi guru).' 
      };
    }
    return { allowed: true };
  }

  // Demo user restrictions
  if (user.isDemo) {
    if (feature === 'generator_unlimited') {
      return { 
        allowed: false, 
        reason: 'Mode Demo membatasi pembuatan soal maksimal 2 butir soal. Masukkan kode aktivasi untuk pembuatan soal tak terbatas.' 
      };
    }
    if (feature === 'dashboard_guru') {
      return { 
        allowed: false, 
        reason: 'Dashboard Guru memerlukan Kode Aktivasi Guru PRO.' 
      };
    }
    if (feature === 'export_docs') {
      return { 
        allowed: false, 
        reason: 'Pusat unduh naskah dan kunci jawaban terpisah memerlukan akun terverifikasi.' 
      };
    }
  }

  return { allowed: true };
}
