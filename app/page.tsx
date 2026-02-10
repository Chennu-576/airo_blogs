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
      
     <section className="py-16 md:py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Explore More Topics
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Ready to brush up on something new? We've got more to read right this way.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Go To Market", link: "/go-to-market" },
        { name: "Healthcare Marketing", link: "/healthcare-marketing" },
        { name: "Market Research", link: "/market-research" },
        { name: "Sales Tools", link: "/sales-tools" },
        { name: "Sales Strategy", link: "/sales-strategy" },
        { name: "Sales Rep Development", link: "/sales-rep-development" },
        { name: "Productivity", link: "/productivity" },
        { name: "Email Marketing", link: "/email-marketing" },
        { name: "Data-Driven Solutions", link: "/data-driven-solutions" },
        { name: "Customer Retention", link: "/customer-retention" }
      ].map((topic, index) => (
        <div key={index} className="group relative">
          {/* Purple top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[rgb(180,94,207)] rounded-t-lg"></div>
          
          <a
            href={topic.link}
            className="block p-8 pt-10 bg-white rounded-b-lg border border-t-0 border-gray-200 hover:bg-black transition-all duration-300 shadow-sm hover:shadow-xl min-h-[30px] flex items-center justify-center"
          >
            <span className="text-[rgb(180,94,207)] group-hover:text-white font-medium text-lg text-center transition-colors duration-300">
              {topic.name}
            </span>
          </a>
        </div>
      ))}
    </div>
    
    {/* View All Topics button */}
    <div className="text-center mt-12">
      <a
        href="/topics"
        className="inline-flex items-center px-8 py-3 bg-[rgb(180,94,207)] text-white font-medium rounded-lg hover:bg-black transition-colors duration-300"
      >
        View All Topics
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
      {/* <Footer /> */}
    </div>
  );
}