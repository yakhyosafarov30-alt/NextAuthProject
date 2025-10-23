import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-6 mt-auto text-gray-400">
      <p>© {new Date().getFullYear()} OneZero Agency. All rights reserved.</p>
    </footer>
  );
}
