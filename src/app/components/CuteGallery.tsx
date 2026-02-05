import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Heart } from 'lucide-react';

export function CuteGallery() {

    const captions = [
        "You + Me = 💖",
        "Forever & Always 💕",
        "Love you to bits 💓",
        "My heart is yours 💘",
        "Together, always 💞",
        "You complete me ❤️",
        "Happiness is you 😘",
        "My sunshine 🌞💖",
        "Heart + Heart = Us 💝",
        "You are my smile 😊💕",
        "Always in my heart 💗",
        "You make life sweet 🍬💖",
        "My forever crush 💘",
        "Soulmates 💕✨",
        "You & Me = Magic ✨💖",
        "Endless love ♾️💓",
        "You are my everything ❤️"
    ];


    // Dynamically generate photo objects for 1.jpeg to 10.jpeg
    const photos = Array.from({ length: 16}, (_, i) => ({
        url: `src/assets/${i + 1}.jpeg`,
        caption: captions[i], // You can customize captions
        rotation: Math.floor(Math.random() * 9) - 4, // random rotation between -4 and +4
    }));

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-pink-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl text-red-600 mb-4">
                        Our Cute Memories 📸
                    </h2>
                    <p className="text-2xl text-pink-600">
                        Every moment with you, Aaryu, is worth cherishing 💕
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: 'spring', bounce: 0.4 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 10,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group cursor-pointer"
                        >
                            {/* Polaroid Frame */}
                            <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-pink-300/50 transition-shadow duration-300 relative">
                                <ImageWithFallback
                                    src={photo.url}
                                    alt={photo.caption}
                                    className="w-full h-72 object-cover"
                                />

                                {/* Caption */}
                                <div className="absolute bottom-6 left-0 right-0 text-center">
                                    <p className="text-xl text-gray-700 px-4" style={{ fontFamily: 'cursive' }}>
                                        {photo.caption}
                                    </p>
                                </div>

                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-10 bg-yellow-100/70 border-l border-r border-yellow-200"
                                     style={{ transform: 'translateX(-50%) rotate(-2deg)' }}
                                />

                                {/* Hover heart */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                >
                                    <Heart className="w-16 h-16 fill-pink-500 text-pink-600 drop-shadow-lg" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-2xl text-pink-600 italic">
                        Can't wait to create more memories with you, Pilu 💖
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
