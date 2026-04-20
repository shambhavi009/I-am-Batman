import { motion } from "motion/react";
import { Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1773401885680-1b6a0ec59fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#2D5016]/40 to-[#F5F1E8]/90 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Leaf className="w-16 h-16 text-[#2D5016]" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6"
          style={{ fontSize: '4rem', fontWeight: 400, lineHeight: 1.2, color: '#1a1a1a' }}
        >
          Feel the Buzz, Naturally
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#4B5563', maxWidth: '600px', margin: '0 auto', marginBottom: '2.5rem' }}
        >
          Ancient traditions meet modern wellness. Experience the calm, the uplift, the connection—without alcohol, without caffeine, with only nature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#2D5016] text-[#F5F1E8] px-10 py-4 rounded-full hover:bg-[#3a6b1d] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
