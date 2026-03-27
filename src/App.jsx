import React, { useState } from "react";

export default function App() {
  const whatsappNumber = "918838188022";

  const [form, setForm] = useState({ name: "", business: "", area: "", quantity: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi, I'm ${form.name}
Business: ${form.business}
Area: ${form.area}
Daily Requirement: ${form.quantity} kg/day`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="font-sans scroll-smooth bg-gradient-to-b from-white via-yellow-50 to-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAVBAR */}
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-yellow-400/30 flex justify-between items-center px-8 py-5 z-50">
        <h1 className="text-2xl tracking-widest bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          RICH BIRYANI FACTORY
        </h1>
        <a href="#contact" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:scale-105 transition">
          Get Quote
        </a>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563379091339-03246963d96c')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
            Build a Profitable Biryani Brand Without a Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            We manufacture. You sell. Scale fast in Chennai with zero operational headaches.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center pt-4">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Start on WhatsApp
            </a>
            <a href="#contact" className="border border-yellow-500 text-yellow-600 px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition">
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-5xl text-center mb-14 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Problems Restaurants Face
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { title: "Chef Dependency", desc: `Reliance on skilled chefs increases risk and salary costs.\nOperations become unstable if key staff leave.` },
            { title: "Inconsistent Taste", desc: `Different chefs produce different taste and quality.\nThis affects customer trust and repeat orders.` },
            { title: "High Costs", desc: `Staff salaries, wastage, and kitchen overhead reduce margins.\nProfitability becomes difficult to maintain consistently.` },
            { title: "Scaling Issues", desc: `Growth requires more kitchen space and manpower.\nExpansion becomes expensive and operationally complex.` }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-yellow-200 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3 text-yellow-600">{s.title}</h3>
              <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-yellow-50">
        <h2 className="text-5xl text-center mb-14 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Our Solution
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { title: "Centralized Production", desc: `Bulk cooking reduces cost per unit.\nEnables efficient large-scale production.` },
            { title: "Standardized Recipes", desc: `Same taste in every batch.\nEnsures consistent customer experience.` },
            { title: "Batch Consistency", desc: `Strict quality control maintained.\nNo variation in output quality.` },
            { title: "Hygienic Processing", desc: `Prepared in clean environments.\nMaintains safety and trust.` }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-yellow-200 shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-yellow-600">{s.title}</h3>
              <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-20 px-6">
        <h2 className="text-5xl text-center mb-16 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Our Product Range
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {["Chicken", "Mutton"].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-2xl border border-yellow-200 shadow-md text-center">
              <h3 className="text-4xl font-semibold text-yellow-600 mb-4">{item} Biryani</h3>
              <p className="text-gray-600">Bulk production • Consistent taste</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-yellow-50">
        <h2 className="text-5xl text-center mb-16 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Simple 3-Step Model
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          {["You Take Orders", "We Cook", "You Sell & Profit"].map((s, i) => (
            <React.Fragment key={i}>
              <div className="bg-white p-10 rounded-2xl border border-yellow-200 shadow-md w-72 text-center">
                <div className="text-yellow-600 font-bold text-3xl mb-3">{i + 1}</div>
                <div className="font-semibold text-lg">{s}</div>
              </div>
              {i !== 2 && <div className="hidden md:block text-yellow-500 text-3xl">→</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6">
        <h2 className="text-5xl text-center mb-14 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          How We Increase Your Profit
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {["Lower Production Cost", "No Chef Dependency", "Reduced Manpower", "Better Margins"].map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-yellow-200 shadow-sm text-lg font-medium text-center">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* PRIVATE LABEL */}
      <section className="py-20 px-6 bg-yellow-50 text-center">
        <h2 className="text-5xl mb-6 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Private Label Available
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Build your own biryani brand while we handle manufacturing. Your packaging, your brand, our expertise.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-yellow-50">
        <h2 className="text-5xl mb-10 text-yellow-600" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Start Your Biryani Business
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-6">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="bg-white border border-yellow-200 p-4 rounded-lg text-lg" required />
          <input name="business" value={form.business} onChange={handleChange} placeholder="Business Name" className="bg-white border border-yellow-200 p-4 rounded-lg text-lg" required />
          <input name="area" value={form.area} onChange={handleChange} placeholder="Area (Location)" className="bg-white border border-yellow-200 p-4 rounded-lg text-lg" required />
          <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Daily Requirement (kg)" className="bg-white border border-yellow-200 p-4 rounded-lg text-lg" required />
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full font-semibold text-xl shadow hover:scale-105 transition">
            Get Quote on WhatsApp
          </button>
        </form>
      </section>

      {/* FLOATING BUTTON */}
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition">
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="border-t border-yellow-200 text-center py-8 text-gray-500">
        © 2026 Rich Biryani Factory 
      </footer>
    </div>
  );
}
