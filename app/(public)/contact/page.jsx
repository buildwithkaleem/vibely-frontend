// export default function Contact() {
//   return (
//     <main className="max-w-3xl mx-auto px-6 py-12">

//       <h1 className="text-4xl font-bold mb-8">
//         Contact Us
//       </h1>

//       <div className="bg-white border rounded-xl p-8 space-y-6">

//         <div>
//           <h2 className="font-semibold">
//             Company
//           </h2>

//           <p>Vibely</p>
//         </div>

//         <div>
//           <h2 className="font-semibold">
//             Email
//           </h2>

//           <p>support@egrif.online</p>
//         </div>

//         <div>
//           <h2 className="font-semibold">
//             Website
//           </h2>

//           <p>https://vibely.egrif.online</p>
//         </div>

//         <div>
//           <h2 className="font-semibold">
//             Support
//           </h2>

//           <p>
//             For technical support, account issues, or business inquiries, please contact us by email.
//           </p>
//         </div>

//       </div>

//     </main>
//   );
// }




export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          Contact Vibely
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Need help with your account, TikTok integration, or have a business
          inquiry? We'd love to hear from you.
        </p>

      </section>

      {/* Content */}

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-2">

        {/* Left */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-bold">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div>

              <h3 className="font-semibold text-gray-900">
                📧 Support Email
              </h3>

              <a
                href="mailto:support@egrif.online"
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                support@egrif.online
              </a>

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">
                💼 Business Inquiries
              </h3>

              <a
                href="mailto:support@egrif.online"
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                support@egrif.online
              </a>

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">
                🌐 Website
              </h3>

              <a
                href="https://vibely.egrif.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block break-all text-blue-600 hover:underline"
              >
                https://vibely.egrif.online
              </a>

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">
                ⏱ Response Time
              </h3>

              <p className="mt-2 text-gray-600">
                We usually respond within
                <strong> 24–48 business hours.</strong>
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">
                ℹ️ Support
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                For technical support, account issues, TikTok API questions,
                or general business inquiries, please contact us using the
                form or email above.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-bold">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <div>

              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border p-3 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border p-3 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-xl border p-3 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border p-3 outline-none focus:border-black"
              />

            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-900"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}