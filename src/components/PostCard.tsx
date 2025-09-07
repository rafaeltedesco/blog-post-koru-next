import Link from 'next/link'
import { Post } from '@/lib/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readTime} de leitura</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">
          <Link
            href={`/posts/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={`/posts/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
          >
            Ler mais
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>👁 {Math.floor(Math.random() * 200) + 50} visualizações</span>
          </div>
        </div>
      </div>
    </article>
  )
}
