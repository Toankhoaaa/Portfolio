import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Blog | John Doe Portfolio",
  description: "Thoughts, tutorials, and insights on web development and design",
};

// Sample blog post data (would be fetched from Firestore in a real app)
const blogPosts = [
  {
    id: "1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to quickly build beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    date: "Apr 15, 2023",
    readTime: "5 min read",
    tags: ["Tailwind CSS", "Frontend", "Responsive Design"],
    slug: "building-responsive-uis-with-tailwind",
  },
  {
    id: "2",
    title: "Getting Started with Next.js 14 App Router",
    excerpt: "A comprehensive guide to understanding and using the Next.js App Router for better performance and SEO.",
    date: "Feb 28, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "React", "App Router"],
    slug: "nextjs-14-app-router-guide",
  },
  {
    id: "3",
    title: "Firebase Authentication: Best Practices",
    excerpt: "Implement secure authentication in your web apps using Firebase Auth with these proven strategies.",
    date: "Jan 10, 2023",
    readTime: "6 min read",
    tags: ["Firebase", "Authentication", "Security"],
    slug: "firebase-authentication-best-practices",
  },
  {
    id: "4",
    title: "Creating Custom Hooks in React",
    excerpt: "Learn how to extract component logic into reusable functions with custom React hooks.",
    date: "Dec 5, 2022",
    readTime: "7 min read",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "creating-custom-hooks-in-react",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-2 pb-8 md:pb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, tutorials, and insights on web development and design
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4 pt-0">
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center gap-2 p-4 pt-0">
              {post.tags.map((tag) => (
                <span
                  key={`${post.id}-${tag}`}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  <Tag className="mr-1 h-3 w-3" /> {tag}
                </span>
              ))}
            </CardFooter>
            <Link href={`/blog/${post.slug}`} className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Read Article
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
} 