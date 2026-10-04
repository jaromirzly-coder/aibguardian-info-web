import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Consent from "@/components/Consent";
import { SITE } from "@/lib/site";
import "./globals.css";

// next/font self-hosts the font files: no request goes to Google.
const sans = Inter({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  // Explicit production domain: og:image and twitter:image must never point to a vercel.app preview URL.
  metadataBase: new URL("https://www.aibguardian.info"),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: "AIBlab", url: "https://aiblab.info" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Google Consent Mode v2: everything denied until the visitor accepts in the cookie banner.
// gtag.js itself is loaded only after "Accept" (components/Consent.tsx).
const CONSENT_DEFAULT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "SAY TO PAY s.r.o.",
  alternateName: "AIBlab",
  legalName: "SAY TO PAY s.r.o.",
  url: "https://aiblab.info",
  logo: `${SITE.url}/logo.svg`,
  email: "info@aiblab.info",
  foundingDate: "2019-11-14",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zámostní 1155/27, Slezská Ostrava",
    addressLocality: "Ostrava",
    postalCode: "710 00",
    addressCountry: "CZ",
  },
  sameAs: [
    "https://aibeva.com", "https://aiblab.info", "https://aibsn.org", "https://www.aibguardian.info",
    "https://www.aibgin.info", "https://www.aibfamily.cloud", "https://iamyouraib.online",
  ],
  brand: { "@type": "Brand", name: SITE.name, url: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <script id="consent-default" dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        {children}
        <Consent />
        <Analytics />
      </body>
    </html>
  );
}
