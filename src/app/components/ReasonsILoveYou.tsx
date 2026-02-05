import { motion } from 'motion/react';
import { Heart, Sparkle, Smile, Sun, Moon, Star } from 'lucide-react';

export function ReasonsILoveYou() {
  const reasons = [
    {
      icon: Smile,
      text: 'Your beautiful smile that brightens my every day',
      color: 'bg-pink-100 border-pink-300',
    },
    {
      icon: Star,
      text: 'The way you make ordinary moments extraordinary',
      color: 'bg-rose-100 border-rose-300',
    },
    {
      icon: Heart,
      text: 'Your kind and loving heart',
      color: 'bg-red-100 border-red-300',
    },
    {
      icon: Sun,
      text: 'How you light up every room you enter',
      color: 'bg-orange-100 border-orange-300',
    },
    {
      icon: Sparkle,
      text: 'Your amazing personality and sense of humor',
      color: 'bg-purple-100 border-purple-300',
    },
    {
      icon: Moon,
      text: 'The peace I feel when I\'m with you',
      color: 'bg-indigo-100 border-indigo-300',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-4 text-pink-600"
        >
          Why I Love You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-600 mb-16"
        >
          Just a few of the countless reasons...
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`${reason.color} border-2 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all`}
              >
                <Icon className="w-10 h-10 mb-4 text-pink-600" />
                <p className="text-lg text-gray-700">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
