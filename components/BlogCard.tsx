// components/BlogCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  priority?: boolean;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  featured = false,
  priority = false
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[rgb(180,94,207)] text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>

        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-black mb-3 line-clamp-2 group-hover:text-[rgb(180,94,207)] transition-colors duration-200`}>
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 text-[rgb(180,94,207)] font-medium text-sm group-hover:gap-3 transition-all duration-200">
          Read More
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
}