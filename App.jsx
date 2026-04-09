import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Utensils, Star } from "lucide-react";

export default function TullysLuxuryWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9')] bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative text-center max-w-4xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Tully's Good Times
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Liverpool's Premier Sports Bar & Dining Experience
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-xl">
              View Menu
            </button>
            <button className="border px-8 py-3 rounded-xl">
              Book Table
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Where Great Food Meets Good Times
            </h2>
            <p className="text-gray-400 text-lg">
              Experience Liverpool's most vibrant dining destination.
            </p>
          </div>

          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            className="rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[{
            icon: Utensils,
            title: "Premium Menu",
            desc: "Award-winning food"
          },{
            icon: Star,
            title: "Game Day Atmosphere",
            desc: "Live sports vibes"
          },{
            icon: Clock,
            title: "Open Daily",
            desc: "Till 11pm"
          }].map((item, i) => (
            <motion.div key={i}>
              <div className="bg-black border p-8 rounded-2xl">
                <item.icon className="mb-4" size={32} />
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-24 text-center">
        <h2 className="text-4xl mb-6">Visit Us</h2>
        <MapPin className="mx-auto mb-4" />
        <p>311 7th N St, Liverpool, NY</p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t">
        <h3>Tully's Good Times</h3>
      </footer>

    </div>
  );
}
