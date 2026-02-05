import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620455970942-5fca5840d5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmUlMjBzdW5zZXR8ZW58MXx8fHwxNzY5OTY1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <Heart className="w-20 h-20 fill-pink-500 text-pink-600 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl mb-6 text-pink-600 drop-shadow-md"
        >
          To My Dearest Love
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-2xl md:text-3xl text-rose-600 mb-8 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-6 h-6" />
          <span>Every moment with you is magical</span>
          <Sparkles className="w-6 h-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-gray-700 max-w-2xl mx-auto"
        >
          I created this special place just for you, to show you how much you mean to me...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-12"
        >
          <Heart className="w-12 h-12 fill-red-400 text-red-500 mx-auto animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
