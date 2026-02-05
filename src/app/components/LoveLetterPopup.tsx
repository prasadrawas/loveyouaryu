import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X, Heart } from 'lucide-react';

export function LoveLetterPopup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Button to open the love letter */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
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
                className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/50"
            >
                <Mail className="w-8 h-8" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Popup letter */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 border-4 border-pink-300"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Header with heart icon */}
                            <div className="text-center mb-6">
                                <Heart className="w-16 h-16 fill-pink-500 text-pink-600 mx-auto mb-4" />
                                <h3 className="text-3xl text-pink-600 mb-4">A Love Letter For You, Aaryu 💌</h3>
                            </div>

                            {/* Love letter content */}
                            <div className="bg-white p-6 rounded-2xl shadow-inner space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">My Dearest Aaryu,</p>

                                <p>
                                    Every day with you feels so special. You make my life brighter with your smile and laughter.
                                </p>

                                <p>
                                    I love how much you enjoy chocolates, flowers, and all things sweet.
                                    Thinking of you always makes me happy.
                                </p>

                                <p>
                                    Being with you makes me want to be better. You are kind, caring, and so important to me.
                                </p>

                                <p>
                                    I can’t imagine my life without you, Aaryu. You are my love, my friend, and my favorite person.
                                </p>

                                <p className="text-lg pt-4">
                                    Forever yours,<br />
                                    <span className="text-pink-600">❤️ Pilu</span>
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
