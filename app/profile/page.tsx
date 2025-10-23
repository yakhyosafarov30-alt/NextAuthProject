"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You must log in first.</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-4">Welcome, {session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:bg-red-400 transition"
      >
        Sign out
      </button>
    </div>
  );
}
