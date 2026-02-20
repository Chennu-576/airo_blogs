'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Newsletter from '@/components/Newsletter';
import { featuredPosts, editorsPicks } from '@/app/blog/blogdata';
import BlogCard from '@/components/BlogCard';
import { Twitter, Linkedin, Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";

// Updated sections to match the SPF generator guide
const sections = [
  'Free SPF Record Generator – Create SPF Instantly & Avoid Email Failures',
  '1. What Is an SPF Generator and Why It Matters',
  '2. How SPF Records Improve Email Deliverability',
  '3. Common Problems Without Proper SPF Setup',
  '4. How a Free SPF Generator Works',
  '5. Creating an SPF Record with 360Airo’s Free Tool',
  '6. SPF, DKIM, and DMARC: How They Work Together',
  '7. Avoiding Common SPF Configuration Mistakes',
  '8. Why We Built 360Airo’s SPF Generator',
  '9. When Should You Update Your SPF Record?',
  '10. Using SPF with Email Campaigns and Cold Outreach',
  '11. How SPF Helps Prevent Email Rejections',
  '12. Best Practices for Long-Term Authentication Health',
  '13. FAQs About SPF Generators',
  '14. Conclusion: Authenticate First, Scale Second',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  'Free SPF Record Generator – Create SPF Instantly & Avoid Email Failures': "Email deliverability starts with authentication. Without proper domain setup, even well-written emails can land in spam or get rejected completely. One of the most critical steps in email authentication is setting up a valid SPF record.\n\nA reliable SPF generator helps you create accurate DNS records quickly, ensuring your emails are authorized, trusted, and delivered successfully.\n\nIn this guide, you'll learn how SPF works, why it matters, and how to use a free SPF record generator to protect your campaigns.",
  
  '1. What Is an SPF Generator and Why It Matters': "An SPF generator is a specialized tool that helps domain owners create Sender Policy Framework (SPF) records without needing advanced DNS knowledge. These records define which mail servers are authorized to send emails on behalf of your domain.\n\nWithout SPF authentication, email providers cannot verify whether your messages are legitimate. This increases the risk of spam filtering, phishing flags, and domain blacklisting. Over time, poor authentication damages sender reputation and reduces campaign performance.\n\nUsing a reliable SPF generator ensures your domain is properly authenticated from the start, protecting your outreach efforts and long-term credibility.",
  
  '2. How SPF Records Improve Email Deliverability': "Email providers rely on authentication signals to decide whether an email should reach the inbox. SPF is one of the first checks performed when your email is received.\n\nWhen your SPF record is valid:\n• Receiving servers confirm your sending identity\n• Spam filters assign higher trust scores\n• Bounce rates decrease\n• Inbox placement improves\n\nSPF works best when combined with DKIM and DMARC. Together, these protocols create a layered security system that helps email providers distinguish legitimate campaigns from malicious activity.",
  
  '3. Common Problems Without Proper SPF Setup': "Domains without SPF often experience hidden deliverability problems before they realize something is wrong.\n\nThese issues may include:\n• Sudden drops in open rates\n• Increased soft and hard bounces\n• Emails being silently filtered\n• Customer complaints about missing emails\n• Campaign reports showing inconsistent delivery\n\nMany teams mistake these symptoms for copy or targeting problems, when the real cause is authentication failure. A proper SPF setup resolves these issues at the technical level.",
  
  '4. How a Free SPF Generator Works': "A free SPF generator simplifies DNS configuration by automating record creation.\n\nBehind the scenes, it:\n• Identifies authorized mail servers\n• Formats syntax correctly\n• Prevents duplicate entries\n• Optimizes lookup counts\n• Tests compatibility\n\nInstead of manually researching SPF values for each provider, users simply select their email services and generate a ready-to-use record. This reduces human error and setup time significantly.",
  
  '5. Creating an SPF Record with 360Airo’s Free Tool': "360Airo's SPF generator is built specifically for outreach and campaign-driven teams.\n\nIt integrates directly with your sending infrastructure and helps you:\n• Authenticate multiple domains\n• Validate sending tools\n• Prevent conflicts between services\n• Monitor authentication status\n• Maintain long-term domain health\n\nBecause authentication is part of the outreach workflow, teams are less likely to skip or misconfigure this critical step.",
  
  '6. SPF, DKIM, and DMARC: How They Work Together': "SPF, DKIM, and DMARC each serve a different role in email authentication.\n\nSPF verifies sending servers.\nDKIM confirms message integrity.\nDMARC enforces policy rules.\n\nWhen combined:\n• Unauthorized senders are blocked\n• Modified emails are rejected\n• Spoofing attempts are detected\n• Domain reputation improves\n\nModern email providers increasingly require all three protocols for consistent inbox placement.",
  
  '7. Avoiding Common SPF Configuration Mistakes': "SPF errors are one of the most common causes of deliverability failure.\n\nMajor mistakes include:\n• Publishing multiple SPF records\n• Forgetting to include third-party tools\n• Exceeding 10 DNS lookups\n• Using outdated syntax\n• Applying hard fail policies too early\n\nAn automated SPF generator prevents these issues by validating structure before publishing.",
  
  '8. Why We Built 360Airo’s SPF Generator': "We built our SPF generator after seeing hundreds of outreach teams struggle with technical setup.\n\nMost users:\n• Didn't know where to start\n• Copied incorrect records\n• Ignored authentication\n• Relied on outdated guides\n\nThis led to wasted campaigns and damaged domains. Our goal was to make authentication accessible, automated, and reliable for growing teams.",
  
  '9. When Should You Update Your SPF Record?': "SPF records must evolve with your infrastructure.\n\nYou should update them when:\n• Adding new sending tools\n• Launching new campaigns\n• Changing providers\n• Scaling volume\n• Adding subdomains\n\nFailing to update SPF after changes creates hidden risks that impact future campaigns.",
  
  '10. Using SPF with Email Campaigns and Cold Outreach': "Cold outreach places higher scrutiny on authentication.\n\nEmail providers closely monitor:\n• New domains\n• Rapid volume increases\n• Cold traffic patterns\n• Low engagement rates\n\nSPF validation helps offset this risk by proving sender legitimacy. Combined with warmup and monitoring, it enables safer scaling.",
  
  '11. How SPF Helps Prevent Email Rejections': "Email servers reject unauthenticated messages to protect users.\n\nSPF prevents this by:\n• Authorizing IP addresses\n• Blocking spoofed senders\n• Supporting DMARC policies\n• Strengthening domain trust\n\nThis ensures your campaigns are evaluated fairly rather than automatically filtered.",
  
  '12. Best Practices for Long-Term Authentication Health': "For sustainable deliverability:\n\n• Review SPF quarterly\n• Monitor DMARC reports\n• Remove unused services\n• Validate new tools\n• Track bounce patterns\n\nAuthentication is not a one-time task. It requires ongoing maintenance to remain effective.",
  
  '13. FAQs About SPF Generators': '', // This will be handled by FAQ component
  
  '14. Conclusion: Authenticate First, Scale Second': "Authentication is the foundation of outreach success.\n\nWithout it:\n• Campaigns fail\n• Data becomes unreliable\n• Growth stalls\n\nWith proper SPF setup, teams can scale confidently while protecting reputation.\n\n360Airo's free SPF generator ensures authentication becomes a standard step, not an afterthought.\n\nSet it once. Monitor regularly. Scale safely.",
};

// FAQ Data - Updated for SPF topic
const faqData = [
  {
    question: "What is an SPF generator?",
    answer: "An SPF generator is a tool that helps you create a valid SPF DNS record for your domain. It ensures that only authorized servers can send emails on your behalf, improving deliverability and security."
  },
  {
    question: "How to fix no SPF record?",
    answer: "You can fix this by using an SPF generator tool to create a proper record and adding it to your domain's DNS settings. Once added, your emails will be authenticated correctly."
  },
  {
    question: "How do I get an SPF record from Google?",
    answer: "Google Workspace provides SPF values for its mail servers. You can include these values in your domain's SPF record using a generator or by editing DNS manually."
  },
  {
    question: "What is SPF in simple terms?",
    answer: "SPF tells email providers which servers are allowed to send emails from your domain. It helps prevent fake or unauthorized emails from using your address."
  },
  {
    question: "Why did SPF cause my mail to be rejected?",
    answer: "Mail is rejected when SPF is missing, incorrectly configured, or exceeds DNS lookup limits. This causes receiving servers to treat your emails as unauthenticated."
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
    (post) => post.id === 'spf-record'
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
                
                {/* Special handling for FAQs About SPF Generators section */}
                {title === '13. FAQs About SPF Generators' ? (
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