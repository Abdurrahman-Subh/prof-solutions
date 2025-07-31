export const metadata = {
  title: "Privacy Policy - IsoXpert",
  description: "Lees onze privacy policy om te begrijpen hoe IsoXpert uw persoonlijke gegevens behandelt en beschermt.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Privacy Policy
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Inleiding</h2>
                <p className="text-gray-700 leading-relaxed">
                  IsoXpert ("wij", "ons", "onze") respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. 
                  Deze privacy policy beschrijft hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen wanneer u onze website bezoekt of onze diensten gebruikt.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Gegevens die wij verzamelen</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Persoonlijke gegevens</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                  <li>Adresgegevens voor offertes en dienstverlening</li>
                  <li>Correspondentie via e-mail, telefoon of contact formulieren</li>
                  <li>Projectinformatie en voorkeuren</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Technische gegevens</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>IP-adres en browserinformatie</li>
                  <li>Cookies en vergelijkbare technologieën</li>
                  <li>Website gebruiksstatistieken</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Hoe wij uw gegevens gebruiken</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Het verlenen van onze isolatiediensten</li>
                  <li>Het maken van offertes en projectplanning</li>
                  <li>Klantenservice en communicatie</li>
                  <li>Verbetering van onze website en diensten</li>
                  <li>Naleving van wettelijke verplichtingen</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Onze website gebruikt cookies om uw ervaring te verbeteren. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Soorten cookies die wij gebruiken:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Functionele cookies:</strong> Noodzakelijk voor de werking van de website</li>
                  <li><strong>Analytische cookies:</strong> Voor het analyseren van websitegebruik</li>
                  <li><strong>Marketing cookies:</strong> Voor gerichte advertenties (alleen met toestemming)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Delen van gegevens</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, behalve:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Met uw expliciete toestemming</li>
                  <li>Voor het uitvoeren van onze diensten (leveranciers, onderaannemers)</li>
                  <li>Wanneer wettelijk verplicht</li>
                  <li>Voor de bescherming van onze rechten en eigendom</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Beveiliging</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen 
                  tegen verlies, misbruik, ongeautoriseerde toegang, openbaarmaking, wijziging of vernietiging.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Uw rechten</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Onder de AVG heeft u de volgende rechten:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Recht op inzage in uw persoonlijke gegevens</li>
                  <li>Recht op rectificatie van onjuiste gegevens</li>
                  <li>Recht op verwijdering van uw gegevens</li>
                  <li>Recht op beperking van verwerking</li>
                  <li>Recht op gegevensoverdracht</li>
                  <li>Recht van bezwaar tegen verwerking</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Bewaartermijnen</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, 
                  of zoals wettelijk vereist. Klantgegevens worden maximaal 7 jaar bewaard na afronding van het project.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Wijzigingen in deze policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wij kunnen deze privacy policy van tijd tot tijd bijwerken. Belangrijke wijzigingen worden op onze website aangekondigd.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Voor vragen over deze privacy policy of het uitoefenen van uw rechten, kunt u contact met ons opnemen:
                </p>
                <div className="bg-[#00a79d]/10 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>IsoXpert</strong></p>
                  <p className="text-gray-700">Waterhoen 5, 1399KG Muiderberg</p>
                  <p className="text-gray-700">E-mail: info@isoxpert.nl</p>
                  <p className="text-gray-700">Telefoon: +31 6 48444885</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
