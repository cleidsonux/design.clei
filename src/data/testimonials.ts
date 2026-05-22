import type { Lang } from '../i18n/translations';

export interface TestimonialData {
  name: string;
  initials: string;
  gradient: string;
  image?: string;
  text: Record<Lang, string>;
  role: Record<Lang, string>;
}

export const testimonialsData: TestimonialData[] = [
  {
    name: 'Larissa Rech',
    initials: 'LR',
    gradient: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGaFRgahLlTCw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715619585671?e=1780531200&v=beta&t=5dV7JXivENCO5_SewagkFVe38djU_R_2GrfWg6QG1Xk',
    text: {
      pt: '"Tive a oportunidade de trabalhar com o Clei no Repassa e posso afirmar que contribuiu para diversos produtos e frentes, deixando uma marca importante. Proativo, engajado e colaborativo, sempre em busca de elevar o nível de entrega. Uma das coisas que mais admiro é o seu entusiasmo quando o assunto é design e tecnologia."',
      en: '"I had the opportunity to work with Clei at Repassa and I can say he contributed to many products and fronts, leaving an important mark. Proactive, engaged, and collaborative, always looking to raise the level of delivery. One of the things I most admire is his enthusiasm when it comes to design and technology."',
      es: '"Tuve la oportunidad de trabajar con Clei en Repassa y puedo afirmar que contribuyó a diversos productos y frentes, dejando una marca importante. Proactivo, comprometido y colaborativo, siempre buscando elevar el nivel de entrega. Una de las cosas que más admiro es su entusiasmo cuando se trata de diseño y tecnología."',
    },
    role: {
      pt: 'Líder de Design · Lojas Renner',
      en: 'Design Lead · Lojas Renner',
      es: 'Líder de Diseño · Lojas Renner',
    },
  },
  {
    name: 'Felipe Fernandes Claro',
    initials: 'FF',
    gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQFIicpy-u6Rsw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1655306235469?e=1780531200&v=beta&t=VRiyBQapllA4tmfp6awV1v8w5sfz_0r5LhAiKYudo4Y',
    text: {
      pt: '"Ótimo profissional. Busca as melhores soluções e não se contenta com o mesmo."',
      en: '"Great professional. Always seeking the best solutions and never settling for the same."',
      es: '"Excelente profesional. Busca las mejores soluciones y nunca se conforma con lo mismo."',
    },
    role: {
      pt: 'Senior Product Leader',
      en: 'Senior Product Leader',
      es: 'Senior Product Leader',
    },
  },
  {
    name: 'Yves Gurgel',
    initials: 'YG',
    gradient: 'bg-gradient-to-br from-orange-400 to-orange-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHh6B3Vi0vhkg/profile-displayphoto-shrink_100_100/B4DZRVv7eiGkAU-/0/1736605416248?e=1780531200&v=beta&t=D48laWOttD84bE_nGE4sO04ioNnIP9szD7l3ap6n1j0',
    text: {
      pt: '"Ótimo profissional, muito empenhado e talentoso."',
      en: '"Great professional, very dedicated and talented."',
      es: '"Excelente profesional, muy dedicado y talentoso."',
    },
    role: {
      pt: 'Innovation PM · Mentor',
      en: 'Innovation PM · Mentor',
      es: 'Innovation PM · Mentor',
    },
  },
  {
    name: 'Victoria Drapala Lacerda',
    initials: 'VD',
    gradient: 'bg-gradient-to-br from-rose-400 to-rose-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEHRu4ZCqMDKQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718796692349?e=1780531200&v=beta&t=jVqhOWWeUi3cgKqe5XRQROooTH-eSvbJqXpSDhbmZS4',
    text: {
      pt: '"Do Cleidson destaco parceria e comportamento. A maturidade para avaliar momento da empresa, viabilidade técnica e a curiosidade para criar caminhos de validação antes do deploy foram diferenciais da sua atuação no Repassa. Sua atuação foi essencial para criarmos um processo de desenvolvimento mais fluido e assertivo."',
      en: '"From Cleidson I highlight partnership and behavior. The maturity to assess the company moment, technical feasibility, and the curiosity to create validation paths before deploy were differentials of his work at Repassa. His contribution was essential to building a more fluid and assertive development process."',
      es: '"De Cleidson destaco la colaboración y el comportamiento. La madurez para evaluar el momento de la empresa, la viabilidad técnica y la curiosidad para crear caminos de validación antes del deploy fueron diferenciales en su actuación en Repassa. Su trabajo fue esencial para construir un proceso de desarrollo más fluido y asertivo."',
    },
    role: {
      pt: 'Group Product Manager',
      en: 'Group Product Manager',
      es: 'Group Product Manager',
    },
  },
  {
    name: 'Samara W. Santos',
    initials: 'SS',
    gradient: 'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFMn76IgtoExw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731545659580?e=1780531200&v=beta&t=n7sWJMjUeedUXqsnK6PNjUd8BWvxWkodX2WUDm8EEOU',
    text: {
      pt: '"Cleidson é muito dedicado e colaborativo. Torna o trabalho em equipe mais leve e entrega grande qualidade em seus trabalhos. Sempre disposto a aprender."',
      en: '"Cleidson is very dedicated and collaborative. He makes teamwork lighter and delivers great quality in his work. Always willing to learn."',
      es: '"Cleidson es muy dedicado y colaborativo. Hace que el trabajo en equipo sea más liviano y entrega gran calidad en sus trabajos. Siempre dispuesto a aprender."',
    },
    role: {
      pt: 'Product Designer · Design System',
      en: 'Product Designer · Design System',
      es: 'Product Designer · Design System',
    },
  },
  {
    name: 'Luciana Lima',
    initials: 'LL',
    gradient: 'bg-gradient-to-br from-teal-400 to-teal-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHt2jYTBjywVg/profile-displayphoto-scale_100_100/B4DZfa1m2SHMAc-/0/1751723175801?e=1780531200&v=beta&t=HtuXIfWbhkJHuTxHmHofSk78LO03O10z2SxwdO0_wY0',
    text: {
      pt: '"Cleidson é um profissional sempre atualizado e integrado com o time. Além disso ele tem ótimas ideias e sempre está disposto a ajudar de forma colaborativa."',
      en: '"Cleidson is always up to date and integrated with the team. He has great ideas and is always willing to help in a collaborative way."',
      es: '"Cleidson es un profesional siempre actualizado e integrado con el equipo. Tiene grandes ideas y siempre está dispuesto a ayudar de forma colaborativa."',
    },
    role: {
      pt: 'Liderança · HRBP Estratégica',
      en: 'Leadership · Strategic HRBP',
      es: 'Liderazgo · HRBP Estratégico',
    },
  },
  {
    name: 'Camila Galindo Dantas',
    initials: 'CG',
    gradient: 'bg-gradient-to-br from-violet-400 to-violet-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHJc5xqJWiyPg/profile-displayphoto-shrink_100_100/B4DZZuTibWGsAY-/0/1745607338220?e=1780531200&v=beta&t=kFF4oKvo2hsdty5VkeP8G_6VVQZq9EONn4zUL9oVEZ4',
    text: {
      pt: '"O Cleidson é aquele tipo de Product Designer completo: atento aos detalhes e, ao mesmo tempo, profundamente conectado às pessoas. Combina domínio técnico admirável com a habilidade de criar pontes, seja com o time, stakeholders ou clientes."',
      en: '"Cleidson is the kind of complete Product Designer: attentive to details and, at the same time, deeply connected to people. He combines admirable technical mastery with the ability to build bridges — with the team, stakeholders, or clients."',
      es: '"Cleidson es ese tipo de Product Designer completo: atento a los detalles y, al mismo tiempo, profundamente conectado con las personas. Combina un dominio técnico admirable con la habilidad de crear puentes — con el equipo, los stakeholders o los clientes."',
    },
    role: {
      pt: 'Product Manager Specialist',
      en: 'Product Manager Specialist',
      es: 'Product Manager Specialist',
    },
  },
  {
    name: 'Lucimara Dias S. Braz',
    initials: 'LD',
    gradient: 'bg-gradient-to-br from-amber-400 to-amber-600',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQGTTGKZ-SUpvA/profile-framedphoto-shrink_100_100/B4DZmlaqcGIEAk-/0/1759416854733?e=1779822000&v=beta&t=itoJ3Hmzv0224AtOp-6e5QCkubV2DArxhbmQaCS6ZOk',
    text: {
      pt: '"Profissional dedicado e comprometido, trazendo muitos insights para o produto e ótimo conhecimento em UX Design."',
      en: '"Dedicated and committed professional, bringing many insights to the product and great knowledge in UX Design."',
      es: '"Profesional dedicado y comprometido, aportando muchos insights al producto y un gran conocimiento en UX Design."',
    },
    role: {
      pt: 'Business Analyst · Product Owner',
      en: 'Business Analyst · Product Owner',
      es: 'Business Analyst · Product Owner',
    },
  },
];
