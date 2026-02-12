import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BigBeeLogistics - Modern Logistics Solutions",
  description: "BigBeeLogistics is a modern logistics company, blending clean design with professionalism. Our minimal aesthetic fosters an intuitive user experience, conveying trust and expertise for businesses advancing global supply chain solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
