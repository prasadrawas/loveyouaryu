import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles } from 'lucide-react';

interface ValentineWeekModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: {
    name: string;
    emoji: string;
    color: string;
    message: string;
  };
}

export function ValentineWeekModal({ isOpen, onClose, day }: ValentineWeekModalProps) {
  const messages: { [key: string]: string } = {
    'Rose Day': `My dearest Aaryu, just like these roses, my love for you blooms more beautiful each day. Even though I can't hand you real roses right now, know that every petal represents a reason why I love you. You're my garden of happiness 🌹💕`,
    'Propose Day': `Aaryu, from the moment we connected, my heart knew you were special. Despite the miles between us, you're the closest person to my soul. Today, I want to remind you that choosing you was the best decision of my life. You're my forever 💍✨`,
    'Chocolate Day': `Sweet Aaryu, if I could describe you in one word, it would be "irresistible" - just like the finest chocolate! You add sweetness to my life in ways I never imagined. Every conversation with you is like savoring the most delicious treat. You're sweeter than any chocolate 🍫💖`,
    'Teddy Day': `My cuddly Aaryu, I wish I could wrap you in the warmest hug right now! Until then, imagine this virtual teddy bear holding all my love for you. When we're finally together, I promise endless hugs and cuddles. You're my comfort, my home 🧸💕`,
    'Promise Day': `Aaryu, my love, I promise you this - no distance is too far, no time zone too different, no wait too long. I promise to always be there for you, to make you laugh, to support your dreams, and to love you unconditionally. This is my forever promise to you 🤝💖`,
    'Hug Day': `Dearest Aaryu, I'm counting down the days until I can hold you in my arms. Your virtual presence fills my heart, but I can't wait to feel your real embrace. Until then, sending you the biggest, warmest, most loving virtual hug. You complete me 🤗💕`,
    'Kiss Day': `My precious Aaryu, saving all my kisses for you! Every good morning, every goodnight, every "I love you" comes with a thousand virtual kisses. The distance makes my heart grow fonder, and when we meet, I'll make up for every single one. You're my dream come true 💋💖`,
    "Valentine's Day": `My beloved Aaryu, today is special, but every day with you feels like Valentine's Day! You've filled my life with so much love, joy, and meaning. The distance between us is temporary, but my love for you is eternal. You're my Valentine today and forever 💖✨`,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
          >
            <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative overflow-hidden">
              {/* Decorative hearts */}
              <div className="absolute top-4 left-4 text-pink-300 opacity-30">
                <Heart className="w-12 h-12 fill-current" />
              </div>
              <div className="absolute bottom-4 right-4 text-red-300 opacity-30">
                <Heart className="w-12 h-12 fill-current" />
              </div>
              <div className="absolute top-1/2 right-8 text-rose-300 opacity-20">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="absolute top-1/4 left-8 text-pink-300 opacity-20">
                <Sparkles className="w-8 h-8" />
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                  className="text-center mb-6"
                >
                  <div className="text-7xl mb-4">{day.emoji}</div>
                  <h3 className={`text-4xl ${day.color} mb-2`}>
                    {day.name}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-inner"
                >
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                    {messages[day.name] || day.message}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mt-6"
                >
                  <p className="text-xl text-pink-600 italic">
                    Forever yours 💕
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
