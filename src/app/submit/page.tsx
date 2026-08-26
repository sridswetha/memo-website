'use client';

import { useState } from 'react';
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

// Built-in Rich Text Editor Toolbar Component
function RichTextToolbar({ editor }: { editor: any }) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-gray-100 border-b rounded-t-md">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('bold') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 text-sm rounded ${editor.isActive('italic') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        <i>I</i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-3 py-1 text-sm rounded ${editor.isActive('underline') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        <u>U</u>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        H1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('bulletList') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('orderedList') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
      >
        1. List
      </button>
    </div>
  );
}

const DEFAULT_COVER_IMAGE = '/Sunset.png';

export default function SubmitPage() {
  const [contentType, setContentType] = useState<'text' | 'image'>('text');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('Current Issues');
  const [textContent, setTextContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Initialize TipTap Editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        italic: {},
      }),
      Underline,
    ],
    content: '',
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setTextContent(editor.getHTML());
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const finalCoverImage = coverImage.trim() !== '' ? coverImage : DEFAULT_COVER_IMAGE;

      await addDoc(collection(db, 'articles'), {
        title,
        author,
        contentType,
        category,
        image: finalCoverImage,
        caption,
        content: contentType === 'text' ? textContent : finalCoverImage,
        status: 'pending',
        archived: false,
        createdAt: serverTimestamp(),
      });

      setStatusMessage({
        type: 'success',
        text: 'Your piece has been submitted successfully and is awaiting admin review!',
      });
      
      setTitle('');
      setAuthor('');
      setCoverImage('');
      setCaption('');
      setCategory('Current Issues');
      setTextContent('');
      editor?.commands.clearContent();
      setImageFile(null);
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatusMessage({
        type: 'error',
        text: 'Failed to submit piece. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#DBF9FF] px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        {/* Main page title keeps the cool theme font */}
        <h1 
          className="text-3xl sm:text-5xl font-bold mb-6 text-center text-[#3b0d37]"
          style={{ fontFamily: 'UpheavalTT, Arial, sans-serif' }}
        >
          SUBMIT A PIECE
        </h1>

        {statusMessage.text && (
          <div 
            className={`mb-6 p-4 rounded-md text-sm font-semibold ${
              statusMessage.type === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-800' 
                : 'bg-red-100 border border-red-400 text-red-800'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Title *</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37] font-sans text-gray-900"
              style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Author Name *</label>
            <input 
              type="text" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37] font-sans text-gray-900"
              style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37] bg-white font-sans text-gray-900"
              style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
            >
              <option value="Current Issues" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>Current Issues</option>
              <option value="Anecdotal" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>Anecdotal</option>
              <option value="Events" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>Events</option>
              <option value="Creative Works" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>Creative Works</option>
              <option value="Career" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>Career</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1">Cover Image (Optional)</label>
            <p className="text-xs text-gray-500 mb-2">Upload an image file from your computer to use as the cover. If left blank, a default cover will be used.</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-md bg-white text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4C3442] file:text-white hover:file:bg-[#3b0d37]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1">Image Caption (Optional)</label>
            <input 
              type="text" 
              value={caption} 
              onChange={(e) => setCaption(e.target.value.slice(0, 150))}
              placeholder="Write a short caption..."
              className="w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37] font-sans text-sm text-gray-900"
              style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
            />
            <p className="text-xs text-gray-400 mt-1 text-right">{caption.length}/150 characters</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Submission Type *</label>
            <div className="flex space-x-4 font-sans" style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="contentType" 
                  value="text" 
                  checked={contentType === 'text'} 
                  onChange={() => setContentType('text')}
                  className="mr-2"
                />
                Text / Article
              </label>

              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="contentType" 
                  value="image" 
                  checked={contentType === 'image'} 
                  onChange={() => setContentType('image')}
                  className="mr-2"
                />
                Image / Art Piece
              </label>
            </div>
          </div>

          {contentType === 'text' ? (
            <div>
              <label className="block text-gray-700 font-bold mb-2">Article Body *</label>
              <div className="border rounded-md bg-white shadow-sm">
                <RichTextToolbar editor={editor} />
                <EditorContent 
                  editor={editor} 
                  className="p-4 min-h-[250px] focus:outline-none prose max-w-none text-gray-800 [&_em]:italic [&_i]:italic [&_u]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 font-sans" 
                  style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-gray-700 font-bold mb-2">Upload Art Piece File *</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#4C3442] text-white py-3 rounded-md hover:bg-[#3b0d37] transition font-bold disabled:opacity-50"
            style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
          >
            {loading ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
}