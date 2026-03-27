import React from "react";
import { motion } from "framer-motion";

export default function App() {

  const whatsappNumber = "918838188022";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="font-sans bg-black text-white">

      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full"
      >
        💬
      </button>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Premium Biryani Manufacturing
        </motion.h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Scale your food business with consistent, bulk biryani production.
        </p>

        <button 
          onClick={handleWhatsApp}
          className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-2xl"
        >
          Get Pricing
        </button>
      </section>

    </div>
  );
}
