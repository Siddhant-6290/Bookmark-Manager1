import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookmark Manager",
  description: "A simple app to manage your bookmarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-primary-foreground py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold">Bookmark Manager</h1>
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-muted py-4">
              <div className="container mx-auto px-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Bookmark Manager
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}