import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Virtualify",
  description: "best information technology website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <div className="sticky top-0 z-20">
          <Header />
        </div>
        {children}
        <Footer />
        </body>
    </html>
  );
}
