import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { format } from 'date-fns';
import { featuredPosts } from '../blog/blogdata';
import Link from 'next/link';

export const revalidate = 60;

interface BlogPost {
  id?: string;
  slug?: string;
  title: string;
  excerpt?: string;
  description?: string;
  image?: string;
  image_url?: string;
  coverImage?: string;
  category?: {
    name?: string;
  } | string;
  tags?: string[];
  date?: string;
  published_at?: string;
  createdAt?: string;
  readTime?: string | number;
}

const editorsPicks: BlogPost[] = [];
const posts: BlogPost[] = [];

export default async function ConnectPage() {
  const getCategoryName = (category: BlogPost['category']) => {
    if (!category) return 'General';
    if (typeof category === 'string') return category;
    if (typeof category === 'object' && category.name) return category.name;
    return 'General';
  };

  const getImageUrl = (post: BlogPost) => {
    return (
      post.image ||
      post.image_url ||
      post.coverImage ||
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
    );
  };

  const getFormattedDate = (post: BlogPost) => {
    const dateStr = post.date || post.published_at || post.createdAt;
    if (dateStr) {
      try {
        return format(new Date(dateStr), 'MMM dd, yyyy');
      } catch {
        return 'Recent';
      }
    }
    return 'Recent';
  };

  return (
    <div className="bg-white">

      {/* 🔥 New Purple Hero Section */}
      <section className="relative overflow-hidden bg-[black] py-15 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,94,207)] via-[rgb(150,70,190)] to-[rgb(120,50,170)] opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-sm text-white font-medium">
              AI powered b2b outreach
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            B2B intelligence 
            <br />
            <span className="text-white/90">
              for smarter outreach
            </span>
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            Launch targeted email campaigns segmented by industry for maximum blog traffic and conversions: upload your CSV prospect lists, input your blog/SaaS company details (website, content pillars like SEO guides/lead gen tips)         </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-xl bg-white text-[rgb(180,94,207)] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get Started Free →
            </Link>

            <Link
              href="/demo"
              className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Watch Demo
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Featured Articles
            </h2>

            <Link
              href="/blog/featured"
              className="text-[rgb(180,94,207)] hover:underline font-medium"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                {...post}
                featured
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

    </div>
  );
}
