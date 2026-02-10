'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  User,
  Building2,
  Zap,
  Terminal,
  Globe,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronDown,
  Server,
  Network,
  Settings,
  Database,
  Code2,
  Layers,
  Rocket,
  Target,
  Brain,
  Wand2,
  Cpu as CpuIcon,
  HardDrive,
  MemoryStick,
  Monitor,
  RefreshCw,
  Lock,
  BarChart3,
  Users as UsersIcon,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

// Particles Component
function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Glowing Orb Component
function GlowingOrb({ color, size, top, left, delay = 0 }: { color: string; size: number; top: string; left: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${color}`}
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
      }}
    />
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
          <div className="flex items-center justify-between h-18">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">DeiviTech</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/cpf/" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <User className="w-4 h-4" />
                Para Você (CPF)
              </Link>
              <Link href="/cnpj/" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Building2 className="w-4 h-4" />
                Para Empresas (CNPJ)
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Particles & Orbs */}
        <Particles />
        <GlowingOrb color="bg-cyan-500" size={600} top="-20%" left="-10%" />
        <GlowingOrb color="bg-purple-500" size={500} top="20%" right="-10%" delay={2} />
        <GlowingOrb color="bg-blue-500" size={400} top="60%" left="30%" delay={4} />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />

        <motion.div 
          className="container-site relative z-10"
          style={{ opacity, scale }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                }
              }}
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">Formatação Inteligente com IA</span>
              </motion.div>

              {/* Hero Title */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
              >
                <span className="text-white">Seu sistema</span>
                <br />
                <span className="text-gradient-hero">reimaginado</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Não é só formatação. É <span className="text-cyan-400">transformação</span>. 
                Utilizo inteligência artificial para otimizar cada aspecto do seu sistema.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Link href="/cpf/">
                  <button className="group btn-primary text-lg px-8 py-4">
                    <User className="w-5 h-5" />
                    Sou Cliente (CPF)
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/cnpj/">
                  <button className="group btn-secondary text-lg px-8 py-4">
                    <Building2 className="w-5 h-5" />
                    Sou Empresa (CNPJ)
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {[
                  { value: "500+", label: "Sistemas Otimizados", icon: CpuIcon, color: "cyan" },
                  { value: "70%", label: "Menos Uso de RAM", icon: Zap, color: "purple" },
                  { value: "15seg", label: "Boot Médio", icon: Rocket, color: "emerald" },
                  { value: "30 dias", label: "Garantia", icon: Shield, color: "amber" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                    <div className={`text-3xl font-bold text-gradient-${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-xs uppercase tracking-widest">Deslize</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section: Windows vs Linux vs IA */}
      <section className="section-spaced relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="container-site relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-cyan mb-4">
              <BarChart3 className="w-4 h-4" />
              Comparação Real
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que <span className="text-gradient-cyan"> Windows + IA</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Veja a diferença entre sistemas convencionais e um sistema otimizado com inteligência artificial.
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Windows Original",
                icon: Monitor,
                iconColor: "from-gray-500 to-gray-600",
                bgColor: "gray",
                metrics: [
                  { label: "Boot", value: "3-5 min", bad: true },
                  { label: "RAM em Uso", value: "4-6GB", bad: true },
                  { label: "Tempo de Login", value: "45-60s", bad: true },
                  { label: "Apps Iniciais", value: "15-25", bad: true },
                  { label: "Telemetria", value: "Ativa", bad: true },
                  { label: "Bloatware", value: "Muito", bad: true },
                ],
                description: "O que vem de fábrica - lento, pesado e cheio de垃圾"
              },
              {
                title: "Linux",
                icon: Terminal,
                iconColor: "from-orange-500 to-orange-600",
                bgColor: "orange",
                metrics: [
                  { label: "Boot", value: "20-30s", good: true },
                  { label: "RAM em Uso", value: "1-2GB", good: true },
                  { label: "Tempo de Login", value: "5-10s", good: true },
                  { label: "Apps Iniciais", value: "2-5", good: true },
                  { label: "Telemetria", value: "Mínima", good: true },
                  { label: "Bloatware", value: "Nenhum", good: true },
                ],
                description: "Rápido e seguro, mas pode ter compatibilidade limitada"
              },
              {
                title: "Windows + IA",
                icon: Brain,
                iconColor: "from-cyan-500 to-purple-600",
                bgColor: "cyan",
                highlight: true,
                metrics: [
                  { label: "Boot", value: "10-15s", best: true },
                  { label: "RAM em Uso", value: "1.5-3GB", best: true },
                  { label: "Tempo de Login", value: "3-8s", best: true },
                  { label: "Apps Iniciais", value: "3-8", best: true },
                  { label: "Telemetria", value: "Removida", best: true },
                  { label: "Bloatware", value: "Zero", best: true },
                ],
                description: "O melhor dos dois mundos - performance e compatibilidade"
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl overflow-hidden ${
                  card.highlight 
                    ? 'ring-2 ring-cyan-500/50' 
                    : ''
                }`}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  card.highlight 
                    ? 'from-cyan-500/10 via-purple-500/10 to-transparent' 
                    : `from-${card.bgColor}-500/5 to-transparent`
                }`} />
                
                {/* Glass Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${card.iconColor} flex items-center justify-center`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
                  <p className="text-sm text-slate-500 text-center mb-6">{card.description}</p>

                  {/* Metrics */}
                  <div className="space-y-3">
                    {card.metrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx} 
                        className="flex items-center justify-between py-2 border-b border-white/5"
                      >
                        <span className="text-sm text-slate-400">{metric.label}</span>
                        <span className={`text-sm font-semibold ${
                          metric.best 
                            ? 'text-emerald-400' 
                            : metric.good 
                              ? 'text-green-400' 
                              : metric.bad 
                                ? 'text-red-400' 
                                : 'text-slate-300'
                        }`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  {card.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                        RECOMENDADO
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: O Que Faço */}
      <section className="section-spaced bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-10" />
        <GlowingOrb color="bg-purple-500" size={300} top="10%" left="5%" delay={1} />
        <GlowingOrb color="bg-cyan-500" size={400} top="50%" right="5%" delay={3} />

        <div className="container-site relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-purple mb-4">
              <Wand2 className="w-4 h-4" />
              Processo de Transformação
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como <span className="text-gradient-purple">transformo</span> seu sistema
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Análise Inteligente",
                description: "Utilizo ferramentas de IA para analisar cada aspecto do seu sistema atual - processos, serviços, registry e configurações.",
                icon: Brain,
                color: "cyan",
                items: ["Scanner de processos", "Análise de registry", "Mapeamento de serviços"]
              },
              {
                step: "02",
                title: "Instalação Limpa",
                description: "Windows ou Linux instalado do zero com todos os drivers e atualizações críticas.",
                icon: Install,
                color: "blue",
                items: ["Drivers atualizados", "Windows Update", "BIOS/UEFI otimizado"]
              },
              {
                step: "03",
                title: "Otimização com IA",
                description: "Aplico scripts inteligentes e configurações automatizadas para máximo desempenho.",
                icon: Zap,
                color: "purple",
                items: ["Desativação de telemetria", "Otimização de serviços", "Configuração de rede"]
              },
              {
                step: "04",
                title: "Software Essencial",
                description: "Apenas o que você precisa - nenhum bloatware, nenhum programa desnecessário.",
                icon: Package,
                color: "emerald",
                items: ["Seu pacote personalizado", " Programas que você usa", " drivers específicos"]
              },
              {
                step: "05",
                title: "Performance Máxima",
                description: "Sistema testado, benchmarks rodados e pronto para uso imediato.",
                icon: Rocket,
                color: "amber",
                items: ["Teste de estabilidade", "Benchmark de performance", "30 dias de garantia"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gradient-hero">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400 mb-4">{item.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {item.items.map((subItem, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2 text-sm text-slate-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Para Quem */}
      <section className="section-spaced relative overflow-hidden">
        <GlowingOrb color="bg-cyan-500" size={500} top="0" left="20%" delay={2} />
        <GlowingOrb color="bg-purple-500" size={400} top="50%" right="0" delay={4} />

        <div className="container-site relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-cyan mb-4">
              <Target className="w-4 h-4" />
              Para Todos os Perfis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha seu <span className="text-gradient-cyan">atendimento</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tenho soluções específicas para cada tipo de cliente - de usuários domésticos a grandes empresas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CPF Card */}
            <Link href="/cpf/">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent" />
                <div className="absolute inset-0 bg-grid-subtle opacity-20" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Para Você</h3>
                  <p className="text-slate-400 mb-6">
                    CPF - Atendimento pessoal para formatação, upgrades e manutenção do seu PC ou notebook.
                  </p>

                  {/* Services */}
                  <div className="space-y-3 mb-8">
                    {[
                      { icon: Monitor, label: "Formatação Windows/Linux" },
                      { icon: HardDrive, label: "Upgrade de SSD/RAM" },
                      { icon: Wrench, label: "Manutenção Preventiva" },
                      { icon: Shield, label: "Remoção de Vírus" },
                    ].map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-slate-300">
                        <s.icon className="w-5 h-5 text-cyan-400" />
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary group-hover:scale-105 transition-transform">
                    Ver Serviços para CPF
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </Link>

            {/* CNPJ Card */}
            <Link href="/cnpj/">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent" />
                <div className="absolute inset-0 bg-grid-subtle opacity-20" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Para Empresas</h3>
                  <p className="text-slate-400 mb-6">
                    CNPJ - Soluções corporativas com migração em massa, FOG Project e suporte dedicado.
                  </p>

                  {/* Services */}
                  <div className="space-y-3 mb-8">
                    {[
                      { icon: Server, label: "Migração em Massa (FOG)" },
                      { icon: Network, label: "Setup de Rede Corporativa" },
                      { icon: Code2, label: "Vibe Coding & IA" },
                      { icon: Briefcase, label: "Contrato de Manutenção" },
                    ].map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-slate-300">
                        <s.icon className="w-5 h-5 text-purple-400" />
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-secondary group-hover:scale-105 transition-transform">
                    Ver Serviços para CNPJ
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Sistemas & Peças */}
      <section className="section-spaced bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-10" />
        <GlowingOrb color="bg-emerald-500" size={300} top="20%" left="10%" delay={1} />
        <GlowingOrb color="bg-amber-500" size={350} top="60%" right="10%" delay={3} />

        <div className="container-site relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-purple mb-4">
              <Layers className="w-4 h-4" />
              Sistemas & Componentes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tudo que <span className="text-gradient-purple">você precisa</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sistemas operacionais e componentes de hardware para potencializar sua produtividade.
            </p>
          </motion.div>

          {/* Systems & Parts Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                category: "Sistemas",
                icon: OperatingSystem,
                color: "cyan",
                items: [
                  { name: "Windows 11 Pro", desc: "Licenciado e otimizado", badge: "Popular" },
                  { name: "Windows 10 Pro", desc: "Estável e rápido", badge: null },
                  { name: "Linux Ubuntu", desc: "Gratuito e seguro", badge: "Leve" },
                  { name: "Linux Mint", desc: "Familiar para quem", badge: "Iniciantes" },
                ]
              },
              {
                category: "Armazenamento",
                icon: HardDrive,
                color: "blue",
                items: [
                  { name: "SSD NVMe 500GB", desc: "Velocidade extrema", badge: "5x HD" },
                  { name: "SSD SATA 1TB", desc: "Capacidade + speed", badge: null },
                  { name: "HD 2TB", desc: "Para backup", badge: "Economico" },
                  { name: "NVMe 2TB", desc: "Máximo espaço", badge: "Premium" },
                ]
              },
              {
                category: "Memória",
                icon: MemoryStick,
                color: "purple",
                items: [
                  { name: "DDR4 16GB Kit", desc: "Dual channel", badge: "Mais Vendido" },
                  { name: "DDR4 8GB", desc: "Upgrade básico", badge: null },
                  { name: "DDR5 32GB Kit", desc: "Próxima geração", badge: "Performance" },
                  { name: "DDR3 8GB", desc: "PCs mais antigos", badge: "Legacy" },
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-3xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}-500/10 flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.name}</span>
                          {item.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full bg-${category.color}-500/20 text-${category.color}-400`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-slate-500">{item.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 mb-4">Peças sob consulta - entre em contato para disponibilidade e preços</p>
            <Link href="/cpf/">
              <button className="btn-primary">
                <MessageCircle className="w-5 h-5" />
                Consultar no WhatsApp
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spaced relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent" />
        <Particles />

        <motion.div 
          className="container-site relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-gradient-hero">transformar</span> seu sistema?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Não deixe seu computador lento atrapalhar sua produtividade. 
              Entre em contato agora pelo WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cpf/">
                <button className="btn-primary text-lg px-10 py-5">
                  <User className="w-5 h-5" />
                  Atendimento Pessoal
                </button>
              </Link>
              <Link href="/cnpj/">
                <button className="btn-secondary text-lg px-10 py-5">
                  <Building2 className="w-5 h-5" />
                  Atendimento Empresarial
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container-site">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold">DeiviTech</span>
                <p className="text-xs text-slate-500">Formatação Inteligente com IA</p>
              </div>
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

// Icons complementares que faltam
function Install({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 12h8" /><path d="m10.93 4.93 1.41 1.41" /><path d="M12 16a4 4 0 0 1-4-4" /><path d="M12 12v4a4 4 0 0 0 8 0v-4" />
    </svg>
  );
}

function Package({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m7.5 4.21 4.63 2.55a.06.06 0 0 1 .03.05v11.9a.06.06 0 0 1-.03.05L7.5 18.79a.06.06 0 0 1-.08-.03v-9.5a.06.06 0 0 1 .08-.06z" /><path d="M4.5 20h15" /><path d="m15 4.5-2.3 2.3" /><path d="M4.5 9h9" />
    </svg>
  );
}

function OperatingSystem({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
    </svg>
  );
}

function Wrench({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  );
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
