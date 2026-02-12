

'use client';
import BlogCard from '@/components/BlogCard';
import ResourcesSection from '@/components/ResourcesSection';
import Newsletter from '@/components/Newsletter';
// import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, BookOpen, Database, Zap, Target, } from "lucide-react";
import { featuredPosts, popularPosts, editorsPicks } from './blog/blogdata'; // Fixed path
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants} from "framer-motion";

// AIRO Hero Banner Component - Defined right in the same file
const BlogHeroStacked = () => {
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
      title: "how B2B email list are useful?",
      href: "/blog/how-b2b-email-list-are-useful",
      reads: "8.2k"
    },
    
  ];


  

  return (
  <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-0 -right-40 w-80 h-40 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200"
              >
                <TrendingUp className="w-4 h-4 mr-2 inline" />
                50,000+ Monthly Readers
              </Badge>
            </motion.div>

            {/* Main Headline - Black with Purple Highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-black"
            >
              {" "}
              <span style={{ color: "rgb(180, 94, 207)" }}>
                B2B Email Lists
              </span>
              <br />
              <span className="text-black">
                That Actually Converts
              </span>
            </motion.h1>

            {/* Subheadline - Black */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-black leading-relaxed max-w-xl"
            >
              Verified B2B contacts, proven strategies, and actionable insights
              for modern marketers. Updated weekly with real-world data.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-sm text-black/70">Industries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">98%</div>
                  <div className="text-sm text-black/70">Deliverability</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">1,284</div>
                  <div className="text-sm text-black/70">This Week</div>
                </div>
              </div>
            </motion.div>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex"
            >
              <Button 
                size="lg" 
                style={{ backgroundColor: "rgb(180, 94, 207)" }}
                className="hover:opacity-90 text-white px-8 py-6 text-lg group border-0"
              >
                Browse All Guides
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
          </motion.div>

          {/* Right Column - Featured Article Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Featured Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badge on image */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-black backdrop-blur-sm">
                    🔥 Trending Now
                  </Badge>
                </div>

                {/* Stats badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-xs text-black/70">👁️ 12.4K reads</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Real Estate
                  </Badge>
                  <span className="text-xs text-black/50">•</span>
                  <span className="text-xs text-black/50">8 min read</span>
                </div>

                <h3 className="text-2xl font-bold text-black leading-snug">
                  How to Get Best US Real Estate Brokers Email List?
                </h3>

                <p className="text-black/70 line-clamp-2">
                  Complete guide to building verified real estate broker email
                  lists with proven strategies and tools.
                </p>

                <Link href="/blog/real-estate-brokers">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group hover:bg-purple-50 text-black"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Floating secondary card */}
          
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-slate-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

//     <section className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
//           {/* LEFT COLUMN - 80-90% width inside grid */}
//           <motion.div 
//             className="lg:col-span-5 lg:col-start-2"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="w-[90%] lg:w-[85%]">
//               <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-100">
//                 <span className="w-2 h-2 bg-[rgb(180,94,207)] rounded-full animate-pulse"></span>
//                 <span className="text-sm font-medium text-[rgb(180,94,207)]">Blog • Industry Insights</span>
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
//                 <span style={{ color: "rgb(180,94,207)" }}>Email Lists</span>
//                 <br />
//                 <span className="text-black">That Actually Convert</span>
//               </h1>
              
//               <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed w-[95%]">
//                 Verified B2B contacts, real estate leads, and industry-specific email lists. 
//                 Updated weekly with 98% deliverability guarantee.
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <Button 
//                   size="lg"
//                   className="px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//                   style={{ backgroundColor: "rgb(180,94,207)" }}
//                   asChild
//                 >
//                   <Link href="/database">
//                     Browse All Lists →
//                   </Link>
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline"
//                   className="px-8 py-6 text-base font-medium rounded-xl border-2 hover:bg-purple-50 transition-all duration-300"
//                   style={{ borderColor: "rgb(180,94,207)", color: "rgb(180,94,207)" }}
//                   asChild
//                 >
//                   <Link href="/request-custom">
//                     Request Custom List
//                   </Link>
//                 </Button>
//               </div>
              
//               <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-1.5">
//                   <span className="text-[rgb(180,94,207)]">📋</span> 50+ industries
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <span className="text-[rgb(180,94,207)]">✅</span> Verified daily
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <span className="text-[rgb(180,94,207)]">⚡</span> Instant download
//                 </span>
//               </div>
//             </div>
//           </motion.div>

    
          
//           {/* RIGHT COLUMN - 80-90% width inside grid */}
//           <motion.div 
//             className="lg:col-span-5 flex justify-end"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="w-[90%] lg:w-[85%]">
//               {/* Most Popular Card - Stacked Design */}
//               <div className="relative">
//                 {/* Background stack effect */}
//                 <div className="absolute -top-2 -left-2 w-full h-full bg-[rgb(180,94,207)] rounded-2xl opacity-10"></div>
//                 <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-800 rounded-2xl opacity-5"></div>
                
//                 {/* Main Card */}
//                 <div className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-all duration-300">
//                   {/* Header with purple accent */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-3">
//                       <div className="w-1.5 h-8 bg-[rgb(180,94,207)] rounded-full"></div>
//                       <h2 className="text-xl md:text-2xl font-bold text-black">
//                         🔥 Most Popular
//                       </h2>
//                     </div>
//                     <span className="text-xs bg-purple-100 text-[rgb(180,94,207)] px-3 py-1.5 rounded-full font-medium">
//                       50k+ monthly readers
//                     </span>
//                   </div>
                  
//                   {/* Questions List - 5 Questions */}
//                   <div className="space-y-4">
//                     {popularPosts.map((post, index) => (
//                       <Link 
//                         key={post.id}
//                         href={post.href}
//                         className="block group"
//                       >
//                         <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-purple-50/50 transition-all duration-300">
//                           {/* Number badge */}
//                           <div className={`
//                             flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
//                             ${index === 0 ? 'bg-[rgb(180,94,207)] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[rgb(180,94,207)] group-hover:text-white transition-colors duration-300'}
//                           `}>
//                             {index + 1}
//                           </div>
                          
//                           {/* Content */}
//                           <div className="flex-1">
//                             <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[rgb(180,94,207)] transition-colors duration-300 line-clamp-2">
//                               {post.title}
//                             </h3>
//                             <div className="flex items-center gap-3 mt-1.5">
//                               <span className="text-xs text-gray-500 flex items-center gap-1">
//                                 <span>👁️</span> {post.reads} reads
//                               </span>
//                               <span className="text-xs text-[rgb(180,94,207)] group-hover:underline">
//                                 Read more →
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
                  
//                   {/* View All Link */}
//                   <div className="mt-6 pt-4 border-t border-gray-100">
//                     <Link 
//                       href="/blog/popular"
//                       className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(180,94,207)] hover:gap-3 transition-all duration-300"
//                     >
//                       View all 50+ articles
//                       <span>→</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Live update badge */}
//               <div className="flex justify-end mt-4">
//                 <div className="bg-gradient-to-r from-purple-50 to-white rounded-full px-5 py-2.5 text-xs text-gray-700 border border-gray-200 shadow-sm">
//                   <span className="font-bold text-[rgb(180,94,207)]">1,284</span> new contacts added this week
//                   <span className="ml-2 text-green-600">⬆️ +12%</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      {/* If you have Hero component, add it here:
     
      */}
        <BlogHeroStacked />

      

{/* Featured Articles Section */}
<section className="pt-4 pb-6 md:pt-6 md:pb-8 bg-white mt-12 lg:mt-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-6">
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
    
    {/* 3-COLUMN GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* LEFT - First blog card (index 0) */}
      {featuredPosts.slice(0, 1).map((post, index) => (
        <BlogCard 
          key={post.id} 
          {...post} 
          featured 
          priority={index < 3}
        />
      ))}
      
      
      
      {/* RIGHT - Third blog card (index 2) */}
      {featuredPosts.slice(1, 2).map((post, index) => (
        <BlogCard 
          key={post.id} 
          {...post} 
          featured 
          priority={index < 3}
        />
      ))}

      {/* MIDDLE - YOUR EXACT DEMO FORM (NO CHANGES) */}
      <aside className="block">
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

      {/* Editor's Pick Section */}
<section className="py-6 md:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    

    {/* 3-COLUMN GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* LEFT - About Airo Card (like DataCaptive) */}
     <div className="lg:col-span-1">
      <div className="bg-[rgb(180,94,207)] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-white">
          About Airo
        </h3>
        <p className="text-white/80 font-semibold text-sm mb-3">
          Airo helps you achieve your marketing goals through AI-powered campaigns.
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Connect with interested qualified prospects who are seeking information to move forward in the buying process, and engage more individuals by email, LinkedIn, and omnichannel outreach.
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Airo provides AI-Driven Campaign Intelligence & Email Warmup solutions with optimized strategies for effective results.
        </p>
        <div className="mt-auto pt-2">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            ⭐ Top 10 Trusted AI Marketing Platform 2026
          </span>
        </div>
      </div>
     </div>
      
      {/* MIDDLE - First blog card (index 0) */}
      {editorsPicks.slice(0, 1).map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
      
      {/* RIGHT - Second blog card (index 1) */}
      <div className="lg:col-span-1 h-full">
      {editorsPicks.slice(1, 2).map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
      </div>
    </div>
  </div>
</section>

<section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* 4-COLUMN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
      
      {/* LEFT - 2 columns - Blog Card */}
      <div className="lg:col-span-2">
        {editorsPicks.slice(2, 3).map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
      
      {/* RIGHT - 2 columns - Most Popular Card */}
      <div className="lg:col-span-2">
        <motion.div 
          className="flex justify-start lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full lg:w-[95%]">
            {/* Most Popular Card - Stacked Design */}
            <div className="relative">
              {/* Background stack effect */}
              <div className="absolute -top-2 -left-2 w-full h-full bg-[rgb(180,94,207)] rounded-2xl opacity-10"></div>
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-800 rounded-2xl opacity-5"></div>
              
              {/* Main Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header with purple accent */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-[rgb(180,94,207)] rounded-full"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-black">
                      🔥 Most Popular
                    </h2>
                  </div>
                  <span className="text-xs bg-purple-100 text-[rgb(180,94,207)] px-3 py-1.5 rounded-full font-medium">
                    50k+ monthly readers
                  </span>
                </div>
                
                {/* Questions List - 5 Questions */}
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link 
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-purple-50/50 transition-all duration-300">
                        {/* Number badge */}
                        <div className={`
                          flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                          ${index === 0 ? 'bg-[rgb(180,94,207)] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[rgb(180,94,207)] group-hover:text-white transition-colors duration-300'}
                        `}>
                          {index + 1}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[rgb(180,94,207)] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <span>👁️</span> {post.readTime} reads
                            </span>
                            <span className="text-xs text-[rgb(180,94,207)] group-hover:underline">
                              Read more →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link 
                    href="/blog/popular"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(180,94,207)] hover:gap-3 transition-all duration-300"
                  >
                    View all 50+ articles
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Live update badge */}
            <div className="flex justify-end mt-4">
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-full px-5 py-2.5 text-xs text-gray-700 border border-gray-200 shadow-sm">
                <span className="font-bold text-[rgb(180,94,207)]">1,284</span> new contacts added this week
                <span className="ml-2 text-green-600">⬆️ +12%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </div>
  </div>
</section>
      
      {/* <ResourcesSection /> */}
      
      <section className="py-4 md:py-8 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
        Explore More Topics
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Ready to brush up on something new? We've got more to read right this way.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-4">

      {/* Card */}
      <a
        href="/go-to-market"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Go To Market
        </span>
      </a>

      <a
        href="/healthcare-marketing"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Healthcare Marketing
        </span>
      </a>

      <a
        href="/market-research"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Market Research
        </span>
      </a>

      <a
        href="/sales-tools"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Sales Tools
        </span>
      </a>

      <a
        href="/sales-strategy"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Sales Strategy
        </span>
      </a>

      <a
        href="/sales-rep-development"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Sales Rep Development
        </span>
      </a>

      <a
        href="/productivity"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Productivity
        </span>
      </a>

      <a
        href="/email-marketing"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Email Marketing
        </span>
      </a>

      <a
        href="/data-driven-solutions"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Data-Driven Solutions
        </span>
      </a>

      {/* Last card centered */}
      <a
        href="/customer-retention"
        className="relative bg-white rounded-[24px] border border-gray-300
                   hover:shadow-lg transition-all duration-300
                   h-[70px] flex items-center justify-center overflow-hidden
                   lg:col-start-2"
      >
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-[rgb(180,94,207)]" />
        <span className="text-[rgb(180,94,207)] font-medium text-lg">
          Customer Retention
        </span>
      </a>

    </div>
  </div>
</section>


      <Newsletter />

      {/* <Footer /> */}
    </div>
  );
}