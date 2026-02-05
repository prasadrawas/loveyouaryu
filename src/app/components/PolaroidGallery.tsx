import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PolaroidGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1620455970942-5fca5840d5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmUlMjBzdW5zZXR8ZW58MXx8fHwxNzY5OTY1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Us ❤️',
      rotation: -5,
    },
    {
      url: 'https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc3MDAxNTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'For you 🌹',
      rotation: 3,
    },
    {
      url: 'https://images.unsplash.com/photo-1562266656-46d38bea58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHNoYXBlZCUyMGxvdmV8ZW58MXx8fHwxNzY5OTk4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Forever 💕',
      rotation: -3,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-16 text-pink-600"
        >
          Our Polaroid Memories 📸
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0, 
                zIndex: 10,
                transition: { duration: 0.3 } 
              }}
              className="bg-white p-4 pb-16 shadow-xl cursor-pointer relative"
              style={{
                width: '300px',
              }}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-72 object-cover"
              />
              <p className="absolute bottom-6 left-0 right-0 text-center text-xl text-gray-700 handwriting">
                {photo.caption}
              </p>
              
              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-yellow-100/60 border-l border-r border-yellow-200 rotate-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
