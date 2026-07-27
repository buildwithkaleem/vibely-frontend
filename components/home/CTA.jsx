export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Publish?
        </h2>

        <p className="mt-6 text-xl">
          Connect your TikTok account and publish videos in minutes.
        </p>

        <a
          href="https://vibely-api.egrif.online/api/auth/login"
          className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
        >
          Continue with TikTok
        </a>

      </div>

    </section>
  );
}