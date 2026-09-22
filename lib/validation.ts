/**
 * Client-Side Input Validation & Anti-Scripting Sanitization
 * Protects user interfaces against XSS, validates formats for Email, Phone, Name, URL,
 * and ensures only clean, safe data is submitted to the API.
 */

// Email regex pattern compliant with RFC standard
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Standard mobile regex: 10-15 digits, allowing optional leading '+'
const PHONE_CLEAN_REGEX = /[\s\-\(\)\.]/g;
const VALID_PHONE_DIGITS_REGEX = /^\+?[1-9]\d{9,14}$/;

// Safe human name regex: Unicode letters, spaces, dots, hyphens, apostrophes (2-100 chars)
// Strictly disallows HTML tags or script injection symbols
const SAFE_NAME_REGEX = /^[\p{L}\s.'-]{2,100}$/u;

// Safe web URL regex: only http or https protocols
const SAFE_URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i;

/**
 * Sanitizes input text by removing HTML tags, script vectors, and event handlers
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") return "";

  return input
    .replace(/\0/g, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<\/?(?:script|iframe|object|embed|applet|style|link|meta|base|form|svg|math)[^>]*>/gi, "")
    .replace(/\bon\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, "")
    .replace(/(?:javascript|vbscript|data\s*:\s*text\/html)\s*:/gi, "")
    .trim();
}

/**
 * Validates human name
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  if (!name || typeof name !== "string" || !name.trim()) {
    return { isValid: false, error: "Please enter your name." };
  }

  const clean = sanitizeInput(name);
  if (clean.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters." };
  }

  if (clean.length > 100) {
    return { isValid: false, error: "Name cannot exceed 100 characters." };
  }

  if (!SAFE_NAME_REGEX.test(clean)) {
    return {
      isValid: false,
      error: "Name contains invalid characters. Use letters, spaces, and hyphens only.",
    };
  }

  return { isValid: true };
}

/**
 * Validates email address
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  if (!email || typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: "Please enter your email address." };
  }

  const clean = email.trim();
  if (clean.length > 100) {
    return { isValid: false, error: "Email cannot exceed 100 characters." };
  }

  if (!EMAIL_REGEX.test(clean)) {
    return {
      isValid: false,
      error: "Please enter a valid email address (e.g., name@domain.com).",
    };
  }

  return { isValid: true };
}

/**
 * Validates mobile / phone number
 */
export function validatePhone(phone: string): { isValid: boolean; error?: string } {
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return { isValid: false, error: "Please enter your phone number." };
  }

  const stripped = phone.replace(PHONE_CLEAN_REGEX, "");

  if (!VALID_PHONE_DIGITS_REGEX.test(stripped)) {
    return {
      isValid: false,
      error: "Please enter a valid 10 to 15 digit mobile number (e.g. +91 9876543210).",
    };
  }

  return { isValid: true };
}

/**
 * Validates text message / notes / cover letter
 */
export function validateMessage(
  message: string,
  minLength = 5,
  maxLength = 3000
): { isValid: boolean; error?: string } {
  if (!message || typeof message !== "string" || !message.trim()) {
    return { isValid: false, error: "Please provide a message or requirement." };
  }

  const clean = sanitizeInput(message);
  if (clean.length < minLength) {
    return {
      isValid: false,
      error: `Message must be at least ${minLength} characters long.`,
    };
  }

  if (clean.length > maxLength) {
    return {
      isValid: false,
      error: `Message cannot exceed ${maxLength.toLocaleString()} characters.`,
    };
  }

  return { isValid: true };
}

/**
 * Validates web URL
 */
export function validateUrl(url: string): { isValid: boolean; error?: string } {
  if (!url || typeof url !== "string" || !url.trim()) {
    return { isValid: true }; // Optional field
  }

  const clean = url.trim();
  if (!SAFE_URL_REGEX.test(clean)) {
    return {
      isValid: false,
      error: "Please enter a valid web URL starting with http:// or https://",
    };
  }

  return { isValid: true };
}
