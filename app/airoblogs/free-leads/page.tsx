'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Newsletter from '@/components/Newsletter';
import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
import BlogCard from '@/components/BlogCard';
import { Twitter, Linkedin, Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";

// Updated sections to match the lead conversion platform guide
const sections = [
  'How to Choose a Free Lead Conversion Platform That Actually Works',
  'What Is the Lead Conversion System?',
  'What Is the Best Platform for Lead Generation?',
  'What Is the Best CRM for Lead Generation?',
  'How to Get Leads Without Paying?',
  'What Are the Best Free Tools for Lead Generation?',
  'Conclusion',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  'How to Choose a Free Lead Conversion Platform That Actually Works': "Generating leads is only half the battle. The real challenge lies in converting those leads into paying customers. This is where choosing the right lead conversion platform free becomes critical. Many businesses rely on multiple tools that do not integrate well, leading to lost leads and low conversion rates.\n\nA reliable best lead conversion platform free helps businesses capture, nurture, and convert leads efficiently. Whether you are a startup, a B2B company, or a growing agency, having a structured lead conversion system ensures no opportunity is missed.\n\nIn 2026, businesses that automate lead handling outperform those relying on manual follow ups. Free platforms are especially valuable for companies testing new markets or optimizing funnels. However, not all free tools deliver real results. Some limit core features, while others lack scalability. This guide explains how to evaluate best lead generation platforms, what features to prioritize, and how 360airo helps businesses convert leads effectively without heavy investment.\n\nChoosing the right lead conversion platform USA or global solution can directly impact revenue growth. Understanding how these platforms work allows businesses to focus on strategy rather than tool limitations.",
  
  'What Is the Lead Conversion System?': "Understanding what is the lead conversion system is essential before selecting a platform. A lead conversion system is the process and technology used to turn potential customers into paying clients. It includes lead capture, lead nurturing, follow ups, and final conversion.\n\nA modern lead conversion platform free automates this journey. When a lead enters the system through a website, form, or email list, the platform tracks interactions and triggers actions. These actions can include automated emails, reminders, or CRM updates.\n\nIn B2B environments, a lead conversion system often integrates with B2B lead generation tools free to manage longer sales cycles. Free systems allow startups to build pipelines without upfront costs. However, efficiency depends on how well the platform organizes data and supports follow ups.\n\nWithout a proper system, businesses lose leads due to delayed responses or poor tracking. A structured best lead conversion platform ensures leads are segmented, prioritized, and contacted at the right time.\n\nPlatforms like 360airo simplify lead conversion by combining automation, tracking, and communication. This allows businesses to focus on closing deals rather than managing spreadsheets.",
  
  'What Is the Best Platform for Lead Generation?': "When businesses ask what is the best platform for lead generation, the answer depends on goals and audience. For B2B companies, the focus is often on quality leads rather than volume. This is where best free lead generation websites and best free lead generation tools for B2B come into play.\n\nThe best lead generation platforms offer features like contact capture, email integration, and analytics. Free platforms should allow businesses to test lead sources before upgrading. Tools that support email outreach, landing pages, and CRM functionality are ideal.\n\nA best lead conversion platform free does more than collect leads. It nurtures them. Platforms that integrate free lead generation sites with automated follow ups perform better in competitive markets.\n\nIn the USA, businesses often prefer platforms with compliance support and deliverability features. A lead conversion platform USA ensures compatibility with local regulations and email standards.\n\n360airo stands out by combining lead generation and conversion into one ecosystem. It allows businesses to generate leads, validate contacts, and automate outreach without paying upfront costs.",
  
  'What Is the Best CRM for Lead Generation?': "Many businesses wonder what is the best CRM for lead generation. A CRM becomes powerful when it integrates lead capture and conversion workflows. Free CRMs often lack automation, making them inefficient for scaling.\n\nA best lead conversion platform should include CRM capabilities such as lead tracking, status updates, and interaction history. Free platforms should allow customization without complexity.\n\nFor B2B sales, CRMs integrated with B2B lead generation tools free help manage long sales cycles. The ability to segment leads and schedule follow ups improves conversion rates.\n\n360airo functions as both a lead generation and conversion platform. It provides CRM style organization with automation, making it a strong alternative to traditional CRMs.",
  
  'How to Get Leads Without Paying?': "Businesses frequently ask how to get leads without paying. The answer lies in leveraging free lead generation sites and automation tools. Organic channels like LinkedIn, email outreach, and content marketing generate consistent leads when managed correctly.\n\nUsing best free lead generation tools for B2B, businesses can scrape prospects, validate contacts, and run outreach campaigns. The key is consistency and follow up.\n\nA lead conversion platform free ensures these leads are not wasted. Automated sequences and reminders increase response rates without manual effort.\n\n360airo enables businesses to generate and convert leads organically, reducing dependency on paid ads.",
  
  'What Are the Best Free Tools for Lead Generation?': "When asked what are the best free tools for lead generation, the answer includes platforms that combine data, automation, and analytics. Free tools should support email outreach, contact validation, and tracking.\n\n360airo offers a unified platform that replaces multiple tools. It helps businesses capture leads, nurture them, and convert efficiently.",
  
  'Conclusion': "Choosing the right lead conversion platform free can determine business success. A platform that combines lead generation, automation, and conversion without heavy costs provides the best ROI.\n\nWith 360airo, businesses gain access to a scalable best lead conversion platform free that actually works.",
};

// FAQ Data - Keeping the same FAQ structure
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
  const blog = editorsPicks.find(
    (post) => post.id === 'free-leads'
  );
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();  // Parse the response

    if (res.ok && data.success) {
  alert("Form submitted successfully!");
  setFormData({ name: "", email: "", phone: "", message: "" });
} else {
  alert(data.error || "Something went wrong.");
}
  } catch (error) {
    alert("Server error.");
  }

  setLoading(false);
};


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
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_340px] gap-8">

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h3 className="mb-4 text-md font-semibold text-black">
                Table of Contents
              </h3>
              <ul className="space-y-3 text-xs">
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
                
                {/* Special handling for FAQ - keeping it after Conclusion */}
                {title === 'Conclusion' ? (
                  <div>
                    <div className="leading-relaxed text-black whitespace-pre-line mb-8">
                      {sectionContent[title]}
                    </div>
                    <div className="bg-white rounded-lg mt-8">
                      <h3 className="text-xl font-semibold text-black mb-4">People Also Ask</h3>
                      {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
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

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  className="w-full rounded-md px-4 py-2 text-sm"
                  placeholder="Full Name*"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  className="w-full rounded-md px-4 py-2 text-sm"
                  placeholder="Business Email ID*"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  className="w-full rounded-md px-4 py-2 text-sm"
                  placeholder="Phone Number*"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <textarea
                  className="w-full rounded-md px-4 py-2 text-sm"
                  rows={3}
                  placeholder="Tell Your Requirement*"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <p className="text-xs text-white">
                  If you don't have a business email{" "}
                  <a href="#" className="underline font-medium">
                    Click here
                  </a>
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-2 rounded-md font-medium"
                >
                  {loading ? "Submitting..." : "SUBMIT"}
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