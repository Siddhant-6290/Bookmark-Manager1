import { useState, useEffect } from "react";

interface BookmarkFilterProps {
  selectedCategory: string;
  onFilterChange: (category: string) => void;
}

export default function BookmarkFilter({ selectedCategory, onFilterChange }: BookmarkFilterProps) {
  const categories = ["All", "Work", "Personal", "Learning", "Entertainment", "Other"];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}