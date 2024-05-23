import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const pretendar = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Mustfin",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Developer",
    "Engineer",
    "Test",
    "Project",
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.website,
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-gray-50 font-sans antialiased",
          // fontSans.variable,
          pretendar.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <main className="flex-grow px-3 sm:px-0">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
