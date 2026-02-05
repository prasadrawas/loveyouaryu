import { motion } from 'motion/react';
import { Heart, Video, Map } from 'lucide-react';

export function ValentineHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-100 via-pink-50 to-rose-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1758273706831-3df20dcfdafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwZGlzdGFuY2UlMjBjb3VwbGUlMjBwaG9uZSUyMGNhbGx8ZW58MXx8fHwxNzcwMDQwMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-15" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1.5, bounce: 0.6 }}
          className="mb-8"
        >
          <div className="text-8xl mb-4">💝</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl mb-6 text-red-600"
        >
          Happy Valentine's Week!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-3xl text-pink-600 mb-4">
            Even though miles separate us...
          </p>
          <p className="text-2xl text-gray-700 mb-4">
            My love for you grows stronger every single day 💕
          </p>
          <p className="text-2xl text-pink-600 italic">
            My love, I specially made this beautiful place just for you, Aaryu 💕
          </p>
        </motion.div>

        {/*<motion.div*/}
        {/*  initial={{ opacity: 0 }}*/}
        {/*  animate={{ opacity: 1 }}*/}
        {/*  transition={{ delay: 1.5 }}*/}
        {/*  className="mt-12 flex justify-center gap-8 flex-wrap"*/}
        {/*>*/}
        {/*  <motion.div*/}
        {/*    animate={{ y: [0, -10, 0] }}*/}
        {/*    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}*/}
        {/*    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"*/}
        {/*  >*/}
        {/*    <Video className="w-6 h-6 text-red-500" />*/}
        {/*    <span className="text-gray-700">Late night video calls</span>*/}
        {/*  </motion.div>*/}
        {/*  <motion.div*/}
        {/*    animate={{ y: [0, -10, 0] }}*/}
        {/*    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}*/}
        {/*    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"*/}
        {/*  >*/}
        {/*    <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />*/}
        {/*    <span className="text-gray-700">Endless love</span>*/}
        {/*  </motion.div>*/}
        {/*  <motion.div*/}
        {/*    animate={{ y: [0, -10, 0] }}*/}
        {/*    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}*/}
        {/*    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"*/}
        {/*  >*/}
        {/*    <Map className="w-6 h-6 text-blue-500" />*/}
        {/*    <span className="text-gray-700">Counting down the distance</span>*/}
        {/*  </motion.div>*/}
        {/*</motion.div>*/}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-xl text-gray-600 italic"
        >
          Scroll down for a journey through our Valentine's Week 💖
        </motion.p>
      </div>
    </section>
  );
}