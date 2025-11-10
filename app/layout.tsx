import type { Metadata } from "next";
import "./globals.css";
import { Sniglet } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Penguin UI Components",
  description: "Cool UI Components with Penguin Style",
};

// ✅ Initialize the Google font
const sniglet = Sniglet({
  subsets: ["latin"],
  weight: ["400", "800"], // Add weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sniglet.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
