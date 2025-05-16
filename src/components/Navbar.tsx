"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import DasboardBtn from "./Dashboard";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className={`border-b sticky top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <motion.div
        className="mx-auto transition-all duration-300"
        animate={{
          maxWidth: isScrolled ? "85%" : "95%",
          padding: isScrolled ? "0.75rem 1rem" : "1rem 2rem",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold">
                  S
                </div>
                <span className="font-bold text-2xl">Scrumble</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center"
            animate={{
              gap: isScrolled ? "1.5rem" : "2rem",
            }}
            transition={{ duration: 0.3 }}
          >
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <DasboardBtn />
              <ModeToggle />
              <UserButton />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;