const STORAGE_KEY_DEVICE = 'ascons_nmcn_device_token_v1';

/**
 * Returns or generates a persistent device fingerprint token unique to this browser / device.
 * Used to enforce device binding: any new device or browser environment requires registration.
 */
export function getOrCreateDeviceId(): string {
  try {
    let deviceId = localStorage.getItem(STORAGE_KEY_DEVICE);
    if (!deviceId) {
      const randomPart = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
      const nav = typeof navigator !== 'undefined' ? navigator : null;
      const scr = typeof screen !== 'undefined' ? screen : null;
      const entropy = [
        nav?.userAgent || '',
        nav?.language || '',
        scr?.width || '',
        scr?.height || '',
        scr?.colorDepth || '',
        new Date().getTimezoneOffset(),
      ].join('|');

      let hash = 0;
      for (let i = 0; i < entropy.length; i++) {
        hash = (hash << 5) - hash + entropy.charCodeAt(i);
        hash |= 0;
      }
      const entropyHex = Math.abs(hash).toString(16);
      deviceId = `dev_${randomPart}_${entropyHex}`;
      localStorage.setItem(STORAGE_KEY_DEVICE, deviceId);
    }
    return deviceId;
  } catch {
    return 'dev_ephemeral_client';
  }
}

/**
 * Reset device identifier (for testing or explicit unbinding)
 */
export function resetDeviceId(): string {
  try {
    localStorage.removeItem(STORAGE_KEY_DEVICE);
  } catch {
    // ignore
  }
  return getOrCreateDeviceId();
}
