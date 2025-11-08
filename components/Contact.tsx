export default function Contact() {
  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out to me through any of the following channels:
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:yousef.isaifan@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-600 transition-colors"
          >
            Email
          </a>
          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
          >
            Phone
          </a>
        </div>
      </div>
    </section>
  );
}
