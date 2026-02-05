import { motion } from 'motion/react';
import { Heart, Calendar, Star, Smile } from 'lucide-react';

export function OurStory() {
  const milestones = [
    {
      icon: Star,
      title: 'The Day We Met',
      description: 'The moment that changed everything',
      color: 'from-pink-400 to-rose-400',
    },
    {
      icon: Smile,
      title: 'Our First Date',
      description: 'When I knew you were special',
      color: 'from-rose-400 to-red-400',
    },
    {
      icon: Heart,
      title: 'Falling in Love',
      description: 'Every day with you is a blessing',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Calendar,
      title: 'Today',
      description: 'The beginning of forever',
      color: 'from-pink-500 to-purple-500',
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
          Our Beautiful Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300 hidden md:block" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl mb-2 text-pink-600">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br items-center justify-center shadow-lg"
                  style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Mobile icon */}
                <div className="md:hidden mr-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
