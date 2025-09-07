import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Meu Blog',
  description: 'Saiba mais sobre mim e minha jornada no desenvolvimento web',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white font-bold">
            SN
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h1>
          <p className="text-xl text-gray-600">
            Desenvolvedor apaixonado por tecnologia e educação
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              👋 Olá, eu sou [Seu Nome]!
            </h2>
            <p className="text-gray-700 mb-4">
              Sou desenvolvedor fullstack com paixão por criar experiências web incríveis.
              Especializado em React, Next.js, TypeScript e tecnologias modernas do ecossistema JavaScript.
            </p>
            <p className="text-gray-700">
              Neste blog, compartilho minhas experiências, aprendizados e tutoriais sobre
              desenvolvimento web. Acredito que o conhecimento deve ser compartilhado e que
              todos podem aprender programação!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🚀 Tecnologias
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-blue-600 font-medium">Frontend:</span>
                  <span className="ml-2 text-gray-700">React, Next.js, TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Backend:</span>
                  <span className="ml-2 text-gray-700">Node.js, Express, PostgreSQL</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 font-medium">Estilo:</span>
                  <span className="ml-2 text-gray-700">TailwindCSS, CSS-in-JS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-600 font-medium">Ferramentas:</span>
                  <span className="ml-2 text-gray-700">Git, Docker, VS Code</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💡 Interesses
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Performance web e otimização</li>
                <li>• Design de interfaces (UI/UX)</li>
                <li>• Arquitetura de software</li>
                <li>• Ensino e mentoria</li>
                <li>• Comunidade tech</li>
                <li>• Open source</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📫 Vamos conversar?
            </h3>
            <p className="text-gray-700 mb-6">
              Adoraria ouvir suas ideias, tirar dúvidas ou simplesmente bater um papo sobre tecnologia!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:seuemail@exemplo.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                📧 Email
              </a>
              <a
                href="<https://twitter.com/seuusuario>"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                🐦 Twitter
              </a>
              <a
                href="<https://github.com/seuusuario>"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
