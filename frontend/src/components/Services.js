export default function Services() {
  const services = [
    "Teeth Cleaning",
    "Root Canal",
    "Braces",
    "Cosmetic Dentistry",
    "Dental Implants"
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
