"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Calculator, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    formType: "contact"
  });

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    houseType: "",
    buildYear: "",
    services: [],
    additionalInfo: ""
  });

  const [activeTab, setActiveTab] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Dakisolatie",
    "Spouwisolatie",
    "Vloerisolatie",
    "Bodemisolatie",
    "Ventilatieroosters"
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        formType: "contact"
      });
    }, 1000);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setQuoteData({
        name: "",
        email: "",
        phone: "",
        address: "",
        houseType: "",
        buildYear: "",
        services: [],
        additionalInfo: ""
      });
    }, 1000);
  };

  const handleServiceChange = (service) => {
    setQuoteData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Contact Ons
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00a79d] to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Neem contact met ons op voor vragen of vraag direct een offerte aan
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#00a79d] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Adres</h3>
            <p className="text-gray-700">De Berken 53</p>
            <p className="text-gray-700">1402KP Bussum</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#00a79d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Telefoon</h3>
            <a href="tel:+31638506541" className="text-gray-700 hover:text-[#00a79d] transition-colors">
              +31 6 38506541
            </a>
            <p className="text-sm text-gray-600 mt-2">Ma-Vr: 9:00 - 17:00</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#00a79d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">E-mail</h3>
            <a href="mailto:info@isoxpert.nl" className="text-gray-700 hover:text-[#00a79d] transition-colors">
              info@isoxpert.nl
            </a>
            <p className="text-sm text-gray-600 mt-2">24/7 bereikbaar</p>
          </div>
        </div>

        {/* Form Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === "contact"
                    ? "bg-[#00a79d] text-white shadow-lg"
                    : "text-gray-700 hover:bg-white/50"
                }`}
              >
                <MessageCircle size={20} />
                <span>Contact</span>
              </button>
              <button
                onClick={() => setActiveTab("quote")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === "quote"
                    ? "bg-[#00a79d] text-white shadow-lg"
                    : "text-gray-700 hover:bg-white/50"
                }`}
              >
                <Calculator size={20} />
                <span>Offerte Aanvragen</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Stuur ons een bericht
              </h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    >
                      <option value="">Selecteer een service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Bericht *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#00a79d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008c82] transition-colors disabled:opacity-50 flex items-center space-x-2 mx-auto"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? "Verzenden..." : "Verzenden"}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Quote Form */}
          {activeTab === "quote" && (
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Vraag een offerte aan
              </h2>
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.name}
                      onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteData.email}
                      onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quoteData.phone}
                      onChange={(e) => setQuoteData({...quoteData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adres *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.address}
                      onChange={(e) => setQuoteData({...quoteData, address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Type woning
                    </label>
                    <select
                      value={quoteData.houseType}
                      onChange={(e) => setQuoteData({...quoteData, houseType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    >
                      <option value="">Selecteer type woning</option>
                      <option value="tussenwoning">Tussenwoning</option>
                      <option value="hoekwoning">Hoekwoning</option>
                      <option value="vrijstaand">Vrijstaand</option>
                      <option value="appartement">Appartement</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Bouwjaar
                    </label>
                    <input
                      type="number"
                      min="1900"
                      max="2024"
                      value={quoteData.buildYear}
                      onChange={(e) => setQuoteData({...quoteData, buildYear: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-4">
                    Gewenste services *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map(service => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quoteData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-5 h-5 text-[#00a79d] rounded focus:ring-[#00a79d] border-gray-300"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Aanvullende informatie
                  </label>
                  <textarea
                    rows={4}
                    value={quoteData.additionalInfo}
                    onChange={(e) => setQuoteData({...quoteData, additionalInfo: e.target.value})}
                    placeholder="Vertel ons meer over uw project..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a79d] focus:border-transparent"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || quoteData.services.length === 0}
                    className="bg-[#00a79d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008c82] transition-colors disabled:opacity-50 flex items-center space-x-2 mx-auto"
                  >
                    <Calculator size={20} />
                    <span>{isSubmitting ? "Verzenden..." : "Offerte Aanvragen"}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mt-8 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl text-center">
              <h3 className="font-bold mb-2">Bedankt voor uw bericht!</h3>
              <p>We nemen zo snel mogelijk contact met u op.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
