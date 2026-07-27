export default function TermsOfService() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Terms of Service
      </h1>

      <p className="text-gray-600 mb-8">
        Last Updated: July 27, 2026
      </p>

      <section className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Acceptance
          </h2>

          <p>
            By using Vibely, you agree to these Terms of Service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            User Responsibilities
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>You must own the content you upload.</li>
            <li>You must comply with TikTok's Community Guidelines.</li>
            <li>You are responsible for your account activity.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Prohibited Activities
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Uploading illegal content.</li>
            <li>Spam or automated abuse.</li>
            <li>Copyright infringement.</li>
            <li>Unauthorized access attempts.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Account Termination
          </h2>

          <p>
            We reserve the right to suspend or terminate accounts that violate these terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Changes
          </h2>

          <p>
            We may update these Terms from time to time. Continued use of Vibely indicates acceptance of any updates.
          </p>
        </div>

      </section>

    </main>
  );
}