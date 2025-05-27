"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit, FileEdit, LogOut, Plus, User } from "lucide-react";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    // If in development mode with test API key
    if (process.env.NODE_ENV === 'development' && 
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'test-api-key') {
      setIsDevelopment(true);
      return;
    }

    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  if (loading && !isDevelopment) {
    return (
      <div className="container flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user && !isDevelopment) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your website content</p>
          {isDevelopment && (
            <div className="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-md">
              Development Mode: Firebase is using test credentials
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted px-3 py-1 rounded-md text-sm">
            <User className="h-4 w-4 mr-2 text-primary" />
            <span>{user ? user.email : "Development User"}</span>
          </div>
          {!isDevelopment && (
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileEdit className="h-5 w-5 mr-2 text-primary" /> Projects
            </CardTitle>
            <CardDescription>Manage your portfolio projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">6 Projects</p>
              <p>Last updated: 2 days ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/admin/projects/new">
                  <Plus className="h-4 w-4 mr-2" /> Add New Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/projects">
                  <Edit className="h-4 w-4 mr-2" /> Manage Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" /> Blog Posts
            </CardTitle>
            <CardDescription>Manage your blog articles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">4 Articles</p>
              <p>Last updated: 1 week ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/admin/blog/new">
                  <Plus className="h-4 w-4 mr-2" /> Add New Article
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/blog">
                  <Edit className="h-4 w-4 mr-2" /> Manage Articles
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" /> Profile
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Personal Details</p>
              <p>Last updated: 1 month ago</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/admin/profile">
                <Edit className="h-4 w-4 mr-2" /> Edit Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 