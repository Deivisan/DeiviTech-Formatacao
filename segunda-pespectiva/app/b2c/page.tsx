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
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { produtos, servicos } from '@/data/produtos';
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

const TABS = [
  { id: 'todos', label: 'Todos' },
  { id: 'storage', label: 'SSDs & HDs' },
  { id: 'ram', label: 'Memória RAM' },
  { id: 'servicos', label: 'Serviços' },
];

export default function B2CPage() {
  const [activeTab, setActiveTab] = useState('todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { items, addItem, removeItem, updateQuantity, total, count, generateWhatsAppMessage } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage('b2c');
    window.open(`https://wa.me/5575981231019?text=${message}`, '_blank');
  };

  const filteredProdutos = produtos.filter((p) => {
    if (activeTab === 'servicos') return false;
    const matchesTab = activeTab === 'todos' || p.categoria === activeTab;
    const matchesSearch = p.nome.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredServicos = servicos.filter((s) => {
    const matchesSearch = s.nome.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

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
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">Loja</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-white/5 rounded-xl transition-colors"
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

      {/* Hero - Minimal */}
      <section className="pt-32 pb-16">
        <div className="container-site">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="badge badge-cyan mb-6">
              <Filter className="w-4 h-4" />
              Catálogo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Peças & <span className="text-gradient-cyan">Serviços</span>
            </h1>
            <p className="text-slate-400">
              Componentes de qualidade para transformar seu PC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-12 sticky top-20 z-40 bg-[#050507]/80 backdrop-blur-xl">
        <div className="container-site">
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
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

      {/* Products Grid */}
      <section className="pb-32">
        <div className="container-site">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <AnimatePresence mode="popLayout">
              {activeTab === 'servicos' ? (
                filteredServicos.map((servico, idx) => (
                  <motion.div
                    key={servico.id}
                    layout
                    variants={fadeInUp}
                    className="card-hover p-6 group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                        <Wrench className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                        {servico.duracao}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">{servico.descricao}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="price-tag">R$ {servico.preco}</span>
                      <button
                        onClick={() => addItem({
                          id: servico.id,
                          nome: servico.nome,
                          preco: servico.preco,
                          tipo: 'servico',
                        })}
                        className="btn-primary py-2 px-4 text-sm"
                      >
                        Adicionar
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                filteredProdutos.map((produto) => (
                  <motion.div
                    key={produto.id}
                    layout
                    variants={fadeInUp}
                    className={`card-hover overflow-hidden group ${produto.destaque ? 'ring-2 ring-cyan-500/20' : ''}`}
                  >
                    {produto.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          produto.destaque 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black' 
                            : 'bg-cyan-500 text-white'
                        }`}>
                          {produto.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                        {produto.categoria === 'storage' && <HardDrive className="w-20 h-20" />}
                        {produto.categoria === 'ram' && <MemoryStick className="w-20 h-20" />}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{produto.nome}</h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{produto.descricao}</p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="price-tag text-xl">R$ {produto.preco}</span>
                        </div>
                        <button
                          onClick={() => addItem({
                            id: produto.id,
                            nome: produto.nome,
                            preco: produto.preco,
                            tipo: 'produto',
                          })}
                          className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

          {((activeTab === 'servicos' && filteredServicos.length === 0) || 
            (activeTab !== 'servicos' && filteredProdutos.length === 0)) && (
            <div className="text-center py-24">
              <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Nenhum item encontrado</p>
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
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0a0a0f] z-50 border-l border-white/5 flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Carrinho</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingCart className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-500">Seu carrinho está vazio</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{item.nome}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-500 hover:text-red-400"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantidade - 1)}
                            className="p-1.5 hover:bg-white/10 rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantidade}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantidade + 1)}
                            className="p-1.5 hover:bg-white/10 rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-emerald-400 font-bold">
                          R$ {(item.preco * item.quantidade).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-slate-400">Total</span>
                    <span className="text-2xl font-bold text-emerald-400">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                  >
                    <MessageCircle className="w-5 h-5" />
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
