// Todo o conteúdo do portfólio fica aqui. Para atualizar o site, edite apenas este arquivo.

export const profile = {
  name: 'Henrique de Andrade Rodrigues',
  role: 'Analista de Sistemas e Desenvolvedor Full Stack',
  stack: 'Java · Spring Boot · React · AWS',
  summary:
    'Foco em Desenvolvimento Back-End, Arquitetura de Software e metodologias ágeis. Uso a programação para otimizar processos e entregar soluções seguras, escaláveis e de qualidade.',
  about: [
    'Sou Analista de Sistemas e Desenvolvedor Full Stack, com foco em Desenvolvimento Back-End, Arquitetura de Software e metodologias ágeis. Uso a programação para otimizar processos e entregar soluções seguras, escaláveis e de qualidade.',
    'Na Crialed, minha última experiência, liderei o projeto de parceria com o iFood, coordenando desde a configuração técnica e a gestão de dados (BI) até a comunicação estratégica entre stakeholders. No projeto, apliquei Testes Automatizados com Selenium, Jest e Zephyr para garantir a qualidade das entregas.',
    'No back-end, desenvolvo APIs RESTful e GraphQL com Java/Spring Boot e .NET, com Autenticação e Autorização via JWT e Segurança Web. Trabalho com bancos relacionais (SQL Server, MySQL, PostgreSQL) e não relacionais (DynamoDB), usando ORM. Aplico trabalhos assíncronos e filas com Apache Kafka em arquiteturas de microsserviços, além de WebSockets, File Storage e Uploads, Monitoramento e Logs, Containers e Orquestração (Docker e Docker Compose) e Cloud Computing (AWS). Organizo o trabalho com Git/GitHub e CI/CD com GitHub Actions.',
    'Sou naturalmente curioso, aprendo rápido e me adapto com facilidade a novas tecnologias e ambientes. Essa bagagem me permite analisar problemas sob diferentes perspectivas e chegar a soluções eficientes.',
  ],
  photo: './foto.jpg',
};

export const contacts = [
  { label: 'E-mail', value: 'henriqedeandraderodrigues@gmail.com', href: 'mailto:henriqedeandraderodrigues@gmail.com' },
  { label: 'Telefone', value: '(11) 9 6491-7051', href: 'tel:+5511964917051' },
  { label: 'LinkedIn', value: 'henrique-de-andrade-rodrigues', href: 'https://www.linkedin.com/in/henrique-de-andrade-rodrigues/' },
  { label: 'GitHub', value: 'EukirneRas', href: 'https://github.com/EukirneRas' },
];

// Para adicionar capturas de tela reais, coloque os arquivos em public/projects/ e inclua em "images".
export const projects = [
  {
    id: 'logitrack',
    title: 'LogiTrack — rastreamento de entregas',
    category: 'Back-end',
    short: 'Arquitetura de microsserviços com Kafka, JWT, PostgreSQL, DynamoDB e Docker Compose.',
    long: 'Sistema de rastreamento de entregas, projeto final do módulo de Backend, que replica em escala reduzida a arquitetura de empresas de logística e delivery. São 5 microsserviços implementados e funcionais.',
    highlights: [
      'auth, user, order, delivery e tracking, cada um com seu banco (database-per-service).',
      'Autenticação com JWT e RBAC por role (ADMIN, CLIENTE, ENTREGADOR), com respostas 401 e 403.',
      'Evento order-created publicado no Kafka e consumido por delivery-service e tracking-service.',
      'Persistência poliglota: PostgreSQL para dados transacionais e DynamoDB (via LocalStack) para o histórico de rastreamento.',
      'Ambiente completo com docker compose up, documentação Swagger e testes unitários com JUnit 5 e Mockito.',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'JWT', 'PostgreSQL', 'DynamoDB', 'Docker Compose'],
    images: ['./projects/logitrack-arquitetura.svg'],
    repo: 'https://github.com/EukirneRas/LogiTrack',
    demo: '',
  },
  {
    id: 'portal-viagens',
    title: 'MundoAfora — portal de viagens',
    category: 'Front-end',
    short: 'Portal em Next.js com TypeScript e otimização de performance medida no Lighthouse.',
    long: 'Portal de viagens com catálogo de destinos e páginas dinâmicas por destino, feito em Next.js 16 (App Router), TypeScript e CSS Modules. Também documenta uma análise de performance com Lighthouse, com medições antes e depois das otimizações.',
    highlights: [
      'Página inicial, listagem de 6 destinos e rota dinâmica /destinos/[id].',
      'Imagem do hero migrada de background-image para next/image: LCP de 4,3 s para 1,5 s.',
      'Performance no Lighthouse de 79 para 99 e peso total da página de 651 KiB para 339 KiB.',
      'Cards reutilizáveis, layout compartilhado e tipagem em TypeScript.',
    ],
    tech: ['Next.js', 'TypeScript', 'CSS Modules', 'Lighthouse'],
    images: ['./projects/portal-viagens.svg'],
    repo: 'https://github.com/EukirneRas/Portal-Viagens-EBAC',
    demo: 'https://portal-viagens-ebac.vercel.app',
  },
  {
    id: 'next-tarefas',
    title: 'Lista de Tarefas — testes e CI/CD',
    category: 'CI/CD, testes e performance',
    short: 'Aplicação Next.js com 12 testes automatizados e pipeline no GitHub Actions com deploy na Vercel.',
    long: 'Lista de tarefas em Next.js 15 que usa Server e Client Components e um hook personalizado, cobertos por testes unitários. A pipeline de CI/CD roda lint, testes e build a cada push e publica automaticamente na Vercel.',
    highlights: [
      'Jest e Testing Library: 12 testes cobrindo componente, hook e página.',
      'GitHub Actions com os jobs build-and-test e deploy, que só publica se os testes passarem.',
      'Configuração do ESLint corrigida, de 4004 problemas para 0.',
      'Hook useContadorDeTarefas memoizado e formulário controlado com validação.',
    ],
    tech: ['Next.js', 'TypeScript', 'Jest', 'Testing Library', 'GitHub Actions', 'Vercel'],
    images: ['./projects/ci-cd-testes.svg'],
    repo: 'https://github.com/EukirneRas/Teste-Next.js-EBAC',
    demo: 'https://teste-next-js-ebac.vercel.app',
  },
];

export const skillGroups = [
  { title: 'Linguagens e frameworks', items: ['Java', 'Spring Boot', 'C#', '.NET', 'Python', 'React'] },
  { title: 'APIs e segurança', items: ['APIs RESTful', 'GraphQL', 'Autenticação e Autorização (JWT)', 'Segurança Web'] },
  { title: 'Bancos de dados', items: ['SQL Server', 'MySQL', 'PostgreSQL', 'DynamoDB', 'ORM'] },
  { title: 'Arquitetura e mensageria', items: ['Arquitetura de Software', 'Microsserviços', 'Apache Kafka', 'Trabalhos Assíncronos e Filas', 'WebSockets'] },
  { title: 'Cloud e infraestrutura', items: ['AWS', 'Docker', 'Docker Compose', 'File Storage e Uploads', 'Monitoramento e Logs'] },
  { title: 'Qualidade e entrega', items: ['Testes Automatizados', 'Selenium', 'Jest', 'Zephyr', 'Git/GitHub', 'CI/CD', 'GitHub Actions'] },
  { title: 'Dados e gestão', items: ['Power BI', 'Jira', 'Scrum', 'Kanban'] },
  { title: 'Idiomas', items: ['Inglês C1'] },
];
