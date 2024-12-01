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
    { name: "Dakisolatie", icon: Shield },
    { name: "Muurisolatie", icon: Thermometer },
    { name: "Vloerisolatie", icon: Home },
    { name: "Glasisolatie", icon: Droplet },
    { name: "Spouwmuurisolatie", icon: Zap },
    { name: "Energieadvies", icon: BarChart },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Onze Diensten
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#00a79d] p-6 rounded-lg">
            <service.icon className="mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
