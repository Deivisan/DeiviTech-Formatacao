'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  Zap, 
  ArrowRight,
  User,
  Building2,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle2,
  ChevronDown,
  Wrench,
  Database,
  Terminal,
  Play
} from 'lucide-react';
import Link from 'next/link';

// Animation variants - mais sutis e profissionais
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050507] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-18">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight">DeiviTech</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/b2c/" className="text-sm text-slate-400 hover:text-white transition-colors">
                Para Você
              </Link>
              <Link href="/b2b/" className="text-sm text-slate-400 hover:text-white transition-colors">
                Para Empresas
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="orb orb-cyan w-[400px] h-[400px] -top-20 -left-40"
            style={{ y: y1 }}
          />
          <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        </div>

        <motion.div 
          className="container-site relative z-10"
          style={{ opacity }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="badge badge-cyan">
                  <Zap className="w-4 h-4" />
                  Técnologia com resultado
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold leading-[1.15] mb-6 tracking-tight"
              >
                Seu computador
                <br />
                <span className="text-gradient-hero">funcionando bem</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-400 mb-10 max-w-xl mx-auto"
              >
                Formatação, manutenção e upgrade. Serviço técnico de verdade, 
                com garantia e preço justo.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/b2c/">
                  <button className="btn-primary">
                    Ver Serviços
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/b2b/">
                  <button className="btn-secondary">
                    <Building2 className="w-5 h-5" />
                    Empresas
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-600"
            >
              <span className="text-xs uppercase tracking-widest">Ver mais</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Service - Formatação */}
      <section className="section-spaced">
        <div className="container-site">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="badge badge-cyan mb-4">
                <Wrench className="w-4 h-4" />
                Serviço Principal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Formatação com <span className="text-gradient-cyan">resultado</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Não é só instalar Windows. É otimizar o sistema para funcionar 
                rápido e estável. Seu PC do jeito que deveria ser.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Windows ou Linux instalado do zero',
                  'Drivers atualizados e funcionais',
                  'Programas essenciais configurados',
                  'Otimização de performance',
                  '30 dias de garantia'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/b2c/">
                <button className="btn-primary">
                  Contratar Formatação
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="card-hover p-8 bg-gradient-to-br from-[#0a0a0f] to-[#111118]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="feature-icon">
                    <Terminal className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Formatação Standard</h3>
                    <p className="text-sm text-slate-500">Windows + Programas</p>
                  </div>
                  <span className="ml-auto text-2xl font-bold text-emerald-400">R$ 50</span>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="feature-icon">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Formatação Otimizada</h3>
                    <p className="text-sm text-slate-500">Super-rápido, sem bloatware</p>
                  </div>
                  <span className="ml-auto text-2xl font-bold text-emerald-400">R$ 80</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="feature-icon">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Linux Ubuntu</h3>
                    <p className="text-sm text-slate-500">Gratuito, rápido e seguro</p>
                  </div>
                  <span className="ml-auto text-2xl font-bold text-emerald-400">R$ 40</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 border-y border-white/5">
        <div className="container-site">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: "100+", label: "Clientes atendidos" },
              { value: "30 dias", label: "Garantia" },
              { value: "24-48h", label: "Prazo médio" },
              { value: "Feira de Santana", label: "Local de atendimento" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-slate-500">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon - Sistemas */}
      <section className="section-spaced bg-[#0a0a0f]">
        <div className="container-site">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="badge badge-purple mb-4">
              <Play className="w-4 h-4" />
              Em Breve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-purple">Sistemas</span> em desenvolvimento
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Estamos construindo ferramentas para otimizar seu negócio. 
              Fique atento para novidades.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Sistema de Gestão",
                description: "Controle seu negócio de forma simples",
                icon: "📊"
              },
              {
                title: "Agendamento Online",
                description: "Marque horários sem precisar ligar",
                icon: "📅"
              },
              {
                title: "Portal do Cliente",
                description: "Acompanhe seus serviços em tempo real",
                icon: "🔗"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card-hover p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spaced relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        
        <motion.div 
          className="container-site relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de ajuda com seu PC?
            </h2>
            <p className="text-slate-400 mb-8">
              Entre em contato pelo WhatsApp. Atendimento rápido e sem burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/b2c/">
                <button className="btn-primary text-lg px-8 py-4">
                  <User className="w-5 h-5" />
                  Atendimento Pessoal
                </button>
              </Link>
              <Link href="/b2b/">
                <button className="btn-secondary text-lg px-8 py-4">
                  <Building2 className="w-5 h-5" />
                  Para Empresas
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="container-site">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">DeiviTech</span>
            </div>
            <p className="text-sm text-slate-600">
              © 2025 • Feira de Santana, BA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
