import { Award, Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Over IsoXpert
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" size={20} />
            Onze Geschiedenis
          </h2>
          <p className="text-sm mb-4">
            IsoXpert werd opgericht met een duidelijke missie: het leveren
            van innovatieve en effectieve isolatieoplossingen voor woningen in
            Nederland. Sinds onze oprichting hebben we ons ontwikkeld tot een
            toonaangevende speler in de isolatie-industrie.
          </p>
          <p className="text-sm">
            Ons team van ervaren professionals is toegewijd aan het leveren van
            hoogwaardige diensten en het gebruik van de nieuwste technologieën
            om de energie-efficiëntie van uw woning te maximaliseren.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2" size={20} />
            Onze Waarden
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Kwaliteit en innovatie in al onze oplossingen</li>
            <li>Klanttevredenheid als onze hoogste prioriteit</li>
            <li>Duurzaamheid en milieubewustzijn in onze werkwijze</li>
            <li>Voortdurende verbetering en professionele ontwikkeling</li>
            <li>Transparantie en eerlijkheid in onze communicatie</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Onze Locaties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#00a79d] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Bussum</h3>
            <p className="text-sm flex items-center">
              <MapPin size={16} className="mr-2" />
              De Berken 53, 1402KP Bussum
            </p>
            <p className="text-sm flex items-center">
              <Phone size={16} className="mr-2" />
              +31 6 38506541
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
