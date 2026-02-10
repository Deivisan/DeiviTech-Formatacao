'use client';

import { motion } from 'framer-motion';
import { Check, Building2, Users, Clock, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { PlanoB2B } from '@/types';

interface PlanCardProps {
  plano: PlanoB2B;
  onSelect: () => void;
  isPopular?: boolean;
}

export function PlanCard({ plano, onSelect, isPopular }: PlanCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative rounded-2xl p-8 border transition-all duration-300 ${
        isPopular 
          ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50 shadow-2xl shadow-purple-500/20' 
          : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
            MAIS POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
        <p className="text-slate-400 text-sm">{plano.descricao}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-bold">R$ {plano.precoMensal}</span>
          <span className="text-slate-400 mb-1">/mês</span>
        </div>
        <p className="text-sm text-green-400 mt-1">
          ou R$ {plano.precoAnual}/ano ({plano.descontoAnual}% OFF)
        </p>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <HeadphonesIcon className="w-4 h-4 text-blue-400" />
          </div>
          <span>{plano.limiteChamados === 999 ? 'Chamados ilimitados' : `${plano.limiteChamados} chamados/mês`}</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Clock className="w-4 h-4 text-green-400" />
          </div>
          <span>Resposta em {plano.tempoResposta}</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Building2 className="w-4 h-4 text-purple-400" />
          </div>
          <span>Suporte empresarial dedicado</span>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {plano.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
        {plano.exclusivo?.map((feature, idx) => (
          <li key={`excl-${idx}`} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
            <span className="text-purple-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
          isPopular
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500'
            : 'bg-slate-700 hover:bg-slate-600'
        }`}
      >
        Escolher Plano
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
