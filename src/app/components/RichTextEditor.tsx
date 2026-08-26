'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function RichTextEditor({ content, onChange }: { content: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    immediatelyRender: false, // Prevents Next.js SSR hydration mismatches
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Outputs clean HTML with <strong>, <em>, <h1>-<h3>, <ul>, etc.
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md bg-white overflow-hidden">
      {/* Toolbar Buttons */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-100 border-b">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('bold') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 text-sm font-bold rounded ${editor.isActive('italic') ? 'bg-[#3b0d37] text-white' : 'bg-white border text-gray-700'}`}
        >
          Italic
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
          Bullet List
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} className="p-4 min-h-[250px] focus:outline-none prose max-w-none" />
    </div>
  );
}