export default function FAQ() {
  const faqs = [
    {
      q: "What is Vibely?",
      a: "Vibely is a platform that helps creators upload videos using the official TikTok API.",
    },
    {
      q: "Is Vibely safe?",
      a: "Yes. Vibely uses TikTok OAuth and never asks for your TikTok password.",
    },
    {
      q: "Can I disconnect my account?",
      a: "Yes. You can revoke access anytime from your TikTok account settings.",
    },
  ];

  return (
    <section id="faq" className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.q}
              className="border rounded-xl p-6"
            >

              <h3 className="text-xl font-semibold">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}