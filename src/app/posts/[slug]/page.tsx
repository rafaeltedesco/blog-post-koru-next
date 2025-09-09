import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import LikeButton from '@/components/LikeButton'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post)=> ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Voltar para o blog
        </Link>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <div className="flex items-center justify-between pb-6 border-b border-gray-200">
          <div className="flex items-center text-gray-600">
            <time dateTime={post.date} className="text-sm">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span className="text-sm">{post.readTime} de leitura</span>
            <span className="mx-2">•</span>
            <span className="text-sm">Por {post.author}</span>
          </div>
          <LikeButton />
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="whitespace-pre-line text-gray-800 leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  )
}
