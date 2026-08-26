'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import ArticleTile from "./articles/[id]/components/ArticleTile";
import { sampleArticles } from "@/app/data/sampleArticles";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

export default function Home() {
  const [articles, setArticles] = useState<any[]>(sampleArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApprovedArticles() {
      try {
        const q = query(
          collection(db, 'articles'),
          where('status', '==', 'approved')
        );
        const querySnapshot = await getDocs(q);
        
        const firebaseArticles = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter((article: any) => !article.archived);

        setArticles([...sampleArticles, ...firebaseArticles]);
      } catch (error) {
        console.error("Error fetching approved articles:", error);
        setArticles(sampleArticles);
      } finally {
        setLoading(false);
      }
    }

    fetchApprovedArticles();
  }, []);

  return (
    <div className="bg-[#DBF9FF] min-h-screen">
{/* Hero Banner Section */}
<section className="relative w-full h-screen overflow-hidden bg-transparent">
  <div className="absolute inset-0 z-0">
    <Image
      src="/GifBackground.gif"
      alt="M.E.M.O Banner"
      fill
      className="object-cover object-center translate-y-8 sm:translate-y-12" // Shifts the image lower
      priority
    />
  </div>

  {/* Text container */}
  <div className="relative z-10 flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 h-full px-4 sm:px-8 text-center bg-transparent">
    <h1
      className="text-[#FBFDFF] text-[45px] sm:text-[60px] md:text-[80px] lg:text-[120px] tracking-wider leading-tight"
      style={{
        fontFamily: "UpheavalTT, Arial, sans-serif",
        textShadow: "3px 3px 0px #000",
      }}
    >
      GET THE M.E.M.O
    </h1>

    {/* Subtle Transparent Box Container */}
    <div className="mt-4 px-6 py-3 rounded-xl bg-black/20 border border-white/20 max-w-3xl">
      <h2
        className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        style={{
          fontFamily: "UpheavalTT, Arial, sans-serif",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        }}
      >
        From your friendly neighborhood Multi-Ethnic Mental Health Organization
      </h2>
    </div>
  </div>
</section>

      {/* Latest Section */}
      <section className="pt-2 pb-4 sm:pt-4 sm:pb-6">
        <h2
          className="font-montserrat font-black underline text-[36px] sm:text-[44px] md:text-[56px] mb-6 sm:mb-8 text-center px-4"
          style={{ color: "#3b0d37" }}
        >
          CURRENT ISSUES 
        </h2>

        {/* Article Tiles Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <p className="text-xl font-bold text-[#3b0d37]">Loading articles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleTile key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}