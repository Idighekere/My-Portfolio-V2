import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/fonts/fonts.css"
import { Toaster } from "react-hot-toast";
// import { TooltipProvider } from "@radix-ui/react-tooltip";
import Header from "@/components/ui/common/Header";
import Footer from "@/components/ui/common/Footer";
import MobileNav from "@/components/ui/common/MobileNav";
import { ClientLayout } from './_client-layout';

// const bigShoulder = BigShoulderDisplay({ subsets: ["latin"] });
// const titillium = Titillium_Web({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "700", "900"]
// });
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Idighekere Udo",
//   description: "A web developer with knowledge in technologies like HTML, CSS,Tailwind CSS, ReactJS, NextJS, Wordpress etc",
//     openGraph: {
//     title:'Idighekere Udo',
//     description: "A web developer with knowledge in various web technologies.",
//     images: 'https://res.cloudinary.com/dyouxzxab/image/upload/v1724932857/idighekere-udo.brimble.app_wfwfim.jpg',
//     },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Idighekere Udo" />
        <meta property="og:description" content="A web developer with knowledge in technologies like HTML, CSS,Tailwind CSS, ReactJS, NextJS, Wordpress etc" />
        <meta property="og:image" content="https://res.cloudinary.com/dyouxzxab/image/upload/v1724932857/idighekere-udo.brimble.app_wfwfim.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
      </Head>
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
          <ClientLayout>

          {children}
          </ClientLayout>
        </div>
        <Footer />

      </body >
    </html >
  );
}
