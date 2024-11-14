import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import NProgress from "@/provider/NProgress";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Ovens",
  description:
    "Are you a consultant or coach struggling to find clients? My name is Sam Ovens and I help consultants get high value clients using my predictable clients system...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <NProgress />
      </body>
    </html>
  );
}
