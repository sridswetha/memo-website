'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 sm:h-20 z-50">
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
        <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200" onClick={closeMobileMenu}>
            <Image
              src="/memo-logo.png"
              alt="M.E.M.O Logo"
              width={134.06}
              height={59}
              className="h-[40px] sm:h-[48px] md:h-[56px] w-auto max-h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-[#F0F9FF] font-bold text-[16px] lg:text-[18px] xl:text-[20px]
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
              onClick={toggleMobileMenu}
              className="text-[#F0F9FF] p-2 hover:bg-white/10 rounded-md transition-colors"
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
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Content */}
          <div className="relative bg-[#4C3442] w-full pt-20 pb-8 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    text-[#F0F9FF] font-bold text-xl py-3 px-4 rounded-md
                    hover:bg-white/10 transition-all duration-200 ease-in-out
                    ${isActive(item.href) ? 'bg-white/20 underline underline-offset-4' : ''}
                  `}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;