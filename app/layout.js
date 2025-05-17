import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import INSULA from "@/public/INSULA-1.webp";
import PIFPRO from "@/public/PIFPRO-1-1024x328.webp";
import LogoWeb from "@/public/vca-logo-web.webp";
import Logo2 from "@/public/LOGO2.jpg";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  metadataBase: new URL("https://www.prof-solutions.nl"),
  title: {
    default: "Prof-Solutions |Innovatieve isolatieoplossingen voor uw woning",
  },
  description:
    "Prof-Solutions biedt hoogwaardige isolatiediensten voor uw woning. Ontdek onze innovatieve oplossingen voor dak-, muur-, vloer- en glasisolatie.",
  keywords: [
    "isolatie",
    "energiebesparing",
    "dakisolatie",
    "muurisolatie",
    "vloerisolatie",
    "Dakisolatie",
    "duurzaam wonen",
    "Nederland",
    "Prof-Solutions",
    "Spouwisolatie",
    "Bodemisolatie",
    "Vloerisolatie",
  ],
  authors: [{ name: "Prof-Solutions" }],
  creator: "Prof-Solutions",
  publisher: "Prof-Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Prof-Solutions | Innovatieve isolatieoplossingen voor uw woning",
    description:
      "Ontdek hoe Prof-Solutions uw woning comfortabeler en energiezuiniger kan maken met onze geavanceerde isolatietechnieken.",
    url: "https://www.prof-solutions.nl",
    siteName: "Prof-Solutions",
    images: [
      {
        url: "https://www.prof-solutions.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prof-Solutions - Innovatieve isolatieoplossingen voor uw woning",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof-Solutions | Innovatieve isolatieoplossingen voor uw woning",
    description:
      "Verbeter de energie-efficiëntie van uw woning met de geavanceerde isolatietechnieken van Prof-Solutions.",
    images: ["https://www.prof-solutions.nl/twitter-image.jpg"],
    creator: "@ProfSolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  const logos = [INSULA, PIFPRO, LogoWeb, Logo2];

  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#303642", color: "white" }}
      >
        <Header />
        <main className="flex-grow">
          {children}

          <div className="grid grid-cols-4 gap-10 bg-white p-1 rounded-b-none rounded-t-lg">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-auto max-w-[282px]"
                />
              </div>
            ))}
          </div>
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
