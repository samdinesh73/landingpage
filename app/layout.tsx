import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Providers from "@/components/Providers";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SALES SRIVE",
  description: "Marketplace Growth Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
         <Providers>
        <div
          className="animate-page-fade-in"
          style={{ minHeight: "100vh" }}
        >
          <div className="min-h-screen">
           

            
            <Header/>
            {children}
            <Footer/>
           
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}