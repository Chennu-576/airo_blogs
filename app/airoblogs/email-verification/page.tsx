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
  'Free Email Verification: How to Verify Email Addresses for Free with 360Airo',
  'What Is Free Email Verification?',
  'Why Email Verification Is Critical for Outreach',
  'What Makes 360Airo’s Free Email Verification Different',
  'How 360Airo’s Free Email Verification Works',
  'How to Verify Email Addresses for Free Using 360Airo',
  'Who Should Use Free Email Verification in 360Airo',
  'How Free Email Verification Improves Campaign Performance',
  'Free Email Verification vs Paid Tools',
  'Common Email Verification Mistakes (And How 360Airo Prevents Them)',
  'How Free Email Verification Fits Into 360Airo’s Outreach Stack',
  'Why Free Email Verification Is a Must-Have Feature',
  'People Also Ask',
  'Conclusion: Verify First, Send Second',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  'Free Email Verification: How to Verify Email Addresses for Free with 360Airo': "Email outreach only works when your emails reach real inboxes. Yet one of the most common reasons campaigns underperform is poor list quality — invalid, inactive, or risky email addresses that quietly damage deliverability before results even have a chance to compound.\n\nThat's exactly why 360Airo offers Free Email Verification built directly into the platform — so teams can clean lists, protect sender reputation, and improve outreach results before sending a single email.",
  
  'What Is Free Email Verification?': "Free email verification is the process of checking whether an email address is legitimate, active, and safe to send emails to. Instead of discovering bad addresses after campaigns bounce or land in spam, verification helps you catch problems upfront.\n\nA proper free email verification process checks whether an email address is:\n• Valid and correctly formatted\n• Associated with a real, active domain\n• Able to receive messages\n• Free from high-risk signals like disposable domains or spam traps\n\nWith 360Airo's Free Email Verification, this entire process happens inside the platform, removing the need to rely on external tools or paid services just to clean your list.",
  
  'Why Email Verification Is Critical for Outreach': "Email providers closely monitor sender behavior. When emails bounce, fail, or trigger spam signals, your sender reputation takes a hit — often without warning.\n\nUnverified email lists commonly lead to:\n• High bounce rates that signal poor sender hygiene\n• Lower inbox placement across all campaigns\n• Gradual reputation damage that's difficult to reverse\n• Declining reply rates, even with good messaging\n\nEven the best-written emails fail if they never reach the inbox. By using a free email verification service like the one built into 360Airo, teams address deliverability issues at the root instead of reacting after campaigns stall.",
  
  'What Makes 360Airo’s Free Email Verification Different': "Most verification tools operate in isolation. You upload a list, clean it, download it, then re-upload it into your outreach tool — a process that's easy to skip under pressure.\n\n360Airo's free email verifier removes this friction entirely by making verification part of the outreach workflow itself.\n\nWith 360Airo, you can:\n• Verify emails automatically before launching campaigns\n• Identify invalid, risky, or low-quality addresses instantly\n• Keep lists clean without exporting or re-importing data\n• Improve deliverability across campaigns without manual intervention\n\nBecause verification is embedded, it actually gets used — not postponed or forgotten.",
  
  'How 360Airo’s Free Email Verification Works': "360Airo's email verification tool free feature runs multiple checks behind the scenes to ensure accuracy and reliability.\n\n1. Syntax & Format Validation\nChecks whether the email follows proper formatting standards and eliminates obvious errors early.\n\n2. Domain Validation\nConfirms the domain exists, is properly configured, and can receive emails.\n\n3. Mailbox Verification\nVerifies whether the mailbox itself is active without sending a test email that could affect reputation.\n\n4. Risk Detection\nIdentifies disposable emails, role-based addresses, and known high-risk patterns that often cause deliverability issues.\n\nTogether, these checks produce a clean, campaign-ready list — without additional cost or setup.",
  
  'How to Verify Email Addresses for Free Using 360Airo': "Using 360Airo's Free Email Verification is designed to be straightforward and fast:\n\n• Upload or sync your email list into 360Airo\n• Run free email verification instantly inside the platform\n• Review results categorized as verified, risky, or invalid\n• Exclude problematic addresses before sending campaigns\n• Launch outreach with confidence\n\nNo third-party tools. No spreadsheets. No manual cleanup steps that slow teams down.",

  'Who Should Use Free Email Verification in 360Airo': "360Airo's free email verification is valuable for teams at every stage, especially:\n\n• Startups launching outbound for the first time\n• Agencies onboarding new client lists with unknown quality\n• Sales teams running cold email campaigns at scale\n• Teams relying on free or low-cost email outreach tools — all of which benefit significantly from cleaner lists\n\nEven when using the cheapest cold email software, verification can be the difference between campaigns that fail silently and ones that perform consistently.",

  'How Free Email Verification Improves Campaign Performance': "Verifying emails before sending has a compounding effect on outreach performance.\n\nTeams using 360Airo typically see:\n\n• Fewer bounces and delivery errors\n• Improved inbox placement across domains\n• More stable open rates over time\n• Higher reply rates due to better reach\n\nFree email verification doesn't guarantee replies — but without it, even strong campaigns struggle to gain traction.",

  'Free Email Verification vs Paid Tools': "360Airo's Free Email Verification is ideal for:\n\n• Small to mid-sized lists\n• Early testing and pilot campaigns\n• Ongoing list hygiene without extra cost\n\nAs outreach volume grows, teams may choose to add advanced verification layers. However, starting with free email verification inside 360Airo ensures every campaign begins on solid footing.",

  'Common Email Verification Mistakes (And How 360Airo Prevents Them)': "Many teams unintentionally sabotage deliverability by:\n\n• Skipping verification entirely under time pressure\n• Verifying lists once and never revisiting them\n• Using disconnected third-party tools that break workflows\n\n360Airo prevents these issues by embedding Free Email Verification directly into the outreach process, making clean lists a default — not an afterthought.",

  'How Free Email Verification Fits Into 360Airo’s Outreach Stack': "360Airo's free email verification works seamlessly alongside:\n\n• Email warmup to build sender trust\n• Email sequences for structured follow-ups\n• Campaign analytics for performance insights\n• Unified inbox for reply management\n\nThis ensures emails are verified, warmed, sent, tracked, and responded to — all within one cohesive system.",

  'Why Free Email Verification Is a Must-Have Feature': "Free email verification isn't a bonus feature. It's foundational infrastructure for any serious outreach program.\n\nBy offering Free Email Verification inside 360Airo, teams avoid unnecessary risk, reduce dependence on external tools, and protect deliverability from day one.",

  'People Also Ask': '', // This will be handled by FAQ component
  
  'Conclusion: Verify First, Send Second': "Before subject lines.\nBefore copywriting.\nBefore scaling volume.\nVerify your emails.\n\n360Airo's Free Email Verification feature makes it easy to protect sender reputation, improve inbox placement, and run outreach with confidence.\n\nClean lists lead to better conversations.\nAnd better conversations drive results.",
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
    (post) => post.id === 'free-email'
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
            
            {/* Single line para after heading */}
            {/* <p className="text-gray-600 text-lg mt-3">
              Free Email Mailbox Calculator to Scale Outreach Safely
            </p> */}

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