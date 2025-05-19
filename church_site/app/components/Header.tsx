"use client"

import Link from "next/link"
import { ChurchIcon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center text-2xl font-semibold hover:opacity-80 transition-opacity",
            isScrolled ? "text-gradient" : "text-deep-purple",
          )}
        >
          <ChurchIcon className="w-8 h-8 mr-2" aria-hidden="true" />
          <span className="hidden sm:inline">Sheringham Spiritualist Church</span>
        </Link>
        <button
          className="md:hidden text-deep-purple"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <ul
          className={cn(
            "md:flex md:space-x-4",
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-white shadow-md py-2 px-4 md:relative md:bg-transparent md:shadow-none md:py-0 md:px-0"
              : "hidden md:flex",
          )}
          id="mobile-menu"
        >
          {["Home", "Services", "History", "Gallery"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={cn(
                  "block py-2 md:px-3 md:py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled ? "text-gray-700 hover:bg-lavender/20" : "text-deep-purple hover:bg-lavender/20",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

