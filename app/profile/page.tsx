"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;
  if (!session)
    return <p className="text-center mt-10">You must log in first.</p>;

  return (
    <div className="flex flex-col items-center justify-center mt-20 text-white">
      <h1 className="text-3xl mb-2">Welcome, {session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <img
        src={session.user?.image || ""}
        alt="avatar"
        className="rounded-full w-20 h-20 mt-4"
      />
      <button
        onClick={() => signOut()}
        className="mt-6 bg-red-500 px-6 py-2 rounded hover:bg-red-400 transition"
      >
        Sign out
      </button>
    </div>
  );
}
