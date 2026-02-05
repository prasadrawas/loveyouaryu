import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PhotoGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1620455970942-5fca5840d5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmUlMjBzdW5zZXR8ZW58MXx8fHwxNzY5OTY1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Beautiful moments together',
    },
    {
      url: 'https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc3MDAxNTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'You deserve all the flowers in the world',
    },
    {
      url: 'https://images.unsplash.com/photo-1562266656-46d38bea58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHNoYXBlZCUyMGxvdmV8ZW58MXx8fHwxNzY5OTk4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'My heart belongs to you',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-16 text-pink-600"
        >
          Our Memories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white text-lg p-6">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
