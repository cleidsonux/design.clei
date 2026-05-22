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
  s2P2: string;
  s2Items: { title: string; text: string }[];
  s3Label: string;
  s3Title: string;
  s3P1: string;
  s3Step1Title: string;
  s3Step1Text: string;
  s3Step2Title: string;
  s3Step2P: string;
  s3Params: string[];
  s3Step3Title: string;
  s3Step3P: string;
  s3Tags: string[];
  s3Arrow: string;
  s3Example: string;
  s3Step4Title: string;
  s3Step4Text: string;
  s4Label: string;
  s4Title: string;
  s4P1: string;
  s4Callout: string;
  s4CalloutText: string;
  s5Label: string;
  s5Title: string;
  s5P1: string;
  s5Caption: string;
  /* Resultados */
  s6Label: string;
  s6Title: string;
  s6P1: string;
  s6Metric1Label: string;
  s6Metric1Value: string;
  s6Metric1Text: string;
  s6Metric2Label: string;
  s6Metric2Value: string;
  s6Metric2Text: string;
  s6Kpis: { value: string; label: string }[];
  s6CalloutTitle: string;
  s6CalloutText: string;
  /* Decisões de Arquitetura */
  s7Label: string;
  s7Title: string;
  s7Decisions: { title: string; text: string }[];
  /* Aprendizados */
  s8Label: string;
  s8Title: string;
  s8P1: string;
  s8P2: string;
  s8Lessons: { title: string; text: string }[];
  s8FinalLabel: string;
  s8Final: string;
  /* Sidebar */
  sideStrategicLabel: string;
  sideStrategic: string;
  sideDeliveryLabel: string;
  sideDelivery: { label: string; value: string }[];
  sideStackLabel: string;
};

