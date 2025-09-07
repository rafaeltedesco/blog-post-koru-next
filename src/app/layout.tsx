import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Blog Pessoal',
  description: 'Blog pessoal sobre desenvolvimento web, tecnologia e programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {/* Header com Navegação */}
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div>
                  <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    📝 Meu Blog
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Desenvolvimento web e tecnologia
                  </p>
                </div>

                <nav className="flex space-x-8">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Sobre
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          {/* Conteúdo Principal */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t mt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center">
                <p className="text-gray-600">
                  © 2024 Meu Blog Pessoal. Feito com ❤️ usando Next.js
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    GitHub
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
