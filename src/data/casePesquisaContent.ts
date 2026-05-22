import type { Lang } from '../i18n/translations';

type Tema = { n: string; title: string; nps: string; dor: string; quote: string; tags: string[]; rec: string };
type Content = {
  tag1: string;
  tag2: string;
  period: string;
  titlePart1: string;
  titlePart2: string;
  hero: string;
  coverLabel: string;
  coverHeadline: string;
  coverSub: string;
  s1Title: string;
  s1P1: string;
  s1P2Label: string;
  s1P2: string;
  s1P3Label: string;
  s1P3: string;
  s1WhyTitle: string;
  s1WhyText: string;
  s2Title: string;
  s2P1: string;
  s2Items: { title: string; sub: string }[];
  s3Title: string;
  temas: Tema[];
  s4Title: string;
  priorities: { n: string; title: string; desc: string }[];
  s5Label: string;
  s5Title: string;
  s5CalloutTitle: string;
  s5CalloutText: string;
  s5P1: string;
  s5WhatIWouldDoTitle: string;
  s5WhatIWouldDoText: string;
  sideStrategicLabel: string;
  sideStrategic: string;
  sideNumbersLabel: string;
  sideNumbers: { label: string; value: string }[];
};

export const casePesquisaContent: Record<Lang, Content> = {
  pt: {
    tag1: 'UX Research',
    tag2: 'Pesquisa Exploratória',
    period: 'Janeiro 2024',
    titlePart1: 'Pesquisa Exploratória',
    titlePart2: 'Contábil.',
    hero: 'Mapeamento das principais dores de escritórios contábeis no sistema Phoenix da Contmatic, triangulando entrevistas em profundidade com dados de NPS para orientar o roadmap de produto.',
    coverLabel: 'BU Contábil · Contmatic Phoenix',
    coverHeadline: '6 escritórios. 8 entrevistas.',
    coverSub: '44 relatos NPS · Janeiro 2024',
    s1Title: 'Contexto, Desafio e Objetivo',
    s1P1: 'A Contmatic tem um ERP contábil usado por escritórios em todo o Brasil. O time de produto sabia que tinha pontos de atrito — os chamados de suporte deixavam isso claro. O que não sabia era o que de fato incomodava os contadores no dia a dia, e o que eles faziam quando o sistema não entregava.',
    s1P2Label: 'O Problema:',
    s1P2: 'O time só tinha NPS e chamados de suporte para tomar decisões de roadmap. Números sem contexto. Qualquer priorização assim é chute.',
    s1P3Label: 'O que fui fazer:',
    s1P3: 'Descobrir como os contadores realmente usavam o sistema. Que gambiarras tinham criado. O que travava o fechamento mensal.',
    s1WhyTitle: 'Por que eu, e não um pesquisador generalista',
    s1WhyText: 'Antes de me tornar designer, trabalhei com contabilidade na Cerbras. Conhecia o vocabulário, os fluxos de lançamentos, a lógica dos extratos bancários e a pressão dos fechamentos mensais. Isso mudou a qualidade das entrevistas: os contadores falavam sem simplificar, eu entendia sem pedir glossário.',
    s2Title: 'Metodologia',
    s2P1: 'Não entrei com hipóteses fechadas. O roteiro era semiestruturado — uma lista de temas, não de perguntas com resposta esperada. Deixei o contador falar sobre o dia dele.',
    s2Items: [
      { title: 'Recrutamento', sub: '6 escritórios · 8 pessoas' },
      { title: 'Coleta', sub: 'Entrevistas em profundidade' },
      { title: 'Análise', sub: 'Affinity Map + 44 NPS' },
    ],
    s3Title: 'Os 4 Grandes Temas',
    temas: [
      {
        n: '01', title: 'Relatórios', nps: '15 relatos NPS · Out–Nov/2023',
        dor: 'Lentidão crítica ao gerar o Razão em períodos longos. Em muitos casos, o relatório não gera PDF, obrigando o usuário a fragmentar a consulta. O excesso de campos e filtros dificulta a navegação no dia a dia.',
        quote: '"Os clientes realizam a consulta em períodos menores porque senão não gera. Assim conseguem fazer o processo com maior agilidade."',
        tags: ['Lentidão na geração', 'Falha no PDF', 'Filtros complexos'],
        rec: 'Otimizar performance em períodos longos, simplificar a configuração de filtros e reduzir etapas para gerar relatório no formato desejado.',
      },
      {
        n: '02', title: 'Contador Online & Robomatic', nps: '10 relatos NPS · Out–Nov/2023',
        dor: 'Nenhum escritório entrevistado utiliza essas ferramentas. Muitos nem sabiam que existiam. Os que tentaram desistiram pela complexidade de configuração, erros sem feedback claro e falta de treinamento.',
        quote: '"Eu não lembro como usa, eu pra ser sincero nem lembro o que ele faz. A gente tem tanta rotina pra fazer que vai passando o mês e não consegue parar para ver o que poderia ajudar."',
        tags: ['Baixa adoção', 'Onboarding inexistente', 'Configuração opaca'],
        rec: 'Criar onboarding progressivo, reposicionar a proposta de valor dessas ferramentas e investir em treinamentos práticos e acessíveis.',
      },
      {
        n: '03', title: 'Layout do Sistema', nps: '9 relatos NPS · Out–Nov/2023',
        dor: 'A interface é percebida como visualmente defasada e sobrecarregada. Usuários selecionam campos por engano com frequência e o excesso de informação na tela gera carga cognitiva elevada.',
        quote: '"Às vezes, até para vender o sistema, a pessoa vê e pensa: \'o sistema parece o Windows 97\'. Então vamos colocar uma coisa mais moderna."',
        tags: ['Interface defasada', 'Sobrecarga visual', 'Alto índice de erro'],
        rec: 'Reduzir carga cognitiva, categorizar ações em componentes contextuais e modernizar a hierarquia visual da interface.',
      },
      {
        n: '04', title: 'Lançamentos', nps: '13 relatos NPS · Out–Nov/2023',
        dor: 'O lançamento manual funciona bem, mas a importação de dados é problemática. Usuários exportam para Excel, corrigem manualmente e reimportam porque não há opção de edição direta no sistema. Erros recorrentes com extratos dos bancos Sicob e Safra em PDF.',
        quote: '"Às vezes é mais fácil corrigir na planilha e importar do que corrigir ali no sistema. Simplificar esse processo seria mais conveniente."',
        tags: ['Importação frágil', 'Workaround via Excel', 'Erros bancários PDF'],
        rec: 'Habilitar edição direta de lançamentos importados, melhorar o tratamento de erros na importação e resolver compatibilidade com extratos Sicob e Safra.',
      },
    ],
    s4Title: 'Recomendações Priorizadas',
    priorities: [
      { n: '#1', title: 'Otimizar eficiência nos lançamentos', desc: 'Eliminar workarounds manuais e reduzir tempo de operação via importação direta.' },
      { n: '#2', title: 'Otimizar geração de relatórios', desc: 'Reduzir abandono de tarefa e aumentar satisfação — área com maior volume de NPS negativo.' },
      { n: '#3', title: 'Facilitar adoção do Contador Online', desc: 'Ativar ferramenta estratégica que está completamente fora do radar operacional dos escritórios.' },
      { n: '#4', title: 'Facilitar adoção do Robomatic', desc: 'Aumentar automação e reduzir carga operacional via treinamentos e configuração simplificada.' },
    ],
    s5Label: 'Reflexão',
    s5Title: 'O insight que ninguém esperava.',
    s5CalloutTitle: 'O insight que mudou a priorização: lançamentos eram o maior problema, não relatórios',
    s5CalloutText: 'O time entrava na pesquisa com a hipótese de que relatórios era a dor principal. A pesquisa revelou que o NPS mais negativo estava em lançamentos: importação frágil, workarounds via Excel, incompatibilidade com extratos de bancos específicos. Era uma dor silenciosa porque os usuários já tinham se adaptado — e exatamente por isso ninguém a enxergava como urgente. Isso inverteu a priorização do roadmap.',
    s5P1: 'A triangulação entre NPS e entrevistas foi o que tornou esse achado possível. O NPS apontava o o quê. As entrevistas revelaram o porquê e o como as pessoas contornavam.',
    s5WhatIWouldDoTitle: 'O que eu faria diferente',
    s5WhatIWouldDoText: 'Teria ampliado a amostra para incluir escritórios de diferentes portes. Os 6 escritórios entrevistados eram majoritariamente de pequeno e médio porte — escritórios maiores podem ter dores diferentes, especialmente em automação.',
    sideStrategicLabel: 'Aprendizado Estratégico',
    sideStrategic: '"O NPS aponta o quê. A entrevista revela o porquê. Sem as duas juntas, o time teria priorizado a feature errada."',
    sideNumbersLabel: 'Números',
    sideNumbers: [
      { label: 'Escritórios', value: '6' },
      { label: 'Entrevistas', value: '8' },
      { label: 'Relatos NPS', value: '44' },
      { label: 'Temas extraídos', value: '4' },
    ],
  },
  en: {
    tag1: 'UX Research',
    tag2: 'Exploratory Research',
    period: 'January 2024',
    titlePart1: 'Accounting Exploratory',
    titlePart2: 'Research.',
    hero: "Mapping the main pain points of accounting firms in Contmatic's Phoenix ERP, triangulating in-depth interviews with NPS data to guide the product roadmap.",
    coverLabel: 'Accounting BU · Contmatic Phoenix',
    coverHeadline: '6 firms. 8 interviews.',
    coverSub: '44 NPS reports · January 2024',
    s1Title: 'Context, Challenge and Goal',
    s1P1: "Contmatic has an accounting ERP used by firms throughout Brazil. The product team knew there were friction points — support tickets made that clear. What they didn't know was what actually bothered accountants day-to-day, and what they did when the system didn't deliver.",
    s1P2Label: 'The Problem:',
    s1P2: 'The team only had NPS and support tickets to make roadmap decisions. Numbers without context. Any prioritization like that is guessing.',
    s1P3Label: 'What I went to do:',
    s1P3: 'Discover how accountants actually used the system. What workarounds they had created. What blocked the monthly closing.',
    s1WhyTitle: 'Why me, and not a generalist researcher',
    s1WhyText: 'Before becoming a designer, I worked in accounting at Cerbras. I knew the vocabulary, the entry flows, the logic of bank statements and the pressure of monthly closings. That changed the quality of interviews: accountants spoke without simplifying, I understood without asking for glossary.',
    s2Title: 'Methodology',
    s2P1: "I didn't go in with closed hypotheses. The script was semi-structured — a list of topics, not questions with expected answers. I let the accountant talk about their day.",
    s2Items: [
      { title: 'Recruitment', sub: '6 firms · 8 people' },
      { title: 'Collection', sub: 'In-depth interviews' },
      { title: 'Analysis', sub: 'Affinity Map + 44 NPS' },
    ],
    s3Title: 'The 4 Major Themes',
    temas: [
      {
        n: '01', title: 'Reports', nps: '15 NPS reports · Oct–Nov/2023',
        dor: 'Critical slowness generating the General Ledger over long periods. In many cases, the report does not generate PDF, forcing the user to fragment the query. The excess of fields and filters makes day-to-day navigation difficult.',
        quote: '"Clients run queries in smaller periods because otherwise it does not generate. This way they can do the process more quickly."',
        tags: ['Slow generation', 'PDF failure', 'Complex filters'],
        rec: 'Optimize performance over long periods, simplify filter configuration and reduce steps to generate a report in the desired format.',
      },
      {
        n: '02', title: 'Online Accountant & Robomatic', nps: '10 NPS reports · Oct–Nov/2023',
        dor: "No firm interviewed uses these tools. Many didn't even know they existed. Those who tried gave up due to configuration complexity, errors without clear feedback and lack of training.",
        quote: '"I don\'t remember how to use it, honestly I don\'t even remember what it does. We have so much routine to do that the month passes and we can\'t stop to see what could help."',
        tags: ['Low adoption', 'No onboarding', 'Opaque configuration'],
        rec: 'Create progressive onboarding, reposition the value proposition of these tools and invest in practical and accessible training.',
      },
      {
        n: '03', title: 'System Layout', nps: '9 NPS reports · Oct–Nov/2023',
        dor: 'The interface is perceived as visually outdated and overloaded. Users frequently select wrong fields and the excess of information on screen generates high cognitive load.',
        quote: '"Sometimes, even to sell the system, the person sees it and thinks: \'the system looks like Windows 97\'. So let\'s put in something more modern."',
        tags: ['Outdated interface', 'Visual overload', 'High error rate'],
        rec: 'Reduce cognitive load, categorize actions in contextual components and modernize the visual hierarchy of the interface.',
      },
      {
        n: '04', title: 'Entries', nps: '13 NPS reports · Oct–Nov/2023',
        dor: 'Manual entries work well, but data import is problematic. Users export to Excel, fix manually and reimport because there is no direct editing option in the system. Recurring errors with Sicob and Safra bank statements in PDF.',
        quote: '"Sometimes it\'s easier to fix in the spreadsheet and import than to fix it in the system. Simplifying this process would be more convenient."',
        tags: ['Fragile import', 'Excel workaround', 'PDF bank errors'],
        rec: 'Enable direct editing of imported entries, improve error handling on import and resolve compatibility with Sicob and Safra statements.',
      },
    ],
    s4Title: 'Prioritized Recommendations',
    priorities: [
      { n: '#1', title: 'Optimize efficiency in entries', desc: 'Eliminate manual workarounds and reduce operating time via direct import.' },
      { n: '#2', title: 'Optimize report generation', desc: 'Reduce task abandonment and increase satisfaction — area with highest volume of negative NPS.' },
      { n: '#3', title: 'Ease adoption of Online Accountant', desc: 'Activate strategic tool that is completely off the operational radar of firms.' },
      { n: '#4', title: 'Ease adoption of Robomatic', desc: 'Increase automation and reduce operational load via training and simplified configuration.' },
    ],
    s5Label: 'Reflection',
    s5Title: 'The insight no one expected.',
    s5CalloutTitle: 'The insight that changed prioritization: entries were the biggest problem, not reports',
    s5CalloutText: 'The team went into the research with the hypothesis that reports was the main pain. The research revealed the most negative NPS was in entries: fragile import, Excel workarounds, incompatibility with specific bank statements. It was a silent pain because users had already adapted — and exactly because of that no one saw it as urgent. This reversed the roadmap prioritization.',
    s5P1: 'The triangulation between NPS and interviews is what made this finding possible. NPS pointed to the what. Interviews revealed the why and how people worked around it.',
    s5WhatIWouldDoTitle: "What I would do differently",
    s5WhatIWouldDoText: 'I would have expanded the sample to include firms of different sizes. The 6 firms interviewed were mostly small and medium-sized — larger firms may have different pains, especially in automation.',
    sideStrategicLabel: 'Strategic Learning',
    sideStrategic: '"NPS points to the what. The interview reveals the why. Without both together, the team would have prioritized the wrong feature."',
    sideNumbersLabel: 'Numbers',
    sideNumbers: [
      { label: 'Firms', value: '6' },
      { label: 'Interviews', value: '8' },
      { label: 'NPS reports', value: '44' },
      { label: 'Themes extracted', value: '4' },
    ],
  },
  es: {
    tag1: 'UX Research',
    tag2: 'Investigación Exploratoria',
    period: 'Enero 2024',
    titlePart1: 'Investigación Exploratoria',
    titlePart2: 'Contable.',
    hero: 'Mapeo de los principales dolores de estudios contables en el sistema Phoenix de Contmatic, triangulando entrevistas en profundidad con datos de NPS para orientar el roadmap de producto.',
    coverLabel: 'BU Contable · Contmatic Phoenix',
    coverHeadline: '6 estudios. 8 entrevistas.',
    coverSub: '44 reportes NPS · Enero 2024',
    s1Title: 'Contexto, Desafío y Objetivo',
    s1P1: 'Contmatic tiene un ERP contable usado por estudios en todo Brasil. El equipo de producto sabía que había puntos de fricción — los tickets de soporte lo dejaban claro. Lo que no sabía era qué incomodaba realmente a los contadores en el día a día, y qué hacían cuando el sistema no entregaba.',
    s1P2Label: 'El Problema:',
    s1P2: 'El equipo solo tenía NPS y tickets de soporte para tomar decisiones de roadmap. Números sin contexto. Cualquier priorización así es adivinanza.',
    s1P3Label: 'Lo que fui a hacer:',
    s1P3: 'Descubrir cómo los contadores realmente usaban el sistema. Qué soluciones improvisadas habían creado. Qué bloqueaba el cierre mensual.',
    s1WhyTitle: 'Por qué yo, y no un investigador generalista',
    s1WhyText: 'Antes de ser designer, trabajé en contabilidad en Cerbras. Conocía el vocabulario, los flujos de asientos, la lógica de los extractos bancarios y la presión de los cierres mensuales. Eso cambió la calidad de las entrevistas: los contadores hablaban sin simplificar, yo entendía sin pedir glosario.',
    s2Title: 'Metodología',
    s2P1: 'No entré con hipótesis cerradas. El guion era semiestructurado — una lista de temas, no de preguntas con respuesta esperada. Dejé que el contador hablara sobre su día.',
    s2Items: [
      { title: 'Reclutamiento', sub: '6 estudios · 8 personas' },
      { title: 'Recolección', sub: 'Entrevistas en profundidad' },
      { title: 'Análisis', sub: 'Affinity Map + 44 NPS' },
    ],
    s3Title: 'Los 4 Grandes Temas',
    temas: [
      {
        n: '01', title: 'Reportes', nps: '15 reportes NPS · Oct–Nov/2023',
        dor: 'Lentitud crítica al generar el Mayor en períodos largos. En muchos casos, el reporte no genera PDF, obligando al usuario a fragmentar la consulta. El exceso de campos y filtros dificulta la navegación en el día a día.',
        quote: '"Los clientes realizan la consulta en períodos menores porque sino no se genera. Así logran hacer el proceso con mayor agilidad."',
        tags: ['Lentitud al generar', 'Falla en PDF', 'Filtros complejos'],
        rec: 'Optimizar performance en períodos largos, simplificar la configuración de filtros y reducir etapas para generar reporte en el formato deseado.',
      },
      {
        n: '02', title: 'Contador Online & Robomatic', nps: '10 reportes NPS · Oct–Nov/2023',
        dor: 'Ningún estudio entrevistado usa estas herramientas. Muchos ni sabían que existían. Los que intentaron desistieron por la complejidad de configuración, errores sin feedback claro y falta de capacitación.',
        quote: '"No recuerdo cómo se usa, para ser sincero ni recuerdo qué hace. Tenemos tanta rutina que pasa el mes y no logramos parar a ver qué podría ayudar."',
        tags: ['Baja adopción', 'Sin onboarding', 'Configuración opaca'],
        rec: 'Crear onboarding progresivo, reposicionar la propuesta de valor de estas herramientas e invertir en capacitaciones prácticas y accesibles.',
      },
      {
        n: '03', title: 'Layout del Sistema', nps: '9 reportes NPS · Oct–Nov/2023',
        dor: 'La interfaz es percibida como visualmente desactualizada y sobrecargada. Los usuarios seleccionan campos por error con frecuencia y el exceso de información en pantalla genera carga cognitiva elevada.',
        quote: '"A veces, incluso para vender el sistema, la persona ve y piensa: \'el sistema parece Windows 97\'. Entonces vamos a poner algo más moderno."',
        tags: ['Interfaz desactualizada', 'Sobrecarga visual', 'Alto índice de error'],
        rec: 'Reducir carga cognitiva, categorizar acciones en componentes contextuales y modernizar la jerarquía visual de la interfaz.',
      },
      {
        n: '04', title: 'Asientos', nps: '13 reportes NPS · Oct–Nov/2023',
        dor: 'El asiento manual funciona bien, pero la importación de datos es problemática. Los usuarios exportan a Excel, corrigen manualmente y reimportan porque no hay edición directa en el sistema. Errores recurrentes con extractos de los bancos Sicob y Safra en PDF.',
        quote: '"A veces es más fácil corregir en la planilla e importar que corregir ahí en el sistema. Simplificar ese proceso sería más conveniente."',
        tags: ['Importación frágil', 'Workaround vía Excel', 'Errores PDF bancos'],
        rec: 'Habilitar edición directa de asientos importados, mejorar el tratamiento de errores en la importación y resolver compatibilidad con extractos Sicob y Safra.',
      },
    ],
    s4Title: 'Recomendaciones Priorizadas',
    priorities: [
      { n: '#1', title: 'Optimizar eficiencia en asientos', desc: 'Eliminar workarounds manuales y reducir tiempo de operación vía importación directa.' },
      { n: '#2', title: 'Optimizar generación de reportes', desc: 'Reducir abandono de tarea y aumentar satisfacción — área con mayor volumen de NPS negativo.' },
      { n: '#3', title: 'Facilitar adopción del Contador Online', desc: 'Activar herramienta estratégica que está completamente fuera del radar operativo de los estudios.' },
      { n: '#4', title: 'Facilitar adopción del Robomatic', desc: 'Aumentar automatización y reducir carga operativa vía capacitaciones y configuración simplificada.' },
    ],
    s5Label: 'Reflexión',
    s5Title: 'El insight que nadie esperaba.',
    s5CalloutTitle: 'El insight que cambió la priorización: asientos eran el mayor problema, no reportes',
    s5CalloutText: 'El equipo entraba en la investigación con la hipótesis de que reportes era el dolor principal. La investigación reveló que el NPS más negativo estaba en asientos: importación frágil, workarounds vía Excel, incompatibilidad con extractos de bancos específicos. Era un dolor silencioso porque los usuarios ya se habían adaptado — y justamente por eso nadie lo veía como urgente. Eso invirtió la priorización del roadmap.',
    s5P1: 'La triangulación entre NPS y entrevistas fue lo que hizo posible este hallazgo. El NPS apuntaba al qué. Las entrevistas revelaron el porqué y el cómo las personas lo sorteaban.',
    s5WhatIWouldDoTitle: 'Lo que haría diferente',
    s5WhatIWouldDoText: 'Habría ampliado la muestra para incluir estudios de diferentes tamaños. Los 6 estudios entrevistados eran mayormente de pequeño y mediano porte — estudios mayores pueden tener dolores diferentes, especialmente en automatización.',
    sideStrategicLabel: 'Aprendizaje Estratégico',
    sideStrategic: '"El NPS apunta al qué. La entrevista revela el porqué. Sin ambos juntos, el equipo habría priorizado la feature equivocada."',
    sideNumbersLabel: 'Números',
    sideNumbers: [
      { label: 'Estudios', value: '6' },
      { label: 'Entrevistas', value: '8' },
      { label: 'Reportes NPS', value: '44' },
      { label: 'Temas extraídos', value: '4' },
    ],
  },
};
