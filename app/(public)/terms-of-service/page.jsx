// export default function TermsOfService() {
//   return (
//     <main className="max-w-5xl mx-auto px-6 py-12">

//       <h1 className="text-4xl font-bold mb-8">
//         Terms of Service
//       </h1>

//       <p className="text-gray-600 mb-8">
//         Last Updated: July 27, 2026
//       </p>

//       <section className="space-y-8">

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">
//             Acceptance
//           </h2>

//           <p>
//             By using Vibely, you agree to these Terms of Service.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">
//             User Responsibilities
//           </h2>

//           <ul className="list-disc ml-6 space-y-2">
//             <li>You must own the content you upload.</li>
//             <li>You must comply with TikTok's Community Guidelines.</li>
//             <li>You are responsible for your account activity.</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">
//             Prohibited Activities
//           </h2>

//           <ul className="list-disc ml-6 space-y-2">
//             <li>Uploading illegal content.</li>
//             <li>Spam or automated abuse.</li>
//             <li>Copyright infringement.</li>
//             <li>Unauthorized access attempts.</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">
//             Account Termination
//           </h2>

//           <p>
//             We reserve the right to suspend or terminate accounts that violate these terms.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">
//             Changes
//           </h2>

//           <p>
//             We may update these Terms from time to time. Continued use of Vibely indicates acceptance of any updates.
//           </p>
//         </div>

//       </section>

//     </main>
//   );
// }




export default function TermsOfServicePage() {
  return (
    <main className="bg-gray-50">

      <section className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="text-5xl font-bold text-gray-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-gray-600">
          Last Updated: August 1, 2026
        </p>

        <div className="mt-10 space-y-10 rounded-2xl border bg-white p-8 shadow-sm">

          <section>

            <h2 className="text-2xl font-semibold">
              Acceptance of Terms
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              By accessing or using Vibely, you agree to these Terms of
              Service. If you do not agree with these terms, please do not
              use our platform.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Our Services
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Vibely allows users to securely connect their TikTok accounts
              using the official TikTok OAuth system and publish videos
              through the official TikTok Content Posting API.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              User Responsibilities
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-gray-600">

              <li>Provide accurate account information.</li>

              <li>Use Vibely only for lawful purposes.</li>

              <li>Respect TikTok Community Guidelines.</li>

              <li>Do not upload illegal, harmful, or copyrighted content without permission.</li>

              <li>Keep your account credentials secure.</li>

            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Prohibited Activities
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-gray-600">

              <li>Attempting to hack or disrupt the platform.</li>

              <li>Uploading malicious software or spam.</li>

              <li>Violating TikTok Platform policies.</li>

              <li>Using Vibely for illegal activities.</li>

            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Intellectual Property
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Vibely, its branding, design, and software are protected by
              intellectual property laws. Users retain ownership of the
              content they upload.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Account Suspension
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              We reserve the right to suspend or terminate accounts that
              violate these Terms of Service or applicable laws without
              prior notice.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Third-Party Services
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Vibely integrates with third-party services such as TikTok.
              Your use of those services is also subject to their respective
              terms and privacy policies.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Disclaimer
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Vibely is provided on an "as is" and "as available" basis.
              We do not guarantee uninterrupted service or that the platform
              will always be error-free.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Limitation of Liability
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Vibely shall not be liable for any indirect, incidental,
              special, or consequential damages resulting from the use of
              our services.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Changes to These Terms
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              We may update these Terms of Service from time to time.
              Continued use of Vibely after updates constitutes acceptance
              of the revised terms.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-semibold">
              Contact
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              If you have any questions regarding these Terms of Service,
              please contact us at:
            </p>

            <a
              href="mailto:support@egrif.online"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              support@egrif.online
            </a>

          </section>

        </div>

      </section>

    </main>
  );
}