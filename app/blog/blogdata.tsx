// data/blogData.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
 
}

export const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Advanced Data Segmentation Strategies for 2024',
    excerpt: 'Learn how to segment your B2B data for maximum conversion rates and ROI.',
    category: 'Data Analytics',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'How artificial intelligence is revolutionizing marketing automation.',
    category: 'Digital Marketing',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    title: 'Building High-Converting Email Campaigns',
    excerpt: 'Proven strategies to increase your email open and click-through rates.',
    category: 'Email Marketing',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  }
];

export const popularPosts: BlogPost[] = [
  {
    id: '4',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Latest SEO techniques to improve your search rankings.',
    category: 'SEO',
    date: 'Mar 8, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Social Media Marketing Trends',
    excerpt: 'What\'s working in social media marketing this year.',
    category: 'Social Media',
    date: 'Mar 5, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'Content Marketing ROI Measurement',
    excerpt: 'How to measure and improve your content marketing ROI.',
    category: 'Content Marketing',
    date: 'Mar 3, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    title: 'B2B Lead Generation Techniques',
    excerpt: 'Effective lead generation strategies for B2B businesses.',
    category: 'Lead Generation',
    date: 'Feb 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551836026-d5c2c0b4d4f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const editorsPicks: BlogPost[] = [
  {
    id: '8',
    title: 'Data-Driven Decision Making',
    excerpt: 'How successful companies use data to drive decisions.',
    category: 'Business Intelligence',
    date: 'Feb 25, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '9',
    title: 'Customer Retention Strategies',
    excerpt: 'Keep your customers coming back with these proven techniques.',
    category: 'Customer Success',
    date: 'Feb 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '10',
    title: 'Marketing Automation Best Practices',
    excerpt: 'Streamline your marketing with automation tools and techniques.',
    category: 'Marketing Automation',
    date: 'Feb 20, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  }
];