

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';
// import Newsletter from '@/components/Newsletter';
// import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
// import BlogCard from '@/components/BlogCard';


// const sections = [
//   'Introduction',
//   'Why Data Segmentation Matters',
//   'Types of Segmentation',
//   'Advanced Strategies',
//   'Best Practices',
//   'Conclusion',
// ];

// export default function BlogDetailPage() {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [progress, setProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState<number>(0);

//   // ✅ get original blog data
//   const blog = featuredPosts.find(
//     (post) => post.id === 'data-segmentation'
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;

//       setProgress((scrollTop / docHeight) * 100);

//       sections.forEach((_, i) => {
//         const el = document.getElementById(`section-${i}`);
//         if (!el) return;

//         const rect = el.getBoundingClientRect();
//         if (rect.top <= 140 && rect.bottom >= 140) {
//           setActiveSection(i);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   if (!blog) return null;

//   return (
//     <>
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 z-50 w-full h-[4px] bg-transparent">
//         <div
//           className="h-full bg-[#b45ecf]"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       {/* HERO */}
//       <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl font-semibold text-black leading-tight">
//               {blog.title}
//             </h1>

//             {/* Author + date */}
//             <div className="mt-4 text-sm text-black space-y-1">
//               <p className="font-medium">By John Doe · B2B Growth Strategist</p>
//               <p>
//                 {blog.date} · {blog.readTime}
//               </p>
//             </div>
//           </div>
          

//           <div className="relative h-[320px] rounded-xl overflow-hidden">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="mx-auto max-w-7xl px-6 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_340px] gap-12">

//           {/* TOC */}
//           <aside className="hidden lg:block">
//             <div className="sticky top-28">
//               <h3 className="mb-4 text-md font-semibold text-black">
//                 Table of Contents
//               </h3>
//               <ul className="space-y-3 text-md">
//                 {sections.map((item, i) => (
//                   <li key={i}>
//                     <a
//                       href={`#section-${i}`}
//                       className={
//                         activeSection === i
//                           ? 'text-[#b45ecf] font-medium'
//                           : 'text-black'
//                       }
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* BLOG */}
//           <article ref={contentRef} className="space-y-4">
//             {sections.map((title, i) => (
//               <section key={i} id={`section-${i}`}>
//                 <h2
//                   className={`text-2xl font-semibold mb-4 ${
//                     activeSection === i
//                       ? 'text-[#b45ecf]'
//                       : 'text-black'
//                   }`}
//                 >
//                   {title}
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Lorem ipsum content goes here. Replace with real blog copy.
//                 </p>
//               </section>
//             ))}
//           </article>

//           {/* DEMO FORM */}
//           <aside className="block">
//             <div className="sticky top-28 rounded-xl bg-[rgb(180,94,207)] p-6">
//               <h3 className="text-xl font-semibold text-white">
//                 Get a Free Demo
//               </h3>

//               <form className="mt-6 space-y-4">
//                 <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Full Name" />
//                 <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Email Address" />
//                 <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Phone Number" />
//                 <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Website URL" />
//                 <textarea className="w-full rounded-md px-4 py-2 text-sm" rows={3} placeholder="Additional Info" />
//                 <button className="w-full bg-[black] text-white py-2 rounded-md font-medium">
//                   Request Demo
//                 </button>
//               </form>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* AUTHOR */}
//       <section className="mx-auto max-w-4xl px-4 pb-0">
//         <h3 className="text-xl font-semibold text-black">
//           About the Author
//         </h3>
//         <p className="mt-4 text-black">
//           John Doe is a B2B growth strategist with 10+ years of experience
//           helping SaaS companies scale using data-driven marketing.
//         </p>
//       </section>

//       <Newsletter />

//       {/* RELATED */}
//       <section className="py-8 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-black mb-8">
//             Related articles
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {editorsPicks.map((post) => (
//               <BlogCard key={post.id} {...post} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Newsletter from '@/components/Newsletter';
import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
import BlogCard from '@/components/BlogCard';
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const sections = [
  'Introduction',
  'Why Data Segmentation Matters',
  'Types of Segmentation',
  'Advanced Strategies',
  'Best Practices',
  'Conclusion',
];

export default function BlogDetailPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<number>(0);

  // ✅ get original blog data
  const blog = featuredPosts.find(
    (post) => post.id === 'data-segmentation'
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / docHeight) * 100);

      sections.forEach((_, i) => {
        const el = document.getElementById(`section-${i}`);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(i);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) return null;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-50 w-full h-[4px] bg-transparent">
        <div
          className="h-full bg-[#b45ecf]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HERO - UPDATED with author image and social links */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-black leading-tight">
              {blog.title}
            </h1>
            
            {/* Single line para after heading */}
            <p className="text-gray-600 text-lg mt-3">
              A Data-Driven Guide to Healthcare Lead Generation and B2B Growth
            </p>

            {/* Author with image, name, and social links */}
            <div className="mt-6 flex items-start gap-4">
              {/* Author Image */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#b45ecf] flex-shrink-0">
                <Image
                  src="/images/author-rossie-welch.jpg" // Add your author image
                  alt="Rossie Welch"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Author Info */}
              <div className="flex-1">
                <p className="font-medium text-black text-lg">John Doe</p>
                
                {/* Date and time */}
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                  <span>📅 January 9, 2026</span>
                  <span>⏱️ 6:53 AM</span>
                </div>
                
                {/* Reading time */}
                <p className="text-sm text-gray-600 mt-1">Reading Time 4 mins</p>
                
                {/* Social Media Links */}
                <div className="flex items-center gap-3 mt-3">
                  <a 
                    href="https://twitter.com/rossiewelch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b45ecf] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rossiewelch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b45ecf] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://instagram.com/rossiewelch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b45ecf] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://facebook.com/rossiewelch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b45ecf] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[320px] rounded-xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_340px] gap-12">

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h3 className="mb-4 text-md font-semibold text-black">
                Table of Contents
              </h3>
              <ul className="space-y-3 text-md">
                {sections.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className={
                        activeSection === i
                          ? 'text-[#b45ecf] font-medium'
                          : 'text-black'
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* BLOG */}
          <article ref={contentRef} className="space-y-4">
            {sections.map((title, i) => (
              <section key={i} id={`section-${i}`}>
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    activeSection === i
                      ? 'text-[#b45ecf]'
                      : 'text-black'
                  }`}
                >
                  {title}
                </h2>
                <p className="leading-relaxed text-black">
                  Lorem ipsum content goes here. Replace with real blog copy.
                </p>
              </section>
            ))}
          </article>

          {/* DEMO FORM */}
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
      </section>

      {/* AUTHOR */}
      <section className="mx-auto max-w-4xl px-4 pb-0">
        <h3 className="text-xl font-semibold text-black">
          About the Author
        </h3>
        <p className="mt-4 text-black">
          John Doe is a B2B growth strategist with 10+ years of experience
          helping SaaS companies scale using data-driven marketing.
        </p>
      </section>

      <Newsletter />

      {/* RELATED */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-8">
            Related articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editorsPicks.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}