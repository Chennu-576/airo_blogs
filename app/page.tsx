// import Header from '@/components/Header';
// If you need Hero component, import it:
// import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import ResourcesSection from '@/components/ResourcesSection';
import Newsletter from '@/components/Newsletter';
// import Footer from '@/components/Footer';
import { featuredPosts, popularPosts, editorsPicks } from './blog/blogdata'; // Fixed path
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      {/* If you have Hero component, add it here:
      <Hero />
      */}
      
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
      
      {/* Most Popular Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Most Popular
            </h2>
            <Link 
              href="/blog/popular" 
              className="text-[rgb(180,94,207)] hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                {...post} 
                priority={index < 4}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
      
      {/* Editor's Pick Section */}
      <section className="py-16 md:py-20 bg-white">
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
      
      <ResourcesSection />
      
      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              About BusinessBlog
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              We help businesses achieve their goals through data-driven insights, proven strategies, and actionable content.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-[rgb(180,94,207)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(160,74,187)] transition-colors font-medium"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* <Footer /> */}
    </div>
  );
}