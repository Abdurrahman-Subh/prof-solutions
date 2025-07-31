import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import StructuredData from "./components/StructuredData";
import LoadingScreen from "./components/LoadingScreen";
import INSULA from "@/public/INSULA-1.webp";
import PIFPRO from "@/public/PIFPRO-1-1024x328.webp";
import LogoWeb from "@/public/vca-logo-web.webp";
import Logo2 from "@/public/LOGO2.jpg";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  metadataBase: new URL("https://www.prof-solutions.nl"),
  title: {
    default: "IsoXpert | Innovatieve isolatieoplossingen voor uw woning",
  },
  description:
    "IsoXpert biedt hoogwaardige isolatiediensten voor uw woning. Ontdek onze innovatieve oplossingen voor dak-, muur-, vloer- en glasisolatie.",
  keywords: [
    "isolatie",
    "energiebesparing",
    "dakisolatie",
    "muurisolatie",
    "vloerisolatie",
    "Dakisolatie",
    "duurzaam wonen",
    "Nederland",
    "IsoXpert",
    "Spouwisolatie",
    "Bodemisolatie",
    "Vloerisolatie",
  ],
  authors: [{ name: "IsoXpert" }],
  creator: "IsoXpert",
  publisher: "IsoXpert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "IsoXpert | Innovatieve isolatieoplossingen voor uw woning",
    description:
      "Ontdek hoe IsoXpert uw woning comfortabeler en energiezuiniger kan maken met onze geavanceerde isolatietechnieken.",
    url: "https://www.prof-solutions.nl",
    siteName: "IsoXpert",
    images: [
      {
        url: "https://www.prof-solutions.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IsoXpert - Innovatieve isolatieoplossingen voor uw woning",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoXpert | Innovatieve isolatieoplossingen voor uw woning",
    description:
      "Verbeter de energie-efficiëntie van uw woning met de geavanceerde isolatietechnieken van IsoXpert.",
    images: ["https://www.prof-solutions.nl/twitter-image.jpg"],
    creator: "@IsoXpert",
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
    icon: "/NewLogo.png",
    shortcut: "/NewLogo.png",
    apple: "/NewLogo.png",
  },
  manifest: "/manifest.json",
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
        className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white text-gray-800"
      >
        <LoadingScreen />
        <StructuredData />
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
