import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';

export function ProposalSection() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonText, setNoButtonText] = useState('No');
  const [answered, setAnswered] = useState(false);
  const noButtonRef = useRef<HTMLDivElement>(null);

  const noButtonTexts = [
    'No',
    'Are you sure? 🤔',
    'Really? 😢',
    'Think again! 💭',
    'Please? 🥺',
    'But why? 😭',
    'Wrong button! ❌',
    'Try the other one! 👉',
    'Come on! 💕',
    'You know you want to! 😊',
  ];
  const [textIndex, setTextIndex] = useState(0);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => setShowConfetti(true), 500);
  };

  const handleNoHover = () => {
    // Move the No button to a random position
    const maxX = 300;
    const maxY = 200;
    const randomX = (Math.random() - 0.5) * maxX;
    const randomY = (Math.random() - 0.5) * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
    
    // Change text and make Yes button bigger
    setTextIndex((prev) => (prev + 1) % noButtonTexts.length);
    setNoButtonText(noButtonTexts[(textIndex + 1) % noButtonTexts.length]);
    setYesButtonSize((prev) => Math.min(prev + 0.15, 2));
  };

  const handleYesClick = () => {
    setAnswered(true);
    
    // Create multiple celebration elements
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const celebration = document.createElement('div');
        celebration.innerHTML = ['🎉', '🎊', '💕', '💖', '✨'][i];
        celebration.className = 'fixed text-9xl animate-ping z-50 pointer-events-none';
        celebration.style.left = `${Math.random() * 80 + 10}%`;
        celebration.style.top = `${Math.random() * 80 + 10}%`;
        document.body.appendChild(celebration);
        setTimeout(() => celebration.remove(), 1000);
      }, i * 200);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 px-6">
      {/* Confetti effect */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#ff69b4', '#ff1493', '#db7093', '#ffc0cb', '#ff6347'][Math.floor(Math.random() * 5)],
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  opacity: [1, 1, 1, 0],
                  y: [0, -100, -200, -300],
                  x: [0, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                exit={{ opacity: 0 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-center max-w-3xl">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-24 h-24 fill-pink-500 text-pink-600 mx-auto drop-shadow-lg" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl text-pink-600 mb-6">
                I have something special to ask you...
              </h2>

              <motion.button
                onClick={handleReveal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-6 rounded-full text-2xl shadow-2xl hover:shadow-pink-500/50 transition-all"
              >
                Click Here 💝
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.2, 1.2, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.2, 0.4, 0.6, 1],
                }}
              >
                <div className="text-8xl mb-6">💍</div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl text-pink-600 mb-6"
              >
                Will You Marry Me?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl text-gray-700 mb-8"
              >
                You are my everything, my best friend, my soulmate.
                <br />
                I want to spend the rest of my life making you happy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-6 justify-center flex-wrap relative"
              >
                {!answered ? (
                  <>
                    <motion.button
                      onClick={handleYesClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ 
                        scale: { 
                          duration: 1, 
                          repeat: Infinity 
                        } 
                      }}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-16 py-6 rounded-full text-3xl shadow-2xl hover:shadow-pink-500/50 transition-all relative z-10"
                      style={{ transform: `scale(${yesButtonSize})` }}
                    >
                      Yes! 💕
                    </motion.button>
                    
                    <motion.div
                      ref={noButtonRef}
                      onHoverStart={handleNoHover}
                      whileHover={{ scale: 0.9 }}
                      className="bg-gray-400 text-white px-12 py-4 rounded-full text-2xl shadow-2xl cursor-pointer select-none"
                      style={{ 
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      {noButtonText}
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="text-9xl">🥳🎉💍</div>
                    <h3 className="text-5xl text-pink-600">
                      I knew you'd say YES! 💖
                    </h3>
                    <p className="text-2xl text-gray-700">
                      You just made me the happiest person alive! 🌟
                    </p>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <PartyPopper className="w-16 h-16 text-pink-500 mx-auto" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {!answered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="pt-6 flex justify-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  <p className="text-gray-600 italic">Forever and always</p>
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}