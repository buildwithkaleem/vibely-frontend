

// import Footer from "@/components/public/Footer";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";

export const metadata = {
  metadataBase: new URL("https://vibeli.egrif.online"),

  title: {
    default: "Vibeli",
    template: "%s | Vibeli",
  },

  description:
    "Vibeli is a secure TikTok publishing platform that allows creators and businesses to upload and manage videos using the official TikTok API.",

  keywords: [
    "TikTok",
    "TikTok API",
    "Content Posting API",
    "Video Upload",
    "Social Media",
    "Vibeli",
  ],

  authors: [
    {
      name: "Vibeli",
    },
  ],

  creator: "Vibeli",

  publisher: "Vibeli",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Vibeli",
    description:
      "Official TikTok publishing platform for creators.",
    url: "https://vibeli.egrif.online",
    siteName: "Vibeli",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vibeli",
    description:
      "Upload videos using the official TikTok API.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body>

        <AuthProvider>
          <Toaster richColors position="top-right" />
          {children}
          {/* <Footer /> */}
        </AuthProvider>

      </body>

    </html>
  );
}