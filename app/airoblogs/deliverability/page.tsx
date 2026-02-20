'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Newsletter from '@/components/Newsletter';
import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
import BlogCard from '@/components/BlogCard';
import { Twitter, Linkedin, Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";

// Updated sections to match the email deliverability test guide
const sections = [
  'Free Email Deliverability Test for Cold Email & Marketing',
  'What Is an Email Deliverability Test?',
  'Why Use a Free Email Deliverability Test?',
  'Email Deliverability Test Tools',
  'Email Deliverability Tool Free Gmail',
  'How Do I Improve My Email Deliverability?',
  'Which Email Service Has the Best Deliverability?',
  'Conclusion',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  'Free Email Deliverability Test for Cold Email & Marketing': "Email marketing success depends on one critical factor that many marketers ignore: inbox placement. Sending an email does not guarantee it will reach the inbox. This is why using a free email deliverability test is essential for businesses running cold email outreach or bulk marketing campaigns. With stricter spam filters and constantly changing email provider algorithms, testing deliverability has become a necessity rather than an option.\n\nA reliable email deliverability test free online helps marketers understand where their emails land: Inbox, promotions, or spam. This insight allows businesses to correct issues before launching campaigns. A cold email deliverability test is especially important because cold outreach faces higher scrutiny from email service providers.\n\nUsing the best free email deliverability test also protects sender reputation. Poor deliverability affects open rates, response rates, and domain trust. Over time, repeated spam placement can permanently damage your sending domain. Tools like 360airo offer a free email deliverability test that evaluates technical settings, content quality, and spam risks.\n\nIn 2026, successful email marketing is data driven. Marketers who test email deliverability before sending campaigns consistently achieve better engagement and higher ROI. Ignoring deliverability testing often results in wasted effort and lost revenue.",
  
  'What Is an Email Deliverability Test?': "To understand email performance, it is important to know what is an email deliverability test. An email deliverability test measures the likelihood of your emails reaching the recipient inbox instead of spam or promotions folders. It evaluates technical, reputational, and content based factors that influence email filtering.\n\nA test email deliverability free tool checks domain authentication such as SPF, DKIM, and DMARC. These are critical trust signals for email providers like Gmail and Outlook. Missing or misconfigured authentication often leads to spam placement even if the content is clean.\n\nA free email spam checker scans subject lines and email content for spam triggers. Using a spam email checker free helps identify excessive links, aggressive language, or formatting issues that reduce deliverability. Many marketers overlook content signals, focusing only on copy quality rather than spam compliance.\n\nAn email deliverability tester also evaluates sender reputation. This includes bounce rates, complaint history, and sending behavior. New domains or Gmail accounts should regularly run an email deliverability test Gmail to ensure messages are trusted.\n\nIn simple terms, an email deliverability test is a preventive tool. It helps marketers fix problems before sending campaigns and protects long term email performance.",
  
  'Why Use a Free Email Deliverability Test?': "Using a free email deliverability test gives businesses a clear advantage. Many marketers assume their emails are reaching inboxes simply because they are sent successfully. In reality, inbox placement depends on multiple behind the scenes factors.\n\nA best email deliverability tool free helps identify problems such as poor domain reputation, spammy content, or authentication failures. These issues often remain invisible without testing. A spam checker free email deliverability test ensures your email copy complies with modern spam filters.\n\nCold outreach teams benefit the most from a cold email deliverability test. Cold emails are monitored closely by email providers. Testing ensures your messages are not flagged as unsolicited or promotional. Running an email deliverability test free Gmail is especially important for Gmail based outreach accounts.\n\nWith 360airo, marketers can run a free email tester: the quick, precise deliverability test and spam checker in one place. This simplifies testing and reduces dependency on multiple tools.\n\nUltimately, testing improves inbox placement, protects sender reputation, and increases engagement. It is one of the most cost effective ways to improve email marketing results.",
  
  'Email Deliverability Test Tools': "There are many email deliverability test tools available today. However, not all tools provide actionable insights. A good email deliverability test free online tool should analyze both technical setup and email content.\n\nAn effective email deliverability tester checks authentication records, sending IP reputation, and spam filters. It also provides feedback on how email providers interpret your messages. Some tools also offer inbox placement simulations.\n\nUsing the best free email deliverability test allows marketers to test without financial commitment. This is ideal for startups and small businesses testing new campaigns. A test email address deliverability free feature helps verify sender trustworthiness.\n\n360airo offers an email deliverability test free Gmail and domain based testing. This helps businesses understand how Gmail and other providers classify their emails. By combining spam analysis and authentication checks, marketers get a complete deliverability overview.\n\nChoosing the right email deliverability test tools ensures accurate insights and long term campaign success.",
  
  'Email Deliverability Tool Free Gmail': "Gmail is one of the strictest email providers. Running an email deliverability tool free Gmail test is essential for marketers sending bulk or cold emails. Gmail evaluates sender reputation, authentication, and engagement signals aggressively.\n\nAn email deliverability test Gmail helps identify whether emails land in inbox, promotions, or spam. Many marketers unknowingly trigger promotions tab placement due to formatting and link usage.\n\nA free email deliverability test for Gmail checks SPF, DKIM, and DMARC alignment. It also scans for content patterns that Gmail flags as promotional or spam. This allows marketers to optimize email copy and structure.\n\nUsing 360airo, businesses can test Gmail deliverability without paid subscriptions. This makes it easier to adjust campaigns before scaling.\n\nConsistent Gmail testing improves open rates, reply rates, and sender trust over time.",
  
  'How Do I Improve My Email Deliverability?': "Improving email performance starts with understanding how do I improve my email deliverability. The first step is running a free email deliverability test to identify existing issues.\n\nAuthenticate your domain properly using SPF, DKIM, and DMARC. Clean your email marketing lists regularly to reduce bounces. Avoid spam trigger words and excessive links. Use a free email spam checker before every campaign.\n\nSending consistency also matters. Gradually increase sending volume and avoid sudden spikes. Always test campaigns using an email deliverability test free online tool.\n\nPlatforms like 360airo simplify deliverability improvement by combining testing, list hygiene, and spam checks in one system.",
  
  'Which Email Service Has the Best Deliverability?': "Many marketers ask which email service has the best deliverability. The answer depends on use case and sending behavior. Gmail, Outlook, and Yahoo all have strong infrastructure but strict filtering.\n\nGmail often provides the best inbox placement for well authenticated and engaged senders. However, Gmail also has the least tolerance for spam signals. This is why running an email deliverability test Gmail is critical.\n\nProfessional email services combined with tools like 360airo help maintain high deliverability by monitoring reputation and compliance.",
  
  'Conclusion': "Using a free email deliverability test is no longer optional. It is a core requirement for successful cold email and marketing campaigns. With 360airo, businesses can test, optimize, and protect email performance without added cost.",
};

// FAQ Data - Keeping the same FAQ structure but can be updated if needed
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
    (post) => post.id === 'deliverability'
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