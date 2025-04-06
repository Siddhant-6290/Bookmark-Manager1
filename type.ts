export interface Bookmark {
    id: string;
    title: string;
    url: string;
    category: string;
    createdAt: Date;
  }
  
  export type BookmarkCategory = "Work" | "Personal" | "Learning" | "Entertainment" | "Other";