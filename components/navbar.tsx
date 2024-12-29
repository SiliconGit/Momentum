"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Todo", href: "/todo" },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-gray-900 text-white sticky top-3 z-50 rounded-xl mx-4 mt-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="lg:text-3xl text-xl font-bold tracking-wide lexend-600"
        >
          Momentum
        </Link>

        {/* Hamburger Menu */}
        <motion.button
          className="text-3xl sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }} // Add rolling effect when clicked
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {isOpen ? <LiaTimesSolid /> : <HiOutlineBars2 />}
        </motion.button>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex lg:space-x-8 space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-blue-300 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Popup Nav */}
      <div
        className={`fixed inset-0 bg-gray-950 bg-opacity-85 text-slate-200 flex flex-col justify-center items-center space-y-8 transform transition-transform duration-500 sm:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-semibold lg:hover:text-sky-300 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
