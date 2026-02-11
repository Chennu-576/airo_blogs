// import Header from '@/components/Header';
// If you need Hero component, import it:
// import Hero from '@/components/Hero';

'use client';
import BlogCard from '@/components/BlogCard';
import ResourcesSection from '@/components/ResourcesSection';
import Newsletter from '@/components/Newsletter';
// import Footer from '@/components/Footer';
import { featuredPosts, editorsPicks } from './blog/blogdata'; // Fixed path
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - 80-90% width inside grid */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[90%] lg:w-[85%]">
              <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-100">
                <span className="w-2 h-2 bg-[rgb(180,94,207)] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-[rgb(180,94,207)]">Blog • Industry Insights</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span style={{ color: "rgb(180,94,207)" }}>Email Lists</span>
                <br />
                <span className="text-black">That Actually Convert</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed w-[95%]">
                Verified B2B contacts, real estate leads, and industry-specific email lists. 
                Updated weekly with 98% deliverability guarantee.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                  className="px-8 py-6 text-base font-medium rounded-xl border-2 hover:bg-purple-50 transition-all duration-300"
                  style={{ borderColor: "rgb(180,94,207)", color: "rgb(180,94,207)" }}
                  asChild
                >
                  <Link href="/request-custom">
                    Request Custom List
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="text-[rgb(180,94,207)]">📋</span> 50+ industries
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[rgb(180,94,207)]">✅</span> Verified daily
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[rgb(180,94,207)]">⚡</span> Instant download
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* RIGHT COLUMN - 80-90% width inside grid */}
          <motion.div 
            className="lg:col-span-5 flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-[90%] lg:w-[85%]">
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
                        href={post.href}
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
                                <span>👁️</span> {post.reads} reads
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
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      {/* If you have Hero component, add it here:
     
      */}
              <BlogHeroStacked />

      

{/* Featured Articles Section */}
<section className="pt-4 pb-6 md:pt-6 md:pb-8 bg-white">
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
      
      {/* MIDDLE - First blog card (index 0) */}
      {editorsPicks.slice(0, 1).map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
      
      {/* RIGHT - Second blog card (index 1) */}
      {editorsPicks.slice(1, 2).map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
      
    </div>
  </div>
</section>
      
      <ResourcesSection />
      
      <section className="py-8 md:py-12 mt-4 md:mt-4 bg-white">
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