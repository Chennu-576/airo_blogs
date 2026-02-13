import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { format } from 'date-fns';
import { editorsPicks } from '../blog/blogdata';
import Link from 'next/link';

export const revalidate = 60;

// Define proper TypeScript interfaces for blog data
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

// Use your blog data - adjust the import path
// If your blogdata is in a different location, update the path
// Example: import blogData from '@/data/blogdata';
// For now, I'll use empty arrays and you can import your data

const featuredArticles: BlogPost[] = [];
const editorPicks: BlogPost[] = [];
const posts: BlogPost[] = [];

export default async function ConnectPage() {
  // Helper function to get category name
  const getCategoryName = (category: BlogPost['category']) => {
    if (!category) return 'General';
    if (typeof category === 'string') return category;
    if (typeof category === 'object' && category.name) return category.name;
    return 'General';
  };

  // Helper function to get image URL
  const getImageUrl = (post: BlogPost) => {
    return post.image || post.image_url || post.coverImage || 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg';
  };

  // Helper function to get date
  const getFormattedDate = (post: BlogPost) => {
    const dateStr = post.date || post.published_at || post.createdAt;
    if (dateStr) {
      try {
        return format(new Date(dateStr), 'MMM dd, yyyy');
      } catch (e) {
        return 'Recent';
      }
    }
    return 'Recent';
  };

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="py-12 md:py-16 border-b border-gray-200 bg-[black]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Left side: Heading and Text */}
      <div className="lg:w-[60%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
          B2B intelligence for smarter outreach
        </h1>
        <p className="text-base md:text-lg text-white/90 leading-relaxed mb-3 md:mb-4">
          Airo will guide you on finding and connecting with your target audience.
        </p>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          Increase engagements with your leads through strategic articles, tools, and tactics for GDPR compliance, lead generation, database management, and sales optimization.
        </p>
        
        {/* Optional: Add a call-to-action button */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-white text-[rgb(180,94,207)] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Explore Articles
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Right side: Image */}
      {/* DEMO FORM */}
          <aside className="w-full lg:w-[40%]">
            <div className="sticky top-28 rounded-xl bg-[rgb(180,94,207)] p-6">
              <h3 className="text-xl font-semibold text-white">
                Get a Free Demo
              </h3>

              <form className="mt-6 space-y-4">
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Full Name" />
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Email Address" />
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Phone Number" />
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Website URL" />
                <textarea className="w-full rounded-md px-4 py-2 text-sm" rows={3} placeholder="Additional Info" />
                <button className="w-full bg-[black] text-white py-2 rounded-md font-medium">
                  Request Demo
                </button>
              </form>
            </div>
          </aside>
    </div>
  </div>
</section>

      
      {/* Editor Picks Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Editor&apos;s Pick
              </h2>
              <p className="text-gray-600">
                Hand-selected articles by our editorial team
              </p>
            </div>
            <Link 
              href="/blog/editors-pick" 
              className="text-[rgb(180,94,207)] hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorsPicks.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
        

      {/* Newsletter Section */}
      <section className="py-0 md:py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}