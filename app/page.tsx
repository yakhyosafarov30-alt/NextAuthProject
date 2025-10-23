"use client";

import { useSession, signOut } from "next-auth/react";
import React from "react";

const HomePage: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-2xl mb-4">You are not signed in</h2>
        <a
          href="/signin"
          className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-400 transition"
        >
          Go to Sign In
        </a>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Welcome, {session.user?.name}</h1>
      <p>{session.user?.email}</p>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt={session.user.name || "User"}
          className="w-24 h-24 rounded-full mt-4"
        />
      )}
      <button
        onClick={() => signOut()}
        className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:bg-red-400 transition"
      >
        Sign out
      </button>
    </div>
  );
};

export default HomePage;
