import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Contact Ons
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Hoofdkantoor</h2>
          <p className="text-sm flex items-center mb-2">
            <MapPin size={16} className="mr-2" />
            Waterhoen 5, 1399KG Muiderberg

          </p>
          <p className="text-sm flex items-center mb-2">
            <Phone size={16} className="mr-2" />
            +31 6 48444885
          </p>
          <p className="text-sm flex items-center mb-4">
            <Mail size={16} className="mr-2" />
            info@isoxpert.nl
          </p>
          <Link
            href="mailto:info@isoxpert.nl"
            className="bg-[#00a79d] text-white px-4 py-2 rounded text-sm inline-flex items-center hover:bg-[#008c82]"
          >
            <Mail size={16} className="mr-2" />
            Stuur ons een e-mail
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Openingstijden</h2>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Maandag - Vrijdag:</strong> 9:00 - 17:00
            </li>
            <li>
              <strong>Zaterdag - Zondag:</strong> Gesloten
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
