import React from "react";

export default function App() {
  const whatsappNumber = "918838188022"; // 🔥 Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to know more about your Biryani Manufacturing Service"
  );

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="bg-[url('https://images.unsplash.com/photo-1604908176997-431b1b1e3c2c')] bg-cover bg-center text-white min-h-screen flex flex-col justify-center items-center text-center p-6">
        <div className="bg-black/70 p-8 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chennai’s Premium Biryani Manufacturing Factory
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Scale your cloud kitchen or restaurant in Chennai without investing in a kitchen.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-2xl font-semibold"
            >
              WhatsApp Now
            </a>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold">
              Get Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto">
          Based in Chennai, we are a high-capacity biryani manufacturing
          factory delivering consistent taste, hygiene, and scalable
          production for cloud kitchens, restaurants, and food startups.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Products
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Chicken Biryani",
            "Mutton Biryani",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow text-center"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Premium Ingredient Sourcing",
            "Authentic Dum Cooking",
            "Bulk Batch Production",
            "Hygienic Packaging",
          ].map((step, i) => (
            <div key={i} className="p-4 border rounded-xl">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Consistent Taste",
            "Lower Cost Than Kitchen",
            "No Staff Needed",
            "High Capacity Production",
            "Private Label Branding",
            "Chennai-Wide Delivery",
          ].map((point, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl">
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Monthly Requirement (kg)"
            className="border p-3 rounded"
          />
          <button className="bg-yellow-500 p-3 rounded font-semibold">
            Submit
          </button>
        </form>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        Chat on WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © 2026 Rich Biryani Factory. All rights reserved.
      </footer>
    </div>
  );
}
