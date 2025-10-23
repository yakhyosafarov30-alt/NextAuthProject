"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-lime-500 px-6 py-2 rounded-lg hover:bg-lime-400 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
