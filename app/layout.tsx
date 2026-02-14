import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO OPTIMIZATION START ---
export const metadata: Metadata = {
  title: {
    default: "Moksh Malde | Systems & Backend Engineer",
    template: "%s | Moksh Malde"
  },
  description: "Backend Engineer and Linux Poweruser specializing in high-performance C#/.NET systems and security tools like ReconSage. Based in Ahmedabad.",
  keywords: ["Moksh Malde", "Backend Engineer", "Arch Linux", "ReconSage", "Software Developer Ahmedabad", "Silver Oak University"],
  authors: [{ name: "Moksh Malde" }],
  openGraph: {
    title: "Moksh Malde | Systems Engineer",
    description: "Taming systems and building high-performance backends.",
    type: "website",
  },
};
// --- SEO OPTIMIZATION END ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white font-mono`}
      >
        <main>{children}</main>
        {/* Sonner Toaster for your Contact Page notifications */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}