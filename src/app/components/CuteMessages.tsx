import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const cuteMessages = [
  { emoji: '✨', text: 'You make my heart skip!' },
  { emoji: '🌈', text: 'You color my world!' },
  { emoji: '🦋', text: 'You give me butterflies!' },
  { emoji: '🌙', text: 'You light up my nights!' },
  { emoji: '☀️', text: 'You brighten my days!' },
  { emoji: '🎵', text: 'You are my favorite song!' },
  { emoji: '🍀', text: "I'm so lucky to have you!" },
  { emoji: '🎨', text: 'You make life beautiful!' },
];

export function CuteMessages() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % cuteMessages.length);
        setShow(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 10 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-8xl mb-4">{cuteMessages[currentMessage].emoji}</div>
            <p className="text-4xl text-pink-400 whitespace-nowrap">
              {cuteMessages[currentMessage].text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
