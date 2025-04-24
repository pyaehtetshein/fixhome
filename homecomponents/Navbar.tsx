// 1. Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <Link href="#" className="text-3xl font-bold tracking-tight">
          FixHome
        </Link>
        <nav className="hidden md:flex gap-10 text-base font-medium">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contractors">Contractors</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <nav className="flex flex-col space-y-4 bg-black px-6 py-4 md:hidden text-white">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contractors">Contractors</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      )}
    </header>
  );
};
