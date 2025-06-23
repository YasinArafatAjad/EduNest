import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Contact', href: '/contact' },
  ];

  const categories = [
    { name: 'Web Development', href: '/categories/web-development' },
    { name: 'Design', href: '/categories/design' },
    { name: 'Business', href: '/categories/business' },
    { name: 'Marketing', href: '/categories/marketing' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-wood-900 text-wood-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cream-400" />
              <span className="font-bold text-xl text-wood-100">EduNest</span>
            </Link>
            <p className="text-wood-300 text-sm leading-relaxed">
              Empowering learners worldwide with premium online courses. 
              Master new skills and advance your career with expert-led instruction.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-wood-400 hover:text-cream-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-wood-400 hover:text-cream-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-wood-400 hover:text-cream-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-wood-400 hover:text-cream-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-wood-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-wood-300 hover:text-cream-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-wood-100 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-wood-300 hover:text-cream-400 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-wood-100 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cream-400" />
                <span className="text-wood-300 text-sm">support@edunest.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cream-400" />
                <span className="text-wood-300 text-sm">+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cream-400" />
                <span className="text-wood-300 text-sm">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-wood-400 text-sm">
              © 2024 EduNest. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {support.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-wood-400 hover:text-cream-400 text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}