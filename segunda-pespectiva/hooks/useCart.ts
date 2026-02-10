'use client';

import { useState, useEffect, useCallback } from 'react';
import { ItemCarrinho } from '@/types';

const CART_STORAGE_KEY = 'deivitech-cart-v2';

export function useCart() {
  const [items, setItems] = useState<ItemCarrinho[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar carrinho do localStorage
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Salvar carrinho no localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = useCallback((item: Omit<ItemCarrinho, 'quantidade'>) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === item.id);
      if (existing) {
        return current.map((i) =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...current, { ...item, quantidade: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantidade: number) => {
    if (quantidade <= 0) {
      removeItem(id);
      return;
    }
    setItems((current) =>
      current.map((i) => (i.id === id ? { ...i, quantidade } : i))
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
  const count = items.reduce((sum, item) => sum + item.quantidade, 0);

  const generateWhatsAppMessage = useCallback((tipo: 'b2c' | 'b2b' = 'b2c', empresa?: any) => {
    let message = '';
    
    if (tipo === 'b2b' && empresa) {
      message = `🚀 *NOVO PEDIDO B2B - DEIVITECH*\n\n`;
      message += `🏢 *EMPRESA:*\n`;
      message += `Razão Social: ${empresa.razaoSocial}\n`;
      message += `CNPJ: ${empresa.cnpj}\n`;
      message += `Responsável: ${empresa.responsavel}\n`;
      message += `Telefone: ${empresa.telefone}\n\n`;
    } else {
      message = `🛒 *NOVO PEDIDO - DEIVITECH*\n\n`;
    }
    
    message += `📦 *ITENS:*\n`;
    items.forEach((item, index) => {
      const subtotal = item.preco * item.quantidade;
      message += `${index + 1}. ${item.nome}\n`;
      message += `   Qtd: ${item.quantidade}x | R$ ${subtotal.toFixed(2)}\n\n`;
    });
    
    message += `💰 *TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    message += `✅ Por favor, confirmar disponibilidade e prazo de entrega.`;
    
    return encodeURIComponent(message);
  }, [items, total]);

  return {
    items,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    count,
    generateWhatsAppMessage,
  };
}
