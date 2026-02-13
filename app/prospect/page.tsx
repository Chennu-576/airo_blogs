// import BlogCard from '@/components/BlogCard';
// import Newsletter from '@/components/Newsletter';
// import { format } from 'date-fns';
// import { editorsPicks } from '../blog/blogdata';
// import Link from 'next/link';

// export const revalidate = 60;

// // Define proper TypeScript interfaces for blog data
// interface BlogPost {
//   id?: string;
//   slug?: string;
//   title: string;
//   excerpt?: string;
//   description?: string;
//   image?: string;
//   image_url?: string;
//   coverImage?: string;
//   category?: {
//     name?: string;
//   } | string;
//   tags?: string[];
//   date?: string;
//   published_at?: string;
//   createdAt?: string;
//   readTime?: string | number;
// }

// // Use your blog data - adjust the import path
// // If your blogdata is in a different location, update the path
// // Example: import blogData from '@/data/blogdata';
// // For now, I'll use empty arrays and you can import your data

// const featuredArticles: BlogPost[] = [];
// const editorPicks: BlogPost[] = [];
// const posts: BlogPost[] = [];

// export default async function ConnectPage() {
//   // Helper function to get category name
//   const getCategoryName = (category: BlogPost['category']) => {
//     if (!category) return 'General';
//     if (typeof category === 'string') return category;
//     if (typeof category === 'object' && category.name) return category.name;
//     return 'General';
//   };

//   // Helper function to get image URL
//   const getImageUrl = (post: BlogPost) => {
//     return post.image || post.image_url || post.coverImage || 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg';
//   };

//   // Helper function to get date
//   const getFormattedDate = (post: BlogPost) => {
//     const dateStr = post.date || post.published_at || post.createdAt;
//     if (dateStr) {
//       try {
//         return format(new Date(dateStr), 'MMM dd, yyyy');
//       } catch (e) {
//         return 'Recent';
//       }
//     }
//     return 'Recent';
//   };

//   return (
//     <div className="bg-white">
//       {/* Banner Section */}
//       <section className="py-12 md:py-16 border-b border-gray-200 bg-[black]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//       {/* Left side: Heading and Text */}
//       <div className="lg:w-1/2">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
//           Know more about email list
//         </h1>
//         <p className="text-base md:text-lg text-white/90 leading-relaxed mb-3 md:mb-4">
//           360Airo will guide you on finding and connecting with your target audience.
//         </p>
//         <p className="text-base md:text-lg text-white/90 leading-relaxed">
//           Increase engagements with your leads through strategic articles, tools, and tactics for GDPR compliance, lead generation, database management, and sales optimization.
//         </p>
        
//         {/* Optional: Add a call-to-action button */}
//         <div className="mt-8 flex flex-wrap gap-4">
//           <button className="px-6 py-3 bg-white text-[rgb(180,94,207)] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
//             Explore Articles
//           </button>
//           <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
//             Learn More
//           </button>
//         </div>
//       </div>
      
