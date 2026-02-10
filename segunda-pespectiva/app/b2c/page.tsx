'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  ShoppingCart, 
  ArrowLeft, 
  HardDrive, 
  MemoryStick,
  Wrench,
  X,
  Plus,
  Minus,
  MessageCircle,
  Search,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { produtos, servicos } from '@/data/produtos';
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

const TABS = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'pecas', label: 'Peças (Consulte)' },
];

export default function B2CPage() {
  const [activeTab, setActiveTab] = useState('servicos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { items, addItem, removeItem, updateQuantity, total, count, generateWhatsAppMessage } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage('b2c');
    window.open(`https://wa.me/5575981231019?text=${message}`, '_blank');
  };

  const filteredServicos = servicos.filter(s => 
    s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">Serviços</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 hover:bg-white/5 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container-site">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Serviços de <span className="text-gradient-cyan">informática</span>
            </h1>
            <p className="text-slate-400">
              Formatação, manutenção e upgrade. Atendimento presencial em Feira de Santana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-8 sticky top-18 z-40 bg-[#050507]/90 backdrop-blur-xl">
        <div className="container-site">
          <div className="max-w-lg mx-auto space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar serviço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            
            {/* Tabs */}
            <div className="flex justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="container-site">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <AnimatePresence mode="popLayout">
              {activeTab === 'servicos' ? (
                filteredServicos.map((servico) => (
                  <motion.div
                    key={servico.id}
                    layout
                    variants={fadeInUp}
                    className="card-hover p-5"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="feature-icon flex-shrink-0">
                        <Wrench className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{servico.nome}</h3>
                        <p className="text-sm text-slate-400 line-clamp-2">{servico.descricao}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {servico.beneficios.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <span className="text-xl font-bold text-emerald-400">R$ {servico.preco}</span>
                        <p className="text-xs text-slate-500">{servico.duracao}</p>
                      </div>
                      <button
                        onClick={() => addItem({
                          id: servico.id,
                          nome: servico.nome,
                          preco: servico.preco,
                          tipo: 'servico',
                        })}
                        className="btn-primary py-2 px-4 text-sm"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  layout
                  variants={fadeInUp}
                  className="col-span-full card-hover p-8 text-center"
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Search className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Peças sob consulta</h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Não trabalhamos com estoque fixo de peças. 
                      Trabalhamos com AMD, Intel, DDR3, DDR4, DDR5, SSD, HD e mais.
                    </p>
                    <p className="text-slate-500 text-sm">
                      Entre em contato para verificar disponibilidade e preços.
                    </p>
                    <button 
                      onClick={handleCheckout}
                      className="btn-primary mt-6"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar no WhatsApp
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {activeTab === 'servicos' && filteredServicos.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500">Nenhum serviço encontrado</p>
            </div>
          )}
        </div>
      </section>

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
                    <ShoppingCart className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm">Seu carrinho está vazio</p>
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
                    <span className="text-slate-400">Total</span>
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
