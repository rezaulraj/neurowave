"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="shrink-0">
              <Link href="/" className="flex flex-col gap-0 items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="h-14 md:h-16 2xl:h-20 w-auto "
                />
                <span className="text-[#0C3C62] text-xl font-serif font-semibold">
                  NeuroWave Tech
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8 2xl:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-[#00D5DE] font-medium transition-colors duration-200 text-base lg:text-lg 2xl:text-xl"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#00D5DE] hover:bg-[#0099CF] text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-base lg:text-lg 2xl:text-xl"
              >
                Contact Us
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="relative z-50 text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 animate-spin-slow" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-40 ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex-1 overflow-y-auto mt-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="transform transition-all duration-500"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 text-lg"
                    onClick={toggleMenu}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 pt-6 border-t border-gray-100 transform transition-all duration-700"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Link
              href="/contact"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>© 2026 NeuroWave Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
