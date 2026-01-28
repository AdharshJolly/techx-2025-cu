/**
 * SEO Configuration and Utilities for TechX 2025
 * Comprehensive SEO management for better search engine visibility
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
}

export const defaultSEOConfig: SEOConfig = {
  title:
    "TechX 2025 | 3-Day Tech Innovation Fest @ CHRIST University | IEEE Computer Society",
  description:
    "Join TechX 2025 at CHRIST University, Kengeri Campus, Bangalore. Experience 3 days of Vibe Coding, AI-Assisted Development, Prompt Engineering Battles, and the VIBEATHON Innovation Sprint. Win from ₹32,000 prize pool!",
  keywords:
    "TechX 2025, IEEE Computer Society, CHRIST University, Vibe Coding, AI Hackathon, Prompt Engineering, VIBEATHON, Tech Event Bangalore, Innovation Sprint, Student Tech Competition",
  canonical: "https://techx.ieeecscu.com/",
  ogImage: "https://techx.ieeecscu.com/og-image.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  noindex: false,
  nofollow: false,
};

// Page-specific SEO configurations
export const pageSEOConfigs: Record<string, SEOConfig> = {
  home: {
    ...defaultSEOConfig,
    title: "TechX 2025 | 3-Day Tech Innovation Fest @ CHRIST University",
    description:
      "Join TechX 2025 at CHRIST University. 3 days of AI workshops, prompt engineering battles, and VIBEATHON innovation sprint. ₹32,000 prize pool. Register now!",
    canonical: "https://techx.ieeecscu.com/",
  },
  registration: {
    ...defaultSEOConfig,
    title: "Register for TechX 2025 | IEEE CHRIST University Event",
    description:
      "Register now for TechX 2025 at CHRIST University. Early bird registration at ₹299. Secure your spot for India's premier technical event featuring AI workshops and hackathon.",
    keywords:
      "TechX registration, IEEE event registration, tech event Bangalore, hackathon registration 2025, CHRIST University event",
    canonical: "https://techx.ieeecscu.com/#registration",
  },
  schedule: {
    ...defaultSEOConfig,
    title: "TechX 2025 Schedule | 3-Day Event Agenda",
    description:
      "Complete schedule for TechX 2025. Day-wise breakdown of workshops, competitions, and the VIBEATHON. Feb 15-17, 2025 at CHRIST University Bangalore.",
    keywords:
      "TechX schedule, event agenda, workshop schedule, hackathon timeline, IEEE event schedule",
    canonical: "https://techx.ieeecscu.com/#schedule",
  },
  prizes: {
    ...defaultSEOConfig,
    title: "TechX 2025 Prizes | ₹32,000 Prize Pool",
    description:
      "Win exciting prizes at TechX 2025! Total prize pool of ₹32,000 across multiple competitions including prompt engineering battles and VIBEATHON innovation sprint.",
    keywords:
      "TechX prizes, hackathon prizes, coding competition prizes, tech event rewards, IEEE competition prizes",
    canonical: "https://techx.ieeecscu.com/#prizes",
  },
  vibeathon: {
    ...defaultSEOConfig,
    title: "VIBEATHON | TechX 2025 Innovation Sprint",
    description:
      "VIBEATHON - The ultimate 48-hour innovation sprint at TechX 2025. Build AI-powered solutions, compete with the best, and win big prizes.",
    keywords:
      "VIBEATHON, innovation sprint, AI hackathon, 48-hour hackathon, tech innovation challenge",
    canonical: "https://techx.ieeecscu.com/#vibeathon",
  },
  notfound: {
    ...defaultSEOConfig,
    title: "404 - Page Not Found | TechX 2025",
    description:
      "The page you're looking for doesn't exist. Return to TechX 2025 homepage to explore our 3-day tech innovation fest.",
    canonical: "https://techx.ieeecscu.com/404",
    noindex: true,
    nofollow: true,
  },
};

/**
 * Generate JSON-LD structured data for better search engine understanding
 */
export const generateJsonLd = (type: string, data: any) => {
  const baseContext = "https://schema.org";

  switch (type) {
    case "event":
      return {
        "@context": baseContext,
        "@type": "Event",
        ...data,
      };

    case "organization":
      return {
        "@context": baseContext,
        "@type": "Organization",
        ...data,
      };

    case "breadcrumb":
      return {
        "@context": baseContext,
        "@type": "BreadcrumbList",
        ...data,
      };

    case "faq":
      return {
        "@context": baseContext,
        "@type": "FAQPage",
        ...data,
      };

    default:
      return {
        "@context": baseContext,
        ...data,
      };
  }
};

/**
 * Generate meta tags from SEO config
 */
export const generateMetaTags = (config: SEOConfig) => {
  const tags: Array<{ name?: string; property?: string; content: string }> = [
    { name: "description", content: config.description },
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:type", content: config.ogType || "website" },
    { property: "og:url", content: config.canonical || "" },
    { property: "og:image", content: config.ogImage || "" },
    {
      name: "twitter:card",
      content: config.twitterCard || "summary_large_image",
    },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: config.ogImage || "" },
  ];

  if (config.keywords) {
    tags.push({ name: "keywords", content: config.keywords });
  }

  if (config.noindex || config.nofollow) {
    const robotsContent = [
      config.noindex ? "noindex" : "index",
      config.nofollow ? "nofollow" : "follow",
    ].join(", ");
    tags.push({ name: "robots", content: robotsContent });
  }

  return tags;
};

/**
 * Get page title with brand suffix
 */
export const getPageTitle = (pageTitle?: string) => {
  if (!pageTitle) return defaultSEOConfig.title;
  return pageTitle.includes("TechX") ? pageTitle : `${pageTitle} | TechX 2025`;
};

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (path: string = "/") => {
  const baseUrl = "https://techx.ieeecscu.com";
  return `${baseUrl}${path}`;
};

/**
 * SEO best practices checker
 */
export const validateSEO = (config: SEOConfig): string[] => {
  const issues: string[] = [];

  // Title length check (50-60 characters is optimal)
  if (config.title.length < 30 || config.title.length > 70) {
    issues.push(
      `Title length (${config.title.length}) should be between 30-70 characters`,
    );
  }

  // Description length check (150-160 characters is optimal)
  if (config.description.length < 120 || config.description.length > 160) {
    issues.push(
      `Description length (${config.description.length}) should be between 120-160 characters`,
    );
  }

  // Keywords check
  if (config.keywords && config.keywords.split(",").length > 15) {
    issues.push("Too many keywords (>15). Focus on most relevant ones.");
  }

  // Image check
  if (!config.ogImage) {
    issues.push("Missing OG image for social media sharing");
  }

  // Canonical URL check
  if (!config.canonical) {
    issues.push("Missing canonical URL");
  }

  return issues;
};
