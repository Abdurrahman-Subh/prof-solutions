import Image from "next/image";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/7.jpeg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Vlor from "@/public/vlor1.jpeg";
import Vlor3 from "@/public/vlor3.jpeg";
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
    },
    {
      name: "bodemisolatie",
      icon: Thermometer,
      image: Bodem,
    },
    {
      name: "Vloerisolatie",
      icon: Home,
      image: Vlor,
    },

    {
      name: "spouwisolatie",
      icon: Zap,
      image: Spow,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        Onze Diensten
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#00a79d] p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <service.icon className="mr-2 text-white" size={32} />
              <h2 className="text-2xl font-semibold text-white">
                {service.name}
              </h2>
            </div>
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
