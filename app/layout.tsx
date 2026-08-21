import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { HOME_TITLE } from "@/lib/metadata";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1C3044",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "x-default": SITE_URL },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen min-h-[100dvh] flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push(['consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500}]);`,
          }}
        />
        <CookieConsentProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-card focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-parchment focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-w-0 flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <CookiePreferencesModal />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
