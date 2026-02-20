'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Newsletter from '@/components/Newsletter';
import { featuredPosts, popularPosts, editorsPicks } from '@/app/blog/blogdata';
import BlogCard from '@/components/BlogCard';
import { Twitter, Linkedin, Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";

// Updated sections to match the 2026 cold email software guide
const sections = [
  '10 Cheapest Cold Email Software Tools for Startups & Agencies: 2026 Guide',
  'How We Defined “Cheapest Cold Email Software”',
  '1. 360Airo',
  '2. Instantly',
  '3. SmartReach',
  '4. Mailmeteor',
  '5. GMass',
  '6. Lemlist',
  '7. Woodpecker',
  '8. Mailshake',
  '9. Yesware',
  '10. Snov.io',
  'Why We Built 360Airo',
  'Cheapest Cold Email Software vs Long-Term Cost',
  'Are Free Email Outreach Tools Enough?',
  'How to Choose the Cheapest Cold Email Software for Your Team',
  'Conclusion',
] as const;

type SectionType = typeof sections[number];

// ✅ Complete section content mapping with ALL your content
const sectionContent: Record<string, string> = {
  '10 Cheapest Cold Email Software Tools for Startups & Agencies: 2026 Guide': "Cold email remains one of the most cost-effective growth channels for startups and agencies — but only if the tooling makes sense. Paying enterprise-level prices before proving outbound is one of the fastest ways to burn budget without results.\n\nThat's why many early-stage teams look for the cheapest cold email software that still supports deliverability, personalization, and scale.\n\nThis 2026 guide breaks down 10 affordable cold email tools startups and agencies actually use — including what each tool is good at, where it falls short, and who it's best for.",
  
  'How We Defined “Cheapest Cold Email Software”': "This list isn't about tools that are \"cheap\" but unusable. To qualify, a platform had to meet at least three of the following:\n\n• Low entry price suitable for startups\n• Transparent pricing (no hidden seat costs)\n• Core cold email functionality (sequences, scheduling, tracking)\n• Basic deliverability support\n• Practical for agencies or small sales teams\n\nSome tools are fully paid, some are freemium, and some overlap with free email outreach tools for early testing.",
  
  '1. 360Airo': "Best for: Startups and agencies that want an all-in-one outreach stack without stacking tools.\n\n360Airo is positioned as one of the cheapest cold email software options that doesn't sacrifice infrastructure. It combines email campaigns, LinkedIn outreach, email warmup, free email verification, analytics, and a unified inbox in one platform.\n\nInstead of paying separately for verification, warmup, sequences, and reply management, teams get a consolidated system that keeps costs predictable.\n\nWhy it works well for budget teams:\n• Built-in free email verification\n• Native email warmup\n• Email + LinkedIn campaigns\n• Unified inbox and analytics\n• Scales without adding multiple tools",
  
  '2. Instantly': "Best for: High-volume cold email senders focused on scale.\n\nInstantly is popular among agencies running large outbound volumes. Pricing is relatively affordable compared to enterprise platforms, though add-ons can increase costs over time.\n\nIt's often used alongside other tools, which can raise the total spend beyond what early startups expect.",
  
  '3. SmartReach': "Best for: Teams wanting structured campaigns with moderate automation.\n\nSmartReach offers a balance between price and features. It's not the cheapest option on this list, but it's still competitive for teams that want a stable, mid-range cold email platform.\n\nFor agencies managing multiple clients, pricing can scale quickly.",
  
  '4. Mailmeteor': "Best for: Gmail-based outreach on a tight budget.\n\nMailmeteor works directly inside Gmail and Google Sheets. It's one of the more affordable options for founders testing outbound for the first time.\n\nIt lacks advanced deliverability tools but works well as an early experiment.",
  
  '5. GMass': "Best for: Simple Gmail campaigns without complexity.\n\nGMass is a long-standing Gmail extension used for basic cold email campaigns. Pricing is low, making it attractive as a cheapest cold email software entry point.\n\nHowever, it's limited in reporting, inbox management, and long-term scalability.",
  
  '6. Lemlist': "Best for: Personalization-heavy campaigns.\n\nLemlist focuses heavily on creative personalization (images, dynamic fields, videos). While not the cheapest tool outright, it remains cost-effective for teams prioritizing highly customized outreach.\n\nMany teams pair Lemlist with free email outreach tools for verification or warmup to manage costs.",
  
  '7. Woodpecker': "Best for: Simple follow-up automation.\n\nWoodpecker is straightforward and reasonably priced for small teams. It handles core sequencing well but often requires integrations for deeper analytics and inbox workflows.",
  
  '8. Mailshake': "Best for: Sales teams that want structure without heavy customization.\n\nMailshake sits in the mid-price range but remains accessible compared to enterprise tools. It's often used by agencies that value reliability over experimentation.\n\nCosts can rise with additional features and seats.",
  
  '9. Yesware': "Best for: Sales teams already using Gmail or Outlook heavily.\n\nYesware blends email tracking with basic sequencing. While not a pure cold email tool, it's sometimes used as a cheaper alternative for outbound when budgets are tight.\n\nIt's better suited for warm or semi-cold outreach.",
  
  '10. Snov.io': "Best for: All-in-one prospecting and outreach on a budget.\n\nSnov.io combines lead sourcing, verification, and outreach. It's often considered among the cheapest cold email software options for startups that want prospecting and sending in one place.\n\nDeliverability features are basic but sufficient for early-stage campaigns.",
  
  'Why We Built 360Airo': "Most cold email tools didn't fail because they were expensive. They failed because they forced teams to duct-tape five different tools together just to run one campaign properly.\n\nWe saw startups paying for:\n• One tool to send emails\n• Another to warm inboxes\n• A third to verify lists\n• A fourth to track replies\n• And spreadsheets to hold it all together\n\nThat setup breaks fast — especially for small teams and agencies managing multiple campaigns.\n\nWe built 360Airo because cold outreach shouldn't require an ops team.\n\nThe goal was simple:\n• Make deliverability the default, not an add-on\n• Remove the need for third-party verification and warmup tools\n• Let teams manage email, LinkedIn, campaigns, replies, and analytics in one place\n• Keep pricing accessible so early-stage teams don't have to choose between growth and budget\n\n360Airo wasn't designed as another point solution. It was built as a complete outreach system — one teams can start with and scale on without rebuilding their stack every few months.",
  
  'Cheapest Cold Email Software vs Long-Term Cost': "Many teams focus only on sticker price. In practice, real cost comes from:\n\n• Needing multiple tools to fill feature gaps\n• Paying separately for verification and warmup\n• Losing deliverability due to missing safeguards\n• Wasting time managing fragmented workflows\n\nSometimes the cheapest tool upfront becomes expensive over time.",
  
  'Are Free Email Outreach Tools Enough?': "Free email outreach tools are useful for:\n\n• Learning cold email basics\n• Testing early assumptions\n• Sending very low volumes\n\nHowever, they usually lack:\n\n• Deliverability protection\n• Inbox placement visibility\n• Scalable workflows\n\nMost teams outgrow free tools once results start to matter.",
  
  'How to Choose the Cheapest Cold Email Software for Your Team': "Before choosing based on price alone, ask:\n\n• Does this tool protect deliverability?\n• Will I need multiple add-ons later?\n• Can it grow with my outreach volume?\n• Does it support agencies or teams?\n\nThe cheapest cold email software is the one that lets you grow without constantly switching platforms.",
  
  'Conclusion': "In 2026, affordable cold email software is less about \"cheap\" and more about efficient.\n\nStartups and agencies should look for tools that:\n\n• Reduce risk\n• Minimize dependencies\n• Support sustainable outreach\n• Keep costs predictable\n\nWhether you start with Gmail-based tools or move directly to a platform like 360Airo, the goal is the same: outbound that scales without burning budget or domains.",
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
  const blog = popularPosts.find(
    (post) => post.id === 'cold-email'
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
                
                {/* Special handling for People Also Ask section - keeping FAQ */}
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