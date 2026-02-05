import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

export function ClickableHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newHeart = {
        id: Date.now() + Math.random(), // More unique ID
        x: e.clientX,
        y: e.clientY,
      };
      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 2000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: heart.x - 20,
            top: heart.y - 20,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1.5, 1],
            rotate: [0, 180, 360],
            y: [0, -100],
            opacity: [1, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Heart className="w-10 h-10 fill-pink-500 text-pink-600" />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
