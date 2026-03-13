import Head from 'next/head'

// Componentes
const Header = () => (
  <header className="bg-white/10 backdrop-blur-md py-4 px-6 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🔧</span>
        <div>
          <h1 className="text-2xl font-bold text-white">DeiviTech</h1>
          <p className="text-sm text-gray-300">Formatação Profissional</p>
        </div>
      </div>
      <a 
        href="https://wa.me/5575981231019"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all"
      >
        <span>📱</span>
        (75) 98123-1019
      </a>
    </div>
  </header>
)

const Hero = () => (
  <section className="py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <div className="text-8xl mb-6 animate-float">💾</div>
      <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
        HDs Testados e{' '}
        <span className="gradient-text">Garantidos</span>
      </h2>
      <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
        Testes profissionais completos com análise SMART, 
        teste de velocidade e formatação NTFS. 
        Transparência total no que você está comprando.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="#produtos" className="btn-primary">
          Ver HDs Disponíveis
        </a>
        <a href="#processo" className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all">
          Como Trabajamos
        </a>
      </div>
    </div>
  </section>
)

const Stats = () => (
  <section className="py-12 px-6 bg-white/5">
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { icon: '✅', number: '100%', label: 'Testados' },
        { icon: '🔍', number: 'SMART', label: 'Análise' },
        { icon: '⚡', number: 'Velocidade', label: 'Real' },
        { icon: '🛡️', number: '30 dias', label: 'Garantia' },
      ].map((stat, i) => (
        <div key={i} className="glass-card p-6 text-center animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-white">{stat.number}</div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
)

const Process = () => (
  <section id="processo" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        🔬 Nosso Processo de Teste
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: '01',
            icon: '🔍',
            title: 'Análise SMART',
            description: 'Verificamos saúde completa do disco, setores, temperatura e histórico de uso.'
          },
          {
            step: '02',
            icon: '⚡',
            title: 'Teste de Velocidade',
            description: 'Medimos velocidade real de leitura e escrita para garantir performance.'
          },
          {
            step: '03',
            icon: '🔧',
            title: 'Formatação NTFS',
            description: 'Formatamos em NTFS com cluster otimizado e geramos relatório completo.'
          },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 relative animate-slide-in" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-deivi-accent rounded-full flex items-center justify-center text-white font-bold">
              {item.step}
            </div>
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-deivi-primary mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Products = ({ products, onBuy }) => (
  <section id="produtos" className="py-20 px-6 bg-white/5">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        📦 HDs Disponíveis
      </h2>
      <p className="text-gray-300 text-center mb-12">
        Clique em um HD para ver os detalhes técnicos completos
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div key={i} className="glass-card overflow-hidden animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="bg-gradient-to-r from-deivi-primary to-deivi-secondary p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{product.model}</h3>
                  <p className="text-gray-200">{product.capacity} GB</p>
                </div>
                <span className="text-4xl">💾</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-deivi-success">{product.health}%</div>
                  <div className="text-sm text-gray-500">Saúde SMART</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-deivi-accent">{product.speed}</div>
                  <div className="text-sm text-gray-500">MB/s Leitura</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Serial:</span>
                  <span className="font-mono">{product.serial}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Uso:</span>
                  <span>{product.hours}h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Temp:</span>
                  <span>{product.temp}°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Setores:</span>
                  <span className="text-green-600">{product.sectors}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-deivi-primary">R$ {product.price}</span>
                  <span className="text-gray-400 line-through ml-2">R$ {Math.floor(product.price * 2)}</span>
                </div>
                <button 
                  onClick={() => onBuy(product)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2"
                >
                  <span>🛒</span>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        💬 O que dizem os clientes
      </h2>
      <div className="space-y-6">
        {[
          { name: 'Carlos M.', text: 'HD chegou perfeito, testei no PC e tudo funcionando. Recomendo!', stars: '⭐⭐⭐⭐⭐' },
          { name: 'Roberto S.', text: 'Processo super transparente, показах todos os testes. Muito profissional.', stars: '⭐⭐⭐⭐⭐' },
          { name: 'Marcos L.', text: 'Comprei 2 HDs, ambos com saúde 100%. Já indiquei para amigos.', stars: '⭐⭐⭐⭐⭐' },
        ].map((t, i) => (
          <div key={i} className="glass-card p-6 animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-deivi-accent to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-deivi-primary">{t.name}</div>
                  <div>{t.stars}</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const FAQ = () => (
  <section className="py-20 px-6 bg-white/5">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        ❓ Perguntas Frequentes
      </h2>
      <div className="space-y-4">
        {[
          { q: 'Como sei que o HD está funcionando?', a: 'Enviamos vídeo do teste de velocidade e fotos do SMART antes do envio.' },
          { q: 'Qual a garantia?', a: '30 dias contra defeitos. HDs são testados 100% antes da venda.' },
          { q: 'Funciona no Windows?', a: 'Sim, formatamos em NTFS. Compatível com Windows, Mac e Linux.' },
          { q: 'Vem com cabo?', a: 'Não, apenas o HD. Cabos USB/SATA não estão inclusos.' },
        ].map((faq, i) => (
          <details key={i} className="glass-card p-4 cursor-pointer">
            <summary className="font-bold text-deivi-primary flex justify-between items-center">
              {faq.q}
              <span className="text-2xl">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div className="text-4xl mb-4">🦞</div>
      <h3 className="text-2xl font-bold mb-4">DeiviTech Formatação</h3>
      <p className="text-gray-400 mb-6">
        Testes profissionais de HDs com transparência total.
        <br />
        Feira de Santana, Bahia
      </p>
      <div className="flex justify-center gap-4 mb-6">
        <a 
          href="https://wa.me/5575981231019"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
        >
          <span>📱</span>
          WhatsApp
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        © 2026 DeiviTech. Powered by DevSan AGI.
      </p>
    </div>
  </footer>
)

// Dados de exemplo (serão substituídos pelos dados reais do HD)
const sampleProducts = [
  {
    model: 'WD Blue 500GB',
    capacity: 500,
    serial: 'WXK1CB170030',
    health: 100,
    speed: 77,
    hours: 4369,
    temp: 32,
    sectors: '0 ruins',
    price: 50,
    condition: '⭐ Excelente'
  }
]

export default function Home() {
  const handleBuy = (product) => {
    const message = `🔧 *DeiviTech Formatação*\n\n` +
      `Olá! Gostaria de comprar o HD:\n\n` +
      `💾 *Modelo:* ${product.model}\n` +
      `📦 *Capacidade:* ${product.capacity} GB\n` +
      `🏥 *Saúde:* ${product.health}%\n` +
      `⚡ *Velocidade:* ${product.speed} MB/s\n` +
      `💰 *Valor:* R$ ${product.price},00\n\n` +
      `Aguardo detalhes para compra! 🚀`
    
    window.open(`https://wa.me/5575981231019?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <Head>
        <title>DeiviTech - HDs Testados e Garantidos</title>
        <meta name="description" content="HDs testados profissionalmente com análise SMART completa. Venda em Feira de Santana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Process />
        <Products products={sampleProducts} onBuy={handleBuy} />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
