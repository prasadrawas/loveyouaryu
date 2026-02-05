import { motion } from 'motion/react';

export function BouncingEmojis() {
  const emojis = ['💕', '💖', '💗', '💓', '💝', '🥰', '😍', '💑', '👩‍❤️‍👨'];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden z-0">
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          style={{
            left: `${(index * 11) + 5}%`,
            bottom: 0,
          }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 2 + (index % 3) * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
