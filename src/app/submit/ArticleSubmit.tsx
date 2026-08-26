'use client';

import React, { useState } from 'react';
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ArticleSubmit() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryTag, setCategoryTag] = useState('current issues');
  const [contentType, setContentType] = useState<'markdown' | 'text'>('text');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'articles'), {
        title,
        author,
        publicationDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        image: image || '/candid.jpg', // Fallback image path
        categoryTag,
        content,
        contentType,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit article:', err);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-[#8AA7B2] text-white text-center rounded-xl">
        <h2 className="text-xl font-bold">Submission Received!</h2>
        <p className="mt-2">Your article has been sent to our editorial team for review.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-[#3b0d37]">Submit an Article</h2>

      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input type="text" className="w-full border p-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div>
        <label className="block font-semibold mb-1">Author Name(s)</label>
        <input type="text" className="w-full border p-2 rounded" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-semibold mb-1">Category</label>
          <select className="w-full border p-2 rounded" value={categoryTag} onChange={(e) => setCategoryTag(e.target.value)}>
            <option value="current issues">Current Issues</option>
            <option value="creative works">Creative Works</option>
            <option value="anecdotal">Anecdotal</option>
            <option value="career">Career</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1">Format</label>
          <select className="w-full border p-2 rounded" value={contentType} onChange={(e) => setContentType(e.target.value as 'markdown' | 'text')}>
            <option value="text">Plain Text</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Image Path / URL</label>
        <input type="text" placeholder="/mind-the-cuts.png" className="w-full border p-2 rounded" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <label className="block font-semibold mb-1">Content</label>
        <textarea rows={10} className="w-full border p-2 rounded" value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>

      <button type="submit" className="w-full py-3 bg-[#3b0d37] text-white font-bold rounded hover:bg-[#581452] transition">
        Submit Article
      </button>
    </form>
  );
}