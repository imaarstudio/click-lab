import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GsapInitializer from "./components/GsapInitializer";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ClickLab — Thumbnails That Get Clicked",
    template: "%s | ClickLab",
  },
  description:
    "ClickLab creates clean, high-converting YouTube thumbnails that help videos stand out and earn more clicks.",
  keywords: [
    "YouTube thumbnails",
    "thumbnail design",
    "click-through rate",
    "YouTube design agency",
    "video thumbnails",
  ],
  authors: [{ name: "Imaar Studio", url: "https://imaarstudio.com" }],
  creator: "Imaar Studio",
  openGraph: {
    title: "ClickLab — Thumbnails That Get Clicked",
    description:
      "High-converting YouTube thumbnail design for creators and brands.",
    type: "website",
    siteName: "ClickLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickLab — Thumbnails That Get Clicked",
    description:
      "High-converting YouTube thumbnail design for creators and brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col tracking-tighter">
        <GsapInitializer>
          <Navbar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </GsapInitializer>
      </body>
    </html>
  );
}
