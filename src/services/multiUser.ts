import { HasilPengerjaan, UserSession, Jenjang, RombelKelas, OnlineUserPresence } from '../types/assessment';

export interface MultiUserClassInfo {
  id: string;
  namaKelas: string;
  jenjang: Jenjang;
  kodeAktivasi: string;
  guruPengampu: string;
  kuotaSiswa: number;
  totalPeserta: number;
  createdAt: string;
}

// Submit test result to central multi-user backend
export async function syncResultToServer(hasil: HasilPengerjaan, session: UserSession): Promise<boolean> {
  try {
    const res = await fetch('/api/multiuser/submit-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hasil, session }),
    });
    if (res.ok) {
      return true;
    }
    return false;
  } catch (e) {
    console.warn('Gagal sinkronisasi hasil ke server multi-user:', e);
    return false;
  }
}

// Fetch all student submissions from multi-user backend
export async function fetchServerResults(filters?: { kelas?: string; jenjang?: string }): Promise<any[]> {
  try {
    const params = new URLSearchParams();
    if (filters?.kelas && filters.kelas !== 'Semua') params.append('kelas', filters.kelas);
    if (filters?.jenjang && filters.jenjang !== 'Semua') params.append('jenjang', filters.jenjang);
    params.append('limit', '200');

    const res = await fetch(`/api/multiuser/results?${params.toString()}`);
    if (res.ok) {
      const data = await res.json();
      return data.results || [];
    }
    return [];
  } catch (e) {
    console.warn('Gagal memuat rekap hasil dari server multi-user:', e);
    return [];
  }
}

// Send user heartbeat to track active students online
export async function sendUserHeartbeat(session: UserSession): Promise<number> {
  try {
    const res = await fetch('/api/multiuser/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: session.id,
        nama: session.nama,
        role: session.role,
        kelasRombel: session.kelasRombel,
        jenjang: session.jenjangAkses !== 'Semua' ? session.jenjangAkses : undefined,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      return data.activeCount || 1;
    }
    return 1;
  } catch (e) {
    return 1;
  }
}

// Fetch active users count and details
export async function fetchActiveOnlineUsers(): Promise<{ activeCount: number; users: OnlineUserPresence[] }> {
  try {
    const res = await fetch('/api/multiuser/active-users');
    if (res.ok) {
      const data = await res.json();
      return {
        activeCount: data.activeCount || 1,
        users: data.users || [],
      };
    }
    return { activeCount: 1, users: [] };
  } catch (e) {
    return { activeCount: 1, users: [] };
  }
}

// Fetch registered classes
export async function fetchServerClasses(): Promise<MultiUserClassInfo[]> {
  try {
    const res = await fetch('/api/multiuser/classes');
    if (res.ok) {
      const data = await res.json();
      return data.classes || [];
    }
    return [];
  } catch (e) {
    return [];
  }
}

// Create a new class on server
export async function createServerClass(newClass: {
  namaKelas: string;
  jenjang: Jenjang;
  kodeAktivasi: string;
  guruPengampu: string;
  kuotaSiswa: number;
}): Promise<boolean> {
  try {
    const res = await fetch('/api/multiuser/classes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClass),
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

// Generate shareable invite link for students / class
export function generateStudentInviteLink(options: {
  code: string;
  kelas?: string;
  jenjang?: Jenjang;
  sekolah?: string;
}): string {
  const origin = window.location.origin;
  const path = window.location.pathname;
  const params = new URLSearchParams();
  
  if (options.code) params.set('join', options.code.trim().toUpperCase());
  if (options.kelas) params.set('kelas', options.kelas.trim());
  if (options.jenjang) params.set('jenjang', options.jenjang);
  if (options.sekolah) params.set('sekolah', options.sekolah.trim());

  return `${origin}${path}?${params.toString()}`;
}
