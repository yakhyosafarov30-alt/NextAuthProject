import "./globals.css";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";
import Navbar from "./components/Navbar/Navbar"; // ✅ Navbar to‘g‘ri import
import Footer from "./components/Footer/Footer"; // ✅ Footer ham import qilindi

export const metadata = {
  title: "NextAuth Demo",
  description: "Google login example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white flex flex-col min-h-screen">
        <SessionProviderWrapper>
          {/* ✅ Navbar tepada */}
          <Navbar />
          {/* ✅ Asosiy kontent */}
          <main className="flex-grow">{children}</main>
          {/* ✅ Footer pastda */}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
