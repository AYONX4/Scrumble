"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function ResizableNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
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
            <a href="#" className="flex items-center">
              <span className="font-bold text-2xl text-white">Brand</span>
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
            <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
              Contact
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 rounded-md hover:bg-gray-100 transition-all duration-300 px-4 py-2"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 rounded-md hover:bg-gray-100 transition-all duration-300 px-4 py-2 w-full"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  )
}
