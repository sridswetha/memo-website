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
      <div className="relative w-full aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
        {/* Article Image */}
        <div className="relative w-full h-3/5">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
          
          {/* Top Corner Icons */}
          <div className="absolute top-2 left-2">
            <Image
              src="/tile-checks.png"
              alt="Tile checks"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          
          <div className="absolute top-2 right-2">
            <Image
              src="/tile-click.png"
              alt="Tile click"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>

          {/* Category Tag */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <span className={`${getCategoryColor(article.categoryTag)} text-white text-xs px-2 py-1 rounded-full uppercase font-medium`}>
              ⦿ {article.categoryTag}
            </span>
          </div>
        </div>

        {/* Article Info */}
        <div className="relative p-4 h-2/5 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm mb-1 line-clamp-2 text-gray-800">
              {article.title}
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              {article.author.toUpperCase()}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="absolute bottom-2 right-2">
            <Image
              src="/tile-arrow.png"
              alt="Read more"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleTile;