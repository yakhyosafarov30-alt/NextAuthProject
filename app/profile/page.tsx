"use client";
import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) return <p>Not signed in</p>;

  return (
    <div className="text-center mt-10">
      <p>Signed in as {session.user?.email}</p>
      <img
        src={session.user?.image || ""}
        alt="avatar"
        className="rounded-full w-20 h-20 mx-auto mt-4"
      />
      <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Sign out
      </button>
    </div>
  );
}
