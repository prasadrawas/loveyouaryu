import { motion } from 'motion/react';
import { MapPin, Clock, Heart, Plane } from 'lucide-react';

export function LongDistanceLove() {
  const stats = [
    {
      icon: MapPin,
      label: 'Miles Between Us',
      value: '∞',
      subtext: 'But our hearts are one',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Clock,
      label: 'Time Zones Apart',
      value: 'X',
      subtext: 'But always in my thoughts',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Heart,
      label: 'Days Until We Meet',
      value: 'Soon',
      subtext: 'Counting every moment',
      color: 'text-pink-600',
      bg: 'bg-pink-100',
    },
    {
      icon: Plane,
      label: 'Future Adventures',
      value: '∞',
      subtext: 'Together forever',
      color: 'text-teal-600',
      bg: 'bg-teal-100',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-8 text-red-600"
        >
          Our Long Distance Love Story 🌍💕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Distance is just a test to see how far love can travel 💖
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                className={`${stat.bg} rounded-3xl p-8 text-center shadow-lg border-2 border-white`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                >
                  <Icon className={`w-16 h-16 ${stat.color} mx-auto mb-4`} />
                </motion.div>
                <p className="text-gray-600 text-lg mb-2">{stat.label}</p>
                <p className={`text-5xl ${stat.color} mb-3`}>{stat.value}</p>
                <p className="text-gray-600 italic">{stat.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-pink-200"
        >
          <h3 className="text-3xl text-pink-600 mb-6 text-center">
            Things That Keep Us Close 💕
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '📱', text: 'Late night video calls where we talk for hours' },
              { emoji: '💌', text: 'Sweet good morning and goodnight messages' },
              { emoji: '🎵', text: 'Listening to the same songs together' },
              { emoji: '📺', text: 'Watching movies "together" online' },
              { emoji: '🎮', text: 'Playing games and having fun remotely' },
              { emoji: '✈️', text: 'Planning our next visit and future together' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-pink-50 rounded-2xl p-4 hover:bg-pink-100 transition-colors"
              >
                <span className="text-4xl">{item.emoji}</span>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
