'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingCartProps {
  count: number;
  total: number;
  onClick: () => void;
  tipo?: 'b2c' | 'b2b';
}

export function FloatingCart({ count, total, onClick, tipo = 'b2c' }: FloatingCartProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all",
        tipo === 'b2b' 
          ? "bg-gradient-to-r from-purple-600 to-blue-600"
          : "bg-gradient-to-r from-green-600 to-emerald-600"
      )}
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-white" />
        
        {count > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            key={count}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {count > 9 ? '9+' : count}
          </motion.span>
        )}
      </div>
      
      {count > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -left-24 top-1/2 -translate-y-1/2 bg-slate-800 px-3 py-1 rounded-lg text-sm font-medium text-white whitespace-nowrap"
        >
          R$ {total.toFixed(2)}
        </motion.div>
      )}
    </motion.button>
  );
}
