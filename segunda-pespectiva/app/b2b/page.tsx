'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ArrowLeft, 
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
        transition={{ duration: 0.5 }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">Empresas</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 hover:bg-white/5 rounded-lg transition-colors"
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
      <section className="pt-32 pb-12">
        <div className="container-site">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="badge badge-purple mb-4">
              <Star className="w-4 h-4" />
              Soluções Corporativas
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              TI <span className="text-gradient-purple">resolvido</span> para sua empresa
            </h1>
            <p className="text-slate-400 mb-8">
              Contrato de manutenção, suporte e gestão de TI. 
              Planejado para não dar dor de cabeça.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Ver Planos
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="btn-secondary"
              >
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 border-y border-white/5">
        <div className="container-site">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Clock, title: "SLA", desc: "4-24h" },
              { icon: Shield, title: "Segurança", desc: "Protegido" },
              { icon: Headphones, title: "Suporte", desc: "Dedicação" },
              { icon: CheckCircle2, title: "Gestão", desc: "Proativa" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
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
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Planos de <span className="text-gradient-purple">manutenção</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {planosB2B.map((plano) => (
              <motion.div
                key={plano.id}
                variants={fadeInUp}
                className={`card-hover p-6 ${plano.popular ? 'ring-1 ring-purple-500/30' : ''}`}
              >
                {plano.popular && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-bold">{plano.nome}</h3>
                  <p className="text-sm text-slate-500">{plano.descricao}</p>
                </div>

                <div className="mb-5">
                  <span className="text-3xl font-bold text-white">R$ {plano.precoMensal}</span>
                  <span className="text-slate-500 text-sm">/mês</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plano.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
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
                  className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all ${
                    plano.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500'
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

      {/* Quote Form Modal */}
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-[#0a0a0f] rounded-2xl p-6 max-w-md w-full border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Orçamento</h3>
                  <button onClick={() => setShowQuoteForm(false)} className="p-2 hover:bg-white/5 rounded-lg">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);
                    const message = `🏢 *ORÇAMENTO CORPORATIVO*\n\nEmpresa: ${data.empresa}\nCNPJ: ${data.cnpj}\nResponsável: ${data.responsavel}\nTelefone: ${data.telefone}`;
                    window.open(`https://wa.me/5575981231019?text=${encodeURIComponent(message)}`, '_blank');
                    setShowQuoteForm(false);
                  }}
                  className="space-y-4"
                >
                  <input
                    name="empresa"
                    placeholder="Empresa"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="cnpj"
                    placeholder="CNPJ (opcional)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="responsavel"
                    placeholder="Responsável"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50"
                  />
                  <input
                    name="telefone"
                    placeholder="Telefone/WhatsApp"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50"
                  />
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-3">
                    <MessageCircle className="w-4 h-4" />
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
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] z-50 border-l border-white/5 flex flex-col"
            >
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-semibold">Carrinho</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-lg">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm">Nenhum plano selecionado</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-sm font-medium">{item.nome}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-400">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                          <button onClick={() => updateQuantity(item.id, item.quantidade - 1)} className="p-1.5 hover:bg-white/10 rounded">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantidade}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantidade + 1)} className="p-1.5 hover:bg-white/10 rounded">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-emerald-400 font-semibold text-sm">
                          R$ {(item.preco * item.quantidade).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-5 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total/mês</span>
                    <span className="text-xl font-bold text-emerald-400">R$ {total.toFixed(2)}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn-primary w-full flex items-center justify-center gap-2 py-3">
                    <MessageCircle className="w-4 h-4" />
                    Finalizar no WhatsApp
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
