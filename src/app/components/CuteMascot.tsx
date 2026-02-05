import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const messages = [
  "Aaryu is so lucky! 🌟",
  "Pilu loves you so much! 💕",
  "Perfect match! 💑",
  "Love is in the air! 🎈",
  "You two are adorable! 🥰",
  "Aww so cute, Aaryu! 💖",
  "Best couple ever! 👏",
  "Made for each other! ✨",
];

export function CuteMascot() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [isWinking, setIsWinking] = useState(false);

  const handleClick = () => {
    setIsWinking(true);
    setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    setShowMessage(true);
    
    setTimeout(() => {
      setIsWinking(false);
    }, 300);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 left-0 bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-pink-300 whitespace-nowrap"
          >
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-300 transform rotate-45" />
            <p className="text-lg">{currentMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="text-7xl cursor-pointer filter drop-shadow-lg hover:drop-shadow-2xl transition-all"
      >
        {isWinking ? '😉' : '🐻'}
      </motion.button>
    </div>
  );
}