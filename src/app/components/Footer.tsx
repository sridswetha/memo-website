import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/memoumd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: '/Instagram.png',
      alt: 'Instagram'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/memoumd',
      icon: '/Linkedin.png',
      alt: 'LinkedIn'
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/ScEYX8w8jB',
      icon: '/Discord.png',
      alt: 'Discord'
    }
  ];

  return (
    <footer className="relative w-full h-28 sm:h-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-bg.png"
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-1 sm:mb-2">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/memo-logo.png"
              alt="M.E.M.O Logo"
              width={80}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Email */}
        <div className="mb-1 sm:mb-2 text-center px-2">
          <p className="text-[#FBFDFF] text-xs sm:text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Reach out to us at: <span className="font-bold break-all sm:break-normal">memo.umd@gmail.com</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;