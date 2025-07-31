import {
  Briefcase,
  Home,
  ImageIcon,
  LinkedinIcon as LinkedIn,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/50 bg-gradient-to-br from-slate-50/95 to-gray-100/95 backdrop-blur-sm text-gray-800 py-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/NewLogo.png"
                alt="IsoXpert Logo"
                width={64}
                height={64}
                className="rounded-full shadow-lg ring-2 ring-white/50 transition-transform hover:scale-105"
              />
              <span className="text-2xl font-bold text-gray-800 tracking-tight"></span>
            </Link>
            <p className="text-sm text-gray-600">
              Innovatieve isolatieoplossingen voor uw woning. Wij zorgen voor
              comfort en energiebesparing.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://tr.linkedin.com/in/maged-sakkar-532088204"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 hover:text-[#00a79d] transition-colors"
              >
                <LinkedIn size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Hoofdpagina", icon: Home },
                { href: "/about", label: "Over Ons", icon: Users },
                { href: "/services", label: "Diensten", icon: Briefcase },
                { href: "/gallery", label: "Galerij", icon: ImageIcon },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-[#00a79d] transition-colors"
                  >
                    <link.icon size={16} className="mr-2" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              {[
                "Dakisolatie",
                "Spouwmuurisolatie",
                "Vloerisolatie",
                "Bodemisolatie",
                "Ventilatieroosters",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-[#00a79d] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-[#00a79d]"
                />
                <span className="text-gray-700">
                  De Berken 53<br/>1402KP Bussum
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 flex-shrink-0 text-[#00a79d]"
                />
                <a
                  href="tel:+31638506541"
                  className="text-gray-700 hover:text-[#00a79d] transition-colors"
                >
                  +31 6 38506541
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-[#00a79d]" />
                <a
                  href="mailto:info@isoxpert.nl"
                  className="text-gray-700 hover:text-[#00a79d] transition-colors"
                >
                  info@isoxpert.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} IsoXpert & Maged Sakkar . Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
