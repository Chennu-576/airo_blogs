import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-black">Data</span>
              <span style={{ color: 'rgb(180, 94, 207)' }}>Insights</span>
            </div>
            <p className="text-black text-sm leading-relaxed">
              DataInsights helps you achieve your business goals through a customized database and data-driven strategies.
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/connect" className="text-black text-md hover:text-black transition-colors">
                  Connect
                </Link>
              </li>
              <li>
                <Link href="/prospect" className="text-black text-md hover:text-black transition-colors">
                  Prospect
                </Link>
              </li>
              <li>
                <Link href="/prompt" className="text-black text-md hover:text-black transition-colors">
                  Prompt
                </Link>
              </li>
              <li>
                <Link href="/enhance" className="text-black text-md hover:text-black transition-colors">
                  Enhance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-6">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-black text-md hover:text-black transition-colors">
                  Ebooks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black text-md hover:text-black transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black text-md hover:text-black transition-colors">
                  Infographics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black text-md hover:text-black transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black-600 text-sm">
              © 2025 DataInsights. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-black text-sm hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-black text-sm hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
