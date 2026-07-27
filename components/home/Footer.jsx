import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-8">

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-of-service">
            Terms of Service
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        <p className="text-center text-gray-400 mt-8">
          © 2026 Vibely. All rights reserved.
        </p>

      </div>

    </footer>
  );
}