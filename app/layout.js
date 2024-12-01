import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Prof-Solutions",
  description: "Innovatieve isolatieoplossingen voor uw woning",
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
        <Footer />
      </body>
    </html>
  );
}