//       {/* Right side: Image */}
//       <div className="lg:w-1/2 mt-8 lg:mt-0">
//         <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
//           <img 
//             src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//             alt="Business team connecting and collaborating" 
//             className="w-full h-64 md:h-96 object-cover"
//           />
//           {/* Changed gradient to complement the purple background */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[rgb(180,94,207)]/40 to-[rgb(180,94,207)]/20"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

      
//       {/* Editor Picks Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
//                 editors&apos;s Posts
//               </h2>
//               <p className="text-gray-600">
//                 Hand-selected articles by our editorial team
//               </p>
//             </div>
//             <Link 
//               href="/blog/editors-picks" 
//               className="text-[rgb(180,94,207)] hover:underline font-medium"
//             >
//               View All
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {editorsPicks.map((post) => (
//               <BlogCard key={post.id} {...post} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Articles Section */}
//       {/* <section className="py-4 md:py-4 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-black">
//               Featured Articles
//             </h2>
              
//             <Link 
//               href="/blog/featured" 
//               className="text-[rgb(180,94,207)] hover:underline font-medium"
//             >
//               View All
//             </Link>
//           </div>
              
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredPosts.map((post, index) => (
//               <BlogCard 
//                 key={post.id} 
//                 {...post} 
//                 featured 
//                 priority={index < 3}
//               />
//             ))}
//           </div>
//         </div>
//       </section> */}


//       {/* Newsletter Section */}
//       <section className="py-2 md:py-4 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Newsletter />
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { editorsPicks } from '../blog/blogdata';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const revalidate = 60;

interface BlogPost {
  id?: string;
  slug?: string;
  title: string;
  excerpt?: string;
  image?: string;
  category?: {
    name?: string;
  } | string;
  date?: string;
}

/* ---------------- HERO COMPONENT ---------------- */

const HeroBanner = () => {
  const popularPosts = [
    {
      id: 1,
      title: "How to Get Best US Real Estate Brokers Email List?",
      href: "/blog/how-to-get-best-us-real-estate-brokers-email-list",
      reads: "12.4k"
    },
    {
      id: 2,
      title: "How to Find Fortune 500 Companies Email Addresses?",
      href: "/blog/how-to-find-fortune-500-companies-email-addresses",
      reads: "8.2k"
    },
    {
      id: 3,
      title: "How to Get Homeowners Mailing List for FREE in 2026?",
      href: "/blog/how-to-get-homeowners-mailing-list-free-2026",
      reads: "6.7k"
    },
    {
      id: 4,
      title: "Building High-Converting Email Campaigns?",
      href: "/blog/building-high-converting-email-campaigns",
      reads: "8.2k"
    },
  ];

  return (
    <section className="w-full bg-blue-100 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT */}
          <motion.div
            className="lg:col-span-5 lg:col-start-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[90%] lg:w-[85%]">
              <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-100">
                <span className="w-2 h-2 bg-[rgb(180,94,207)] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-[rgb(180,94,207)]">
                  Blog • Industry Insights
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span style={{ color: "rgb(180,94,207)" }}>Sample Email List</span>
                <br />
                <span className="text-black">That Actually Convert Leads</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed w-[95%]">
                Verified B2B contacts, real estate leads, and industry-specific email lists.
                Updated weekly with 98% deliverability guarantee.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="px-8 py-6 rounded-xl"
                  style={{ backgroundColor: "rgb(180,94,207)" }}
                  asChild
                >
                  <Link href="/database">
                    Browse All Lists →
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 rounded-xl border-2"
                  style={{
                    borderColor: "rgb(180,94,207)",
                    color: "rgb(180,94,207)",
                  }}
                  asChild
                >
                  <Link href="/request-custom">
                    Request Custom List
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
                <span>📋 50+ industries</span>
                <span>✅ Verified daily</span>
                <span>⚡ Instant download</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="lg:col-span-5 flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-[90%] lg:w-[85%] relative">

              <div className="absolute -top-2 -left-2 w-full h-full bg-[rgb(180,94,207)] rounded-2xl opacity-10"></div>
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-800 rounded-2xl opacity-5"></div>

              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
                  🔥 Most Popular
                </h2>

                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={post.id} href={post.href} className="block group">
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            index === 0
                              ? "bg-[rgb(180,94,207)] text-white"
                              : "bg-gray-100 text-gray-600 group-hover:bg-[rgb(180,94,207)] group-hover:text-white"
                          }`}
                        >
                          {index + 1}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[rgb(180,94,207)]">
                            {post.title}
                          </h3>
                          <div className="text-xs text-gray-500 mt-1.5">
                            👁️ {post.reads} reads
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- PAGE COMPONENT ---------------- */

export default function ConnectPage() {
  return (
    <div className="bg-white">

      <HeroBanner />

      {/* Editor Picks */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Editors Posts
              </h2>
              <p className="text-gray-600">
                Hand-selected articles by our editorial team
              </p>
            </div>
            <Link
              href="/blog/editors-picks"
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

      {/* Newsletter */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

    </div>
  );
}
