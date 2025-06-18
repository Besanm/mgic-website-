export default function Why() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Why MGIC</h2>
      <ul className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <li key={item} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-semibold mb-2">Reason {item}</h3>
            <p className="text-sm text-gray-700">Explanation for reason {item}.</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
