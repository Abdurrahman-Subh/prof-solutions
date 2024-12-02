import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://www.prof-solutions.nl"),
  title: {
    default: "Prof-Solutions | Innovatieve Isolatieoplossingen",
  },
  description:
    "Prof-Solutions biedt hoogwaardige isolatiediensten voor uw woning. Ontdek onze innovatieve oplossingen voor dak-, muur-, vloer- en glasisolatie.",
  keywords: [
    "isolatie",
    "energiebesparing",
    "dakisolatie",
    "muurisolatie",
    "vloerisolatie",
    "glasisolatie",
    "duurzaam wonen",
    "Nederland",
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
    title: "Prof-Solutions | Innovatieve Isolatieoplossingen",
    description:
      "Ontdek hoe Prof-Solutions uw woning comfortabeler en energiezuiniger kan maken met onze geavanceerde isolatietechnieken.",
    url: "https://www.prof-solutions.nl",
    siteName: "Prof-Solutions",
    images: [
      {
        url: "https://www.prof-solutions.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prof-Solutions - Innovatieve Isolatieoplossingen",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof-Solutions | Innovatieve Isolatieoplossingen",
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#303642", color: "white" }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
