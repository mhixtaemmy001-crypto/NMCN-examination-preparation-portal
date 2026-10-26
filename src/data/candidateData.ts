import { lookupCandidateRoster } from './candidateRoster';

export interface CandidateRecord {
  id: string;
  fullName: string;
  indexNumber: string;
  email: string;
  phone: string;
  department: string;
  accreditationStatus: 'Accredited' | 'Pending' | 'Verified';
  registeredDate: string;
}

export interface BoundDevice {
  deviceId: string;
  deviceName: string;
  boundAt: number;
  candidateId: string;
  candidateName: string;
  candidateIndex: string;
}

export interface PendingOtp {
  candidateId: string;
  fullName: string;
  email: string;
  otpCode: string;
  createdAt: number;
  expiresAt: number;
  resendAfter: number;
}

// Pre-accredited students roster for ASCONS Yola NMCN examination
export const PRE_ACCREDITED_CANDIDATES: CandidateRecord[] = [
  {
    id: 'cand-001',
    fullName: 'Michael Felix',
    indexNumber: 'ASCONS/NMCN/2026/0142',
    email: 'm.felix@ascons.edu.ng',
    phone: '+234 803 412 8901',
    department: 'Department of Nursing Sciences',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  },
  {
    id: 'cand-002',
    fullName: 'Fatima Abubakar',
    indexNumber: 'ASCONS/NMCN/2026/0088',
    email: 'f.abubakar@ascons.edu.ng',
    phone: '+234 814 290 1144',
    department: 'Department of Midwifery',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  },
  {
    id: 'cand-003',
    fullName: 'Emmanuel Danjuma',
    indexNumber: 'ASCONS/NMCN/2026/0204',
    email: 'e.danjuma@ascons.edu.ng',
    phone: '+234 802 559 3810',
    department: 'Department of Nursing Sciences',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  },
  {
    id: 'cand-004',
    fullName: 'Zainab Bello Sadiq',
    indexNumber: 'ASCONS/NMCN/2026/0095',
    email: 'z.sadiq@ascons.edu.ng',
    phone: '+234 901 384 7720',
    department: 'Department of Community Health Nursing',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  },
  {
    id: 'cand-005',
    fullName: 'Grace Okon',
    indexNumber: 'ASCONS/NMCN/2026/0311',
    email: 'g.okon@ascons.edu.ng',
    phone: '+234 703 661 2490',
    department: 'Department of Nursing Sciences',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  },
];

const STORAGE_KEY_BOUND_DEVICE = 'ascons_candidate_bound_device_v1';
const STORAGE_KEY_ACTIVE_CANDIDATE = 'ascons_active_candidate_session_v1';
const STORAGE_KEY_DEVICE_ID = 'ascons_unique_device_uuid_v1';

// Generate or retrieve persistent unique hardware/device identifier for this browser
export function getOrCreateDeviceId(): string {
  try {
    let id = localStorage.getItem(STORAGE_KEY_DEVICE_ID);
    if (!id) {
      const randomSeg = Math.random().toString(36).substring(2, 8).toUpperCase();
      const timeSeg = Date.now().toString(36).toUpperCase().slice(-4);
      id = `DEV-ASCONS-${timeSeg}-${randomSeg}`;
      localStorage.setItem(STORAGE_KEY_DEVICE_ID, id);
    }
    return id;
  } catch {
    return 'DEV-ASCONS-FALLBACK';
  }
}

// Detect simple device brand / OS for candidate record
export function getDeviceDisplayName(): string {
  if (typeof navigator === 'undefined') return 'Mobile/Computer Web Client';
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return 'Android Device (Mobile)';
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS Device (Apple Mobile)';
  if (/windows/i.test(ua)) return 'Windows PC (Desktop)';
  if (/macintosh|mac os x/i.test(ua)) return 'macOS Workstation';
  if (/linux/i.test(ua)) return 'Linux Workstation';
  return 'Registered Candidate Browser';
}

// Lookup or dynamically resolve candidate by full name
export function findOrCreateCandidate(rawName: string): CandidateRecord {
  const trimmed = rawName.trim();
  const lower = trimmed.toLowerCase();

  // 1. Check official accredited BN 55 examination roster
  const rosterMatch = lookupCandidateRoster(trimmed);
  if (rosterMatch) {
    return {
      id: `cand-roster-${rosterMatch.sn}`,
      fullName: rosterMatch.name,
      indexNumber: rosterMatch.idNumber,
      email: rosterMatch.email,
      phone: '+234 803 *** ' + String(1000 + (rosterMatch.sn * 37) % 9000),
      department: 'Department of Nursing Sciences',
      accreditationStatus: 'Accredited',
      registeredDate: 'October 2026',
    };
  }

  // 2. Check pre-accredited sample list
  const found = PRE_ACCREDITED_CANDIDATES.find(
    (c) => c.fullName.toLowerCase() === lower || c.fullName.toLowerCase().includes(lower)
  );

  if (found) {
    return found;
  }

  // Auto-accredit any valid name entered by the candidate
  const nameParts = trimmed.split(/\s+/).filter(Boolean);
  const firstInitial = nameParts[0] ? nameParts[0][0].toLowerCase() : 'c';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1].toLowerCase().replace(/[^a-z]/g, '') : 'candidate';
  const hash = Math.abs(
    trimmed.split('').reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0), 0)
  ) % 9000 + 1000;

  return {
    id: `cand-${Date.now()}`,
    fullName: trimmed,
    indexNumber: `ASCONS/NMCN/2026/${hash}`,
    email: `${firstInitial}.${lastName}@ascons.edu.ng`,
    phone: `+234 80${Math.floor(10 + Math.random() * 89)} *** ${Math.floor(1000 + Math.random() * 8999)}`,
    department: 'Department of Nursing Sciences',
    accreditationStatus: 'Accredited',
    registeredDate: 'October 2026',
  };
}

// Check if current device is bound to a candidate
export function getBoundDevice(): BoundDevice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOUND_DEVICE);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Get active candidate session
export function getActiveCandidate(): CandidateRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACTIVE_CANDIDATE);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Bind device to candidate
export function bindDeviceToCandidate(candidate: CandidateRecord): BoundDevice {
  const deviceId = getOrCreateDeviceId();
  const deviceName = getDeviceDisplayName();
  const bound: BoundDevice = {
    deviceId,
    deviceName,
    boundAt: Date.now(),
    candidateId: candidate.id,
    candidateName: candidate.fullName,
    candidateIndex: candidate.indexNumber,
  };

  try {
    localStorage.setItem(STORAGE_KEY_BOUND_DEVICE, JSON.stringify(bound));
    localStorage.setItem(STORAGE_KEY_ACTIVE_CANDIDATE, JSON.stringify(candidate));
  } catch {
    // ignore
  }

  return bound;
}

// Unbind / Logout candidate
export function unbindCandidateDevice(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_BOUND_DEVICE);
    localStorage.removeItem(STORAGE_KEY_ACTIVE_CANDIDATE);
  } catch {
    // ignore
  }
}
