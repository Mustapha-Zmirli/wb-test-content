export default function Article25() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sustainability in Digital Publishing
        </h1>
        <div className="text-gray-600 text-sm">
          Published on {new Date().toLocaleDateString()} | By Content Tester
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <p>
          As the world focuses on sustainability, the publishing industry is also
          adopting greener practices, both in print and digital spaces.
        </p>

        <h2>Reducing Carbon Footprint</h2>
        <p>
          Cloud-based solutions and efficient hosting services help minimize
          the environmental impact of digital platforms.
        </p>

        <h2>Eco-Friendly Print Alternatives</h2>
        <p>
          For hybrid publishers, sustainable paper and inks are becoming
          industry standards to reduce ecological damage.
        </p>

        <h2>Green Marketing Initiatives</h2>
        <p>
          Highlighting eco-conscious strategies is not just good for the planet,
          but also resonates with environmentally aware readers.
        </p>
      </article>
    </div>
  )
}
