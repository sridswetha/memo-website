'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface Article {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  image: string;
  categoryTag: 'current issues' | 'anecdotal' | 'career' | 'creative works';
  content: string; // Can be text content or image path for art pieces
  contentType: 'text' | 'image'; // To distinguish between articles and art pieces
}

interface ArticleTileProps {
  article: Article;
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'current issues':
      return 'bg-[#E47472]';
    case 'anecdotal':
      return 'bg-[#3D5A94]';
    case 'career':
      return 'bg-[#2A8059]';
    case 'creative works':
      return 'bg-[#2C0A29]';
    default:
      return 'bg-gray-500';
  }
};

const ArticleTile = ({ article }: ArticleTileProps) => {
  return (
    <Link href={`/articles/${article.id}`} className="block">
      <div 
        className="relative w-full aspect-[4/5] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-black border-2 sm:border-[3px]"
        style={{
          transition: 'all 0.3s ease-out',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }}
      >
        {/* Article Image */}
        <div className="relative w-full h-3/5 pt-[30px] sm:pt-[50px]">
          {/* Image with its own border */}
          <div className="relative w-full h-full border-t-2 border-b-2 sm:border-t-[3px] sm:border-b-[3px] border-black">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Top Corner Icons (stay in padded white space) */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <Image
              src="/tile-checks.png"
              alt="Tile checks"
              width={20}
              height={20}
              className="w-6 sm:w-10"
            />
          </div>
          
          <div className="absolute top-2.5 right-2 sm:top-4 sm:right-3">
            <Image
              src="/tile-click.png"
              alt="Tile click"
              width={20}
              height={20}
              className="w-4 sm:w-6"
            />
          </div>

          {/* Category Tag */}
          <div className="absolute top-0.5 right-[30px] sm:top-2.5 sm:right-[50px]">
            <span className={`${getCategoryColor(article.categoryTag)} font-montserrat font-semibold text-[8px] sm:text-[10px] text-white px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-full uppercase`}>
              ⦿ {article.categoryTag}
            </span>
          </div>
        </div>

        {/* Article Info */}
        <div className="relative p-3 sm:p-4 h-2/5 flex flex-col justify-between">
          <div>
            <h3 className="font-montserrat font-extrabold text-[20px] xs:text-[22px] md:text-[30px] mb-1 line-clamp-2 sm:line-clamp-3 text-gray-800 leading-tight">
              {article.title}
            </h3>
            <p className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 font-montserrat font-bold text-[10px] sm:text-[14px] md:text-[16px] text-gray-600">
              {article.author.toUpperCase()}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
            <Image
              src="/tile-arrow.png"
              alt="Read more"
              width={16}
              height={16}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleTile;