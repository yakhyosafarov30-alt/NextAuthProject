import "./globals.css";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";
import Navbar from "./components/Navbar/Navbat";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "NextAuth Demo",
  description: "Google Login Example",
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
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
