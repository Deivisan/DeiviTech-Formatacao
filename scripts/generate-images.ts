#!/usr/bin/env bun
/**
 * 🎨 NANO BANANA PRO - IMAGE GENERATOR
 * Script para gerar imagens promocionais usando Google Gemini API
 * Configuração: ~/.env ou variáveis de ambiente
 */

import { GoogleGenAI } from '@google/genai';

// Configuração da API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ Erro: Configure a variável de ambiente GEMINI_API_KEY');
  console.log('   Execute: export GEMINI_API_KEY="sua-chave-aqui"');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Prompts otimizados para Nano Banana Pro
const PROMPTS = {
  hero_workshop: `A wide cinematic banner photograph of a futuristic computer workshop desk in dark ambient lighting, cyberpunk aesthetic with neon blue #3498db and green #2ecc71 accent lights glowing from RGB components. On the sleek glass desk: a powerful custom gaming PC with liquid cooling, RGB rainbow fans, disassembled laptop showing golden PCB boards, floating holographic displays showing 'DeiviTech' logo in chrome 3D text. Dark brushed metal background with circuit patterns. Shot from low angle, shallow DOF, soft blue rim lighting, lens flare. 8k, hyper-detailed textures. Professional product photography. Hero image for tech service website.`,
  
  speed_transformation: `Dramatic split-screen cinematic photograph. Left: old dusty 2012 computer covered in dust, gray and dull with glitch artifacts. Right: SAME computer transformed, glowing components, binary code transforming into golden light, rocket speed streaks in purple and cyan. Connected by light bridge. Dark gradient background gray to blue-green. Motion blur on speed elements. Commercial advertising quality, 8k.`,
  
  diagnostic_report: `Photorealistic close-up of diagnostic report on premium smartphone screen held by technical hands. Screen shows: HTML diagnostic interface, gradient blue-to-green header, CrystalDiskMark purple bar charts, laptop thumbnail, green 'Comprar agora' button. Background: dual monitors with terminal code, RGB components, cyan LED lighting. Soft natural window light on glass. Macro, shallow DOF, professional product photography.`,
  
  os_logos: `Elegant isometric 3D product shot of floating glass platform in void. On platform: Windows 10, Windows 11, Tux Linux, Chrome logos connected by glowing circuit traces to golden shield. Deep purple to blue gradient background volumetric lighting, glass refraction, product photography style, shallow DOF.`,
  
  ghost_spectre: `Aggressive high-energy gaming setup, dark room, intense cyan and electric green RGB lighting. Sleek PC tower with custom loop liquid cooling glowing in brand colors, 'DT' monogram badge pulsing. Gaming monitor showing 144Hz, mechanical keyboard, RGB mouse. Volumetric cyan smoke, lens flare. Eye-level wide angle, 8k hyper-realistic.`,
  
  deivitech_gamer: `Aggressive high-energy gaming setup, dark room with cyan #3498db and green #2ecc71 RGB lighting. Sleek PC tower with custom loop liquid cooling in DeiviTech brand colors, translucent 'DT' logo badge glowing. Gaming monitor 144Hz, mechanical keyboard, RGB mouse, cyberpunk desk. Volumetric cyan smoke, lens flare. Cinematic, 8k hyper-realistic.`,

  deivitech_dev: `Sleek developer workspace overhead shot. Dual monitors: VS Code with cyan terminal prompt 'DeiviTech OS', Docker containers running. Desk: mechanical keyboard RGB, wireless mouse, coffee. Cyan ambient LED. Clean, organized, professional. Overhead, sharp focus, product photography, 16:9.`,

  deivitech_corporate: `Professional corporate IT environment. Laptop showing Windows login with DeiviTech OS logo, BitLocker icon, security shield with green checkmark 'Sistema Protegido'. Modern office background blurred, glass walls. Corporate, trust-inspiring blue tones. Professional corporate photography.`,

  deivitech_basic: `Friendly lifestyle photo of casual user in bright living room. Laptop showing simplified DeiviTech OS interface with large icons, tutorials overlay, warm colors. User smiling while browsing. Natural window light, warm temperature, shallow DOF. Lifestyle photography, inviting, 4:5.`,

  deivitech_badge: `Prestigious 3D badge. Metallic shield with 'DeiviTech' chrome text and 'OS' subscript in cyan to green gradient. Shield has subtle glow, metallic reflections. Deep void black background with circuit patterns. Professional badge photography, rim lighting, lens flare. Premium, trustworthy, technological.`,
  
  ssd_vs_hd: `Professional product comparison studio photograph. Left: heavy industrial HDD, metallic gray, utilitarian. Right: slim modern M.2 NVMe SSD with golden pins, green LED sparks. SSD floating slightly. Dark charcoal background, soft product lighting, catchlights. Speed motion blur only on SSD. Commercial photography, 8k.`,
  
  ram_combo: `Dynamic product showcase. Two DDR5 RGB RAM sticks crossed over NVMe SSD in X formation. Above: bold golden 'COMBO' 3D letters with sparkles. Blurred motherboard background. Dark reflective surface, studio lighting, cyan accents. Slightly above, product photography, 8k.`,
  
  ai_brain: `Awe-inspiring abstract digital art. Glowing digital brain from fiber optics and circuits in orange and blue. Wireframe computer tower being scanned by light. Deep void black background with particles. Volumetric lighting, ethereal glow. Cinematic, 8k.`,
  
  promotion_vertical: `High-energy vertical advertisement (9:16). Bright yellow background with hazard tape borders. Gaming mouse and SSD floating, casting shadows. Gold confetti. 3D arrow with 'OFERTA' red text. Pop-art style, bold colors, commercial photography.`,
  
  before_after: `Powerful vertical split-screen transformation (9:16). Top: desaturated frustrated person struggling with slow computer. Bottom: SAME person confident with glowing fast computer, thumbs up. Green arrow flows top to bottom. Dark moody top, bright warm bottom. Cinematic portrait, high emotional impact.`,
  
  guarantee_badge: `Prestigious vertical certificate design (9:16). Center: 3D golden seal badge '30 DIAS' with ribbon, metallic texture. Dark blue to purple gradient background with circuit patterns. Professional badge photography, lens flare. Trustworthy, premium.`,
  
  referral_system: `Vibrant vertical social media (9:16). Two silhouettes facing each other, blue and purple. Between them: glowing gold coins with R$10, connected by arrows. Purple to blue gradient with particles. Bold text 'VOCÊS DOIS GANHAM R$10'. Modern energetic style.`,
  
  timestamp: `Close-up macro vertical shot (9:16) of laptop screen with HTML code. Focused on line '<footer>Gerado em 18/02/2026 - DeiviTech</footer>' highlighted in green glow. Soft bokeh on surrounding code. Dark desk with cyan LED. Developer aesthetic, macro, shallow DOF.`,
  
  mascot: `Delightful 3D character. Robotic banana with yellow metallic peel, silver accents, wearing technician headset with microphone, holding screwdriver. Stands on motherboard circuit city with LED lights. Pixar/Disney style, round friendly shapes, big eyes. Warm studio lighting, 8k 3D render.`,
  
  synthwave: `Breathtaking synthwave landscape. Road made of glowing circuit traces in cyan and purple. Distance: sun as glowing power button with radial rays. Retro 80s grid mountains in purple mist. 'DeiviTech' in chrome retro font in sky. Cinematic wide, 8k.`,
  
  crystaldiskmark: `Clean data visualization infographic. Left: short red bar 'HD Antigo 15 MB/s'. Right: full green bar 'SSD Novo 550 MB/s'. 3D depth, shadows. Title 'CrystalDiskMark' in purple. Blue to green gradient. Professional infographic, clean typography.`,
  
  conversion_rate: `Powerful infographic. Center: giant '85-90%' in vibrant green with metallic 3D glow. 10 customer avatars in circle, 9 with checkmarks. Blue to purple gradient. Bold headline 'Taxa de Conversão Comprovada'. Professional data visualization.`,
  
  report_mockup: `Detailed smartphone mockup. Screen: gradient header 'Diagnóstico - Notebook Cliente', laptop image, problem card, solution card with price 'R$150', footer timestamp, green 'Comprar agora' button. Tilted 15 degrees, studio lighting. Clean mobile UI, high-fidelity.`,
  
  tech_workstation: `Professional overhead shot of tech workstation. Dual monitors: Linux terminal with colored output, hardware diagnostics. Desk: mechanical keyboard, screwdrivers, thermal paste, open laptop, grounding strap. Blue ambient LED. Overhead, sharp focus, product photography, 16:9.`,
  
  kit_formatacao: `Clean flat-lay on dark matte surface. USB drives, NVMe SSD, DDR stick, screwdrivers, tube of thermal paste, price tag 'A partir de R$80'. Slight angles, negative space for text. Soft overhead lighting, sharp focus, product photography, 1:1.`,
  
  chrome_os_flex: `Heartwarming lifestyle photo. Old 2012 laptop on wooden desk in cozy room with afternoon light. Screen: Chrome OS Flex loading fast, speedometer 'Boot: 8 seconds'. Warm color temperature, natural window light, shallow DOF. Lifestyle photography, 4:5.`
};

