import type { Lang } from '../i18n/translations';

type Content = {
  tag1: string;
  tag2: string;
  period: string;
  titlePart1: string;
  titlePart2: string;
  hero: string;
  meta: { label: string; value: string }[];
  coverLabel: string;
  coverHeadline: string;
  coverSub: string;
  s1Label: string;
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s1P3: string;
  s1HmwLabel: string;
  s1Hmw: string;
  s2Label: string;
  s2Title: string;
  s2P1: string;
  s2RejectLabel: string;
  s2RejectValue: string;
  s2RejectText: string;
  s2TicketLabel: string;
  s2TicketValue: string;
  s2TicketText: string;
  s2NoFormTitle: string;
  s2NoFormText: string;
  s3Label: string;
  s3Title: string;
  s3P1: string;
  s3P2: string;
  s3Items: { title: string; text: string }[];
  s3OpsLabel: string;
  s3OpsP: string;
  s3Ops: { title: string; text: string }[];
  s4Label: string;
  s4Title: string;
  s4P1: string;
  s4Layers: { title: string; text: string }[];
  s5Label: string;
  s5Title: string;
  s5P1: string;
  s5Screens: { label: string; caption: string }[];
  s5Tela3Label: string;
  s5Tela3Caption: string;
  s5CalloutTitle: string;
  s5CalloutText: string;
  s6Label: string;
  s6Title: string;
  s6P1: string;
  s6Caption: string;
  s7Label: string;
  s7Title: string;
  s7Decisions: { title: string; text: string }[];
  s8Label: string;
  s8Title: string;
  s8P1: string;
  s8KeyApproval: string;
  s8KeyApprovalSub: string;
  s8KeyApprovalNote: string;
  s8KeyTicket: string;
  s8KeyTicketSub: string;
  s8KeyTicketDelta: string;
  s8KeyTicketDeltaSub: string;
  s8KeyTicketLabel: string;
  s8PiecesLabel: string;
  s8PiecesValue: string;
  s8PiecesSub: string;
  s8SatLabel: string;
  s8SatValue: string;
  s8SatSub: string;
  s8SubsLabel: string;
  s8SubsValue: string;
  s8SubsSub: string;
  s8TimeLabel: string;
  s8TimeValue: string;
  s8TimeSub: string;
  s8BrandsTitle: string;
  s9Label: string;
  s9Title: string;
  s9P1: string;
  s9P2: string;
  s9Lessons: { title: string; text: string }[];
  s9Final: string;
  sideStrategicLabel: string;
  sideStrategic: string;
  sideBusinessLabel: string;
  sideBusiness: { label: string; value: string }[];
  sideStackLabel: string;
};

