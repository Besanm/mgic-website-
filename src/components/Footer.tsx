export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div className="h-48">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093985!2d144.9537363153157!3d-37.816279442021994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8cfc1d492c4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614034592989!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="font-semibold">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary-400">FB</a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-400">TW</a>
            <a href="#" aria-label="Instagram" className="hover:text-primary-400">IG</a>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="px-2 py-1 bg-gray-700 rounded">EN</button>
          <button className="px-2 py-1 bg-gray-700 rounded">AR</button>
        </div>
      </div>
      <p className="text-center text-sm mt-6">&copy; {new Date().getFullYear()} MGIC. All rights reserved.</p>
    </footer>
  );
}