// Gerar uma imagem
async function generateImage(prompt: string, filename: string): Promise<void> {
  console.log(`\n🎨 Gerando: ${filename}...`);
  console.log(`   Prompt: ${prompt.substring(0, 100)}...`);
  
  try {
    const response = await ai.models.generateImages({
      model: 'gemini-2.0-flash-exp',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
      },
    });
    
    if (response.generatedImages && response.generatedImages.length > 0) {
      const image = response.generatedImages[0];
      if (image.image?.imageBytes) {
        // Salvar a imagem
        const bytes = Uint8Array.from(atob(image.image.imageBytes), c => c.charCodeAt(0));
        const fs = await import('fs/promises');
        
        await fs.writeFile(`./marketing/generated/${filename}`, bytes);
        console.log(`✅ Salvo: ./marketing/generated/${filename}`);
      }
    }
  } catch (error) {
    console.error(`❌ Erro ao gerar ${filename}:`, error);
  }
}

// Gerar todas as imagens
async function generateAll(): Promise<void> {
  console.log('🚀 Iniciando geração de imagens com Nano Banana Pro...\n');
  
  // Criar diretório se não existir
  const fs = await import('fs/promises');
  try {
    await fs.mkdir('./marketing/generated', { recursive: true });
  } catch {}
  
  const entries = Object.entries(PROMPTS);
  
  for (const [key, prompt] of entries) {
    await generateImage(prompt, `${key}.png`);
    // Aguardar um pouco entre gerações para não sobrecarregar
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n✨ Generación concluída!');
}

// Menu interativo
const args = process.argv.slice(2);
const command = args[0];

if (command === 'all') {
  generateAll();
} else if (command && PROMPTS[command]) {
  generateImage(PROMPTS[command], `${command}.png`);
} else {
  console.log(`
🎨 NANO BANANA PRO - GERADOR DE IMAGENS

Uso:
  bun run generate-images.ts <comando>

Comandos disponíveis:
  all              - Gerar todas as imagens
  hero_workshop    - Workshop Futurista
  speed_transformation - Transformação Velocidade
  diagnostic_report - Relatório Diagnóstico
  os_logos         - Logos SO (Windows/Linux/Chrome)
  ghost_spectre    - Ghost Spectre Gamer (Legado)
  deivitech_gamer  - DeiviTech OS Gamer
  deivitech_dev    - DeiviTech OS Dev Workspace
  deivitech_corporate - DeiviTech OS Corporate
  deivitech_basic  - DeiviTech OS Basic
  deivitech_badge  - DeiviTech OS Badge
  ssd_vs_hd        - SSD vs HD Comparativo
  ram_combo        - RAM Combo Upgrade
  ai_brain         - Cérebro IA
  promotion_vertical - Promoção Vertical
  before_after     - Antes/Depois
  guarantee_badge  - Selo Garantia
  referral_system  - Sistema Indicações
  timestamp        - Timestamp Personalizado
  mascot           - Mascote Nano Banana
  synthwave        - Paisagem Synthwave
  crystaldiskmark  - Gráfico CrystalDiskMark
  conversion_rate  - Taxa Conversão
  report_mockup     - Mockup Relatório
  tech_workstation  - Estação Técnico
  kit_formatacao   - Kit Formatação
  chrome_os_flex   - Chrome OS Flex

Exemplo:
  bun run generate-images.ts hero_workshop

Nota: Configure GEMINI_API_KEY antes de usar:
  export GEMINI_API_KEY="sua-chave-aqui"
  `);
}
