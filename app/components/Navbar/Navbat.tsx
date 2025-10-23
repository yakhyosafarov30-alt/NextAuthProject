"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-lime-400">
        OneZero
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="hover:text-lime-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-lime-400 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-lime-400 transition">
          Contact
        </Link>

        {/* Auth buttons */}
        {session ? (
          <div className="flex items-center space-x-4">
            <p className="text-sm opacity-80">{session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-4 py-1 rounded hover:bg-red-400 transition"
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-lime-500 px-4 py-1 rounded hover:bg-lime-400 transition"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {session ? (
            <button
              onClick={() => {
                setMenuOpen(false);
                signOut();
              }}
              className="bg-red-500 px-6 py-2 rounded hover:bg-red-400 transition"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => {
                setMenuOpen(false);
                signIn("google");
              }}
              className="bg-lime-500 px-6 py-2 rounded hover:bg-lime-400 transition"
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
