import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-secondary font-bold text-xl mb-4">
              <span className="bg-primary text-white p-1 rounded">L</span>
              <span>Lindy</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Organize your photos with AI. Discover memories, create collections, and find what you're looking for instantly.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" Icon={Twitter} />
              <SocialLink href="https://linkedin.com" Icon={Linkedin} />
              <SocialLink href="https://github.com" Icon={Github} />
              <SocialLink href="https://instagram.com" Icon={Instagram} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/api">API</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/team">Team</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lindy AI. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-600 text-sm mx-3">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-600 text-sm mx-3">
              Terms
            </Link>
            <button className="text-gray-500 hover:text-gray-600 text-sm mx-3">
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-600 hover:text-gray-900 transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, Icon }: { href: string; Icon: React.ComponentType<any> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;