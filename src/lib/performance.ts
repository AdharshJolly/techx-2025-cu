/**
 * Performance Optimization Configuration for TechX 2025
 * Implements best practices for Core Web Vitals and page speed
 */

// Image optimization settings
export const imageOptimization = {
  formats: ["webp", "avif", "png", "jpg"],
  sizes: {
    thumbnail: 150,
    small: 320,
    medium: 640,
    large: 1024,
    xlarge: 1920,
  },
  quality: 85,
  lazyLoadOffset: 200, // pixels before viewport
};

// Resource hints for critical resources
export const resourceHints = {
  preconnect: [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.google-analytics.com",
  ],
  dnsPrefetch: [
    "https://www.googletagmanager.com",
    "https://analytics.google.com",
  ],
  preload: [
    {
      href: "/assets/fonts/main-font.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
};

// Cache strategy
export const cacheStrategy = {
  static: {
    maxAge: 31536000, // 1 year for immutable assets
    immutable: true,
  },
  dynamic: {
    maxAge: 3600, // 1 hour for HTML
    revalidate: true,
  },
  api: {
    maxAge: 300, // 5 minutes for API responses
    staleWhileRevalidate: 600,
  },
};

// Critical CSS patterns
export const criticalCSSPatterns = [
  "header",
  "nav",
  "hero",
  ".above-fold",
  ".critical",
];

// Defer/async script loading
export const scriptLoading = {
  defer: ["analytics", "tracking", "social-widgets"],
  async: ["comments", "ads", "chat"],
};

// Core Web Vitals thresholds
export const webVitalsThresholds = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
};

// Compression settings
export const compressionSettings = {
  gzip: {
    enabled: true,
    level: 6,
  },
  brotli: {
    enabled: true,
    quality: 11,
  },
};

export default {
  imageOptimization,
  resourceHints,
  cacheStrategy,
  criticalCSSPatterns,
  scriptLoading,
  webVitalsThresholds,
  compressionSettings,
};
