'use client';

import Image from 'next/image';
import { Article } from './ArticleTile';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage = ({ article }: ArticlePageProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-[#DBF9FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Article Header */}
        <header className="text-center mb-6 sm:mb-8">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#2C1810] leading-tight px-2"
            style={{ fontFamily: "UpheavalTT, Arial, sans-serif" }}
          >
            {article.title.toUpperCase()}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-base sm:text-lg text-gray-700 px-4">
            <span className="font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {article.author.toUpperCase()}
            </span>
            <span className="hidden sm:inline">|</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {formatDate(article.publicationDate)}
            </span>
          </div>
          
          {/* Divider Line */}
          <div className="w-16 sm:w-24 h-1 bg-gray-400 mx-auto mt-4 sm:mt-6"></div>
        </header>

        {/* Article Container */}
        <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Banner Image inside white container */}
          <div className="mb-6 sm:mb-8">
            <Image
              src={article.image}
              alt="Article"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-md"
              priority
            />
          </div>

          {article.contentType === 'image' ? (
            // Art Piece Display
            <div className="text-center">
              <div className="relative max-w-3xl mx-auto">
                <Image
                  src={article.content}
                  alt={article.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ) : (
            // Text Article Display
            <div 
              className="prose max-w-none text-gray-800 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {article.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 sm:mb-6 text-sm sm:text-base leading-6 sm:leading-7">
                  {paragraph.split('\n').map((line, lIndex) => (
                    <span key={lIndex}>
                      {line.trim()}
                      {lIndex < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;