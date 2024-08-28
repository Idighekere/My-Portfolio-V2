import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/fonts/fonts.css"
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Header from "@/components/ui/common/Header";
import Footer from "@/components/ui/common/Footer";
import MobileNav from "@/components/ui/common/MobileNav";

// const bigShoulder = BigShoulderDisplay({ subsets: ["latin"] });
// const titillium = Titillium_Web({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "700", "900"]
// });
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Idighekere Udo",
  description: "A web developer with knowledge in technologies like HTML, CSS,Tailwind CSS, ReactJS, NextJS, Wordpress etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >

        <Header />
        <MobileNav />
        <div
        // className={`px-5 md:px-20`}
        >
          {/*   make sure to keep toaster above children */}
          <Toaster position="top-center" />
          {children}
        </div>
        <Footer />

      </body >
    </html >
  );
}
