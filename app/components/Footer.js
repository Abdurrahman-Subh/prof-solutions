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
    <footer className="  border-t border-[#00a79d] bg-[#303642] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Prof-Solutions Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Prof-Solutions</span>
            </Link>
            <p className="text-sm text-gray-300">
              Innovatieve isolatieoplossingen voor uw woning. Wij zorgen voor
              comfort en energiebesparing.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://tr.linkedin.com/in/maged-sakkar-532088204"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 hover:text-[#00a79d] transition-colors"
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
                    className="flex items-center text-gray-300 hover:text-[#00a79d] transition-colors"
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
                "Vloerisolatie",
                "Muurisolatie",
                "Spouwmuurisolatie",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#00a79d] transition-colors"
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
                <span className="text-gray-300">
                  Waterhoen 5 1399KG Muiderberg
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 flex-shrink-0 text-[#00a79d]"
                />
                <a
                  href="tel:+31648444885"
                  className="text-gray-300 hover:text-[#00a79d] transition-colors"
                >
                  +31 6 48444885
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-[#00a79d]" />
                <a
                  href="mailto:info@prof-solutions.nl"
                  className="text-gray-300 hover:text-[#00a79d] transition-colors"
                >
                  info@prof-solutions.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Prof-Solutions & Maged Sakkar . Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
