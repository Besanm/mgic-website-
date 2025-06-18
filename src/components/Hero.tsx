export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to MGIC</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded">CTA 1</button>
          <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded">CTA 2</button>
          <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded">CTA 3</button>
        </div>
      </div>
    </section>
  );
}
