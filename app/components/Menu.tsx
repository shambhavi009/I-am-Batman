import { motion } from "motion/react";
import { Sparkles } from 'lucide-react';

interface Beverage {
  name: string;
  description: string;
  ingredients: string[];
  mood: string;
  category: string;
}

const beverages: Beverage[] = [
  {
    name: "Golden Tranquility",
    description: "A sun-kissed blend of turmeric, ashwagandha, and holy basil that melts tension away",
    ingredients: ["Turmeric root", "Ashwagandha", "Holy basil", "Honey"],
    mood: "Deeply calming",
    category: "Herbal Infusions"
  },
  {
    name: "Moon Milk",
    description: "Ancient Ayurvedic elixir with warming spices and adaptogenic herbs for restful evenings",
    ingredients: ["Reishi mushroom", "Vanilla", "Cardamom", "Cinnamon"],
    mood: "Restful & grounding",
    category: "Herbal Infusions"
  },
  {
    name: "Elderflower Dreams",
    description: "Delicate European floral tonic with hints of lemon balm and chamomile",
    ingredients: ["Elderflower", "Lemon balm", "Chamomile", "Apple blossom"],
    mood: "Light & uplifting",
    category: "Floral Elixirs"
  },
  {
    name: "Rose Garden Serenity",
    description: "Persian-inspired rose water blend with hibiscus and gentle botanicals",
    ingredients: ["Rose petals", "Hibiscus", "Rose hips", "Orange blossom"],
    mood: "Romantic & peaceful",
    category: "Floral Elixirs"
  },
  {
    name: "Cherry Blossom Bliss",
    description: "Japanese sakura essence with delicate cherry and jasmine notes",
    ingredients: ["Cherry blossom", "Jasmine", "Green tea leaves", "Yuzu"],
    mood: "Refreshing & meditative",
    category: "Floral Elixirs"
  },
  {
    name: "Lavender Twilight",
    description: "Provence-inspired calming blend perfect for unwinding",
    ingredients: ["Lavender", "Valerian root", "Passionflower", "Honey"],
    mood: "Soothing & calming",
    category: "Floral Elixirs"
  },
  {
    name: "Kombucha Wild Berry",
    description: "Traditionally fermented tea with wild-foraged berries and herbs",
    ingredients: ["Black tea", "Wild berries", "Ginger", "Natural cultures"],
    mood: "Energizing & social",
    category: "Fermented Drinks"
  },
  {
    name: "Kvass Heritage",
    description: "Eastern European rye bread ferment with earthy, malty notes",
    ingredients: ["Rye bread", "Beets", "Caraway", "Mint"],
    mood: "Grounding & uplifting",
    category: "Fermented Drinks"
  },
  {
    name: "Tepache Sunset",
    description: "Mexican pineapple ferment with warming cinnamon and clove",
    ingredients: ["Pineapple peel", "Piloncillo", "Cinnamon", "Clove"],
    mood: "Festive & warming",
    category: "Fermented Drinks"
  },
  {
    name: "Jun Tea Botanical",
    description: "Champagne of kombuchas—green tea and honey fermentation",
    ingredients: ["Green tea", "Raw honey", "Jasmine", "Elderflower"],
    mood: "Elegant & effervescent",
    category: "Fermented Drinks"
  },
  {
    name: "Pine Forest Clarity",
    description: "Nordic-inspired tonic with pine needles and birch for mental clarity",
    ingredients: ["Pine needles", "Birch sap", "Rosemary", "Juniper"],
    mood: "Focused & refreshing",
    category: "Botanical Tonics"
  },
  {
    name: "Ginger Fire",
    description: "Warming digestive tonic with fresh ginger and citrus brightness",
    ingredients: ["Fresh ginger", "Lemon", "Cayenne", "Turmeric"],
    mood: "Invigorating & warming",
    category: "Botanical Tonics"
  },
  {
    name: "Sage & Cedar",
    description: "Earthy forest blend with grounding herbs and woody notes",
    ingredients: ["White sage", "Cedar tips", "Thyme", "Lemon verbena"],
    mood: "Grounding & centering",
    category: "Botanical Tonics"
  },
  {
    name: "Citrus Awakening",
    description: "Bright morning blend with orange, grapefruit, and uplifting herbs",
    ingredients: ["Blood orange", "Grapefruit", "Lemongrass", "Mint"],
    mood: "Awakening & joyful",
    category: "Botanical Tonics"
  },
  {
    name: "Cacao Ceremony",
    description: "Sacred cacao blend with vanilla and ancient spices",
    ingredients: ["Raw cacao", "Vanilla bean", "Cinnamon", "Chili"],
    mood: "Heart-opening & warming",
    category: "Ceremonial Blends"
  },
  {
    name: "Blue Lotus Journey",
    description: "Ancient Egyptian flower essence for gentle euphoria and creativity",
    ingredients: ["Blue lotus", "Damiana", "Rose", "Mint"],
    mood: "Euphoric & creative",
    category: "Ceremonial Blends"
  },
  {
    name: "Kava Kava Social",
    description: "Pacific Island root known for relaxation and social connection",
    ingredients: ["Kava root", "Coconut water", "Vanilla", "Pineapple"],
    mood: "Social & relaxed",
    category: "Ceremonial Blends"
  },
  {
    name: "Mushroom Majesty",
    description: "Adaptogenic mushroom blend with chaga, lion's mane, and cordyceps",
    ingredients: ["Chaga", "Lion's mane", "Cordyceps", "Cacao"],
    mood: "Focused & sustained",
    category: "Ceremonial Blends"
  },
  {
    name: "Yerba Maté Spirit",
    description: "South American tradition—earthy, social, gently stimulating without caffeine crash",
    ingredients: ["Roasted yerba maté", "Mint", "Lemon", "Stevia"],
    mood: "Alert & connected",
    category: "Traditional Brews"
  },
  {
    name: "Rooibos Sunset",
    description: "South African red bush tea with vanilla and honeybush",
    ingredients: ["Rooibos", "Honeybush", "Vanilla", "Orange peel"],
    mood: "Cozy & comforting",
    category: "Traditional Brews"
  },
  {
    name: "Tulsi Balance",
    description: "Holy basil adaptogen revered in Ayurveda for stress relief",
    ingredients: ["Tulsi", "Lemon balm", "Licorice root", "Fennel"],
    mood: "Balanced & clear",
    category: "Traditional Brews"
  },
  {
    name: "Chrysanthemum Cloud",
    description: "Traditional Chinese cooling flower tea for hot days and clear minds",
    ingredients: ["Chrysanthemum", "Goji berries", "Longan", "Rock sugar"],
    mood: "Cooling & peaceful",
    category: "Traditional Brews"
  },
  {
    name: "Meadow Wild",
    description: "Wild-harvested meadow flowers and grasses from local fields",
    ingredients: ["Clover", "Meadowsweet", "Yarrow", "Wild mint"],
    mood: "Free-spirited & gentle",
    category: "Wild Foraged"
  },
  {
    name: "Forest Floor",
    description: "Deep woodland essence with mushrooms, moss, and roots",
    ingredients: ["Pine", "Spruce tips", "Nettle", "Dandelion root"],
    mood: "Earthy & grounding",
    category: "Wild Foraged"
  }
];

