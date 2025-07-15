"use client";

import { useState } from "react";
import Image from "next/image";
import Spow from "@/public/spow.jpeg";
import Spow1 from "@/public/spow1.jpg";
import Spow2 from "@/public/qutaiba.jpg";
import Spow3 from "@/public/spoww.jpg";
import Daki from "@/public/3.jpeg";
import Daki1 from "@/public/dakiupdate.jpg";
import Daki2 from "@/public/6.jpeg";
import Daki5 from "@/public/daki5.jpg";
import Bodem from "@/public/bodem.jpeg";
import Bodem1 from "@/public/bodem1.jpg";
import Bodem2 from "@/public/bodem2.jpg";
import Bodem3 from "@/public/bodem3.jpg";
import Vlor3 from "@/public/vlor3.jpeg";
import Vlor1 from "@/public/vlor1.jpeg";
import Vlor2 from "@/public/update2.jpg";
import Vlor4 from "@/public/update1.jpg";
import Vent1 from "@/public/vent.jpg";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("vloerisolatie");

  const sections = {
    vloerisolatie: {
      title: "Wat is vloerisolatie?",
      description:
        "Vloerisolatie is een effectieve manier om uw huis warmer en energiezuiniger te maken. Door de onderkant van uw vloeren te isoleren, vermindert u warmteverlies, wat leidt tot lagere energiekosten en een verhoogd comfort. Onze vloerisolatieoplossingen zijn ontworpen om koude trek en vochtproblemen aan te pakken, wat resulteert in een gezonder binnenklimaat voor uw gezin.",
      benefits: [
        "Vermindert warmteverlies, wat resulteert in lagere energiekosten.",
        "Zorgt voor een gelijkmatige temperatuur en meer comfort.",
        "Draagt bij aan een groenere levensstijl door energiezuinigheid.",
      ],
      images: [
        {
          src: Vlor3,
          title: "Vloerisolatie Installatie",
          description: "Professionele installatie van vloerisolatie",
        },
        {
          src: Vlor1,
          title: "Thermische Barrière",
          description: "Effectieve thermische isolatie voor uw vloer",
        },
        {
          src: Vlor2,
          title: "Comfort Verbetering",
          description: "Verhoogd comfort door betere isolatie",
        },
        {
          src: Vlor4,
          title: "Energiebesparing",
          description: "Meetbare energiebesparing na installatie",
        },
      ],
    },
    bodemisolatie: {
      title: "Wat is Bodemisolatie?",
      description:
        "Bodemisolatie is essentieel voor het creëren van een energiezuinige woning. Het isoleert de bodem onder uw huis, wat bijdraagt aan een comfortabeler leefklimaat.",
      benefits: [
        "Voorkomt vocht en schimmelvorming",
        "Verbetert de energieprestatie van uw woning",
        "Verhoogt het wooncomfort",
      ],
      images: [
        {
          src: Bodem,
          title: "Bodem Voorbereiding",
          description: "Professionele voorbereiding van de bodem",
        },
        {
          src: Bodem1,
          title: "Isolatiemateriaal",
          description: "Hoogwaardige isolatiematerialen",
        },
        {
          src: Bodem2,
          title: "Installatie Proces",
          description: "Vakkundige installatie door experts",
        },
        {
          src: Bodem3,
          title: "Eindresultaat",
          description: "Perfect geïsoleerde bodem",
        },
      ],
    },
    Spouwmuurisolatie: {
      title: "Wat is Spouwmuurisolatie ?",
      description:
        "Spouwisolatie is een effectieve methode om uw muren te isoleren. Het materiaal wordt in de spouwmuur geblazen, wat resulteert in uitstekende isolatie.",
      benefits: [
        "Snelle en efficiënte installatie",
        "Significant lagere energierekening",
        "Verhoogde woningwaarde",
      ],
      images: [
        {
          src: Spow,
          title: "Spouwmuur Inspectie",
          description: "Grondige inspectie van de spouwmuur",
        },
        {
          src: Spow1,
          title: "Isolatie Inblazen",
          description: "Professioneel inblazen van isolatiemateriaal",
        },
        {
          src: Spow3,
          title: "Kwaliteitscontrole",
          description: "Nauwkeurige controle van de isolatie",
        },
        {
          src: Spow2,
          title: "Afwerking",
          description: "Nette afwerking van de werkzaamheden",
        },
      ],
    },
    dakisolatie: {
      title: "Wat is Dakisolatie?",
      description:
        "Dakisolatie is cruciaal voor een energiezuinig huis. Het voorkomt warmteverlies via het dak en zorgt voor een aangenaam binnenklimaat.",
      benefits: [
        "Maximale energiebesparing",
        "Bescherming tegen weersinvloeden",
        "Verbeterd binnenklimaat",
      ],
      images: [
        {
          src: Daki,
          title: "Dak Voorbereiding",
          description: "Zorgvuldige voorbereiding van het dak",
        },
        {
          src: Daki5,
          title: "Isolatie Aanbrengen",
          description: "Vakkundige installatie van dakisolatie",
        },
        {
          src: Daki2,
          title: "Dampscherm",
          description: "Plaatsing van het dampscherm",
        },
        {
          src: Daki1,
          title: "Eindafwerking",
          description: "Professionele afwerking van de dakisolatie",
        },
      ],
    },
    Ventilatieroosters: {
      title: "Ventilatieroosters in de kruipruimte",
      description:
        "Ventilatieroosters zijn roosters die aan de onderkant van de buitenmuur zitten,Ventilatieroosters in de kruipruimte zorgen ervoor dat uw kruipruimte goed geventileerd wordt. Hierdoor kan het vocht de ruimte verlaten,Hierdoor kan het vocht de ruimte verlaten,Waardoor er minder kans is op schimmel en geuren uit de kruipruimte",
      benefits: [],
      images: [
        {
          src: Vent1,
          title: "Ventilatieroosters zijn niet altijd nodig, maar wel raadzaam",
          description:
            "Een rooster zorgt voor een natuurlijke afvoer van vocht waardoor het klimaat binnen een ruimte aangenaam blijft, Het komt regelmatig voor dat woningen een hoog vochtpercentage hebben, Dat kan bijvoorbeeld door te douchen, de regen of een niet goed geventileerde kruipruimte, Doordat het vocht zich in de woning verspreidt, maar niet weg kan trekt dit in de muren, Hierdoor kunnen vochtproblemen zoals schimmel ontstaan, wat erg onaangenaam en ongezond is, Kort de ramen open zetten lost dit probleem helaas niet altijd op, Door te zorgen dat er ventilatieroosters in de ramen zitten kan het vocht naar buiten worden gedreven, Dit kunt u eventueel via de lokale aannemer of glaszetter regelen, Ook een mechanische afzuiger gaan ervoor zorgen dat het vocht in de woning beter gereguleerd wordt, Dit zorgt voor een betere luchtkwaliteit in de woning",
        },
      ],
    },
  };

  const activeContent = sections[activeSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Isolatiemogelijkheden
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze verschillende isolatieoplossingen voor uw woning
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Left sidebar with buttons */}
          <div className="space-y-3">
            {Object.keys(sections).map((section) => (
              <Button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full justify-start text-left h-auto py-4 px-6 rounded-2xl transition-all duration-300 ${
                  activeSection === section
                    ? "bg-gradient-to-r from-[#00a79d] to-emerald-500 text-white shadow-lg scale-105 border-2 border-[#00a79d]"
                    : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70 border-2 border-white/20 hover:border-[#00a79d]/30"
                }`}
              >
                <span className="text-sm font-medium">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Button>
            ))}
          </div>

          {/* Right content area */}
          <div className="space-y-8">
            <div className="rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {activeContent.title}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {activeContent.description}
              </p>

              {activeContent.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Voordelen:</h3>
                  <ul className="space-y-3">
                    {activeContent.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeContent.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden rounded-2xl border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </CardContent>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base font-semibold text-gray-800 mb-2">
                        {image.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {image.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
