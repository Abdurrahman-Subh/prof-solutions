export const metadata = {
  title: "Algemene Voorwaarden - IsoXpert",
  description: "Lees onze algemene voorwaarden voor dienstverlening door IsoXpert.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Algemene Voorwaarden
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Definities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>IsoXpert:</strong> De onderneming gevestigd te Waterhoen 5, 1399KG Muiderberg</li>
                  <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die een overeenkomst aangaat met IsoXpert</li>
                  <li><strong>Diensten:</strong> Alle door IsoXpert geleverde isolatiediensten</li>
                  <li><strong>Overeenkomst:</strong> Elke afspraak tussen IsoXpert en Klant</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Toepasselijkheid</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van IsoXpert.
                  Afwijking is alleen mogelijk bij schriftelijke overeenstemming.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Offertes en Prijzen</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Alle offertes zijn vrijblijvend en geldig voor 30 dagen</li>
                  <li>Prijzen zijn exclusief BTW, tenzij anders vermeld</li>
                  <li>Prijswijzigingen voorbehouden bij materiaal- en loonkostenstijgingen</li>
                  <li>Meerwerk wordt apart gefactureerd tegen geldende tarieven</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Uitvoering van de Werkzaamheden</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Levertijden</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Genoemde levertijden zijn indicatief. Overschrijding van levertijden geeft geen recht op schadevergoeding.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Verplichtingen klant</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Toegang verlenen tot de werklocatie</li>
                  <li>Zorgen voor benodigde vergunningen</li>
                  <li>Verstrekken van juiste en volledige informatie</li>
                  <li>Verplaatsen van persoonlijke eigendommen</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Betaling</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Betaling binnen 30 dagen na factuurdatum</li>
                  <li>Bij overschrijding van betalingstermijn wordt 1% rente per maand berekend</li>
                  <li>Incassokosten voor rekening van de klant</li>
                  <li>Vooruitbetaling kan worden verlangd</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Garantie</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Garantieperiode</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IsoXpert geeft 10 jaar garantie op uitgevoerde isolatiewerkzaamheden, behoudens normale slijtage.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Uitsluitingen</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Schade door verkeerd gebruik of onderhoud</li>
                  <li>Schade door derden</li>
                  <li>Normale slijtage en veroudering</li>
                  <li>Schade door overmacht</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Aansprakelijkheid</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De aansprakelijkheid van IsoXpert is beperkt tot het factuurbedrag van de betreffende opdracht.
                  Indirecte schade is uitgesloten.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Overmacht</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bij overmacht wordt de uitvoering opgeschort. Onder overmacht verstaan wij onder andere:
                  natuurrampen, pandemie, stakingen, leveringsproblemen en overheidsmaatregelen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Eigendomsvoorbehoud</h2>
                <p className="text-gray-700 leading-relaxed">
                  Geleverde materialen blijven eigendom van IsoXpert tot volledige betaling heeft plaatsgevonden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Geschillen</h2>
                <p className="text-gray-700 leading-relaxed">
                  Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden:
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
