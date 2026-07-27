export default function HowItWorks() {
  const steps = [
    "Login with TikTok",
    "Upload Your Video",
    "Publish to TikTok",
    "Done!",
  ];

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={step}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mx-auto">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}