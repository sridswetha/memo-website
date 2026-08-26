'use client';

import Link from 'next/link';
import Image from 'next/image';

interface UserIconProps {
  user?: {
    name: string;
    avatarUrl?: string;
  } | null;
}

export default function UserIcon({ user }: UserIconProps) {
  if (!user) {
    return (
      <Link 
        href="/login" 
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Login"
      >
        {/* Placeholder SVG Icon for logged out state */}
        <svg 
          className="w-6 h-6 text-gray-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </Link>
    );
  }

  return (
    <div className="relative flex items-center justify-center">
      {user.avatarUrl ? (
        <Image 
          src={user.avatarUrl} 
          alt={user.name} 
          width={32} 
          height={32} 
          className="rounded-full border border-gray-300"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
          {user.name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}