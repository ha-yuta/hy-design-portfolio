declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
