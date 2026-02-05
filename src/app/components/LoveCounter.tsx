import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export function LoveCounter() {
    const [count, setCount] = useState(0);
    const [isPumping, setIsPumping] = useState(false);
    const [lastToastAt, setLastToastAt] = useState(0);

    const messages = [
        "Forever yours 💓",
        "You + Me = ❤️",
        "You're my sweet little heart 🍬💗",
        "You're my gulab jamun 🍬❤️",
        "You're my Silk 🍬❤️",
        "You're my KitKat 🍬❤️",
        "You're my Ferrero Rocher 🍬❤️",
        "You're my hot masala chai ☕💓",
        "You're my samosa with extra chutney 🥟💖",
        "You're my ladoo of happiness 🍯💗",
        "You're my butter naan to my curry 🫓💞",
        "You're my jalebi swirl of sweetness 🍥💖",
        "You're my peda of love 🍬💓",
        "You're my spicy pani puri burst 🥳💖",
        "You're my mango lassi on a sunny day 🥭💕",
        "You're my rasgulla of joy 🍡💗",
        "Love you Aryu 💓🔒",
        "Love you more more 💓🔒",
        "Love ya loads 💖✨",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                const newCount = prev + 1;

                // Trigger toast every 100%
                if (newCount % 100 === 0 && newCount > 0) {
                    const now = Date.now();
                    if (now - lastToastAt > 3000) {
                        setIsPumping(true);

                        const message = messages[Math.floor(Math.random() * messages.length)];

                        toast(message, {
                            duration: 3000,
                            style: {
                                background: 'linear-gradient(135deg, #ff77a9, #ff4d94)',
                                color: 'white',
                                border: '2px solid #fff',
                                fontSize: '18px',
                                fontWeight: '700',
                                padding: '18px 28px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 8px 25px rgba(255, 105, 180, 0.6), 0 0 15px rgba(255, 182, 193, 0.5)',
                                backdropFilter: 'blur(6px)',
                                transform: 'scale(0)',
                                opacity: 0,
                                animation: 'toastPop 0.5s forwards',
                            },
                        });

                        setLastToastAt(now);

                        setTimeout(() => {
                            setIsPumping(false);
                        }, 1000);
                    }
                }

                return newCount;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [lastToastAt]);

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: isPumping ? [1, 1.2, 1] : 1,
                        boxShadow: isPumping
                            ? [
                                '0 0 20px rgba(236, 72, 153, 0.5)',
                                '0 0 40px rgba(236, 72, 153, 0.8)',
                                '0 0 20px rgba(236, 72, 153, 0.5)',
                            ]
                            : '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    transition={{
                        opacity: { delay: 2.5 },
                        y: { delay: 2.5 },
                        scale: { duration: 0.8 },
                        boxShadow: { duration: 0.8 },
                    }}
                    className="fixed top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 z-50 border-2 border-pink-300"
                >
                    <div className="flex items-center gap-3">
                        <Heart
                            className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse"
                            style={{
                                filter: 'drop-shadow(0 0 10px #ec4899)',
                            }}
                        />
                        <div>
                            <p className="text-xs text-pink-400 font-semibold drop-shadow-md">Love Level</p>
                            <p
                                className="text-3xl font-bold text-pink-600 animate-pulse"
                                style={{
                                    background: 'linear-gradient(90deg, #f472b6, #f43f5e)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 10px rgba(244, 63, 94, 0.7)',
                                }}
                            >
                                {count.toLocaleString()}%
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Inline CSS for toast animation */}
            <style>{`
                @keyframes toastPop {
                    0% { transform: scale(0) translateY(0); opacity: 0; }
                    50% { transform: scale(1.2) translateY(-5px); opacity: 1; }
                    100% { transform: scale(1) translateY(-8px); opacity: 1; }
                }
            `}</style>
        </>
    );
}
