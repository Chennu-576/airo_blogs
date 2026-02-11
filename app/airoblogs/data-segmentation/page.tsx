// 'use client'

// import { useEffect, useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import Link from 'next/link'

// const PURPLE = 'rgb(180,94,207)'

// const headings = [
//   { id: 'intro', label: 'Introduction' },
//   { id: 'why-email', label: 'Why Email Works' },
//   { id: 'google-search', label: 'Use Google Search' },
//   { id: 'contact-pages', label: 'Website Contact Pages' },
//   { id: 'social-media', label: 'Social Media Platforms' },
//   { id: 'b2b-tools', label: 'B2B Data Tools' },
//   { id: 'conclusion', label: 'Conclusion' },
// ]

// export default function BlogPage() {
//   const { scrollYProgress } = useScroll()
//   const width = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
//   const [activeId, setActiveId] = useState<string>('intro')

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id)
//           }
//         })
//       },
//       { rootMargin: '-40% 0px -55% 0px' }
//     )

//     headings.forEach(h => {
//       const el = document.getElementById(h.id)
//       if (el) observer.observe(el)
//     })

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div className="relative bg-white">
//       {/* Layout */}
//       <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] gap-10">

//         {/* LEFT TOC */}
//         <aside className="hidden lg:block sticky top-24 h-fit">
//           <p className="text-sm font-semibold mb-4 text-black">On this page</p>
//           <ul className="space-y-2 text-sm">
//             {headings.map(h => (
//               <li key={h.id}>
//                 <a
//                   href={`#${h.id}`}
//                   className={`block transition ${
//                     activeId === h.id
//                       ? 'font-semibold'
//                       : 'text-gray-600'
//                   }`}
//                   style={{
//                     color: activeId === h.id ? PURPLE : undefined,
//                   }}
//                 >
//                   {h.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* MAIN CONTENT */}
//         <article className="prose prose-neutral max-w-none">
//           <h1 className="text-4xl font-bold text-black mb-4">
//             Advanced data segmentation
//           </h1>

//           <p className="text-sm text-gray-500 mb-10">
//             By Rossie Welch · Feb 21, 2023
//           </p>

//           <section id="intro">
//             <h2 style={{ color: PURPLE }}>Introduction</h2>
//             <p>
//               Finding accurate business owner contact information is essential
//               for B2B marketing and sales outreach. With the right strategy,
//               businesses can connect directly with decision-makers and improve
//               conversion rates.
//             </p>
//           </section>

//           <section id="why-email">
//             <h2 style={{ color: PURPLE }}>Why Email Works</h2>
//             <p>
//               Email remains one of the most effective channels for reaching
//               business owners. It is direct, measurable, and scalable when done
//               correctly.
//             </p>
//           </section>

//           <section id="google-search">
//             <h2 style={{ color: PURPLE }}>Use Google Search</h2>
//             <p>
//               Google search is often the first step. Searching business names,
//               websites, and key decision-maker titles can reveal direct contact
//               information.
//             </p>
//           </section>

//           <section id="contact-pages">
//             <h2 style={{ color: PURPLE }}>Website Contact Pages</h2>
//             <p>
//               Many companies list owner or leadership contact details on their
//               contact or about pages. Always check these sections carefully.
//             </p>
//           </section>

//           <section id="social-media">
//             <h2 style={{ color: PURPLE }}>Social Media Platforms</h2>
//             <p>
//               LinkedIn and Twitter are powerful platforms for identifying and
//               reaching business owners directly.
//             </p>
//           </section>

//           <section id="b2b-tools">
//             <h2 style={{ color: PURPLE }}>B2B Data Tools</h2>
//             <p>
//               Professional B2B databases help scale outreach by providing
//               verified and segmented contact data.
//             </p>
//           </section>

//           <section id="conclusion">
//             <h2 style={{ color: PURPLE }}>Conclusion</h2>
//             <p>
//               Combining multiple approaches ensures higher accuracy and better
//               outreach results when searching for business owner contacts.
//             </p>
//           </section>
//         </article>

//         {/* RIGHT SIDEBAR */}
//         <aside className="sticky top-24 h-fit">
//           <Card>
//             <CardHeader>
//               <CardTitle>Get a Free Demo</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-sm text-gray-600">
//                 Discover verified business contacts tailored to your needs.
//               </p>
//               <Input placeholder="Work email" />
//               <Button className="w-full" style={{ backgroundColor: PURPLE }}>
//                 Request Demo
//               </Button>
//             </CardContent>
//           </Card>
//         </aside>
//       </div>

//       {/* SCROLL PROGRESS LINE */}
//       <motion.div
//   className="fixed bottom-0 left-0 h-[4px]"
//   style={{
//     width, // Use the width variable
//     backgroundColor: PURPLE,
//   }}
// />
//     </div>
//   )
// }







// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';
// import Newsletter from '@/components/Newsletter';
// import { editorsPicks } from '@/app/blog/blogdata';
// import BlogCard from '@/components/BlogCard';

// export default function BlogDetailPage() {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [progress, setProgress] = useState(0);

