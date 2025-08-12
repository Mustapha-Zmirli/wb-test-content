import Link from 'next/link'
import { Calendar, User, Shield } from 'lucide-react'

const articles = [
  {
    id: 'article1',
    title: 'Content Security in Modern Publishing Platforms',
    excerpt: 'Exploring the challenges and solutions for protecting content across modern publishing platforms.',
    date: new Date().toLocaleDateString(),
    author: 'Stage Tester'
  },
  {
    id: 'article2', 
    title: 'Decentralized Content Verification Systems',
    excerpt: 'How decentralized networks are revolutionizing content authentication and verification.',
    date: new Date().toLocaleDateString(),
    author: 'Stage Tester'
  },
  {
    id: 'article3',
    title: 'Cross-Platform Content Attribution Standards', 
    excerpt: 'Ensuring proper creator attribution as content moves across multiple platforms and formats.',
    date: new Date().toLocaleDateString(),
    author: 'Stage Tester'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Writers&apos; Bloc Stage Test Site
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Stage environment for content protection and fingerprinting testing
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stage Environment Test Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These articles are designed for stage environment testing of Writers&apos; Bloc 
            content fingerprinting features. Each contains unique content different from dev environment.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                </div>
                
                <Link
                  href={`/${article.id}`}
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Testing Information */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            Stage Environment Testing
          </h3>
          <div className="text-green-800">
            <p className="mb-4">
              This is the STAGE environment for testing Writers&apos; Bloc content protection:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Different content from dev environment for uniqueness testing</li>
              <li>Tests cross-environment functionality</li>
              <li>Validates system works with multiple domains</li>
              <li>Ensures consistent behavior across deployments</li>
            </ul>
            <p>
              <strong>Stage URLs to test:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 font-mono text-sm">
              <li>yourdomain.com/article1</li>
              <li>yourdomain.com/article2</li>
              <li>yourdomain.com/article3</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Writers&apos; Bloc Stage Environment - QA Testing</p>
        </div>
      </footer>
    </div>
  )
}