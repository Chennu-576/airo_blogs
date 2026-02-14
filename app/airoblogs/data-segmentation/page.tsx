
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';
// import Newsletter from '@/components/Newsletter';
// import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
// import BlogCard from '@/components/BlogCard';
// import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

// const sections = [
//   'Introduction',
//   'Why Scaling Email Without Planning Hurts Deliverability',
//   'What Is a Free Tools Mailbox Calculator?',
//   'Why a Mailbox Calculator Matters for Cold Email Campaigns',
//   'How a Mailbox Calculator Tool Works',
//   'Planning Volume the Right Way',
//   'Free Tools Mailbox Calculator vs Guessing',
//   'Try Our Free Mailbox Calculator Before You Scale',
//   'Conclusion',
// ]as const;

// type SectionType = typeof sections[number];

// // ✅ Add section content mapping
// const sectionContent: Record<string, string> = {
//   'Introduction': 'Scaling email outreach isn’t just about writing better emails or sending more messages. One of the most common (and expensive) mistakes teams make is scaling without understanding how many mailboxes they actually need — and what that means for deliverability. That’s where a Free tools mailbox calculator becomes essential. Before increasing volume, adding domains, or launching new campaigns, a mailbox calculator helps you plan sending limits realistically and protect sender reputation.',
  
//   'Why Scaling Email Without Planning Hurts Deliverability': 'Most email deliverability issues don’t come from bad intent — they come from overloading inboxes, When teams scale too fast:Mailboxes send more than they can safely handle, Bounce rates increase, Spam complaints rise, Sender reputation drops quietly, Once reputation is damaged, even normal emails start landing in spam. Recovering from that takes weeks — sometimes months, Using a Free tools mailbox calculator allows you to plan outreach volume before problems start.',
  
//   'What Is a Free Tools Mailbox Calculator?': 'A Free tools mailbox calculator is a utility that helps determine how many mailboxes you can safely send emails to without compromising deliverability. It considers factors like mailbox capacity, sending frequency, and recipient engagement to provide recommendations for optimal email volume.',
  
//   'Why a Mailbox Calculator Matters for Cold Email Campaigns': 'Cold email is different from newsletters or transactional emails. Providers are stricter, and mistakes compound faster, A Free tools mailbox calculator helps you: Avoid overloading individual mailboxes, Distribute volume across domains and inboxes, Reduce reliance on guesswork, Lower the risk of spam flags,For teams running cold outreach, this planning step often matters more than subject lines or templates.',
  
//   'How a Mailbox Calculator Tool Works': 'A typical mailbox calculator tool online considers: Number of emails you want to send per day, Safe sending limits per mailbox, Recommended buffer to keep spam rates low, Some calculators also factor in: Warm-up stage vs steady-state sending, Campaign type (cold vs warm)',
  
//   'Planning Volume the Right Way': 'A Free bulk email calculator helps teams see: When adding more mailboxes makes sense, When lowering daily sends is safer, How to scale gradually instead of all at once, This prevents the “send more, fix later” trap that damages domains.',

//   'Free Tools Mailbox Calculator vs Guessing': 'With a Free tools mailbox calculator: Volume decisions are intentional, Risk is visible upfront, Scaling becomes predictable, It’s not about being conservative — it’s about being controlled.',

//   'Try Our Free Mailbox Calculator Before You Scale': 'If you’re planning to increase volume, don’t rely on assumptions, Try our Free Mailbox Calculator to estimate how many inboxes you need and how to scale without putting deliverability at risk, It’s a simple step — and often the difference between campaigns that grow and campaigns that get blocked.',

//   'Conclusion': 'Scaling outreach safely isn’t about sending more emails — it’s about sending smarter, A Free tools mailbox calculator gives teams clarity before volume increases, helping protect sender reputation, reduce risk, and keep campaigns sustainable.',



// };

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

//       {/* HERO - UPDATED with author image and social links */}
//       <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl font-semibold text-black leading-tight">
//               {blog.title}
//             </h1>
            
//             {/* Single line para after heading */}
//             <p className="text-gray-600 text-lg mt-3">
//               A Data-Driven Guide to Healthcare Lead Generation and B2B Growth
//             </p>

//             {/* Author with image, name, and social links */}
//             <div className="mt-6 flex items-start gap-4">
//               {/* Author Image */}
//               <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#b45ecf] flex-shrink-0">
//                 <Image
//                   src="/images/author-john-doe.jpg" // Add your author image
//                   alt="John Doe"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
              
//               {/* Author Info */}
//               <div className="flex-1">
//                 <p className="font-medium text-black text-lg">John Doe</p>
                
//                 {/* Date and time */}
//                 <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
//                   <span>📅 January 9, 2026</span>
//                   <span>⏱️ 6:53 AM</span>
//                 </div>
                
//                 {/* Reading time */}
//                 <p className="text-sm text-gray-600 mt-1">Reading Time 4 mins</p>
                
