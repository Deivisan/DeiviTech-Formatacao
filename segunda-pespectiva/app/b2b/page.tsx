'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ArrowLeft, 
  Cpu, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2,
  X,
  MessageCircle,
  ArrowRight,
  Star,
  Headphones,
  Plus,
  Minus,
  HardDrive
} from 'lucide-react';
import Link from 'next/link';
import { planosB2B, produtos } from '@/data/produtos';
import { useCart } from '@/hooks/useCart';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function B2BPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem, removeItem, updateQuantity, total, count, generateWhatsAppMessage } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage('b2b');
    window.open(`https://wa.me/5575981231019?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050507]">
      {/* Header */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">Empresas</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Users className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] orb orb-purple opacity-30" />
        
        <div className="container-site relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge badge-purple mb-6">
              <Star className="w-4 h-4" />
              Soluções Corporativas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TI para sua empresa{' '}
              <span className="text-gradient-purple">sem limites</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10">
              Planos completos com suporte dedicado e SLA garantido
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Ver Planos
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="btn-secondary"
              >
                Orçamento
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - Compact */}
      <section className="py-20 border-y border-white/5">
        <div className="container-site">
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Clock, title: "SLA", desc: "4-24h" },
              { icon: Shield, title: "Segurança", desc: "Enterprise" },
              { icon: Headphones, title: "Suporte", desc: "Dedicado" },
              { icon: CheckCircle2, title: "Gestão", desc: "Proativa" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="section-spaced">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos <span className="text-gradient-purple">Corporativos</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {planosB2B.map((plano, idx) => (
              <motion.div
                key={plano.id}
                variants={fadeInUp}
                className={`card-hover p-8 relative ${plano.popular ? 'ring-2 ring-purple-500/30' : ''}`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                  <p className="text-slate-400 text-sm">{plano.descricao}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white">
                    R$ {plano.precoMensal}
                    <span className="text-lg text-slate-500 font-normal">/mês</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.features.slice(0, 5).map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    addItem({
                      id: `plano-${plano.id}`,
                      nome: `Plano ${plano.nome}`,
                      preco: plano.precoMensal,
                      tipo: 'servico',
                    });
                    setIsCartOpen(true);
                  }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plano.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500'
                      : 'bg-white/10 hover:bg-white/15'
                  }`}
                >
                  Escolher
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-spaced bg-[#0a0a0f]">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Equipamentos</h2>
            <p className="text-slate-400">Preços especiais para empresas</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {produtos.filter(p => p.destaque).map((produto, idx) => (
              <motion.div
                key={produto.id}
                variants={fadeInUp}
                className="card-hover p-6"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl flex items-center justify-center mb-4">
                  <HardDrive className="w-12 h-12 text-slate-600" />
                </div>
                <h3 className="font-semibold mb-2">{produto.nome}</h3>
                <p className="text-slate-400 text-sm mb-4">{produto.descricao.slice(0, 60)}...</p>
                <div className="flex items-center justify-between">
                  <span className="price-tag">R$ {produto.preco}</span>
                  <button
                    onClick={() => addItem({
                      id: produto.id,
                      nome: produto.nome,
                      preco: produto.preco,
                      tipo: 'produto',
                    })}
                    className="p-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <AnimatePresence>
        {showQuoteForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuoteForm(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-[#0a0a0f] rounded-2xl p-8 max-w-lg w-full border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Orçamento</h3>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="p-2 hover:bg-white/5 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);
                    const message = `🏢 *ORÇAMENTO*\n\nEmpresa: ${data.empresa}\nCNPJ: ${data.cnpj}\nResponsável: ${data.responsavel}\nTelefone: ${data.telefone}`;
                    window.open(`https://wa.me/5575981231019?text=${encodeURIComponent(message)}`, '_blank');
                    setShowQuoteForm(false);
                  }}
                  className="space-y-4"
                >
                  <input
                    name="empresa"
                    placeholder="Empresa"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="cnpj"
                    placeholder="CNPJ"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="responsavel"
                    placeholder="Responsável"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="telefone"
                    placeholder="Telefone"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary bg-gradient-to-r from-purple-600 to-blue-600"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0a0a0f] z-50 border-l border-white/5 flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Carrinho</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <Users className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-500">Carrinho vazio</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{item.nome}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-400">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1">
                          <button onClick={() => updateQuantity(item.id, item.quantidade - 1)} className="p-1.5 hover:bg-white/10 rounded">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantidade}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantidade + 1)} className="p-1.5 hover:bg-white/10 rounded">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-emerald-400 font-bold">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-slate-400">Total</span>
                    <span className="text-2xl font-bold text-emerald-400">R$ {total.toFixed(2)}</span>
                  </div>
                  <button onClick={handleCheckout} className="w-full btn-primary bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center gap-2 py-4">
                    <MessageCircle className="w-5 h-5" />
                    Finalizar
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
