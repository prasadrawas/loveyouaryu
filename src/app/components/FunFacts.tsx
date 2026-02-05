import { motion } from 'motion/react';
import { Laugh, Coffee, Music, Pizza, Gamepad2, Sparkles } from 'lucide-react';

export function FunFacts() {
  const facts = [
    {
      icon: Coffee,
      fact: 'Number of coffee dates',
      count: '∞',
      color: 'bg-amber-100 border-amber-300',
    },
    {
      icon: Laugh,
      fact: 'Times you made me laugh',
      count: '∞',
      color: 'bg-yellow-100 border-yellow-300',
    },
    {
      icon: Music,
      fact: 'Songs that remind me of you',
      count: '∞',
      color: 'bg-purple-100 border-purple-300',
    },
    {
      icon: Pizza,
      fact: 'Perfect dinner dates',
      count: '∞',
      color: 'bg-orange-100 border-orange-300',
    },
    {
      icon: Gamepad2,
      fact: 'Fun adventures together',
      count: '∞',
      color: 'bg-blue-100 border-blue-300',
    },
    {
      icon: Sparkles,
      fact: 'Magical moments shared',
      count: '∞',
      color: 'bg-pink-100 border-pink-300',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-6 text-pink-600"
        >
          Our Fun Stats 📊
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-600 mb-16"
        >
          Some things are just infinite... 💫
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                className={`${fact.color} border-2 rounded-3xl p-6 text-center shadow-lg`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                </motion.div>
                <p className="text-4xl mb-2">{fact.count}</p>
                <p className="text-sm text-gray-700">{fact.fact}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
