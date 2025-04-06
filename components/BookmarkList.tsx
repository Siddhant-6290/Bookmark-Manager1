// import { Bookmark } from "@/types";

// interface BookmarkListProps {
//   bookmarks: Bookmark[];
//   onDeleteBookmark: (id: string) => void;
// }

// export default function BookmarkList({ bookmarks, onDeleteBookmark }: BookmarkListProps) {
//   if (bookmarks.length === 0) {
//     return (
//       <div className="text-center py-8">
//         <p className="text-muted-foreground">No bookmarks found. Add some bookmarks to get started!</p>
//       </div>
//     );
//   }

//   const truncateUrl = (url: string, maxLength: number = 40) => {
//     return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
//   };

//   const formatDate = (date: Date) => {
//     return new Intl.DateTimeFormat('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//     }).format(date);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {bookmarks.map((bookmark) => (
//         <div key={bookmark.id} className="bg-card rounded-lg shadow-md overflow-hidden">
//           <div className="p-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="font-medium text-lg line-clamp-1">
//                   <a
//                     href={bookmark.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline"
//                   >
//                     {bookmark.title}
//                   </a>
//                 </h3>
//                 <p className="text-sm text-muted-foreground mt-1">
//                   <a
//                     href={bookmark.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     {truncateUrl(bookmark.url)}
//                   </a>
//                 </p>
//               </div>
//               <button
//                 onClick={() => onDeleteBookmark(bookmark.id)}
//                 className="text-red-500 hover:text-red-600"
//                 aria-label="Delete bookmark"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M3 6h18"></path>
//                   <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//                   <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//                 </svg>
//               </button>
//             </div>
            
//             <div className="flex justify-between items-center mt-4">
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
//                 {bookmark.category}
//               </span>
//               <span className="text-xs text-muted-foreground">
//                 {formatDate(bookmark.createdAt)}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }








// import { Bookmark } from "@/types";

// interface BookmarkListProps {
//   bookmarks: Bookmark[];
//   onDeleteBookmark: (id: string) => void;
// }

// export default function BookmarkList({ bookmarks, onDeleteBookmark }: BookmarkListProps) {
//   if (bookmarks.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-muted-foreground text-lg">No bookmarks found. Add some bookmarks to get started!</p>
//       </div>
//     );
//   }

//   const truncateUrl = (url: string, maxLength: number = 40) => {
//     return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
//   };

//   const formatDate = (date: Date) => {
//     return new Intl.DateTimeFormat("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }).format(date);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {bookmarks.map((bookmark) => (
//         <div
//           key={bookmark.id}
//           className="bg-background border border-muted rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
//         >
//           <div className="p-5 space-y-3">
//             <div className="flex justify-between items-start">
//               <div className="space-y-1">
//                 <h3 className="text-lg font-semibold text-foreground line-clamp-1">
//                   <a
//                     href={bookmark.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline text-primary"
//                   >
//                     {bookmark.title}
//                   </a>
//                 </h3>
//                 <p className="text-sm text-muted-foreground line-clamp-1">
//                   <a
//                     href={bookmark.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     {truncateUrl(bookmark.url)}
//                   </a>
//                 </p>
//               </div>
//               <button
//                 onClick={() => onDeleteBookmark(bookmark.id)}
//                 className="text-destructive hover:text-destructive/80 transition"
//                 aria-label="Delete bookmark"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M3 6h18" />
//                   <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                   <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                 </svg>
//               </button>
//             </div>

//             <div className="flex justify-between items-center pt-2">
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
//                 {bookmark.category}
//               </span>
//               <span className="text-xs text-muted-foreground">
//                 {formatDate(bookmark.createdAt)}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }











import { Bookmark } from "@/types";

interface BookmarkListProps {
  bookmarks: Bookmark[];
  onDeleteBookmark: (id: string) => void;
}

export default function BookmarkList({ bookmarks, onDeleteBookmark }: BookmarkListProps) {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No bookmarks found. Add some bookmarks to get started!
        </p>
      </div>
    );
  }

  const truncateUrl = (url: string, maxLength: number = 40) => {
    return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const categoryColors: Record<string, string> = {
    work: "bg-blue-100 text-blue-700",
    personal: "bg-green-100 text-green-700",
    study: "bg-purple-100 text-purple-700",
    other: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="rounded-xl shadow-lg border border-border transition hover:shadow-xl bg-white dark:bg-zinc-900"
        >
          <div className="p-5 space-y-3">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-md text-sm font-semibold shadow-sm">
              {bookmark.title}
            </div>

            {/* URL */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground line-clamp-1">
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

            {/* Meta Row */}
            <div className="flex justify-between items-center pt-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  categoryColors[bookmark.category.toLowerCase()] || categoryColors["other"]
                } capitalize`}
              >
                {bookmark.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(bookmark.createdAt)}
              </span>
            </div>

            {/* Delete button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => onDeleteBookmark(bookmark.id)}
                className="text-red-500 hover:text-red-600 transition hover:scale-110"
                aria-label="Delete bookmark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

