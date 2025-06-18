export default function Highlights() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Product Highlights</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-6 bg-gray-100 rounded shadow">
            <h3 className="font-semibold mb-2">Product {item}</h3>
            <p className="text-sm text-gray-700">
              Brief description of product {item} goes here.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
