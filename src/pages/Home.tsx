import { motion } from 'framer-motion';
import { ArrowRight, Image, Search, Lightbulb, Layers, Users } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-8 mb-12 md:mb-0 text-center md:text-left">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Unlock the power of your photo library with AI
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl md:mx-0 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Lindy organizes your photos with AI. Discover memories, create collections, and find 
                what you're looking for with natural language search.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" variant="primary">Get started for free</Button>
                <Button size="lg" variant="outline" icon={<ArrowRight />} iconPosition="right">
                  See how it works
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative bg-white shadow-smooth rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lindy AI Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Powerful features to unlock your photo library
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered tools help you organize, search, and rediscover your photos effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Search className="h-8 w-8 text-primary" />}
              title="Natural language search"
              description="Find photos instantly using natural language. Ask for 'sunset photos from last summer' and get exactly what you need."
            />
            <FeatureCard 
              icon={<Lightbulb className="h-8 w-8 text-primary" />}
              title="Smart organization"
              description="AI automatically organizes your photos into collections, making it easy to browse and rediscover memories."
            />
            <FeatureCard 
              icon={<Layers className="h-8 w-8 text-primary" />}
              title="Automatic tagging"
              description="Every photo is analyzed and tagged with people, places, objects, and events for powerful filtering."
            />
            <FeatureCard 
              icon={<Image className="h-8 w-8 text-primary" />}
              title="Visual similarity"
              description="Find visually similar photos to create cohesive collections or identify duplicates."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Face recognition"
              description="Group photos by people and find all pictures of friends and family members instantly."
            />
            <FeatureCard 
              icon={<ArrowRight className="h-8 w-8 text-primary" />}
              title="Cross-platform access"
              description="Access your organized photo library from any device, anywhere, anytime."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-smooth overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Ready to rediscover your photo memories?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of users who are organizing their photo libraries with AI. 
                  Start for free and upgrade anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="primary">Get started for free</Button>
                  <Button size="lg" variant="outline">Contact sales</Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Photo memories" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-card hover:shadow-lg transition-all duration-300">
      <div className="bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;