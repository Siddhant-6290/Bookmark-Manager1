import { Bookmark } from "@/types";

interface BookmarkListProps {
  bookmarks: Bookmark[];
  onDeleteBookmark: (id: string) => void;
}

export default function BookmarkList({ bookmarks, onDeleteBookmark }: BookmarkListProps) {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No bookmarks found. Add some bookmarks to get started!</p>
      </div>
    );
  }

  const truncateUrl = (url: string, maxLength: number = 40) => {
    return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg line-clamp-1">
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {bookmark.title}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {truncateUrl(bookmark.url)}
                  </a>
                </p>
              </div>
              <button
                onClick={() => onDeleteBookmark(bookmark.id)}
                className="text-red-500 hover:text-red-600"
                aria-label="Delete bookmark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {bookmark.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(bookmark.createdAt)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}