export const caseRepassaContent: Record<Lang, Content> = {
  pt: {
    tag1: 'IA & NoCode',
    tag2: 'Produto Digital',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Captação\nInteligente.',
    hero: 'A Repassa havia pausado a captação de peças por 5 meses e, ao retomar, ainda não sabia o que queria receber nem como comunicar isso. Com o time de dev sem espaço na esteira, entrei com uma solução NoCode, trabalhando com marketing, comercial e diretoria, que gerou +84% na taxa de aprovação de triagem e elevou o ticket médio das peças para R$ 328 (+72,6%).',
    meta: [
      { label: 'Empresa', value: 'Repassa · Grupo Renner' },
      { label: 'Meu papel', value: 'Product Designer · NoCode Lead' },
      { label: 'Ferramentas', value: 'Figma · Make · Supabase · n8n' },
      { label: 'Duração', value: '6 meses' },
    ],
    coverLabel: 'Dashboard de Captação',
    coverHeadline: '149.670 peças aprovadas',
    coverSub: 'em produção · 2025–2026',
    s1Label: 'Problema',
    s1Title: '5 meses parada. E ao retomar, ainda sem saber o que queria receber.',
    s1P1: 'A Repassa é a plataforma de moda circular do Grupo Renner. Em determinado momento, a empresa tomou a decisão de pausar completamente a captação de peças por 5 meses, o objetivo era se replanejar, entender melhor o perfil de peças que queriam receber e organizar os critérios antes de reabrir o canal.',
    s1P2: 'O problema é que, após 5 meses, a empresa ainda estava no limbo. Não havia clareza total sobre quais peças aceitar nem como comunicar esses critérios ao vendedor. E o canal precisava reabrir.',
    s1P3: 'O modelo anterior não tinha nenhum formulário educativo: o usuário comprava uma sacola, enchia com o que tinha em casa e mandava. O resultado chegava no centro de distribuição e a maior parte das peças era reprovada, um custo operacional enorme, tanto logístico quanto humano, para processar peças que nunca deveriam ter entrado no fluxo.',
    s1HmwLabel: 'How Might We',
    s1Hmw: '"Como reabrir a captação educando o vendedor sobre o que é aceito, sem depender do time de dev, que estava com a esteira cheia?"',
    s2Label: 'Antes da solução',
    s2Title: 'O cenário que encontrei ao entrar no projeto.',
    s2P1: 'O canal de captação estava sendo reaberto depois de 5 meses sem operar. O modelo antigo não tinha nenhuma camada de educação — o fluxo era simples e brutal: compra a sacola, coloca o que tem em casa, manda.',
    s2RejectLabel: 'Taxa de reprovação no CD',
    s2RejectValue: 'Alta',
    s2RejectText: 'A maior parte das peças que chegavam ao centro de distribuição era reprovada. O vendedor não tinha nenhuma informação sobre critérios antes de enviar.',
    s2TicketLabel: 'Ticket médio das peças recebidas',
    s2TicketValue: 'Baixo',
    s2TicketText: 'Sem filtro na entrada, o mix de peças era baixo: qualquer coisa entrava, e o ticket médio refletia isso.',
    s2NoFormTitle: 'Nenhum formulário educativo existia',
    s2NoFormText: 'Não havia tela, fluxo ou comunicação alguma explicando ao vendedor quais marcas eram aceitas, qual estado as peças precisavam estar ou como fotografar corretamente. A triagem era 100% feita no CD, no fim da cadeia, onde corrigir é mais caro.',
    s3Label: 'Meu Papel',
    s3Title: 'Entrei quando o time de dev não tinha espaço, e precisava de resultado rápido.',
    s3P1: 'O time de dev estava sem espaço. Nenhum sprint disponível, nenhuma estimativa viável. A captação precisava reabrir, mas não podia depender de engenharia.',
    s3P2: 'Trabalhei diretamente com marketing, comercial e diretoria para definir o que precisava existir: quais critérios comunicar ao vendedor, o que era inegociável e até onde um MVP podia ser imperfeito. A solução teria que ser NoCode, e teria que gerar dados reais para o time aprender com eles.',
    s3Items: [
      { title: 'Alinhamento cross-funcional', text: 'Sessões com marketing, comercial e diretoria para definir critérios de peças aceitas, tom de comunicação e o que o formulário precisava ensinar antes do envio.' },
      { title: 'Design & construção do formulário educativo', text: 'Fluxo step-by-step que educasse o vendedor sobre marcas aceitas, estado das peças e como fotografar corretamente, com feedback antes da submissão final.' },
      { title: 'Automações NoCode (Make + n8n)', text: 'Fluxos automáticos de triagem, notificações ao vendedor e roteamento das submissões, sem nenhuma dependência de engenharia para operar.' },
      { title: 'Dashboard de monitoramento em tempo real', text: 'Painel admin que permitiu ao time estudar se o formulário estava realmente trazendo peças qualificáveis, com dados de submissões, aprovações, reprovações e ticket médio.' },
    ],
    s3OpsLabel: 'Além do produto: Design Ops & Liderança',
    s3OpsP: 'Além do trabalho de produto, estruturei a operação de design da Repassa do zero, e em determinado momento operei sozinho três squads simultâneos.',
    s3Ops: [
      { title: 'Figma do zero', text: 'Estruturei toda a organização de arquivos, design tokens, bibliotecas de componentes e templates de discovery. Nada existia antes disso.' },
      { title: 'Contratei um designer', text: 'Conduzi processo seletivo completo, 7 entrevistas, avaliação de portfólio e teste técnico, e estruturei o onboarding do designer contratado.' },
      { title: '3 squads sozinho', text: 'Após a saída do designer, operei simultaneamente vendedores, compradores e backoffice, priorizando, negociando escopo e entregando em paralelo.' },
    ],
    s4Label: 'Solução',
    s4Title: 'Um ecossistema de captação, não apenas um formulário.',
    s4P1: 'A solução foi arquitetada em três camadas integradas:',
    s4Layers: [
      { title: 'Camada 1: Experiência do Vendedor', text: 'Formulário guiado com validação contextual de marcas aceitas, guias visuais de estado correto/incorreto das peças e confirmação antes do envio. A fricção positiva reduziu submissões desqualificadas logo na entrada.' },
      { title: 'Camada 2: Automação & Triagem', text: 'Fluxos Make + n8n para pré-triagem automática das submissões, roteamento para analistas conforme critérios definidos e notificações automáticas ao vendedor sobre o status da análise, sem intervenção manual.' },
      { title: 'Camada 3: Dashboard Operacional', text: 'Painel admin construído com Supabase + Make, exibindo métricas em tempo real: total de submissões, peças aprovadas, reprovações, tempo médio de análise, vendedores sem conversão e ranking de marcas mais enviadas.' },
    ],
    s5Label: 'O Formulário em Detalhe',
    s5Title: '5 passos que educavam antes de aceitar.',
    s5P1: 'O formulário foi construído para que o vendedor entendesse as regras da plataforma antes de se comprometer. Cada tela tinha uma função: reduzir incerteza, estabelecer critérios e filtrar peças incompatíveis desde a pré-análise.',
    s5Screens: [
      { label: 'Boas-vindas, marcas aceitas e critérios visíveis desde o início', caption: 'Tela 1/5 · Marcas com alta demanda expostas na entrada + "O que buscamos nas peças"' },
      { label: 'Como funciona, processo e comissionamento transparentes', caption: 'Tela 2/5 · Sacola do Bem, frete, curadoria física e divisão de comissão explicados antes do cadastro' },
    ],
    s5Tela3Label: 'Seus dados, coleta progressiva de informações do vendedor',
    s5Tela3Caption: 'Tela 3/5 · E-mail primeiro, depois nome, telefone e histórico de vendas — coleta incremental para reduzir abandono',
    s5CalloutTitle: 'A decisão de design mais importante: mostrar o que NÃO é aceito',
    s5CalloutText: 'Na tela 4, enquanto o vendedor pesquisa marcas, vê em tempo real uma lista de "Marcas não aceitas" — Shein, C&A, Forever 21, Riachuelo, Marisa. Isso sozinho eliminou a principal causa de reprovação no CD antes de o pacote sequer sair de casa do vendedor.',
    s6Label: 'Dashboard em Produção',
    s6Title: 'Visibilidade total do funil de captação.',
    s6P1: 'O painel admin foi construído para que a equipe de operações veja em tempo real o estado completo da captação — submissões, aprovações, gargalos e ranking de marcas.',
    s6Caption: 'Dashboard operacional em produção · Painel Admin Repassa',
    s7Label: 'Decisões de Design',
    s7Title: 'Trade-offs que guiaram o produto.',
    s7Decisions: [
      { title: 'Fricção Positiva no Formulário', text: 'Adicionamos etapas de validação de marcas antes do envio. Isso aumentou o tempo do formulário, mas reduziu drasticamente submissões fora do critério.' },
      { title: 'Mobile-First por padrão', text: 'Vendedores fotografam e submetem peças pelo celular. Todo o fluxo foi desenhado para scroll vertical natural, com mínimo de digitação.' },
      { title: 'Feedback Imediato de Erros', text: 'Validações assíncronas por campo. O vendedor descobre incompatibilidades antes do passo final, não depois de preencher 8 etapas.' },
      { title: 'Dashboard como produto, não relatório', text: 'O painel admin foi desenhado para decisão, não apenas consulta. Alertas de pendentes em análise e vendedores sem conversão tornam a gestão proativa.' },
    ],
    s8Label: 'Resultados',
    s8Title: 'O formulário provou que educar o vendedor antes muda tudo.',
    s8P1: 'Os dois números que mais importavam para o negócio, taxa de aprovação na triagem e ticket médio das peças, mudaram de forma expressiva.',
    s8KeyApproval: 'Impacto principal · Taxa de aprovação na triagem',
    s8KeyApprovalSub: 'na taxa de aprovação das sacolas triadas',
    s8KeyApprovalNote: 'Educar o vendedor antes do envio reduziu drasticamente as peças fora de critério.',
    s8KeyTicket: 'Impacto principal · Ticket médio das peças recebidas',
    s8KeyTicketSub: 'ticket médio por peça',
    s8KeyTicketDelta: '+72,6%',
    s8KeyTicketDeltaSub: 'de aumento no ticket médio',
    s8KeyTicketLabel: 'R$ 328',
    s8PiecesLabel: 'Peças Aprovadas',
    s8PiecesValue: '149.670',
    s8PiecesSub: 'Total aceitas na plataforma',
    s8SatLabel: 'Satisfação dos Vendedores',
    s8SatValue: '4.0',
    s8SatSub: '339 avaliações coletadas',
    s8SubsLabel: 'Submissões processadas',
    s8SubsValue: '2.410',
    s8SubsSub: '152.101 peças totais avaliadas',
    s8TimeLabel: 'Tempo médio de análise',
    s8TimeValue: '25.7h',
    s8TimeSub: 'Da submissão até a decisão final',
    s8BrandsTitle: 'Top 10 Marcas Mais Enviadas',
    s9Label: 'Aprendizados',
    s9Title: 'O que funcionou, o que não funcionou, e o que eu faria diferente.',
    s9P1: 'Trabalhar sem dev foi o que forçou clareza. Com NoCode, cada decisão precisava fazer sentido para quem não programa.',
    s9P2: 'O resultado que mais me surpreendeu foi o ticket médio chegando a R$ 328 (+72,6%). Ao ensinar o vendedor o que era aceito, filtramos naturalmente para peças de mais valor. O formulário virou uma curadoria sem querer.',
    s9Lessons: [
      { title: 'O que eu faria diferente: segmentar os 845 vendedores desde o dia 1', text: 'O dashboard revelou que 845 vendedores nunca tinham vendido nenhuma peça. Esse grupo só ficou visível quando o painel entrou em produção, semanas depois do lançamento.' },
      { title: 'O que eu subestimei: o tempo médio de análise de 25,7h', text: 'O formulário trouxe mais submissões qualificadas, mas o gargalo se deslocou para a análise humana no CD. Com 25,7h de tempo médio, o vendedor ficava esperando sem feedback.' },
    ],
    s9Final: 'Dashboards não são relatórios, são instrumentos de decisão. Se o painel não torna visível o que importa antes que vire problema, ele chegou tarde.',
    sideStrategicLabel: 'Aprendizado Estratégico',
    sideStrategic: '"Educar o vendedor antes do envio não foi só UX, foi um experimento de negócio. Quem entendia os critérios, enviava peças melhores."',
    sideBusinessLabel: 'Resultados de negócio',
    sideBusiness: [
      { label: 'Aprovação na triagem', value: '+84%' },
      { label: 'Ticket médio', value: 'R$ 328 (+72,6%)' },
    ],
    sideStackLabel: 'Stack técnico',
  },
  en: {
    tag1: 'AI & NoCode',
    tag2: 'Digital Product',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Smart\nAcquisition.',
    hero: "Repassa had paused item collection for 5 months and, when reopening, still didn't know what it wanted to receive or how to communicate that. With the dev team unavailable, I stepped in with a NoCode solution — working with marketing, sales and leadership — that generated +84% in screening approval and raised the average item ticket to R$ 328 (+72.6%).",
    meta: [
      { label: 'Company', value: 'Repassa · Grupo Renner' },
      { label: 'My role', value: 'Product Designer · NoCode Lead' },
      { label: 'Tools', value: 'Figma · Make · Supabase · n8n' },
      { label: 'Duration', value: '6 months' },
    ],
    coverLabel: 'Acquisition Dashboard',
    coverHeadline: '149,670 items approved',
    coverSub: 'in production · 2025–2026',
    s1Label: 'Problem',
    s1Title: '5 months paused. When reopening, still no clarity on what to receive.',
    s1P1: 'Repassa is the circular fashion platform of Grupo Renner. At some point, the company decided to completely pause item collection for 5 months — the goal was to replan, better understand the profile of items they wanted to receive, and organize criteria before reopening the channel.',
    s1P2: "The problem is that, after 5 months, the company was still in limbo. There was no clarity on which items to accept or how to communicate those criteria to the seller. And the channel needed to reopen.",
    s1P3: "The previous model had no educational form: the user bought a bag, filled it with whatever they had at home, and sent it. The result arrived at the distribution center and most items were rejected — a huge operational cost, both logistical and human, to process items that should never have entered the flow.",
    s1HmwLabel: 'How Might We',
    s1Hmw: '"How might we reopen acquisition by educating the seller about what is accepted — without depending on the dev team that had no capacity?"',
    s2Label: 'Before the solution',
    s2Title: 'The scenario I found entering the project.',
    s2P1: "The acquisition channel was being reopened after 5 months without operating. The old model had no educational layer — the flow was simple and brutal: buy the bag, put in whatever you have at home, send it.",
    s2RejectLabel: 'Rejection rate at DC',
    s2RejectValue: 'High',
    s2RejectText: 'Most items that arrived at the distribution center were rejected. The seller had no information about criteria before sending.',
    s2TicketLabel: 'Average ticket of received items',
    s2TicketValue: 'Low',
    s2TicketText: 'Without entry filter, the item mix was low: anything came in, and the average ticket reflected that.',
    s2NoFormTitle: 'No educational form existed',
    s2NoFormText: "There was no screen, flow or communication explaining to the seller which brands were accepted, what condition items needed to be in, or how to photograph correctly. Screening was 100% done at the DC, at the end of the chain, where fixing costs more.",
    s3Label: 'My Role',
    s3Title: "I came in when dev had no room, and we needed fast results.",
    s3P1: 'The dev team had no room. No sprint available, no viable estimate. Acquisition needed to reopen, but couldn\'t depend on engineering.',
    s3P2: 'I worked directly with marketing, sales and leadership to define what needed to exist: which criteria to communicate to the seller, what was non-negotiable, and how imperfect an MVP could be. The solution had to be NoCode, and it had to generate real data for the team to learn from.',
    s3Items: [
      { title: 'Cross-functional alignment', text: 'Sessions with marketing, sales and leadership to define accepted item criteria, communication tone, and what the form needed to teach before submission.' },
      { title: 'Design & build of the educational form', text: 'Step-by-step flow teaching the seller about accepted brands, item condition and how to photograph correctly, with feedback before final submission.' },
      { title: 'NoCode automations (Make + n8n)', text: 'Automatic screening flows, seller notifications and submission routing, without any engineering dependency to operate.' },
      { title: 'Real-time monitoring dashboard', text: 'Admin panel that let the team study whether the form was actually bringing qualifiable items, with data on submissions, approvals, rejections and average ticket.' },
    ],
    s3OpsLabel: 'Beyond product: Design Ops & Leadership',
    s3OpsP: 'Beyond the product work, I structured Repassa\'s design operation from scratch — and at one point ran three squads alone simultaneously.',
    s3Ops: [
      { title: 'Figma from scratch', text: 'I structured the entire file organization, design tokens, component libraries and discovery templates. Nothing existed before.' },
      { title: 'Hired a designer', text: 'I conducted the complete selection process — 7 interviews, portfolio review and technical test — and structured the onboarding of the hired designer.' },
      { title: '3 squads alone', text: "After the designer's departure, I simultaneously ran sellers, buyers and backoffice — prioritizing, negotiating scope and delivering in parallel." },
    ],
    s4Label: 'Solution',
    s4Title: 'An acquisition ecosystem, not just a form.',
    s4P1: 'The solution was architected in three integrated layers:',
    s4Layers: [
      { title: 'Layer 1: Seller Experience', text: 'Guided form with contextual validation of accepted brands, visual guides for correct/incorrect item condition and confirmation before submission. Positive friction reduced disqualified submissions right at entry.' },
      { title: 'Layer 2: Automation & Screening', text: 'Make + n8n flows for automatic pre-screening of submissions, routing to analysts according to defined criteria and automatic seller notifications about analysis status, without manual intervention.' },
      { title: 'Layer 3: Operational Dashboard', text: 'Admin panel built with Supabase + Make, displaying real-time metrics: total submissions, items approved, rejections, average analysis time, sellers without conversion and ranking of most-sent brands.' },
    ],
    s5Label: 'The Form in Detail',
    s5Title: '5 steps that taught before accepting.',
    s5P1: "The form was built so the seller would understand platform rules before committing. Each screen had a function: reduce uncertainty, establish criteria, and filter incompatible items from pre-analysis.",
    s5Screens: [
      { label: 'Welcome, accepted brands and criteria visible from the start', caption: 'Screen 1/5 · High-demand brands exposed at entry + "What we look for in items"' },
      { label: 'How it works — process and commission transparent', caption: 'Screen 2/5 · Good Bag, shipping, physical curation and commission split explained before signup' },
    ],
    s5Tela3Label: 'Your data — progressive collection of seller information',
    s5Tela3Caption: 'Screen 3/5 · Email first, then name, phone and sales history — incremental collection to reduce abandonment',
    s5CalloutTitle: 'The most important design decision: show what is NOT accepted',
    s5CalloutText: 'On screen 4, while the seller searches brands, they see in real time a list of "Not accepted brands" — Shein, C&A, Forever 21, Riachuelo, Marisa. That alone eliminated the main cause of rejection at the DC before the package even left the seller\'s house.',
    s6Label: 'Dashboard in Production',
    s6Title: 'Total visibility of the acquisition funnel.',
    s6P1: 'The admin panel was built so the operations team could see the complete acquisition state in real time — submissions, approvals, bottlenecks and brand ranking.',
    s6Caption: 'Operational dashboard in production · Repassa Admin Panel',
    s7Label: 'Design Decisions',
    s7Title: 'Trade-offs that guided the product.',
    s7Decisions: [
      { title: 'Positive Friction in the Form', text: 'We added brand validation steps before submission. This increased form time, but drastically reduced off-criteria submissions.' },
      { title: 'Mobile-First by default', text: 'Sellers photograph and submit items via mobile. The entire flow was designed for natural vertical scroll, with minimum typing.' },
      { title: 'Immediate Error Feedback', text: 'Async validations per field. The seller discovers incompatibilities before the final step, not after filling 8 steps.' },
      { title: 'Dashboard as product, not report', text: 'The admin panel was designed for decision, not just consultation. Alerts for pending analysis and sellers without conversion make management proactive.' },
    ],
    s8Label: 'Results',
    s8Title: "The form proved that teaching the seller upfront changes everything.",
    s8P1: 'The two numbers that mattered most to the business — screening approval rate and average item ticket — changed expressively.',
    s8KeyApproval: 'Main impact · Screening approval rate',
    s8KeyApprovalSub: 'in screening approval rate',
    s8KeyApprovalNote: 'Teaching the seller before submission drastically reduced off-criteria items.',
    s8KeyTicket: 'Main impact · Average ticket of received items',
    s8KeyTicketSub: 'average ticket per item',
    s8KeyTicketDelta: '+72.6%',
    s8KeyTicketDeltaSub: 'increase in average ticket',
    s8KeyTicketLabel: 'R$ 328',
    s8PiecesLabel: 'Items Approved',
    s8PiecesValue: '149,670',
    s8PiecesSub: 'Total accepted on the platform',
    s8SatLabel: 'Seller Satisfaction',
    s8SatValue: '4.0',
    s8SatSub: '339 ratings collected',
    s8SubsLabel: 'Submissions processed',
    s8SubsValue: '2,410',
    s8SubsSub: '152,101 total items evaluated',
    s8TimeLabel: 'Average analysis time',
    s8TimeValue: '25.7h',
    s8TimeSub: 'From submission to final decision',
    s8BrandsTitle: 'Top 10 Most Sent Brands',
    s9Label: 'Learnings',
    s9Title: "What worked, what didn't, and what I'd do differently.",
    s9P1: 'Working without dev is what forced clarity. With NoCode, every decision had to make sense for someone who doesn\'t code.',
    s9P2: 'The result that most surprised me was the average ticket reaching R$ 328 (+72.6%). By teaching the seller what was accepted, we naturally filtered for higher-value items. The form became unintentional curation.',
    s9Lessons: [
      { title: "What I'd do differently: segment the 845 sellers from day 1", text: "The dashboard revealed 845 sellers had never sold any item. That group only became visible when the panel went to production, weeks after launch." },
      { title: 'What I underestimated: the 25.7h average analysis time', text: 'The form brought more qualified submissions, but the bottleneck shifted to human analysis at the DC. With 25.7h average, the seller waited without feedback.' },
    ],
    s9Final: 'Dashboards are not reports — they are decision instruments. If the panel does not make visible what matters before it becomes a problem, it arrived late.',
    sideStrategicLabel: 'Strategic Learning',
    sideStrategic: '"Teaching the seller before submission was not just UX — it was a business experiment. Those who understood the criteria sent better items."',
    sideBusinessLabel: 'Business results',
    sideBusiness: [
      { label: 'Screening approval', value: '+84%' },
      { label: 'Average ticket', value: 'R$ 328 (+72.6%)' },
    ],
    sideStackLabel: 'Technical stack',
  },
  es: {
    tag1: 'IA & NoCode',
    tag2: 'Producto Digital',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Captación\nInteligente.',
    hero: 'Repassa había pausado la captación de piezas durante 5 meses y, al retomar, aún no sabía qué quería recibir ni cómo comunicarlo. Con el equipo de dev sin disponibilidad, entré con una solución NoCode — trabajando con marketing, comercial y dirección — que generó +84% en la tasa de aprobación de selección y elevó el ticket promedio de las piezas a R$ 328 (+72,6%).',
    meta: [
      { label: 'Empresa', value: 'Repassa · Grupo Renner' },
      { label: 'Mi rol', value: 'Product Designer · NoCode Lead' },
      { label: 'Herramientas', value: 'Figma · Make · Supabase · n8n' },
      { label: 'Duración', value: '6 meses' },
    ],
    coverLabel: 'Dashboard de Captación',
    coverHeadline: '149.670 piezas aprobadas',
    coverSub: 'en producción · 2025–2026',
    s1Label: 'Problema',
    s1Title: '5 meses pausada. Al retomar, aún sin saber qué quería recibir.',
    s1P1: 'Repassa es la plataforma de moda circular del Grupo Renner. En un momento, la empresa decidió pausar completamente la captación de piezas durante 5 meses — el objetivo era replanificar, entender mejor el perfil de piezas que querían recibir y organizar los criterios antes de reabrir el canal.',
    s1P2: 'El problema es que, después de 5 meses, la empresa aún estaba en el limbo. No había claridad sobre qué piezas aceptar ni cómo comunicar esos criterios al vendedor. Y el canal necesitaba reabrir.',
    s1P3: 'El modelo anterior no tenía ningún formulario educativo: el usuario compraba una bolsa, la llenaba con lo que tenía en casa y la enviaba. El resultado llegaba al centro de distribución y la mayoría de las piezas era rechazada — un costo operativo enorme, tanto logístico como humano, para procesar piezas que nunca debieron haber entrado al flujo.',
    s1HmwLabel: 'How Might We',
    s1Hmw: '"¿Cómo reabrir la captación educando al vendedor sobre lo que es aceptado, sin depender del equipo de dev que estaba sin capacidad?"',
    s2Label: 'Antes de la solución',
    s2Title: 'El escenario que encontré al entrar al proyecto.',
    s2P1: 'El canal de captación se estaba reabriendo después de 5 meses sin operar. El modelo antiguo no tenía ninguna capa de educación — el flujo era simple y brutal: compra la bolsa, pon lo que tienes en casa, envía.',
    s2RejectLabel: 'Tasa de rechazo en CD',
    s2RejectValue: 'Alta',
    s2RejectText: 'La mayoría de las piezas que llegaban al centro de distribución eran rechazadas. El vendedor no tenía información sobre criterios antes de enviar.',
    s2TicketLabel: 'Ticket promedio de piezas recibidas',
    s2TicketValue: 'Bajo',
    s2TicketText: 'Sin filtro en la entrada, el mix de piezas era bajo: cualquier cosa entraba, y el ticket promedio lo reflejaba.',
    s2NoFormTitle: 'No existía ningún formulario educativo',
    s2NoFormText: 'No había pantalla, flujo ni comunicación alguna explicando al vendedor qué marcas eran aceptadas, en qué estado debían estar las piezas o cómo fotografiar correctamente. La selección era 100% hecha en el CD, al final de la cadena, donde corregir cuesta más.',
    s3Label: 'Mi Rol',
    s3Title: 'Entré cuando el equipo de dev no tenía espacio, y se necesitaba resultado rápido.',
    s3P1: 'El equipo de dev no tenía espacio. Ningún sprint disponible, ninguna estimación viable. La captación necesitaba reabrir, pero no podía depender de ingeniería.',
    s3P2: 'Trabajé directamente con marketing, comercial y dirección para definir qué necesitaba existir: qué criterios comunicar al vendedor, qué era innegociable y hasta dónde un MVP podía ser imperfecto. La solución tenía que ser NoCode, y tenía que generar datos reales para que el equipo aprendiera de ellos.',
    s3Items: [
      { title: 'Alineación cross-funcional', text: 'Sesiones con marketing, comercial y dirección para definir criterios de piezas aceptadas, tono de comunicación y qué necesitaba enseñar el formulario antes del envío.' },
      { title: 'Diseño & construcción del formulario educativo', text: 'Flujo step-by-step que educara al vendedor sobre marcas aceptadas, estado de las piezas y cómo fotografiar correctamente, con feedback antes del envío final.' },
      { title: 'Automatizaciones NoCode (Make + n8n)', text: 'Flujos automáticos de selección, notificaciones al vendedor y enrutamiento de envíos, sin ninguna dependencia de ingeniería para operar.' },
      { title: 'Dashboard de monitoreo en tiempo real', text: 'Panel admin que permitió al equipo estudiar si el formulario realmente traía piezas calificables, con datos de envíos, aprobaciones, rechazos y ticket promedio.' },
    ],
    s3OpsLabel: 'Más allá del producto: Design Ops & Liderazgo',
    s3OpsP: 'Más allá del trabajo de producto, estructuré la operación de diseño de Repassa desde cero — y en un momento operé tres squads simultáneos solo.',
    s3Ops: [
      { title: 'Figma desde cero', text: 'Estructuré toda la organización de archivos, design tokens, bibliotecas de componentes y templates de discovery. Nada existía antes.' },
      { title: 'Contraté a un designer', text: 'Conduje proceso de selección completo — 7 entrevistas, evaluación de portafolio y prueba técnica — y estructuré el onboarding del designer contratado.' },
      { title: '3 squads solo', text: 'Tras la salida del designer, operé simultáneamente vendedores, compradores y backoffice — priorizando, negociando alcance y entregando en paralelo.' },
    ],
    s4Label: 'Solución',
    s4Title: 'Un ecosistema de captación, no solo un formulario.',
    s4P1: 'La solución se arquitectó en tres capas integradas:',
    s4Layers: [
      { title: 'Capa 1: Experiencia del Vendedor', text: 'Formulario guiado con validación contextual de marcas aceptadas, guías visuales del estado correcto/incorrecto de las piezas y confirmación antes del envío. La fricción positiva redujo envíos descalificados en la entrada.' },
      { title: 'Capa 2: Automatización & Selección', text: 'Flujos Make + n8n para pre-selección automática de envíos, enrutamiento a analistas según criterios definidos y notificaciones automáticas al vendedor sobre el estado del análisis, sin intervención manual.' },
      { title: 'Capa 3: Dashboard Operativo', text: 'Panel admin construido con Supabase + Make, mostrando métricas en tiempo real: total de envíos, piezas aprobadas, rechazos, tiempo promedio de análisis, vendedores sin conversión y ranking de marcas más enviadas.' },
    ],
    s5Label: 'El Formulario en Detalle',
    s5Title: '5 pasos que educaban antes de aceptar.',
    s5P1: 'El formulario fue construido para que el vendedor entendiera las reglas de la plataforma antes de comprometerse. Cada pantalla tenía una función: reducir incertidumbre, establecer criterios y filtrar piezas incompatibles desde el pre-análisis.',
    s5Screens: [
      { label: 'Bienvenida, marcas aceptadas y criterios visibles desde el inicio', caption: 'Pantalla 1/5 · Marcas con alta demanda expuestas en la entrada + "Lo que buscamos en las piezas"' },
      { label: 'Cómo funciona — proceso y comisión transparentes', caption: 'Pantalla 2/5 · Bolsa del Bien, envío, curación física y división de comisión explicados antes del registro' },
    ],
    s5Tela3Label: 'Tus datos — recopilación progresiva de información del vendedor',
    s5Tela3Caption: 'Pantalla 3/5 · Email primero, luego nombre, teléfono e historial de ventas — recopilación incremental para reducir abandono',
    s5CalloutTitle: 'La decisión de diseño más importante: mostrar lo que NO se acepta',
    s5CalloutText: 'En la pantalla 4, mientras el vendedor busca marcas, ve en tiempo real una lista de "Marcas no aceptadas" — Shein, C&A, Forever 21, Riachuelo, Marisa. Eso solo eliminó la principal causa de rechazo en el CD antes de que el paquete saliera siquiera de la casa del vendedor.',
    s6Label: 'Dashboard en Producción',
    s6Title: 'Visibilidad total del funnel de captación.',
    s6P1: 'El panel admin fue construido para que el equipo de operaciones vea el estado completo de la captación en tiempo real — envíos, aprobaciones, cuellos de botella y ranking de marcas.',
    s6Caption: 'Dashboard operativo en producción · Panel Admin Repassa',
    s7Label: 'Decisiones de Diseño',
    s7Title: 'Trade-offs que guiaron el producto.',
    s7Decisions: [
      { title: 'Fricción Positiva en el Formulario', text: 'Agregamos pasos de validación de marcas antes del envío. Esto aumentó el tiempo del formulario, pero redujo drásticamente envíos fuera de criterio.' },
      { title: 'Mobile-First por defecto', text: 'Los vendedores fotografían y envían piezas por celular. Todo el flujo fue diseñado para scroll vertical natural, con mínimo de tipeo.' },
      { title: 'Feedback Inmediato de Errores', text: 'Validaciones async por campo. El vendedor descubre incompatibilidades antes del paso final, no después de completar 8 pasos.' },
      { title: 'Dashboard como producto, no reporte', text: 'El panel admin fue diseñado para decisión, no solo consulta. Alertas de pendientes en análisis y vendedores sin conversión hacen la gestión proactiva.' },
    ],
    s8Label: 'Resultados',
    s8Title: 'El formulario probó que educar al vendedor antes lo cambia todo.',
    s8P1: 'Los dos números que más importaban para el negocio — tasa de aprobación en selección y ticket promedio de piezas — cambiaron de forma expresiva.',
    s8KeyApproval: 'Impacto principal · Tasa de aprobación en selección',
    s8KeyApprovalSub: 'en la tasa de aprobación de selección',
    s8KeyApprovalNote: 'Educar al vendedor antes del envío redujo drásticamente las piezas fuera de criterio.',
    s8KeyTicket: 'Impacto principal · Ticket promedio de piezas recibidas',
    s8KeyTicketSub: 'ticket promedio por pieza',
    s8KeyTicketDelta: '+72,6%',
    s8KeyTicketDeltaSub: 'de aumento en ticket promedio',
    s8KeyTicketLabel: 'R$ 328',
    s8PiecesLabel: 'Piezas Aprobadas',
    s8PiecesValue: '149.670',
    s8PiecesSub: 'Total aceptadas en la plataforma',
    s8SatLabel: 'Satisfacción de Vendedores',
    s8SatValue: '4.0',
    s8SatSub: '339 evaluaciones recolectadas',
    s8SubsLabel: 'Envíos procesados',
    s8SubsValue: '2.410',
    s8SubsSub: '152.101 piezas totales evaluadas',
    s8TimeLabel: 'Tiempo promedio de análisis',
    s8TimeValue: '25.7h',
    s8TimeSub: 'Del envío a la decisión final',
    s8BrandsTitle: 'Top 10 Marcas Más Enviadas',
    s9Label: 'Aprendizajes',
    s9Title: 'Lo que funcionó, lo que no, y lo que haría diferente.',
    s9P1: 'Trabajar sin dev fue lo que forzó claridad. Con NoCode, cada decisión tenía que tener sentido para alguien que no programa.',
    s9P2: 'El resultado que más me sorprendió fue el ticket promedio llegando a R$ 328 (+72,6%). Al enseñar al vendedor lo que era aceptado, filtramos naturalmente piezas de mayor valor. El formulario se convirtió en curación involuntaria.',
    s9Lessons: [
      { title: 'Lo que haría diferente: segmentar a los 845 vendedores desde el día 1', text: 'El dashboard reveló que 845 vendedores nunca habían vendido ninguna pieza. Ese grupo solo se volvió visible cuando el panel entró a producción, semanas después del lanzamiento.' },
      { title: 'Lo que subestimé: el tiempo promedio de análisis de 25,7h', text: 'El formulario trajo más envíos calificados, pero el cuello de botella se desplazó al análisis humano en el CD. Con 25,7h de promedio, el vendedor esperaba sin feedback.' },
    ],
    s9Final: 'Los dashboards no son reportes — son instrumentos de decisión. Si el panel no hace visible lo que importa antes de que se vuelva problema, llegó tarde.',
    sideStrategicLabel: 'Aprendizaje Estratégico',
    sideStrategic: '"Educar al vendedor antes del envío no fue solo UX — fue un experimento de negocio. Quienes entendían los criterios enviaban piezas mejores."',
    sideBusinessLabel: 'Resultados de negocio',
    sideBusiness: [
      { label: 'Aprobación en selección', value: '+84%' },
      { label: 'Ticket promedio', value: 'R$ 328 (+72,6%)' },
    ],
    sideStackLabel: 'Stack técnico',
  },
};
