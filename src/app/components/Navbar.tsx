'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed w-full h-20 overflow-hidden z-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/navbar-bg.png"
          alt="Navbar background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Navbar Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
          <Image
            src="/memo-logo.png"
            alt="M.E.M.O Logo"
            width={134.06}
            height={59}
            className="h-[56px] w-auto max-h-14"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                text-[#F0F9FF] font-bold text-20
                hover:underline hover:underline-offset-4
                transition-all duration-200 ease-in-out
                ${isActive(item.href) ? 'underline underline-offset-4' : ''}
              `}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#F0F9FF] p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;