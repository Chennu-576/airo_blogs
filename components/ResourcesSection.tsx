'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, BarChart3, Presentation } from 'lucide-react';
import Link from 'next/link';

interface ResourceItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  slug?: string;
}

export default function ResourcesSection() {
  const resources: ResourceItem[] = [
    {
      title: 'Ebooks',
      icon: BookOpen,
      description: 'In-depth guides on marketing strategies',
      color: 'from-blue-500 to-blue-600',
      slug: '/resources/ebooks'
    },
    {
      title: 'Whitepapers',
      icon: FileText,
      description: 'Research & analysis reports',
      color: 'from-purple-500 to-purple-600',
      slug: '/resources/whitepapers'
    },
    {
      title: 'Infographics',
      icon: BarChart3,
      description: 'Visual insights and data visualization',
      color: 'from-pink-500 to-pink-600',
      slug: '/resources/infographics'
    },
    {
      title: 'Slideshares',
      icon: Presentation,
      description: 'Presentations and slide decks',
      color: 'from-indigo-500 to-indigo-600',
      slug: '/resources/slideshares'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Explore More Resources
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover valuable content across multiple formats to help you stay informed and make better business decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link 
                href={resource.slug || '#'}
                className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
              >
                <div 
                  className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {resource.description}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View resources →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View All Resources
            <BookOpen className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}