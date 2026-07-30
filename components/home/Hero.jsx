export default function Hero() {
  return (
    <section id="home" className="py-28 text-center">

      <h1 className="text-6xl font-bold">

        Publish Videos

        <br />

        To TikTok

        <span className="text-blue-600">
          {" "}Smarter
        </span>

      </h1>

      <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">

        Vibely helps creators securely upload videos to TikTok using the official Content Posting API.

      </p>

      <a
        href="https://vibely-api.egrif.online/api/auth/login"
        className="inline-block mt-10 rounded-xl bg-black px-8 py-4 text-lg text-white"
      >
        Continue with TikTok
      </a>

    </section>
  );
}