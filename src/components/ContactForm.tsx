export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-50 px-4" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="p-2 border rounded h-32"
        />
        <button type="submit" className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded">
          Send Message
        </button>
      </form>
      <p className="text-center mt-4">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          Chat with us on WhatsApp
        </a>
      </p>
    </section>
  );
}
