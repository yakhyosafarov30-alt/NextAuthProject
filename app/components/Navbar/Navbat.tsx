"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-lime-400">
        OneZero
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-lime-400 transition">
          Home
        </Link>
        <Link href="/profile" className="hover:text-lime-400 transition">
          Profile
        </Link>

        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-400 transition"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-lime-500 px-4 py-1 rounded hover:bg-lime-400 transition"
          >
            Sign in
          </button>
        )}
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>
          {session ? (
            <button
              onClick={() => {
                setOpen(false);
                signOut();
              }}
              className="bg-red-500 px-6 py-2 rounded"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                signIn("google");
              }}
              className="bg-lime-500 px-6 py-2 rounded"
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
