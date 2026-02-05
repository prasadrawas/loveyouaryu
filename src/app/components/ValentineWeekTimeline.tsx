import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, Gift, Candy, Calendar, MessageCircle } from 'lucide-react';
import { ValentineWeekModal } from '@/app/components/ValentineWeekModal';

interface Day {
  date: string;
  name: string;
  emoji: string;
  color: string;
  bgGradient: string;
  message: string;
  longDistanceNote: string;
  icon: any;
}

export function ValentineWeekTimeline() {
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  const days: Day[] = [
    {
      date: 'February 7',
      name: 'Rose Day',
      emoji: '🌹',
      color: 'text-red-600',
      bgGradient: 'from-red-100 to-pink-100',
      message: 'Every day I wish I could hand you a rose in person',
      longDistanceNote: 'So I\'m sending you virtual roses through this screen 🌹🌹🌹',
      icon: Heart,
    },
    {
      date: 'February 8',
      name: 'Propose Day',
      emoji: '💍',
      color: 'text-pink-600',
      bgGradient: 'from-pink-100 to-rose-100',
      message: 'Even from afar, my heart chose you',
      longDistanceNote: 'Distance means nothing when someone means everything 💕',
      icon: MessageCircle,
    },
    {
      date: 'February 9',
      name: 'Chocolate Day',
      emoji: '🍫',
      color: 'text-amber-700',
      bgGradient: 'from-amber-100 to-orange-100',
      message: 'You\'re sweeter than any chocolate',
      longDistanceNote: 'I\'m craving your sweetness more than any candy 🍬',
      icon: Candy,
    },
    {
      date: 'February 10',
      name: 'Teddy Day',
      emoji: '🧸',
      color: 'text-brown-600',
      bgGradient: 'from-orange-100 to-yellow-100',
      message: 'Sending you the biggest virtual teddy hug',
      longDistanceNote: 'Until I can hold you myself 🤗',
      icon: Gift,
    },
    {
      date: 'February 11',
      name: 'Promise Day',
      emoji: '🤝',
      color: 'text-purple-600',
      bgGradient: 'from-purple-100 to-pink-100',
      message: 'I promise to always be here for you',
      longDistanceNote: 'No matter how many miles are between us 💜',
      icon: Calendar,
    },
    {
      date: 'February 12',
      name: 'Hug Day',
      emoji: '🤗',
      color: 'text-teal-600',
      bgGradient: 'from-teal-100 to-cyan-100',
      message: 'I miss your warm embrace so much',
      longDistanceNote: 'Can\'t wait for the day I can hold you again 🫂',
      icon: Heart,
    },
    {
      date: 'February 13',
      name: 'Kiss Day',
      emoji: '💋',
      color: 'text-rose-600',
      bgGradient: 'from-rose-100 to-red-100',
      message: 'Sending you infinite virtual kisses',
      longDistanceNote: 'Saving the real ones for when we meet 😘',
      icon: Heart,
    },
    {
      date: 'February 14',
      name: 'Valentine\'s Day',
      emoji: '💖',
      color: 'text-red-600',
      bgGradient: 'from-red-200 to-pink-200',
      message: 'The most special day of all...',
      longDistanceNote: 'And I have a very important question for you! 💍',
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-8 text-red-600"
        >
          Our Valentine's Week Journey 💕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl text-gray-600 mb-16"
        >
          Click each day to see a special message for you, Aaryu 💖
        </motion.p>

        <div className="space-y-8">
          {days.map((day, index) => {
            const Icon = day.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.button
                  onClick={() => setSelectedDay(day)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${day.bgGradient} rounded-3xl p-6 md:p-8 shadow-lg border-4 border-white hover:shadow-2xl transition-all text-left cursor-pointer relative z-20`}
                >
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">{day.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-3xl md:text-4xl ${day.color} mb-2`}>
                        {day.name}
                      </h3>
                      <p className="text-gray-600 text-lg">{day.date}</p>
                    </div>
                    <Icon className={`w-10 h-10 ${day.color}`} />
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ValentineWeekModal
        isOpen={selectedDay !== null}
        onClose={() => setSelectedDay(null)}
        day={selectedDay || days[0]}
      />
    </section>
  );
}