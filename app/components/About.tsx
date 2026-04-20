import { motion } from "motion/react";

export function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1771128264855-1c032332cbc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Natural herbs and ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#2D5016' }}>
              Rooted in Tradition
            </h2>

            <div className="space-y-6 text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              <p>
                Every bottle tells a story—a journey through time, across continents, into the heart of ancient wellness traditions.
              </p>

              <p>
                We grow our ingredients ourselves, nurturing each herb, flower, and root with care. Our gardens are alive with biodiversity, thriving without chemicals or shortcuts.
              </p>

              <p>
                In our workshop, we honor the old ways. Slow fermentation. Patient infusion. Mindful blending. Each beverage is crafted by hand, in small batches, with intention.
              </p>

              <p>
                From Ayurvedic tonics to European herbal traditions, from East Asian botanicals to indigenous wisdom—we reimagine these time-tested formulas for the modern seeker.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
