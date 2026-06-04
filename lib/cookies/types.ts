export type CookieCategory =
  | "necessary"
  | "analytics"
  | "marketing"
  | "preferences";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type ConsentState = {
  version: number;
  timestamp: number;
  preferences: ConsentPreferences;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "mfa_cookie_consent";
export const CONSENT_MAX_AGE_DAYS = 365;

export const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const REJECT_NON_ESSENTIAL: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};
