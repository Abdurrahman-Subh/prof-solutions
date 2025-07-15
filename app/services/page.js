import Image from "next/image";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/7.jpeg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Vlor from "@/public/vlor1.jpeg";
import Vlor3 from "@/public/vlor3.jpeg";
import Vent from "@/public/vent.jpg";

import {
  Shield,
  Thermometer,
  Home,
  Droplet,
  Zap,
  BarChart,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Dakisolatie",
      icon: Shield,
      image: Daki,
      description: "Warmte stijgt, en zonder goede dakisolatie gaat veel van deze warmte verloren. Onze dakisolatieoplossingen zijn ontworpen om dit warmteverlies te minimaliseren.",
    },
    {
      name: "Bodemisolatie",
      icon: Thermometer,
      image: Bodem,
      description: "Bodemisolatie biedt een snelle en efficiënte oplossing om de isolatie van uw woning te verbeteren, met name in kruipruimtes.",
    },
    {
      name: "Vloerisolatie",
      icon: Home,
      image: Vlor,
      description: "Vloerisolatie is een effectieve manier om uw huis warmer en energiezuiniger te maken door de onderkant van uw vloeren te isoleren.",
    },
    {
      name: "Spouwmuurisolatie",
      icon: Zap,
      image: Spow,
      description: "Spouwisolatie is een van de meest kosteneffectieve manieren om de energie-efficiëntie van uw huis te verhogen.",
    },
    {
      name: "Ventilatieroosters",
      icon: BarChart,
      image: Vent,
      description: "Ventilatieroosters zorgen voor een natuurlijke afvoer van vocht waardoor het klimaat binnen een ruimte aangenaam blijft.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Onze Diensten
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze uitgebreide isolatieoplossingen voor elk onderdeel van uw woning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
              style={{
                boxShadow: '0 10px 40px rgba(0, 167, 157, 0.2), 0 0 60px rgba(0, 167, 157, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a79d]/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#00a79d] to-emerald-500 rounded-2xl shadow-lg">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 ml-4 group-hover:text-[#00a79d] transition-colors duration-300">
                    {service.name}
                  </h2>
                </div>
                
                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00a79d] to-emerald-500 rounded-full transition-all duration-300 group-hover:w-28"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00a79d] to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
