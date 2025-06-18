export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Signature Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Project {item}</h3>
            <p className="text-sm text-gray-700">Description for project {item}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
