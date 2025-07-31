"use client";

import { useState } from "react";
import { Star, User, MapPin, Calendar, Quote } from "lucide-react";

export const metadata = {
  title: "Klantbeoordelingen - IsoXpert",
  description: "Lees wat onze klanten over IsoXpert zeggen en ontdek waarom zij ons vertrouwen voor hun isolatieprojecten.",
};

export default function Testimonials() {
  const [selectedService, setSelectedService] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Jan de Vries",
      location: "Amsterdam",
      service: "Dakisolatie",
      rating: 5,
      date: "2024-01-15",
      review: "Uitstekende service! Het team van IsoXpert heeft mijn dak perfect geïsoleerd. Ik merk nu al een groot verschil in mijn energierekening. Ze werkten netjes en hielden alles schoon.",
      projectDetails: "Dakisolatie 180m² tussenwoning uit 1965"
    },
    {
      id: 2,
      name: "Maria Janssen",
      location: "Utrecht",
      service: "Spouwisolatie",
      rating: 5,
      date: "2024-02-22",
      review: "Zeer professioneel en betrouwbaar bedrijf. De spouwisolatie werd binnen één dag perfect uitgevoerd. Geen rommel en een duidelijke uitleg van het proces.",
      projectDetails: "Spouwisolatie 120m² hoekwoning uit 1975"
    },
    {
      id: 3,
      name: "Peter Bakker",
      location: "Den Haag",
      service: "Vloerisolatie",
      rating: 5,
      date: "2024-03-10",
      review: "Fantastische ervaring! Mijn vloer is nu veel warmer en ik bespaar flink op de verwarming. Het team was vriendelijk en vakkundig.",
      projectDetails: "Vloerisolatie 95m² vrijstaande woning uit 1958"
    },
    {
      id: 4,
      name: "Annemarie Smit",
      location: "Rotterdam",
      service: "Bodemisolatie",
      rating: 5,
      date: "2024-03-28",
      review: "Erg tevreden over de bodemisolatie. De kruipruimte is nu droog en er zijn geen vochtproblemen meer. Professionele aanpak en goede nazorg.",
      projectDetails: "Bodemisolatie 80m² rijtjeshuis uit 1962"
    },
    {
      id: 5,
      name: "Kees van der Berg",
      location: "Haarlem",
      service: "Dakisolatie",
      rating: 5,
      date: "2024-04-12",
      review: "Top service van IsoXpert! Ze hebben mijn dak geïsoleerd en alles was perfect geregeld. Duidelijke communicatie en vakmanschap van hoge kwaliteit.",
      projectDetails: "Dakisolatie 200m² vrijstaande woning uit 1972"
    },
    {
      id: 6,
      name: "Linda Verhagen",
      location: "Almere",
      service: "Spouwisolatie",
      rating: 5,
      date: "2024-04-25",
      review: "Uitstekende service en resultaat. Het huis is nu veel warmer en de energierekening is flink gedaald. Zeer aan te bevelen!",
      projectDetails: "Spouwisolatie 140m² tussenwoning uit 1980"
    }
  ];

  const services = ["all", "Dakisolatie", "Spouwisolatie", "Vloerisolatie", "Bodemisolatie"];

  const filteredTestimonials = selectedService === "all" 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedService);

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Klantbeoordelingen
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ontdek wat onze klanten over IsoXpert zeggen
          </p>
          
          {/* Overall Rating */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-bold text-gray-800 mr-4">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 ${
                      star <= averageRating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              Gebaseerd op {testimonials.length} beoordelingen
            </p>
          </div>
        </div>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedService === service
                  ? "bg-[#00a79d] text-white shadow-lg"
                  : "bg-white/60 text-gray-700 hover:bg-white/80"
              }`}
            >
              {service === "all" ? "Alle Services" : service}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00a79d] rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(testimonial.date).toLocaleDateString('nl-NL')}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-[#00a79d]/10 text-[#00a79d] px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.service}
                </span>
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-[#00a79d] mb-2" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  <strong>Project:</strong> {testimonial.projectDetails}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#00a79d]/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wilt u ook zo'n ervaring?
            </h3>
            <p className="text-gray-700 mb-6">
              Neem contact met ons op voor een vrijblijvende offerte en ontdek hoe wij uw woning kunnen verbeteren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#00a79d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008c82] transition-colors"
              >
                Vraag Offerte Aan
              </a>
              <a
                href="tel:+31648444885"
                className="border-2 border-[#00a79d] text-[#00a79d] px-8 py-3 rounded-full font-semibold hover:bg-[#00a79d] hover:text-white transition-colors"
              >
                Bel Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
