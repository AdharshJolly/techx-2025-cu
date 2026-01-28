/**
 * SEO Component for TechX 2025
 * Dynamically manages page metadata for better search engine optimization
 */

import { Helmet } from "react-helmet-async";
import { SEOConfig, generateMetaTags } from "@/lib/seo";

interface SEOProps {
  config: SEOConfig;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ config, children }) => {
  const metaTags = generateMetaTags(config);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />

      {/* Canonical URL */}
      {config.canonical && <link rel="canonical" href={config.canonical} />}

      {/* Robots Meta */}
      {(config.noindex || config.nofollow) && (
        <meta
          name="robots"
          content={`${config.noindex ? "noindex" : "index"}, ${
            config.nofollow ? "nofollow" : "follow"
          }`}
        />
      )}

      {/* Keywords */}
      {config.keywords && <meta name="keywords" content={config.keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={config.ogType || "website"} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      {config.canonical && (
        <meta property="og:url" content={config.canonical} />
      )}
      {config.ogImage && (
        <>
          <meta property="og:image" content={config.ogImage} />
          <meta property="og:image:secure_url" content={config.ogImage} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={config.title} />
        </>
      )}

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content={config.twitterCard || "summary_large_image"}
      />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      {config.ogImage && (
        <>
          <meta name="twitter:image" content={config.ogImage} />
          <meta name="twitter:image:alt" content={config.title} />
        </>
      )}

      {/* JSON-LD Structured Data */}
      {config.jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(config.jsonLd)}
        </script>
      )}

      {/* Additional custom elements */}
      {children}
    </Helmet>
  );
};

export default SEO;
