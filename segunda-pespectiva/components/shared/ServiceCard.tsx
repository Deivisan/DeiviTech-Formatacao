'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Shield, ShoppingCart, Wrench } from 'lucide-react';
import { Servico } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  servico: Servico;
  onAddToCart: () => void;
  tipo?: 'b2c' | 'b2b';
}

const iconMap: Record<string, any> = {
  Monitor: ShoppingCart,
  Zap: Clock,
  Terminal: ShoppingCart,
  Cpu: Wrench,
  Settings: Wrench,
  Brain: Check,
  Gauge: Clock,
};

export function ServiceCard({ servico, onAddToCart, tipo = 'b2c' }: ServiceCardProps) {
  const IconComponent = iconMap[servico.icon] || Check;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300",
        tipo === 'b2b' 
          ? "border-purple-500/20 hover:border-purple-500/50" 
          : "border-slate-700/50 hover:border-blue-500/50"
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={cn(
          "p-3 rounded-xl",
          tipo === 'b2b' 
            ? "bg-purple-500/20 text-purple-400"
            : "bg-blue-500/20 text-blue-400"
        )}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">{servico.nome}</h3>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock className="w-4 h-4" />
            {servico.duracao}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4">{servico.descricao}</p>

      {/* Benefits */}
      <ul className="space-y-2 mb-6">
        {servico.beneficios.slice(0, 3).map((beneficio, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{beneficio}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
        <div>
          <span className="text-2xl font-bold text-green-400">
            R$ {servico.preco.toFixed(2)}
          </span>
          {servico.garantia && (
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Shield className="w-3 h-3" />
              Garantia {servico.garantia}
            </div>
          )}
        </div>
        
        <button
          onClick={onAddToCart}
          className={cn(
            "px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all",
            tipo === 'b2b'
              ? "bg-purple-600 hover:bg-purple-500"
              : "bg-blue-600 hover:bg-blue-500"
          )}
        >
          <ShoppingCart className="w-4 h-4" />
          Contratar
        </button>
      </div>
    </motion.div>
  );
}
