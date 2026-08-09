import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RO Technical Solutions | #1 Local RO Water Purifier Repair & AMC Service Nagpur",
    template: "%s | RO Technical Solutions Nagpur"
  },
  description: "Nagpur & Vidarbha's premier RO water purifier repair, service, installation & AMC company with 20+ years experience. 30-45 minute doorstep service for Kent, Aquaguard, Pureit, AO Smith & all brands.",
  keywords: [
    "RO Repair Nagpur",
    "RO Service Nagpur",
    "Kent RO Repair Nagpur",
    "Aquaguard Service Nagpur",
    "RO AMC Nagpur",
    "Water Purifier Repair Near Me",
    "RO Installation Nagpur",
    "RO Membrane Change Nagpur",
    "Commercial RO Service Vidarbha"
  ],
  authors: [{ name: "RO Technical Solutions" }],
  creator: "RO Technical Solutions",
  publisher: "RO Technical Solutions",
  metadataBase: new URL("https://rotechnicalsolutions.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "RO Technical Solutions | 24/7 RO Repair & AMC Service Nagpur",
    description: "Doorstep technician arrival in 30-45 mins. Fixed upfront prices, 100% genuine spare parts, 90-day warranty.",
    url: "https://rotechnicalsolutions.com",
    siteName: "RO Technical Solutions",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RO Technical Solutions Nagpur",
    description: "20+ Years Experience in RO Water Purifier Service & Repair."
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col selection:bg-cyan-500 selection:text-slate-950">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <JsonLd type="All" />
          <EmergencyBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
