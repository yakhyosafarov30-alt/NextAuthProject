import "./globals.css";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";
import Navbar from "./components/Navbar/Navbat"; // 🟢 Navbarni import qildik
import Footer from "./components/Footer/Footer"; // 🟢 Footer ham qo‘shamiz (xohlasang olib tashlasa ham bo‘ladi)

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
          {/* 🟩 Navbar tepada joylashgan */}
          <Navbar />

          {/* 🟩 Sahifa asosiy kontenti */}
          <main className="flex-grow">{children}</main>

          {/* 🟩 Footer pastda joylashgan */}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