export const caseFavoritasContent: Record<Lang, Content> = {
  pt: {
    tag1: 'Produto Digital',
    tag2: 'Backoffice · Frontend',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Favoritas &\nInfluencers.',
    hero: 'A Repassa tinha influencers vendendo no marketplace, mas o sistema os tratava como qualquer outro vendedor. Estruturei do zero toda a jornada, da arquitetura dos planos e regras de bonificação no backoffice até as vitrines que destacavam esses perfis para o comprador no app.',
    meta: [
      { label: 'Empresa', value: 'Repassa · Grupo Renner' },
      { label: 'Meu papel', value: 'Product Designer · Arquiteto da Jornada' },
      { label: 'Ferramentas', value: 'Figma · Miro' },
      { label: 'Times envolvidos', value: 'Produto · Engenharia · Negócios' },
    ],
    coverLabel: 'Programa de Influencers',
    coverHeadline: 'Do zero ao ar.',
    coverSub: 'backoffice + frontend · 2024–2026',
    s1Label: 'Contexto',
    s1Title: 'Influencers reais vendendo no marketplace, mas invisíveis para o sistema.',
    s1P1: 'A Repassa é o marketplace de moda circular do Grupo Renner. Com o crescimento da plataforma, um grupo de vendedores ganhou relevância própria: influencers de moda com audiência real que usavam o app para vender o próprio closet e o de seus seguidores.',
    s1P2: 'O problema era sistêmico: o backoffice tratava uma influencer com 500 mil seguidores exatamente igual a qualquer vendedor cadastrado. Não havia plano diferenciado, não havia comissão especial, não havia vitrine.',
    s1P3: 'O negócio queria ativar esses perfis como canal estratégico de conversão. Mas não existia nenhuma infraestrutura para isso, nem no backoffice, nem no frontend.',
    s1HmwLabel: 'How Might We',
    s1Hmw: '"Como criar uma estrutura que diferenciasse influencers de vendedores comuns, com planos personalizados e vitrines visíveis, sem criar dois sistemas paralelos para o time de engenharia manter?"',
    s2Label: 'Meu Papel',
    s2Title: 'Arquitetar a jornada completa, do plano à vitrine.',
    s2P1: 'O trabalho principal não foi de interface. Foi de modelo de dados e lógica de negócio. Precisávamos decidir o que um "plano" era, quais parâmetros ele controlava, como clusterizar vendedores e como isso apareceria no app para o comprador.',
    s2P2: 'Criei o fluxograma da arquitetura, defini as regras de clusterização, conduzi os fluxos de backoffice e desenhei as vitrines. Fiquei no meio de produto, engenharia e negócios, garantindo que as decisões difíceis fossem tomadas antes, não depois do lançamento.',
    s2Items: [
      { title: 'Arquitetura', text: 'Lógica dos planos e regras' },
      { title: 'Backoffice', text: 'Gerenciador de planos' },
      { title: 'Frontend', text: 'Vitrines e perfis' },
    ],
    s3Label: 'Arquitetura dos Planos',
    s3Title: 'A lógica que estruturei com produto e engenharia.',
    s3P1: 'A primeira decisão foi definir o modelo: um plano não poderia ser apenas um "rótulo", ele precisaria controlar parâmetros financeiros e de clusterização de forma independente. E cada vendedor só poderia pertencer a um plano por vez, evitando conflitos de regras.',
    s3Step1Title: 'Criar o plano',
    s3Step1Text: 'Nome, descrição e responsável. Exemplos: "Favoritas", "Influencer", "Vendedor comum".',
    s3Step2Title: 'Vincular regras de bonificação',
    s3Step2P: '8 parâmetros configuráveis por plano:',
    s3Params: ['Adesão taxa', 'Adesão frete', 'Reversa frete', 'Reprovadas taxa', 'Reprovadas frete', 'Comissão padrão', 'Tarifa fixa', 'Cupom subsidiado'],
    s3Step3Title: 'Regras de clusterização → bonificação adicional',
    s3Step3P: 'Até 2 regras por plano. Critérios:',
    s3Tags: ['Departamento', 'Categoria', 'Marca', 'Vigência', 'Faixa de preço'],
    s3Arrow: '→ % bonificação',
    s3Example: 'Ex: Feminino · Jaquetas · Zara · R$100–200 · vigência 10/07 → 80% bônus',
    s3Step4Title: 'Vincular vendedor ao plano',
    s3Step4Text: 'Individual ou em massa via CSV. Cada vendedor só pode pertencer a um plano por vez — decisão de arquitetura prioritária para evitar conflito de regras.',
    s4Label: 'Backoffice',
    s4Title: 'O gerenciador de planos que construímos do zero.',
    s4P1: 'Toda a gestão de planos vive no backoffice da Repassa. Projetei os fluxos de criação, edição, clusterização e vinculação, trabalhando diretamente com engenharia.',
    s4Callout: 'A decisão mais importante: 1 plano por vendedor',
    s4CalloutText: 'A unicidade de plano por vendedor foi debatida com engenharia antes de qualquer tela ser desenhada. Múltiplos planos simultâneos criariam conflitos nas regras — um vendedor poderia ganhar % duplo sobre a mesma venda. Priorizar isso na arquitetura evitou uma dívida técnica difícil de desfazer depois.',
    s5Label: 'Frontend · A Vitrine',
    s5Title: 'Influencers visíveis para quem compra.',
    s5P1: 'Todo o trabalho de backoffice precisava se traduzir em algo real para o comprador. Projetei a experiência no app para que os influencers tivessem presença própria — vitrines que comunicavam identidade e geravam conversão.',
    s5Caption: 'Influencers em Destaque · Perfil da Raka Minelli · Home com busca de pessoas',
    s6Label: 'Resultados',
    s6Title: 'Record de vendas em novembro. Dois influencers zeraram o estoque.',
    s6P1: 'Com as vitrines no ar e os planos configurados, os resultados vieram rápido. Em novembro, dois influencers em destaque esgotaram completamente o próprio estoque de peças, algo sem precedente na plataforma. O preço médio dos produtos subiu, o CMV melhorou, e o período de outubro a fevereiro fechou com R$1,7 milhão em receita. No acumulado do ano, o programa gerou mais de R$2 milhões em economia via CMV.',
    s6Metric1Label: 'Receita · out/25–fev/26',
    s6Metric1Value: 'R$1,7 mi',
    s6Metric1Text: 'Receita total e-commerce no período pós-lançamento das vitrines de influencers',
    s6Metric2Label: 'Economia no CMV · ano',
    s6Metric2Value: '+R$2 mi',
    s6Metric2Text: 'Valor economizado no custo de mercadoria vendida com a melhora do mix de peças',
    s6Kpis: [
      { value: '3,3 mil', label: 'Compradores' },
      { value: '1,2 mil', label: 'Novos compradores' },
      { value: '2', label: 'Influencers zerou estoque' },
      { value: 'Nov', label: 'Record de vendas' },
    ],
    s6CalloutTitle: 'Preço médio subiu, CMV melhorou',
    s6CalloutText: 'Influencers atraem compradores de maior ticket e vendem peças com curadoria própria. O resultado direto foi um mix de produtos mais valorizado: peças de marcas premium com preço médio acima da plataforma geral, o que reduziu o custo de mercadoria vendida e aumentou a margem.',
    s7Label: 'Decisões de Arquitetura',
    s7Title: 'Trade-offs que definiram o produto.',
    s7Decisions: [
      { title: 'Um plano por vendedor', text: 'Permitir planos simultâneos criaria conflito de regras de bonificação. A decisão de unicidade foi tomada antes do design para evitar dívida técnica estrutural.' },
      { title: 'Clusterização por dimensões combinadas', text: 'Em vez de criar planos infinitos por marca, usamos combinações de dimensões (departamento + categoria + marca + preço) que cobrem mais cenários com menos configuração.' },
      { title: 'Upload em massa via CSV', text: 'Vincular influencers um por um não escalava. O upload de lista com histórico de processamento permitiu ativar centenas de vendedores de uma vez sem demandar engenharia adicional.' },
      { title: 'Diferenciação visual no frontend', text: 'O badge "Influencer", os cards com fundo roxo e a seção dedicada no menu não são decoração — são sinais que aumentam a percepção de valor e direcionam o comprador para perfis com maior conversão histórica.' },
    ],
    s8Label: 'Reflexão',
    s8Title: 'O que funcionou, o que resisti, e o que eu faria diferente.',
    s8P1: 'Passei mais tempo discutindo modelo de dados do que desenhando tela. Definir as regras de negócio e as restrições de arquitetura junto com engenharia, antes do design existir, foi o que tornou o produto sustentável.',
    s8P2: 'A tentação de resolver tudo na interface existe sempre. Mas aqui ficou claro: o backoffice bem pensado é o que torna o frontend possível. A vitrine bonita no app só funciona porque existe uma lógica sólida de planos por trás.',
    s8Lessons: [
      { title: 'O que eu faria diferente: métricas de vitrine desde o lançamento', text: 'Desenhamos as vitrines com foco em conversão, mas não definimos junto ao time de dados quais eventos de analytics seriam capturados desde o dia 1. Resultado: nos primeiros meses, sabíamos que as vendas subiram, mas não conseguíamos atribuir com precisão quanto veio de cada influencer. A instrumentação de métricas por vitrine deveria ter sido requisito de lançamento, não uma task futura.' },
      { title: 'O que resisti, e estava certo: múltiplos planos simultâneos', text: 'O time de negócios queria permitir que um vendedor pudesse estar em dois planos ao mesmo tempo para cobrir casos específicos de parceria. Mantive a restrição de um plano por vendedor e propus que casos especiais fossem resolvidos via clusterização. A resistência durou duas semanas. Ceder teria criado um conflito de regras de bonificação sem solução limpa, e eu sabia disso antes de ter como provar.' },
    ],
    s8FinalLabel: 'Aprendizado que carrego',
    s8Final: 'Produto em marketplace é sistema. As regras que você define hoje no backoffice vão afetar milhares de usuários, às vezes de formas que você não previu. Defender uma restrição técnica contra pressão de negócio é parte do trabalho. Mas você precisa explicar o risco em linguagem de negócio, não de engenharia.',
    sideStrategicLabel: 'Aprendizado Estratégico',
    sideStrategic: '"A decisão mais importante foi de modelagem, não de interface. Definir 1 plano por vendedor antes de desenhar protegeu o produto de uma dívida impossível."',
    sideDeliveryLabel: 'Entregas principais',
    sideDelivery: [
      { label: 'Receita out–fev', value: 'R$1,7 mi' },
      { label: 'Economia CMV', value: '+R$2 mi' },
      { label: 'Backoffice', value: 'Do zero' },
      { label: 'Frontend', value: 'App + Web' },
    ],
    sideStackLabel: 'Stack',
  },
  en: {
    tag1: 'Digital Product',
    tag2: 'Backoffice · Frontend',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Favoritas &\nInfluencers.',
    hero: 'Repassa had influencers selling on the marketplace, but the system treated them like any other seller. I structured the complete journey from scratch — from plan architecture and bonus rules in the backoffice to the storefronts that highlighted those profiles to buyers in the app.',
    meta: [
      { label: 'Company', value: 'Repassa · Grupo Renner' },
      { label: 'My role', value: 'Product Designer · Journey Architect' },
      { label: 'Tools', value: 'Figma · Miro' },
      { label: 'Teams involved', value: 'Product · Engineering · Business' },
    ],
    coverLabel: 'Influencer Program',
    coverHeadline: 'From zero to live.',
    coverSub: 'backoffice + frontend · 2024–2026',
    s1Label: 'Context',
    s1Title: 'Real influencers selling on the marketplace, but invisible to the system.',
    s1P1: 'Repassa is the circular fashion marketplace of Grupo Renner. As the platform grew, a group of sellers gained their own relevance: fashion influencers with real audience who used the app to sell their own closet and that of their followers.',
    s1P2: 'The problem was systemic: the backoffice treated an influencer with 500k followers exactly like any registered seller. No differentiated plan, no special commission, no storefront.',
    s1P3: 'The business wanted to activate these profiles as a strategic conversion channel. But no infrastructure existed for that — neither in backoffice nor frontend.',
    s1HmwLabel: 'How Might We',
    s1Hmw: '"How might we create a structure that differentiated influencers from regular sellers, with custom plans and visible storefronts, without creating two parallel systems for engineering to maintain?"',
    s2Label: 'My Role',
    s2Title: 'Architect the complete journey, from plan to storefront.',
    s2P1: 'The main work was not interface. It was data model and business logic. We had to decide what a "plan" was, which parameters it controlled, how to cluster sellers, and how this would appear to buyers in the app.',
    s2P2: 'I created the architecture flowchart, defined clustering rules, led backoffice flows and designed the storefronts. I stayed between product, engineering and business — making sure the hard decisions were made before, not after launch.',
    s2Items: [
      { title: 'Architecture', text: 'Plan logic and rules' },
      { title: 'Backoffice', text: 'Plan manager' },
      { title: 'Frontend', text: 'Storefronts and profiles' },
    ],
    s3Label: 'Plan Architecture',
    s3Title: 'The logic I structured with product and engineering.',
    s3P1: 'The first decision was to define the model: a plan could not be just a "label", it had to control financial and clustering parameters independently. And each seller could only belong to one plan at a time, avoiding rule conflicts.',
    s3Step1Title: 'Create the plan',
    s3Step1Text: 'Name, description and owner. Examples: "Favoritas", "Influencer", "Regular seller".',
    s3Step2Title: 'Link bonus rules',
    s3Step2P: '8 configurable parameters per plan:',
    s3Params: ['Joining fee', 'Joining shipping', 'Reverse shipping', 'Rejected fee', 'Rejected shipping', 'Standard commission', 'Fixed fee', 'Subsidized coupon'],
    s3Step3Title: 'Clustering rules → additional bonus',
    s3Step3P: 'Up to 2 rules per plan. Criteria:',
    s3Tags: ['Department', 'Category', 'Brand', 'Validity', 'Price range'],
    s3Arrow: '→ % bonus',
    s3Example: 'Ex: Women · Jackets · Zara · R$100–200 · validity 10/07 → 80% bonus',
    s3Step4Title: 'Link seller to plan',
    s3Step4Text: 'Individual or bulk via CSV. Each seller can only belong to one plan at a time — priority architecture decision to avoid rule conflicts.',
    s4Label: 'Backoffice',
    s4Title: 'The plan manager we built from scratch.',
    s4P1: 'All plan management lives in the Repassa backoffice. I designed the creation, editing, clustering and linking flows, working directly with engineering.',
    s4Callout: 'The most important decision: 1 plan per seller',
    s4CalloutText: 'Plan uniqueness per seller was debated with engineering before any screen was designed. Simultaneous multiple plans would create rule conflicts — a seller could earn double % on the same sale. Prioritizing this in architecture avoided technical debt that would be impossible to undo later.',
    s5Label: 'Frontend · The Storefront',
    s5Title: 'Influencers visible to buyers.',
    s5P1: 'All the backoffice work had to translate into something real for the buyer. I designed the in-app experience so influencers would have their own presence — storefronts that communicated identity and generated conversion.',
    s5Caption: 'Featured Influencers · Raka Minelli profile · Home with people search',
    s6Label: 'Results',
    s6Title: 'Sales record in November. Two influencers sold out their stock.',
    s6P1: 'With storefronts live and plans configured, results came fast. In November, two featured influencers completely sold out their own item stock — unprecedented on the platform. Average product price rose, CMV improved, and the October–February period closed with R$1.7 million in revenue. For the year overall, the program generated over R$2 million in savings via CMV.',
    s6Metric1Label: 'Revenue · Oct/25–Feb/26',
    s6Metric1Value: 'R$1.7 M',
    s6Metric1Text: 'Total e-commerce revenue in the period after the influencer storefronts launch',
    s6Metric2Label: 'CMV savings · year',
    s6Metric2Value: '+R$2 M',
    s6Metric2Text: 'Amount saved on cost of goods sold thanks to the improved item mix',
    s6Kpis: [
      { value: '3.3k', label: 'Buyers' },
      { value: '1.2k', label: 'New buyers' },
      { value: '2', label: 'Influencers sold out' },
      { value: 'Nov', label: 'Sales record' },
    ],
    s6CalloutTitle: 'Average price rose, CMV improved',
    s6CalloutText: 'Influencers attract higher-ticket buyers and sell curated items. The direct result was a more valuable product mix: premium brand pieces with average price above the general platform, which reduced cost of goods sold and increased margin.',
    s7Label: 'Architecture Decisions',
    s7Title: 'Trade-offs that defined the product.',
    s7Decisions: [
      { title: 'One plan per seller', text: 'Allowing simultaneous plans would create bonus rule conflicts. The uniqueness decision was made before design to avoid structural technical debt.' },
      { title: 'Clustering by combined dimensions', text: 'Instead of creating infinite plans per brand, we used dimension combinations (department + category + brand + price) that cover more scenarios with less configuration.' },
      { title: 'Bulk upload via CSV', text: 'Linking influencers one by one did not scale. List upload with processing history allowed activating hundreds of sellers at once without additional engineering.' },
      { title: 'Visual differentiation on frontend', text: 'The "Influencer" badge, purple-background cards and dedicated menu section are not decoration — they are signals that increase perceived value and steer buyers toward profiles with higher historical conversion.' },
    ],
    s8Label: 'Reflection',
    s8Title: 'What worked, what I resisted, and what I would do differently.',
    s8P1: 'I spent more time discussing the data model than designing screens. Defining business rules and architecture constraints together with engineering — before design existed — is what made the product sustainable.',
    s8P2: 'The temptation to solve everything in the interface always exists. But here it became clear: a well-thought backoffice is what makes the frontend possible. The beautiful storefront in the app only works because there is solid plan logic behind it.',
    s8Lessons: [
      { title: 'What I would do differently: storefront metrics from launch', text: 'We designed the storefronts focused on conversion, but did not define with the data team which analytics events would be captured from day 1. As a result, in the first months we knew sales went up, but could not accurately attribute how much came from each influencer. Per-storefront metrics instrumentation should have been a launch requirement, not a future task.' },
      { title: 'What I resisted, and was right: simultaneous multiple plans', text: 'The business team wanted to allow a seller to be in two plans at once to cover specific partnership cases. I kept the one-plan-per-seller restriction and proposed that special cases be solved via clustering. The resistance lasted two weeks. Caving would have created an unsolvable bonus rule conflict, and I knew it before I could prove it.' },
    ],
    s8FinalLabel: 'The learning I carry',
    s8Final: 'A marketplace product is a system. The rules you define today in the backoffice will affect thousands of users, sometimes in ways you did not foresee. Defending a technical constraint against business pressure is part of the job. But you need to explain the risk in business language, not engineering language.',
    sideStrategicLabel: 'Strategic Learning',
    sideStrategic: '"The most important decision was modeling, not interface. Defining 1 plan per seller before drawing protected the product from impossible debt."',
    sideDeliveryLabel: 'Main results',
    sideDelivery: [
      { label: 'Revenue Oct–Feb', value: 'R$1.7 M' },
      { label: 'CMV savings', value: '+R$2 M' },
      { label: 'Backoffice', value: 'From scratch' },
      { label: 'Frontend', value: 'App + Web' },
    ],
    sideStackLabel: 'Stack',
  },
  es: {
    tag1: 'Producto Digital',
    tag2: 'Backoffice · Frontend',
    period: '2024–2026',
    titlePart1: 'Repassa:',
    titlePart2: 'Favoritas e\nInfluencers.',
    hero: 'Repassa tenía influencers vendiendo en el marketplace, pero el sistema los trataba como cualquier otro vendedor. Estructuré desde cero toda la jornada — desde la arquitectura de los planes y reglas de bonificación en el backoffice hasta los escaparates que destacaban esos perfiles para el comprador en la app.',
    meta: [
      { label: 'Empresa', value: 'Repassa · Grupo Renner' },
      { label: 'Mi rol', value: 'Product Designer · Arquitecto de la Jornada' },
      { label: 'Herramientas', value: 'Figma · Miro' },
      { label: 'Equipos', value: 'Producto · Ingeniería · Negocio' },
    ],
    coverLabel: 'Programa de Influencers',
    coverHeadline: 'De cero al aire.',
    coverSub: 'backoffice + frontend · 2024–2026',
    s1Label: 'Contexto',
    s1Title: 'Influencers reales vendiendo en el marketplace, pero invisibles para el sistema.',
    s1P1: 'Repassa es el marketplace de moda circular del Grupo Renner. Con el crecimiento de la plataforma, un grupo de vendedores ganó relevancia propia: influencers de moda con audiencia real que usaban la app para vender su propio armario y el de sus seguidores.',
    s1P2: 'El problema era sistémico: el backoffice trataba a una influencer con 500 mil seguidores exactamente igual que a cualquier vendedor registrado. No había plan diferenciado, no había comisión especial, no había escaparate.',
    s1P3: 'El negocio quería activar estos perfiles como canal estratégico de conversión. Pero no existía ninguna infraestructura para eso — ni en backoffice ni en frontend.',
    s1HmwLabel: 'How Might We',
    s1Hmw: '"¿Cómo crear una estructura que diferenciara influencers de vendedores comunes, con planes personalizados y escaparates visibles, sin crear dos sistemas paralelos para que ingeniería mantenga?"',
    s2Label: 'Mi Rol',
    s2Title: 'Arquitectar la jornada completa, del plan al escaparate.',
    s2P1: 'El trabajo principal no fue de interfaz. Fue de modelo de datos y lógica de negocio. Teníamos que decidir qué era un "plan", qué parámetros controlaba, cómo agrupar vendedores y cómo eso aparecería en la app al comprador.',
    s2P2: 'Creé el flujograma de la arquitectura, definí las reglas de clusterización, conduje los flujos de backoffice y diseñé los escaparates. Me mantuve entre producto, ingeniería y negocio — asegurando que las decisiones difíciles se tomaran antes, no después del lanzamiento.',
    s2Items: [
      { title: 'Arquitectura', text: 'Lógica de planes y reglas' },
      { title: 'Backoffice', text: 'Gestor de planes' },
      { title: 'Frontend', text: 'Escaparates y perfiles' },
    ],
    s3Label: 'Arquitectura de Planes',
    s3Title: 'La lógica que estructuré con producto e ingeniería.',
    s3P1: 'La primera decisión fue definir el modelo: un plan no podía ser solo una "etiqueta", tenía que controlar parámetros financieros y de clusterización de forma independiente. Y cada vendedor solo podía pertenecer a un plan a la vez, evitando conflictos de reglas.',
    s3Step1Title: 'Crear el plan',
    s3Step1Text: 'Nombre, descripción y responsable. Ejemplos: "Favoritas", "Influencer", "Vendedor común".',
    s3Step2Title: 'Vincular reglas de bonificación',
    s3Step2P: '8 parámetros configurables por plan:',
    s3Params: ['Tasa adhesión', 'Adhesión envío', 'Reversa envío', 'Rechazo tasa', 'Rechazo envío', 'Comisión estándar', 'Tarifa fija', 'Cupón subsidiado'],
    s3Step3Title: 'Reglas de clusterización → bonificación adicional',
    s3Step3P: 'Hasta 2 reglas por plan. Criterios:',
    s3Tags: ['Departamento', 'Categoría', 'Marca', 'Vigencia', 'Rango de precio'],
    s3Arrow: '→ % bonificación',
    s3Example: 'Ej: Mujer · Chaquetas · Zara · R$100–200 · vigencia 10/07 → 80% bono',
    s3Step4Title: 'Vincular vendedor al plan',
    s3Step4Text: 'Individual o en masa vía CSV. Cada vendedor solo puede pertenecer a un plan a la vez — decisión de arquitectura prioritaria para evitar conflicto de reglas.',
    s4Label: 'Backoffice',
    s4Title: 'El gestor de planes que construimos desde cero.',
    s4P1: 'Toda la gestión de planes vive en el backoffice de Repassa. Diseñé los flujos de creación, edición, clusterización y vinculación, trabajando directamente con ingeniería.',
    s4Callout: 'La decisión más importante: 1 plan por vendedor',
    s4CalloutText: 'La unicidad de plan por vendedor fue debatida con ingeniería antes de que se diseñara cualquier pantalla. Múltiples planes simultáneos crearían conflictos de reglas — un vendedor podría ganar % doble sobre la misma venta. Priorizar esto en la arquitectura evitó una deuda técnica imposible de deshacer después.',
    s5Label: 'Frontend · El Escaparate',
    s5Title: 'Influencers visibles para quien compra.',
    s5P1: 'Todo el trabajo de backoffice tenía que traducirse en algo real para el comprador. Diseñé la experiencia en la app para que los influencers tuvieran presencia propia — escaparates que comunicaban identidad y generaban conversión.',
    s5Caption: 'Influencers Destacados · Perfil de Raka Minelli · Home con búsqueda de personas',
    s6Label: 'Resultados',
    s6Title: 'Record de ventas en noviembre. Dos influencers agotaron su stock.',
    s6P1: 'Con los escaparates al aire y los planes configurados, los resultados llegaron rápido. En noviembre, dos influencers destacados agotaron completamente su propio stock de piezas — algo sin precedente en la plataforma. El precio promedio de los productos subió, el CMV mejoró, y el período de octubre a febrero cerró con R$1,7 millones en ingresos. En el acumulado del año, el programa generó más de R$2 millones en ahorro vía CMV.',
    s6Metric1Label: 'Ingresos · oct/25–feb/26',
    s6Metric1Value: 'R$1,7 M',
    s6Metric1Text: 'Ingresos totales de e-commerce en el período posterior al lanzamiento de los escaparates de influencers',
    s6Metric2Label: 'Ahorro en CMV · año',
    s6Metric2Value: '+R$2 M',
    s6Metric2Text: 'Valor ahorrado en el costo de mercadería vendida con la mejora del mix de piezas',
    s6Kpis: [
      { value: '3,3 mil', label: 'Compradores' },
      { value: '1,2 mil', label: 'Nuevos compradores' },
      { value: '2', label: 'Influencers agotaron stock' },
      { value: 'Nov', label: 'Record de ventas' },
    ],
    s6CalloutTitle: 'El precio promedio subió, el CMV mejoró',
    s6CalloutText: 'Los influencers atraen compradores de mayor ticket y venden piezas con curación propia. El resultado directo fue un mix de productos más valorizado: piezas de marcas premium con precio promedio por encima de la plataforma general, lo que redujo el costo de mercadería vendida y aumentó el margen.',
    s7Label: 'Decisiones de Arquitectura',
    s7Title: 'Trade-offs que definieron el producto.',
    s7Decisions: [
      { title: 'Un plan por vendedor', text: 'Permitir planes simultáneos crearía conflicto de reglas de bonificación. La decisión de unicidad se tomó antes del diseño para evitar deuda técnica estructural.' },
      { title: 'Clusterización por dimensiones combinadas', text: 'En vez de crear planes infinitos por marca, usamos combinaciones de dimensiones (departamento + categoría + marca + precio) que cubren más escenarios con menos configuración.' },
      { title: 'Upload en masa vía CSV', text: 'Vincular influencers uno por uno no escalaba. El upload de lista con historial de procesamiento permitió activar cientos de vendedores de una vez sin demandar ingeniería adicional.' },
      { title: 'Diferenciación visual en el frontend', text: 'El badge "Influencer", los cards con fondo morado y la sección dedicada en el menú no son decoración — son señales que aumentan la percepción de valor y dirigen al comprador hacia perfiles con mayor conversión histórica.' },
    ],
    s8Label: 'Reflexión',
    s8Title: 'Lo que funcionó, lo que resistí, y lo que haría diferente.',
    s8P1: 'Pasé más tiempo discutiendo el modelo de datos que diseñando pantallas. Definir las reglas de negocio y las restricciones de arquitectura junto con ingeniería, antes de que el diseño existiera, fue lo que hizo el producto sostenible.',
    s8P2: 'La tentación de resolver todo en la interfaz siempre existe. Pero aquí quedó claro: el backoffice bien pensado es lo que hace posible el frontend. El escaparate bonito en la app solo funciona porque existe una lógica sólida de planes detrás.',
    s8Lessons: [
      { title: 'Lo que haría diferente: métricas de escaparate desde el lanzamiento', text: 'Diseñamos los escaparates con foco en conversión, pero no definimos junto al equipo de datos qué eventos de analytics se capturarían desde el día 1. Resultado: en los primeros meses sabíamos que las ventas subieron, pero no podíamos atribuir con precisión cuánto vino de cada influencer. La instrumentación de métricas por escaparate debió ser requisito de lanzamiento, no una tarea futura.' },
      { title: 'Lo que resistí, y tenía razón: múltiples planes simultáneos', text: 'El equipo de negocio quería permitir que un vendedor pudiera estar en dos planes al mismo tiempo para cubrir casos específicos de alianza. Mantuve la restricción de un plan por vendedor y propuse que los casos especiales se resolvieran vía clusterización. La resistencia duró dos semanas. Ceder habría creado un conflicto de reglas de bonificación sin solución limpia, y yo lo sabía antes de poder probarlo.' },
    ],
    s8FinalLabel: 'El aprendizaje que me llevo',
    s8Final: 'Un producto de marketplace es un sistema. Las reglas que defines hoy en el backoffice afectarán a miles de usuarios, a veces de formas que no previste. Defender una restricción técnica contra la presión de negocio es parte del trabajo. Pero necesitas explicar el riesgo en lenguaje de negocio, no de ingeniería.',
    sideStrategicLabel: 'Aprendizaje Estratégico',
    sideStrategic: '"La decisión más importante fue de modelado, no de interfaz. Definir 1 plan por vendedor antes de diseñar protegió al producto de una deuda imposible."',
    sideDeliveryLabel: 'Resultados principales',
    sideDelivery: [
      { label: 'Ingresos oct–feb', value: 'R$1,7 M' },
      { label: 'Ahorro CMV', value: '+R$2 M' },
      { label: 'Backoffice', value: 'Desde cero' },
      { label: 'Frontend', value: 'App + Web' },
    ],
    sideStackLabel: 'Stack',
  },
};
