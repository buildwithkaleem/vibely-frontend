export default function Features() {
  const features = [
    {
      title: "Official TikTok Login",
      description:
        "Secure authentication using TikTok OAuth.",
      icon: "🔐",
    },
    {
      title: "Cloud Upload",
      description:
        "Upload videos quickly through Cloudinary.",
      icon: "☁️",
    },
    {
      title: "Official API",
      description:
        "Powered by TikTok Content Posting API.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}