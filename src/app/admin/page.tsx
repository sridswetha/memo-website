'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

export default function AdminDashboard() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all articles (pending, approved, archived)
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

  // Handle Approve (moves status to 'approved')
  const handleApprove = async (id: string) => {
    try {
      await updateDoc(doc(db, 'articles', id), { status: 'approved' });
      fetchArticles(); // Refresh list
    } catch (error) {
      console.error("Error approving article:", error);
    }
  };

  // Handle Archive / Unarchive toggle
  const toggleArchive = async (id: string, currentArchivedStatus: boolean) => {
    try {
      await updateDoc(doc(db, 'articles', id), {
        archived: !currentArchivedStatus,
      });
      fetchArticles(); // Refresh list
    } catch (error) {
      console.error("Error updating archive status:", error);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-[#DBF9FF]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-[#3b0d37] mb-6">Admin Dashboard</h1>

        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="p-4 border rounded-lg flex justify-between items-center bg-gray-50">
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

              <div className="flex gap-2">
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