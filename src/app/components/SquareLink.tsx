'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface SquareLinkProps {
  href: string;
  children: ReactNode; // text, icon, or image
  external?: boolean;  // open in new tab if external
  bgColor?: string;    // fallback background color
  bgImage?: string;    // optional background image URL
}

const SquareLink = ({
  href,
  children,
  external = false,
  bgColor = '#F0F9FF',
  bgImage,
}: SquareLinkProps) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`
        relative w-50 h-50
        flex items-center justify-center
        rounded-md
        text-white
        font-semibold
        shadow-md
        overflow-hidden
      `}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional overlay to make text readable */}
      {bgImage && (
        <div className="absolute inset-0 bg-black opacity-30"></div>
      )}

      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default SquareLink;
