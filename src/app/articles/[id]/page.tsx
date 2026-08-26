'use client';

import { useEffect, useState, use } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { sampleArticles } from '@/app/data/sampleArticles';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

      // 1. Check local sample articles first
      const localArticle = sampleArticles.find((item) => String(item.id) === String(id));
      if (localArticle) {
        setArticle(localArticle);
        setLoading(false);
        return;
      }

      // 2. Fetch from Firestore if not a local sample
      try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#DBF9FF]">
        <p className="text-xl font-bold text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-[#DBF9FF]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
        <p className="text-gray-600">The requested article does not exist or has been removed.</p>
      </div>
    );
  }

  // Handle both possible property names for images (imageUrl or image)
  const articleImage = article?.imageUrl || article?.image;

  return (
    <div className="bg-[#DBF9FF] min-h-screen pt-28 pb-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-12 rounded-xl shadow-md">
        
        {/* Title */}
        <h1
          className="text-3xl sm:text-5xl font-bold mb-4 text-[#3b0d37] text-center tracking-wide"
          style={{ fontFamily: "UpheavalTT, Arial, sans-serif" }}
        >
          {article?.title ? article.title.toUpperCase() : ''}
        </h1>

        {/* Author & Meta */}
        <div className="flex flex-col items-center justify-center space-y-1 text-base sm:text-lg text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <p className="font-semibold text-[#4C3442]">By {article?.author || 'Anonymous'}</p>
          {article?.date && <p className="text-sm text-gray-500">{article.date}</p>}
        </div>

        {/* Article Image (if available) */}
        {articleImage && (
          <div className="relative w-full h-[250px] sm:h-[400px] mb-8 rounded-lg overflow-hidden shadow-inner">
            <Image
              src={articleImage}
              alt={article?.title || 'Article Image'}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Content with proper spacing and text wrapping */}
        <div className="text-gray-800 leading-relaxed text-base sm:text-lg space-y-6 prose max-w-none">
        {article?.content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {article.content}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-500 italic">No content available for this article.</p>
        )}
      </div>

      </div>
    </div>
  );
}