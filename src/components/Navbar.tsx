"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/" className="text-xl font-bold">
          Le Toan
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link 
            href="/" 
            className="text-foreground/70 text-sm font-medium transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/70 text-sm font-medium transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-foreground/70 text-sm font-medium transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-foreground/70 text-sm font-medium transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-foreground/70 text-sm font-medium transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 flex w-full flex-col space-y-4 bg-background p-6 shadow-lg md:hidden border-2 border-gray-300 rounded-lg">
            <Link 
              href="/" 
              className="flex h-10 items-center text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex h-10 items-center text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="flex h-10 items-center text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="flex h-10 items-center text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="flex h-10 items-center text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 