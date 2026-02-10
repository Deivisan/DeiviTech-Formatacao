'use client';

import { motion } from 'framer-motion';
import { Check, ShoppingCart, Star } from 'lucide-react';
import { Produto } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  produto: Produto;
  onAddToCart: () => void;
  tipo?: 'b2c' | 'b2b';
}

export function ProductCard({ produto, onAddToCart, tipo = 'b2c' }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative bg-slate-800/50 rounded-2xl overflow-hidden border transition-all duration-300",
        produto.destaque 
          ? "border-blue-500/50 shadow-lg shadow-blue-500/20" 
          : "border-slate-700/50 hover:border-slate-600"
      )}
    >
      {/* Badge */}
      {produto.badge && (
        <div className={cn(
          "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10",
          produto.destaque 
            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
            : "bg-blue-500 text-white"
        )}>
          {produto.badge}
        </div>
      )}

      {/* Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <div className="text-6xl opacity-30">
          {produto.categoria === 'storage' && '💾'}
          {produto.categoria === 'ram' && '🧠'}
          {produto.categoria === 'combo' && '⚡'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-1">{produto.nome}</h3>
          <p className="text-slate-400 text-sm line-clamp-2">{produto.descricao}</p>
        </div>

        {/* Specs Preview */}
        {produto.especificacoes && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(produto.especificacoes).slice(0, 2).map(([key, value]) => (
              <span key={key} className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-400">
                {value}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-green-400">
            R$ {produto.preco.toFixed(2)}
          </span>
          {produto.precoOriginal && (
            <span className="text-slate-500 line-through text-sm">
              R$ {produto.precoOriginal.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={onAddToCart}
          className={cn(
            "w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]",
            tipo === 'b2b'
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
              : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
          )}
        >
          <ShoppingCart className="w-4 h-4" />
          Adicionar
        </button>
      </div>
    </motion.div>
  );
}
