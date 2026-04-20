import { motion } from "motion/react";

export function Experience() {
  return (
    <section className="py-24 px-6 bg-[#F5F1E8] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1621480242197-f969360a9c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2D5016' }}>
            The Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                Calm Without Drowsiness
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Feel your shoulders drop, your breath deepen, your mind settle—while remaining present, alert, and engaged with life.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                Social Connection
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                That warm, open-hearted feeling that makes conversations flow and laughter come easy. Connection without inhibition, presence without intoxication.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                Mindful Uplift
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                A gentle elevation of mood and energy that feels natural, sustainable, and aligned with your body's rhythms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                Ritual & Ceremony
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                The act of preparing and savoring a beverage becomes a moment of meditation, a pause in the rush, a return to yourself.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                No Regrets
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Wake up feeling clear, restored, proud of how you spent your evening. No hangovers, no guilt, no compromised mornings.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.75rem', color: '#2D5016', marginBottom: '0.75rem' }}>
                Ancient Wisdom, Modern Life
              </h3>
              <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Experience what humans have known for millennia—that plants hold profound power to shift our state, gently and holistically.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[#2D5016] italic" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
            "It's not about replacing anything—it's about discovering something better. A way of being that honors both celebration and wellbeing."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
