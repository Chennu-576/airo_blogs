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
    id: 'free-email',
    title: 'Free Email Mailbox Calculator to Scale Outreach Safely',
    excerpt: 'Learn how to calculate the optimal number of email mailboxes needed for your outreach campaigns.',
    category: 'Email Marketing',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'email-verification',
    title: 'Free Email Verification: How to Verify Email Addresses for Free with 360Airo',
    excerpt: 'How artificial intelligence is revolutionizing marketing automation.',
    category: 'Digital Marketing',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'spf-record',
    title: 'Free SPF Record Generator – Create SPF Instantly & Avoid Email Failures',
    excerpt: 'How to generate and manage SPF records for better email deliverability.',
    category: 'Email Authentication',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    // excerpt: 'Proven strategies to increase your email open and click-through rates.',
    // category: 'Email Marketing',
    // date: 'Mar 10, 2024',
    // readTime: '10 min read',
    // image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
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
    id: 'cold-email',
    title: '10 Cheapest Cold Email Software Tools for Startups & Agencies:2026 Guide',
    excerpt: 'Proven strategies to increase your email open and click-through rates.',
    category: 'Email Marketing',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  
];

export const editorsPicks: BlogPost[] = [
  {
    id: 'spf-record',
    title: 'Free SPF Record Generator – Create SPF Instantly & Avoid Email Failures',
    excerpt: 'How to generate and manage SPF records for better email deliverability.',
    category: 'Email Authentication',
    date: 'Feb 25, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'deliverability',
    title: 'Free Email Deliverability Test for Cold Email & Marketing',
    excerpt: 'Keep your customers coming back with these proven techniques.',
    category: 'Email Deliverability',
    date: 'Feb 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'free-leads',
    title: 'How to Choose a Free Lead Conversion Platform That Actually Works',
    excerpt: 'Streamline your marketing with automation tools and techniques.',
    category: 'Marketing Automation',
    date: 'Feb 20, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cold-email',
    title: '10 Cheapest Cold Email Software Tools for Startups & Agencies:2026 Guide',
    excerpt: 'Proven strategies to increase your email open and click-through rates.',
    category: 'Email Marketing',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
    id: 'free-email',
    title: 'Free Email Mailbox Calculator to Scale Outreach Safely',
    excerpt: 'Learn how to calculate the optimal number of email mailboxes needed for your outreach campaigns.',
    category: 'Email Marketing',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },

];

export const allBlogs: BlogPost[] = [
  ...featuredPosts,
  ...popularPosts,
  ...editorsPicks,
];