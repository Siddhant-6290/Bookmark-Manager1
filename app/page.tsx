"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Bookmark, BookmarkCategory } from "@/types";
import BookmarkList from "@/components/BookmarkList";
import BookmarkForm from "@/components/BookmarkForm";
import BookmarkFilter from "@/components/BookmarkFilter";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      try {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        // Convert string dates back to Date objects
        const processedBookmarks = parsedBookmarks.map((bookmark: any) => ({
          ...bookmark,
          createdAt: new Date(bookmark.createdAt)
        }));
        setBookmarks(processedBookmarks);
        setFilteredBookmarks(processedBookmarks);
      } catch (error) {
        console.error("Error parsing bookmarks from localStorage:", error);
      }
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    handleFilterChange(selectedCategory);
  }, [bookmarks]);

  const handleAddBookmark = (title: string, url: string, category: BookmarkCategory) => {
    const newBookmark: Bookmark = {
      id: uuidv4(),
      title,
      url,
      category,
      createdAt: new Date(),
    };
    setBookmarks([...bookmarks, newBookmark]);
  };

  const handleDeleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBookmarks(bookmarks);
    } else {
      setFilteredBookmarks(bookmarks.filter(bookmark => bookmark.category === category));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">My Bookmarks</h2>
        <ThemeToggle />
      </div>
      <BookmarkForm onAddBookmark={handleAddBookmark} />
      <div className="space-y-4">
        <BookmarkFilter selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
        <BookmarkList bookmarks={filteredBookmarks} onDeleteBookmark={handleDeleteBookmark} />
      </div>
    </div>
  );
}