import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BiodiversityOS — Digital citizen science for Mar Sustentable",
  description:
    "BiodiversityOS is the on-chain citizen science tool built with Mar Sustentable to preserve coral reefs, mangroves, and sharks across the Mexican Caribbean.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                  }
                });
              }, observerOptions);

              document.addEventListener('DOMContentLoaded', () => {
                const elements = document.querySelectorAll('.reveal-on-scroll');
                elements.forEach(el => observer.observe(el));
              });

              // Also handle dynamic content if needed
              const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('reveal-on-scroll')) {
                      observer.observe(node);
                    }
                    if (node.nodeType === 1) {
                      node.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
                    }
                  });
                });
              });

              mutationObserver.observe(document.body, { childList: true, subtree: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
