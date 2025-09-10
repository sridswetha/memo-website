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
    <div className="min-h-screen pt-20 bg-[#DBF9FF]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2C1810]"
            style={{ fontFamily: "UpheavalTT, Arial, sans-serif" }}
          >
            {article.title.toUpperCase()}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-lg text-gray-700">
            <span className="font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {article.author.toUpperCase()}
            </span>
            <span>|</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {formatDate(article.publicationDate)}
            </span>
          </div>
          
          {/* Divider Line */}
          <div className="w-24 h-1 bg-gray-400 mx-auto mt-6"></div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
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
              {/* Split content by paragraphs and render each */}
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-base leading-7">
                  {paragraph}
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