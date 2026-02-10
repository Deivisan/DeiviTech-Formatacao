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
  Sparkles,
  Monitor,
  HardDrive,
  Wrench,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050507] overflow-x-hidden">
      {/* Navigation */}
          <motion.nav 
            className="fixed top-0 left-0 right-0 z-50 glass"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">DeiviTech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/b2c/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                Para Você
              </Link>
              <Link href="/b2b/" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">
                Para Empresas
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="orb orb-cyan w-[600px] h-[600px] -top-40 -left-40"
            style={{ y: y1 }}
          />
          <motion.div 
            className="orb orb-purple w-[500px] h-[500px] top-1/3 right-0"
            style={{ y: y2 }}
          />
          <div className="absolute inset-0 bg-grid-subtle" />
        </div>

        <motion.div 
          className="container-site relative z-10"
          style={{ opacity }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="badge badge-cyan">
                  <Sparkles className="w-4 h-4" />
                  Performance Premium
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
              >
                <span className="text-white">Seu PC</span>
                <br />
                <span className="text-gradient-hero">5x mais rápido</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Transforme sua máquina. Formatação profissional, upgrades estratégicos 
                e otimização completa.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/b2c/">
                  <button className="btn-primary text-base">
                    <User className="w-5 h-5" />
                    Sou Cliente
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/b2b/">
                  <button className="btn-secondary text-base">
                    <Building2 className="w-5 h-5" />
                    Sou Empresa
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Large Numbers */}
      <section className="section-spaced relative">
        <div className="container-site">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { value: "500+", label: "PCs Otimizados", color: "cyan" },
              { value: "5x", label: "Mais Veloz", color: "purple" },
              { value: "24h", label: "Entrega", color: "amber" },
              { value: "100%", label: "Satisfação", color: "emerald" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="text-center"
              >
                <div className={`stat-number text-gradient-${stat.color} mb-3`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Visual Cards */}
      <section className="section-spaced bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-grid-subtle opacity-50" />
        
        <div className="container-site relative">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="badge badge-purple mb-6">
              <Zap className="w-4 h-4" />
              Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soluções <span className="text-gradient-cyan">Completas</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Monitor,
                title: "Formatação",
                description: "Sistema otimizado do zero",
                features: ["Windows/Linux", "Drivers", "Programas"],
                price: "R$ 50",
                color: "cyan"
              },
              {
                icon: HardDrive,
                title: "Upgrades",
                description: "Componentes de alta performance",
                features: ["SSD NVMe", "RAM DDR4/DDR5", "Instalação"],
                price: "R$ 60",
                color: "purple"
              },
              {
                icon: Wrench,
                title: "Manutenção",
                description: "Cuidado preventivo completo",
                features: ["Limpeza", "Pasta térmica", "Diagnóstico"],
                price: "R$ 40",
                color: "emerald"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card-hover p-8 md:p-10 group"
              >
                <div className="feature-icon mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map((feature, fidx) => (
                    <span 
                      key={fidx}
                      className="text-xs bg-white/5 px-3 py-1 rounded-full text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="price-tag">{service.price}</span>
                  <Link href="/b2c/">
                    <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                      Ver mais
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Comparison - Visual */}
      <section className="section-spaced relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] orb orb-amber opacity-30" />
        
        <div className="container-site relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="badge badge-cyan mb-6">
                <TrendingUp className="w-4 h-4" />
                Resultados Reais
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Performance que você <br />
                <span className="text-gradient-cyan">sente na pele</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Não são apenas números. É a diferença entre esperar e fazer.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                { label: "Boot", before: "3 min", after: "15 seg", icon: Zap },
                { label: "Programas", before: "30 seg", after: "2 seg", icon: Monitor },
                { label: "Temperatura", before: "90°C+", after: "65°C", icon: Cpu },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="card-hover p-6 flex items-center gap-6"
                >
                  <div className="feature-icon flex-shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-2">{item.label}</div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 line-through">{item.before}</span>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <span className="text-emerald-400 font-bold text-lg">{item.after}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - Minimal */}
      <section className="section-spaced bg-[#0a0a0f]">
        <div className="container-site">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Por que <span className="text-gradient-purple">confiar</span>?
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Shield, title: "Garantia", desc: "30 dias" },
              { icon: Clock, title: "Agilidade", desc: "24h" },
              { icon: TrendingUp, title: "Resultado", desc: "Garantido" },
              { icon: Cpu, title: "Experiência", desc: "500+ PCs" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spaced relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-subtle" />
        
        <motion.div 
          className="container-site relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar <br />
              <span className="text-gradient-hero">seu PC?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Escolha o atendimento ideal para você
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/b2c/">
                <button className="btn-primary text-lg px-10 py-5">
                  <User className="w-5 h-5" />
                  Atendimento Pessoal
                </button>
              </Link>
              <Link href="/b2b/">
                <button className="btn-secondary text-lg px-10 py-5">
                  <Building2 className="w-5 h-5" />
                  Atendimento Empresarial
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-white/5">
        <div className="container-site">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">DeiviTech</span>
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
