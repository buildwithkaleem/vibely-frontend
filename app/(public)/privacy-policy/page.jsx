// import DashboardLayout from "@/components/layout/DashboardLayout";

export default function PrivacyPolicy() {
  return (
    // <DashboardLayout>
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-8">
        Last Updated: July 27, 2026
      </p>

      <section className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Introduction
          </h2>

          <p>
            Vibely respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform and connect your TikTok account.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>TikTok Open ID</li>
            <li>Display Name</li>
            <li>Profile Picture</li>
            <li>Access and Refresh Tokens</li>
            <li>Videos uploaded through Vibely</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Authenticate your account.</li>
            <li>Upload videos to your TikTok account.</li>
            <li>Improve platform performance.</li>
            <li>Provide customer support.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Data Security
          </h2>

          <p>
            We implement industry-standard security measures to protect your data. Access tokens are stored securely and used only for authorized TikTok actions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Third-Party Services
          </h2>

          <p>
            Vibely integrates with TikTok and Cloudinary. Their respective privacy policies also apply when using those services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Contact
          </h2>

          <p>
            For privacy-related questions, please contact us through our Contact page.
          </p>
        </div>

      </section>

    </main>
    // </DashboardLayout>
  );
}