"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      category: "Algemeen",
      questions: [
        {
          question: "Wat is isolatie en waarom is het belangrijk?",
          answer: "Isolatie is het aanbrengen van materialen die warmteoverdracht verminderen. Het is belangrijk omdat het energieverbruik reduceert, comfort verhoogt en de CO2-uitstoot verlaagt."
        },
        {
          question: "Hoe lang duurt een isolatieproject?",
          answer: "De duur varieert per project. Spouwisolatie duurt meestal 1 dag, dakisolatie 2-3 dagen en vloerisolatie 1-2 dagen, afhankelijk van de grootte van de woning."
        },
        {
          question: "Wat kost isolatie?",
          answer: "Kosten variëren per type isolatie en woninggrootte. Spouwisolatie vanaf €20 per m², dakisolatie vanaf €30 per m² en vloerisolatie vanaf €25 per m². We maken altijd een gratis offerte."
        },
        {
          question: "Krijg ik subsidie voor isolatie?",
          answer: "Ja, er zijn verschillende subsidies beschikbaar zoals ISDE (Investeringssubsidie Duurzame Energie) en lokale gemeentelijke subsidies. Wij helpen u graag bij het aanvragen."
        }
      ]
    },
    {
      category: "Dakisolatie",
      questions: [
        {
          question: "Wat is het verschil tussen binnen- en buitenisolatie?",
          answer: "Binnenisolatie is goedkoper maar neemt binnenruimte in beslag. Buitenisolatie is duurder maar behoudt binnenruimte en voorkomt koudebruggen beter."
        },
        {
          question: "Kan ik mijn dak isoleren zonder de dakpannen te verwijderen?",
          answer: "Ja, bij binnenin isoleren hoeven dakpannen meestal niet verwijderd te worden. Bij buitenisolatie is dit wel nodig."
        },
        {
          question: "Hoeveel energiebesparing geeft dakisolatie?",
          answer: "Dakisolatie kan tot 30% energiebesparing opleveren, omdat warmte van nature naar boven stijgt en via het dak ontsnapt."
        }
      ]
    },
    {
      category: "Spouwisolatie",
      questions: [
        {
          question: "Is mijn huis geschikt voor spouwisolatie?",
          answer: "Huizen gebouwd tussen 1920-1980 hebben meestal een spouwmuur. Wij controleren eerst of uw spouw geschikt is en niet reeds geïsoleerd."
        },
        {
          question: "Wat gebeurt er als de spouw vochtig is?",
          answer: "Vocht in de spouw moet eerst worden opgelost voordat we kunnen isoleren. Wij controleren dit tijdens de inspectie en adviseren over oplossingen."
        },
        {
          question: "Hoe wordt spouwisolatie aangebracht?",
          answer: "Via kleine gaatjes in de buitenmuur blazen we isolatiemateriaal in de spouw. De gaatjes worden daarna netjes dichtgemaakt."
        }
      ]
    },
    {
      category: "Vloerisolatie",
      questions: [
        {
          question: "Kan ik mijn vloer isoleren zonder de vloer eruit te halen?",
          answer: "Ja, bij vloerisolatie vanaf de kruipruimte hoeft de vloer niet eruit. We isoleren vanaf de onderkant."
        },
        {
          question: "Wat als mijn kruipruimte te laag is?",
          answer: "Ook lage kruipruimtes kunnen vaak geïsoleerd worden. Wij gebruiken speciale materialen en technieken voor lastig bereikbare plekken."
        },
        {
          question: "Hoeveel comfort geeft vloerisolatie?",
          answer: "Vloerisolatie zorgt voor merkbaar warmere vloeren en minder tocht. Het verhoogt het comfort aanzienlijk, vooral bij kouder weer."
        }
      ]
    },
    {
      category: "Bodemisolatie",
      questions: [
        {
          question: "Wat is het verschil tussen vloer- en bodemisolatie?",
          answer: "Vloerisolatie isoleert de vloer zelf, bodemisolatie isoleert de bodem/kruipruimte. Beide kunnen vochtproblemen verminderen."
        },
        {
          question: "Helpt bodemisolatie tegen vocht?",
          answer: "Ja, bodemisolatie kan helpen bij vochtregulatie in de kruipruimte en kan schimmelvorming voorkomen."
        }
      ]
    },
    {
      category: "Garantie & Service",
      questions: [
        {
          question: "Welke garantie krijg ik?",
          answer: "Wij geven 10 jaar garantie op al onze isolatiewerkzaamheden. Dit dekt materiaal- en installatiefouten."
        },
        {
          question: "Wat als er problemen zijn na de installatie?",
          answer: "Neem direct contact met ons op. Wij komen binnen 48 uur kijken en lossen eventuele problemen kosteloos op binnen de garantieperiode."
        },
        {
          question: "Doen jullie ook reparaties?",
          answer: "Ja, wij repareren en vervangen beschadigde isolatie. Ook van isolatie die door anderen is aangebracht."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Veelgestelde Vragen
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hier vindt u antwoorden op de meest gestelde vragen over isolatie en onze diensten.
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openItem === `${categoryIndex}-${questionIndex}`;
                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/60 transition-colors"
                        >
                          <span className="text-lg font-semibold text-gray-800">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#00a79d]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#00a79d]" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="h-px bg-gray-200 mb-4"></div>
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#00a79d]/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Heeft u nog andere vragen?
              </h3>
              <p className="text-gray-700 mb-6">
                Neem vrijblijvend contact met ons op. Wij helpen u graag verder!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+31648444885"
                  className="bg-[#00a79d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#008c82] transition-colors"
                >
                  Bel ons: +31 6 48444885
                </a>
                <a
                  href="mailto:info@isoxpert.nl"
                  className="border-2 border-[#00a79d] text-[#00a79d] px-6 py-3 rounded-full font-semibold hover:bg-[#00a79d] hover:text-white transition-colors"
                >
                  E-mail: info@isoxpert.nl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
