export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-8">
        About Vibely
      </h1>

      <div className="space-y-8 text-lg leading-8">

        <p>
          Vibely is a modern social media publishing platform built for content creators and businesses. It simplifies the process of uploading and managing videos through the official TikTok API.
        </p>

        <p>
          Our goal is to provide a secure, reliable, and user-friendly experience for creators while following TikTok Platform policies and best practices.
        </p>

        <p>
          Vibely uses TikTok OAuth for authentication. Users explicitly authorize access to their TikTok accounts, and Vibely only performs actions permitted by the granted permissions.
        </p>

        <p>
          Uploaded media is processed securely and only used to complete user-requested publishing actions.
        </p>

      </div>

    </main>
  );
}