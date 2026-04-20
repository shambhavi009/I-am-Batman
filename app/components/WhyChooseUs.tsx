import { motion } from "motion/react";
import { Leaf, Heart, Sparkles, Droplet } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: "100% Non-Alcoholic",
    description: "Experience the ritual, the social connection, the buzz—without alcohol's downsides"
  },
  {
    icon: Sparkles,
    title: "Zero Caffeine",
    description: "Natural energy and calm without jitters, crashes, or disrupted sleep"
  },
  {
    icon: Leaf,
    title: "All Natural Ingredients",
    description: "Every ingredient is grown in our gardens or foraged from pristine wild spaces"
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Small-batch production, traditional methods, mindful intention in every bottle"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2D5016' }}>
            Why Choose Nature's Path
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
            We believe wellness shouldn't come with compromise. Every choice we make honors both you and the earth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-[#F5F1E8] hover:bg-[#2D5016] hover:text-white transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 group-hover:bg-[#F5F1E8] transition-colors duration-500">
                  <Icon className="w-8 h-8 text-[#2D5016]" strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 group-hover:text-white transition-colors duration-500" style={{ fontSize: '1.5rem', color: '#2D5016' }}>
                  {feature.title}
                </h3>

                <p className="text-[#4B5563] group-hover:text-[#F5F1E8] transition-colors duration-500" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-[#2D5016] text-white rounded-3xl p-12 text-center"
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Sustainable. Authentic. Pure.
          </h3>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Our commitment extends beyond the bottle. We practice regenerative agriculture, use only compostable packaging, and give back to the communities where our ingredients come from. Every sip supports a healthier planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
