import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibguardian.info"),
  title: {
    default: "AIBguardian — Real-Time AI Safety Engine | Fail-Closed",
    template: "%s | AIBguardian",
  },
  description:
    "AIBguardian is the fail-closed AI safety middleware powering AIBgin and AIBfamily. Dual-model audit pipeline, PASS/ALERT/CRITICAL verdicts, real-time crisis detection. Every AI response audited before a child sees it.",
  keywords: [
    "AI safety middleware", "child AI protection engine", "real-time AI audit",
    "AIBguardian", "fail-closed AI safety", "school AI safety",
    "parental AI monitoring engine", "AI content filtering children",
    "safeguarding AI technology", "crisis detection AI",
    "PASS ALERT CRITICAL AI", "AI audit pipeline", "dual model AI safety",
    "EU AI Act compliance engine", "child online safety technology",
  ],
  authors: [{ name: "AIBguardian", url: "https://aibguardian.info" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: { canonical: "https://aibguardian.info" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "AIBguardian — Real-Time AI Safety Engine",
    description:
      "Every AI response audited before the child sees it. PASS. ALERT. CRITICAL. Fail-closed. Dual-model. Patent pending.",
    url: "https://aibguardian.info",
    siteName: "AIBguardian",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aibguardian.info/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AIBguardian — Real-Time AI Safety Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBguardian — Real-Time AI Safety Engine",
    description:
      "Every AI response audited before the child sees it. PASS. ALERT. CRITICAL. Fail-closed.",
    images: ["https://aibguardian.info/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-JHHL6VDXW1";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aibguardian.info/#organization",
      name: "AIBguardian",
      url: "https://aibguardian.info",
      logo: "https://aibguardian.info/logo.svg",
      description:
        "Fail-closed AI safety middleware for child-facing AI applications.",
      parentOrganization: {
        "@type": "Organization",
        name: "SAY TO PAY s.r.o.",
        url: "https://aiblab.info",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aibguardian.info/#software",
      name: "AIBguardian",
      applicationCategory: "SecurityApplication",
      operatingSystem: "API",
      url: "https://aibguardian.info",
      description:
        "Real-time AI safety middleware with dual-model audit, fail-closed verdicts, and crisis detection for child-facing AI.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
