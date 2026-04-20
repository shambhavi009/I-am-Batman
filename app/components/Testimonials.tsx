import { motion } from "motion/react";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maya R.",
    review: "honestly game-changing. i used to think i needed wine to unwind but this hits different. the golden tranquility is my go-to now",
    rating: 5
  },
  {
    name: "Jordan K.",
    review: "finally something that matches the vibe without the consequences. brought the blue lotus to a dinner party and everyone was obsessed",
    rating: 5
  },
  {
    name: "Alex T.",
    review: "the fact that everything is actually grown by them??? incredible. you can taste the difference. moon milk before bed is a ritual now",
    rating: 5
  },
  {
    name: "Sam L.",
    review: "i'm caffeine sensitive so this is literally perfect for me. forest floor gives me energy without the anxiety",
    rating: 5
  },
  {
    name: "Riley M.",
    review: "aesthetic af and it actually works. the bottles look so good on my shelf but more importantly i feel SO much better",
    rating: 5
  },
  {
    name: "Casey W.",
    review: "convinced my whole friend group to switch. we do kombucha wild berry at our hangouts now instead of drinking. no regrets literally ever",
    rating: 5
  }
];

export function Testimonials() {
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
            What People Are Saying
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
            Real experiences from our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F5F1E8] rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2D5016] text-[#2D5016]" />
                ))}
              </div>

              <p className="text-[#4B5563] mb-6" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                "{testimonial.review}"
              </p>

              <p className="text-[#2D5016]" style={{ fontSize: '0.95rem' }}>
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
