"use client";

import { useState } from "react";
import { BookmarkCategory } from "@/types";

interface BookmarkFormProps {
  onAddBookmark: (title: string, url: string, category: BookmarkCategory) => void;
}

export default function BookmarkForm({ onAddBookmark }: BookmarkFormProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState<BookmarkCategory>("Other");
  const [urlError, setUrlError] = useState("");

  const validateUrl = (value: string): boolean => {
    try {
      new URL(value);
      setUrlError("");
      return true;
    } catch (error) {
      setUrlError("Please enter a valid URL (e.g., https://example.com)");
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }
    
    if (!validateUrl(url)) {
      return;
    }
    
    onAddBookmark(title, url, category);
    setTitle("");
    setUrl("");
    setCategory("Other");
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Add New Bookmark</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md bg-background"
            required
          />
        </div>
        
        <div>
          <label htmlFor="url" className="block text-sm font-medium mb-1">
            URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (e.target.value) validateUrl(e.target.value);
            }}
            placeholder="https://example.com"
            className="w-full p-2 border rounded-md bg-background"
            required
          />
          {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as BookmarkCategory)}
            className="w-full p-2 border rounded-md bg-background"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Learning">Learning</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
        >
          Add Bookmark
        </button>
      </form>
    </div>
  );
}