const categories = ["All", "Herbal Infusions", "Floral Elixirs", "Fermented Drinks", "Botanical Tonics", "Ceremonial Blends", "Traditional Brews", "Wild Foraged"];

export function Menu() {
  return (
    <section className="py-24 px-6 bg-[#F5F1E8]" id="menu">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2D5016' }}>
            Our Sacred Menu
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
            Each beverage is a journey—crafted with intention, infused with tradition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beverages.map((beverage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 style={{ fontSize: '1.5rem', color: '#2D5016' }}>
                  {beverage.name}
                </h3>
                <Sparkles className="w-5 h-5 text-[#D4C5A9] flex-shrink-0" />
              </div>

              <p className="text-[#4B5563] mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                {beverage.description}
              </p>

              <div className="mb-4">
                <p className="text-[#9CA3AF] mb-2" style={{ fontSize: '0.85rem' }}>
                  Key Ingredients:
                </p>
                <div className="flex flex-wrap gap-2">
                  {beverage.ingredients.map((ingredient, i) => (
                    <span
                      key={i}
                      className="text-[#2D5016] bg-[#F5F1E8] px-3 py-1 rounded-full"
                      style={{ fontSize: '0.8rem' }}
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[#F5F1E8]">
                <div className="w-2 h-2 rounded-full bg-[#2D5016]" />
                <p className="text-[#2D5016]" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                  {beverage.mood}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
