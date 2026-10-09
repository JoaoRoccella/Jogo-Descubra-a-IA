const PERSONAGENS = {
    edgar: {
nome: "Prof. Edgar",
// Para usar outra imagem, atualize o caminho em assets/images/.
imagem: "assets/images/edgard.png",
corBadge: "bg-indigo-600 border-indigo-300"
    },
    joao: {
nome: "Prof. João",
// Para usar outra imagem, atualize o caminho em assets/images/.
imagem: "assets/images/joao.png",
corBadge: "bg-emerald-600 border-emerald-300"
    }
};

/* ==========================================================================
   2. ROTEIRO DA VISUAL NOVEL (INTRODUÇÃO)
   ========================================================================== */
const roteiroVN = [
    {
personagem: "edgar",
texto: "Olá, estudante! Seja muito bem-vindo ao nosso Laboratório de ADS. Eu sou o Professor Edgar!"
    },
    {
personagem: "joao",
texto: "E eu sou o Professor João! Preparamos um teste prático sobre Inteligência Artificial para a nossa turma."
    },
    {
personagem: "edgar",
texto: "Com o avanço de ferramentas como Midjourney e DALL-E, identificar se uma imagem é real ou sintetizada se tornou um desafio crucial em TI e para as pessoas comuns no dia a dia."
    },
    {
personagem: "joao",
texto: "A dinâmica é estilo Kahoot: mostraremos 10 imagens. Você deve clicar em 'Gerada por IA' (▲ Vermelho) ou 'Imagem Real' (◆ Azul)."
    },
    {
personagem: "edgar",
texto: "Se acertar 6 ou mais imagens (60%), você é APROVADO! Caso contrário, terá que reiniciar o teste. Boa sorte!"
    }
];

/* ==========================================================================
   3. BANCO DE DADOS DAS 10 PERGUNTAS (REAL VS IA)
   ========================================================================== */
const perguntas = [
    {
id: 1,
imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
isIA: false,
titulo: "Gato doméstico descansando",
explicacao: "IMAGEM REAL: Apresenta reflexos ópticos autênticos nos olhos, pelos individuais definidos por foco de câmera real e fios de bigode naturais."
    },
    {
id: 2,
imagem: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
isIA: true,
titulo: "Arte conceitual fluida",
explicacao: "GERADA POR IA: Apresenta padrões de gradiente impossíveis fisicamente, simetria computacional perfeita e dobras sem lógica estrutural de relevo."
    },
    {
id: 3,
imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
isIA: false,
titulo: "Xícara de café sobre madeira",
explicacao: "IMAGEM REAL: Imperfeições naturais no grão da madeira, profundidade de campo óptica suave e vapor real fotografado com obturador rápido."
    },
    {
id: 4,
imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
isIA: true,
titulo: "Cérebro digital com redes neurais",
explicacao: "GERADA POR IA: Ilustração sintetizada por computador combinando nós de luz não-físicos e circuitos sem conectividade elétrica real."
    },
    {
id: 5,
imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
isIA: false,
titulo: "Retrato de homem sorrindo",
explicacao: "IMAGEM REAL: Textura de pele humana com poros visíveis, iluminação solar natural consistente nos dois lados do rosto e fundo naturalmente desfocado."
    },
    {
id: 6,
imagem: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
isIA: true,
titulo: "Paisagem surrealista cintilante",
explicacao: "GERADA POR IA: Mistura de estilos artísticos com aberrações cromáticas sintéticas e reflexos d'água que não obedecem às leis da física."
    },
    {
id: 7,
imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
isIA: false,
titulo: "Arranha-céu espelhado",
explicacao: "IMAGEM REAL: Linhas de perspectiva arquitetônica matematicamente exatas para uma lente grande-angular real e reflexos consistentes."
    },
    {
id: 8,
imagem: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80",
isIA: true,
titulo: "Esferas de vidro flutuantes",
explicacao: "GERADA POR IA: Refração de luz incoerente dentro das esferas, ausência de sombras de contato e artefatos de renderização algorítmica."
    },
    {
id: 9,
imagem: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
isIA: false,
titulo: "Homem de óculos em ambiente urbano",
explicacao: "IMAGEM REAL: Micro-reflexos reais nas lentes dos óculos, dobras autênticas no tecido da jaqueta e grão ISO característico de fotografia."
    },
    {
id: 10,
imagem: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80",
isIA: true,
titulo: "Robô humanóide com neon",
explicacao: "GERADA POR IA: Texturas plásticas hiper-suavizadas sem desgaste mecânico real e linhas de contorno onduladas típicas de difusão."
    }
];
