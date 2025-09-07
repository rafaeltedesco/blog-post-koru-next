import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao meu blog! 👋
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aqui compartilho minhas experiências com desenvolvimento web,
          tutoriais de programação e reflexões sobre tecnologia.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Posts Recentes
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Gostou do conteúdo?
        </h3>
        <p className="text-gray-600 mb-6">
          Fique à vontade para entrar em contato e compartilhar suas ideias!
        </p>
        <a
          href="/about"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Saiba mais sobre mim
        </a>
      </div>
    </div>
  )
}