//                 {/* Social Media Links */}
//                 <div className="flex items-center gap-3 mt-3">
//                   <a 
//                     href="https://twitter.com/rossiewelch" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-[#b45ecf] transition-colors"
//                     aria-label="Twitter"
//                   >
//                     <Twitter className="w-4 h-4" />
//                   </a>
//                   <a 
//                     href="https://linkedin.com/in/rossiewelch" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-[#b45ecf] transition-colors"
//                     aria-label="LinkedIn"
//                   >
//                     <Linkedin className="w-4 h-4" />
//                   </a>
//                   <a 
//                     href="https://instagram.com/rossiewelch" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-[#b45ecf] transition-colors"
//                     aria-label="Instagram"
//                   >
//                     <Instagram className="w-4 h-4" />
//                   </a>
//                   <a 
//                     href="https://facebook.com/rossiewelch" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-[#b45ecf] transition-colors"
//                     aria-label="Facebook"
//                   >
//                     <Facebook className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
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
//         <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(600px,1fr)_360px] gap-10">

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
//                   className={`text-xl font-semibold mb-4 ${
//                     activeSection === i
//                       ? 'text-[#b45ecf]'
//                       : 'text-black'
//                   }`}
//                 >
//                   {title}
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                    {sectionContent[title]}
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
import { Twitter, Linkedin, Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";

// Updated sections to match your complete blog content
const sections = [
  'Free Email Mailbox Calculator to Scale Outreach Safely',
  'Why Scaling Email Without Planning Hurts Deliverability',
  'What Is a Free Tools Mailbox Calculator?',
  'Why a Mailbox Calculator Matters for Cold Email Campaigns',
  'How a Mailbox Calculator Tool Works (In Simple Terms)',
  'Planning Volume the Right Way (Not the Aggressive Way)',
  'Free Tools Mailbox Calculator vs Guessing',
  'How This Supports Better Email Deliverability',
  'When Should You Use a Mailbox Calculator?',
  'How This Fits Into a Safe Outreach Workflow',
  'Try Our Free Mailbox Calculator Before You Scale',
  'People Also Ask',
  'Conclusion',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  'Free Email Mailbox Calculator to Scale Outreach Safely': "Scaling email outreach isn't just about writing better emails or sending more messages. One of the most common (and expensive) mistakes teams make is scaling without understanding how many mailboxes they actually need — and what that means for deliverability.\n\nThat's where a Free tools mailbox calculator becomes essential. Before increasing volume, adding domains, or launching new campaigns, a mailbox calculator helps you plan sending limits realistically and protect sender reputation.",
  
  'Why Scaling Email Without Planning Hurts Deliverability': "Most email deliverability issues don't come from bad intent — they come from overloading inboxes.\n\nWhen teams scale too fast:\n• Mailboxes send more than they can safely handle\n• Bounce rates increase\n• Spam complaints rise\n• Sender reputation drops quietly\n\nOnce reputation is damaged, even normal emails start landing in spam. Recovering from that takes weeks — sometimes months.\n\nUsing a Free tools mailbox calculator allows you to plan outreach volume before problems start.",
  
  'What Is a Free Tools Mailbox Calculator?': "A mailbox calculator is a simple planning tool that estimates:\n• How many emails you can safely send per mailbox\n• How many mailboxes you need for a target sending volume\n• Whether your current setup is likely to impact deliverability\n\nA mailbox calculator tool free doesn't send emails or analyze content. Instead, it helps you answer a foundational question:\n\"How much can I send without hurting my inbox placement?\"",
  
  'Why a Mailbox Calculator Matters for Cold Email Campaigns': "Cold email is different from newsletters or transactional emails. Providers are stricter, and mistakes compound faster.\n\nA Free tools mailbox calculator helps you:\n• Avoid overloading individual mailboxes\n• Distribute volume across domains and inboxes\n• Reduce reliance on guesswork\n• Lower the risk of spam flags\n\nFor teams running cold outreach, this planning step often matters more than subject lines or templates.",
  
  'How a Mailbox Calculator Tool Works (In Simple Terms)': "A typical mailbox calculator tool online considers:\n• Number of emails you want to send per day\n• Safe sending limits per mailbox\n• Recommended buffer to keep spam rates low\n\nSome calculators also factor in:\n• Warm-up stage vs steady-state sending\n• Campaign type (cold vs warm)\n• Risk tolerance based on domain age\n\nThe output isn't a rule — it's a safety estimate.",
  
  'Planning Volume the Right Way (Not the Aggressive Way)': "Many teams ask:\n\"How many mailboxes for cold email do we really need?\"\nThe honest answer: fewer than you think — if volume is planned properly.\n\nA Free bulk email calculator helps teams see:\n• When adding more mailboxes makes sense\n• When lowering daily sends is safer\n• How to scale gradually instead of all at once\n\nThis prevents the \"send more, fix later\" trap that damages domains.",

  'Free Tools Mailbox Calculator vs Guessing': "Without a calculator:\n• Volume decisions are emotional\n• Teams rely on anecdotes\n• Deliverability issues appear too late\n\nWith a Free tools mailbox calculator:\n• Volume decisions are intentional\n• Risk is visible upfront\n• Scaling becomes predictable\n\nIt's not about being conservative — it's about being controlled.",

  'How This Supports Better Email Deliverability': "Mailbox planning directly impacts:\n• Spam complaint rates\n• Bounce rates\n• Inbox placement\n\nUsed alongside an email bounce rate calculator and basic list hygiene, a mailbox calculator helps teams maintain a healthier sending profile over time.\n\nIt's one of the simplest ways to check email deliverability before campaigns go live.",

  'When Should You Use a Mailbox Calculator?': "Use a mailbox calculator when:\n• Launching your first cold email campaign\n• Increasing daily send volume\n• Adding new domains or inboxes\n• Running campaigns for multiple clients\n\nEven experienced teams use a mailbox calculator tool free as a quick validation step before scaling.",

  'How This Fits Into a Safe Outreach Workflow': "A mailbox calculator works best when combined with:\n• Email warmup\n• List cleaning\n• Basic email template checks\n• Ongoing performance monitoring\n\nIt's not a replacement for strategy — it's a safeguard.",

  'Try Our Free Mailbox Calculator Before You Scale': "If you're planning to increase volume, don't rely on assumptions.\n\nTry our Free Mailbox Calculator to estimate how many inboxes you need and how to scale without putting deliverability at risk.\n\nIt's a simple step — and often the difference between campaigns that grow and campaigns that get blocked.",

  'People Also Ask': '', // This will be handled by FAQ component
  
  'Conclusion': "Scaling outreach safely isn't about sending more emails — it's about sending smarter.\n\nA Free tools mailbox calculator gives teams clarity before volume increases, helping protect sender reputation, reduce risk, and keep campaigns sustainable.\n\nPlan first.\nSend second.\nScale safely.",
};

// FAQ Data
const faqData = [
  {
    question: "What is a good email deliverability score?",
    answer: "A good deliverability score typically means most emails land in the primary inbox with low bounce and spam rates. While scores vary by provider, consistency matters more than a single number."
  },
  {
    question: "How to calculate email deliverability rate?",
    answer: "Deliverability rate is calculated by subtracting bounced and rejected emails from total sends, then measuring inbox placement and spam filtering outcomes."
  },
  {
    question: "How to check if a mailbox is full?",
    answer: "Mailbox capacity can usually be checked through your email provider's storage settings. Full mailboxes can cause delivery failures and should be monitored regularly."
  },
  {
    question: "How to measure email deliverability?",
    answer: "Deliverability is measured using bounce rates, spam complaints, inbox placement tests, and engagement metrics across campaigns."
  },
  {
    question: "How do I create my own mailbox?",
    answer: "Mailboxes can be created through email providers or hosting services by setting up a domain and adding inbox users with proper authentication."
  },
  {
    question: "How to check mailbox capacity?",
    answer: "Mailbox capacity is checked within your email provider dashboard, where storage usage and limits are displayed."
  }
];

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-base font-medium text-black">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#b45ecf]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

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
              Free Email Mailbox Calculator to Scale Outreach Safely
            </p>

            {/* Author with image, name, and social links */}
            <div className="mt-6 flex items-start gap-4">
              {/* Author Image */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#b45ecf] flex-shrink-0">
                <Image
                  src="/images/author-john-doe.jpg" // Add your author image
                  alt="John Doe"
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
                <p className="text-sm text-gray-600 mt-1">Reading Time 8 mins</p>
                
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
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(680px,1fr)_340px] gap-10">

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

          {/* BLOG - With proper formatting */}
          <article ref={contentRef} className="space-y-8">
            {sections.map((title, i) => (
              <section key={i} id={`section-${i}`}>
                <h2
                  className={`text-xl font-semibold mb-4 ${
                    activeSection === i
                      ? 'text-[#b45ecf]'
                      : 'text-black'
                  }`}
                >
                  {title}
                </h2>
                
                {/* Special handling for People Also Ask section */}
                {title === 'People Also Ask' ? (
                  <div className="bg-white rounded-lg">
                    {faqData.map((faq, index) => (
                      <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                ) : (
                  <div className="leading-relaxed text-black whitespace-pre-line">
                    {sectionContent[title]}
                  </div>
                )}
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
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Full Name*" required />
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Business Email ID*" required type="email" />
                <input className="w-full rounded-md px-4 py-2 text-sm" placeholder="Phone Number*" required />
                <textarea className="w-full rounded-md px-4 py-2 text-sm" rows={3} placeholder="Tell Your Requirement*" required />
                <p className="text-xs text-white">
                  If you don't have a business email <a href="#" className="underline font-medium">Click here</a>
                </p>
                <button className="w-full bg-[black] text-white py-2 rounded-md font-medium">
                  SUBMIT
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


