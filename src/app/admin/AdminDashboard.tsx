'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

export default function AdminDashboard() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const fetchedArticles = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await updateDoc(doc(db, 'articles', id), { status: 'approved' });
      fetchArticles();
    } catch (error) {
      console.error("Error approving article:", error);
    }
  };

  const toggleArchive = async (id: string, currentArchivedStatus: boolean) => {
    try {
      await updateDoc(doc(db, 'articles', id), {
        archived: !currentArchivedStatus,
      });
      fetchArticles();
    } catch (error) {
      console.error("Error updating archive status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#DBF9FF]">
        <p className="text-xl font-bold text-gray-700">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-[#DBF9FF]">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <h1 
          className="text-3xl sm:text-5xl font-bold text-[#3b0d37] mb-8 text-center"
          style={{ fontFamily: "UpheavalTT, Arial, sans-serif" }}
        >
          ADMIN DASHBOARD
        </h1>

        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-600">By {article.author} | Category: {article.category || 'General'}</p>
                <div className="flex gap-2 mt-2">
                  <span className={`px-2 py-0.5 text-xs font-bold rounded ${article.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {article.status}
                  </span>
                  {article.archived && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded bg-red-100 text-red-800">
                      Archived
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto justify-end">
                {article.status !== 'approved' && (
                  <button
                    onClick={() => handleApprove(article.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm font-bold hover:bg-green-700"
                  >
                    Approve
                  </button>
                )}

                <button
                  onClick={() => toggleArchive(article.id, article.archived || false)}
                  className={`px-3 py-1 rounded text-sm font-bold text-white ${
                    article.archived ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  {article.archived ? 'Unarchive' : 'Archive'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}