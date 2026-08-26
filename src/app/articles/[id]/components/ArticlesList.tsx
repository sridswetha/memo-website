'use client';

import React, { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Article } from './ArticleTile'; // Adjust to your component import

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch approved articles
    const q = query(
      collection(db, 'articles'),
      where('status', '==', 'approved')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs: Article[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];

      setArticles(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading articles...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article) => (
        <div key={article.id} className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <p className="text-sm text-gray-600">By {article.author} • {article.publicationDate}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-gray-200 text-xs rounded uppercase">{article.categoryTag}</span>
        </div>
      ))}
    </div>
  );
}