//   /* Scroll progress bar */
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       setProgress((scrollTop / docHeight) * 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Scroll progress bar */}
//       <div className="fixed top-0 left-0 z-50 h-[4px] w-full">
//         <div
//           className="h-full bg-[#b45ecf]"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       {/* ================= HERO ================= */}
//       <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl font-semibold text-black leading-tight">
//               Advanced Data Segmentation Strategies for 2024
//             </h1>

//             <div className="mt-6 flex items-center gap-4 text-sm text-black">
//               <span>Mar 15, 2024</span>
//               <span>•</span>
//               <span>8 min read</span>
//             </div>
//           </div>

//           <div className="relative h-[320px] rounded-xl overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
//               alt="Blog cover"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="mx-auto max-w-7xl px-6 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_340px] gap-12">

//           {/* TOC */}
//           <aside className="hidden lg:block">
//             <div className="sticky top-28">
//               <h3 className="mb-4 text-md font-semibold text-black">
//                 Table of Contents
//               </h3>
//               <ul className="space-y-3 text-md">
//                 {[
//                   'Introduction',
//                   'Why Data Segmentation Matters',
//                   'Types of Segmentation',
//                   'Advanced Strategies',
//                   'Best Practices',
//                   'Conclusion',
//                 ].map((item, i) => (
//                   <li key={i}>
//                     <a
//                       href={`#section-${i}`}
//                       className="text-black hover:text-[#b45ecf] transition"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* BLOG */}
//           <article
//             ref={contentRef}
//             className="max-w-none text-black space-y-10"
//           >
//             <section id="section-0">
//               <h2 className="text-2xl font-semibold mb-4 text-[#b45ecf]">
//                 Introduction
//               </h2>
//               <p className="leading-relaxed">
//                 Data segmentation is no longer optional for B2B teams aiming for
//                 higher engagement and conversion rates in 2024.
//               </p>
//             </section>

//             <section id="section-1">
//               <h2 className="text-2xl font-semibold mb-4">
//                 Why Data Segmentation Matters
//               </h2>
//               <p className="leading-relaxed">
//                 Without segmentation, marketing becomes generic and ineffective.
//                 Targeted data drives relevance and ROI.
//               </p>
//             </section>

//             <section id="section-2">
//               <h2 className="text-2xl font-semibold mb-4">
//                 Types of Segmentation
//               </h2>
//               <p className="leading-relaxed">
//                 Demographic, firmographic, behavioral, and intent-based
//                 segmentation are the foundation of modern strategies.
//               </p>
//             </section>

//             <section id="section-3">
//               <h2 className="text-2xl font-semibold mb-4">
//                 Advanced Strategies
//               </h2>
//               <p className="leading-relaxed">
//                 AI-driven scoring and predictive analytics help teams act before
//                 prospects even convert.
//               </p>
//             </section>

//             <section id="section-4">
//               <h2 className="text-2xl font-semibold mb-4">
//                 Best Practices
//               </h2>
//               <p className="leading-relaxed">
//                 Clean data, constant testing, and automation ensure scalability.
//               </p>
//             </section>

//             <section id="section-5">
//               <h2 className="text-2xl font-semibold mb-4">
//                 Conclusion
//               </h2>
//               <p className="leading-relaxed">
//                 Businesses that master segmentation gain a serious competitive
//                 advantage in personalization and growth.
//               </p>
//             </section>
//           </article>

//           {/* DEMO */}
//           <aside className="hidden lg:block">
//             <div className="sticky top-28 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] p-6">
//               <h3 className="text-xl font-semibold text-black">
//                 Get a Free Demo
//               </h3>

//               <form className="mt-6 space-y-4">
//                 <input className="w-full border rounded-md px-4 py-2 text-sm" placeholder="Full Name" />
//                 <input className="w-full border rounded-md px-4 py-2 text-sm" placeholder="Email Address" />
//                 <input className="w-full border rounded-md px-4 py-2 text-sm" placeholder="Phone Number" />
//                 <input className="w-full border rounded-md px-4 py-2 text-sm" placeholder="Website URL" />
//                 <textarea className="w-full border rounded-md px-4 py-2 text-sm" rows={3} placeholder="Additional Info" />
//                 <button className="w-full bg-[#b45ecf] text-white py-2 rounded-md font-medium">
//                   Request Demo
//                 </button>
//               </form>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* AUTHOR */}
//       <section className="mx-auto max-w-4xl px-6 pb-20">
//         <h3 className="text-xl font-semibold text-black">About the Author</h3>
//         <p className="mt-4 text-black">
//           John Doe is a B2B growth strategist with over a decade of experience in
//           data-driven marketing.
//         </p>
//       </section>

//       {/* NEWSLETTER */}
//       <section className="mx-auto max-w-4xl px-6 pb-20">
//         <Newsletter />
//       </section>

//       {/* RELATED */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-black mb-8">
//             Related articles
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {editorsPicks.map(post => (
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

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-black leading-tight">
              {blog.title}
            </h1>

            {/* Author + date */}
            <div className="mt-4 text-sm text-black space-y-1">
              <p className="font-medium">By John Doe · B2B Growth Strategist</p>
              <p>
                {blog.date} · {blog.readTime}
              </p>
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
