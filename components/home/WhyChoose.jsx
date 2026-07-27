export default function WhyChoose() {
  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Vibely?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Secure
            </h3>

            <p className="mt-4 text-gray-300">
              Your TikTok account is connected using official OAuth authentication.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Fast Upload
            </h3>

            <p className="mt-4 text-gray-300">
              Upload large videos quickly using Cloudinary infrastructure.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Official API
            </h3>

            <p className="mt-4 text-gray-300">
              Built on TikTok's official Content Posting API.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Creator Friendly
            </h3>

            <p className="mt-4 text-gray-300">
              Designed for creators, businesses and agencies.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}