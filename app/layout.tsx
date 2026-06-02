import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibguardian.info"),
  title: {
    default: "AIBguardian — Real-Time AI Safety Engine",
    template: "%s | AIBguardian",
  },
  description:
    "AIBguardian is the fail-closed AI safety middleware powering AIBgin and AIBfamily. Dual-model audit pipeline, PASS/ALERT/CRITICAL verdicts, crisis detection. Protecting children from harmful AI responses in real time.",
  keywords: [
    "AI safety middleware", "child AI protection", "real-time AI audit",
    "AIBguardian", "EU AI Act", "school AI safety", "parental AI monitoring",
    "fail-closed AI", "AI content filtering", "safeguarding AI",
    "crisis detection AI", "PASS ALERT CRITICAL", "AI audit pipeline",
  ],
  authors: [{ name: "AIBguardian", url: "https://aibguardian.info" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: {
    canonical: "https://aibguardian.info",
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
        url: "https://aibguardian.info/og-image.png",
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
    images: ["https://aibguardian.info/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-JHHL6VDXW1";

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
      </head>
      <body>{children}</body>
    </html>
  );
}
