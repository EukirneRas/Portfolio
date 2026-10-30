# Portfólio — Henrique de Andrade Rodrigues

Portfólio online em React com quatro seções: **Sobre mim**, **Projetos**, **Habilidades** e **Contato**. Paleta em azul e laranja, estilização com CSS Modules e layout responsivo.

## Como rodar localmente

```bash
git clone https://github.com/EukirneRas/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
```

## Estrutura

```
src/
├── components/   # Header, Section, ProjectCard, ProjectModal, ContactForm, Tag
├── sections/     # Hero, About, Projects, Skills, Contact
├── hooks/        # useActiveSection (destaca a seção visível no menu)
├── data/         # portfolio.js — todo o conteúdo editável
└── App.jsx
```

## Projetos apresentados

1. **LogiTrack** (Back-end) — 5 microsserviços com Java/Spring Boot, Kafka, JWT, PostgreSQL, DynamoDB e Docker Compose. [Repositório](https://github.com/EukirneRas/LogiTrack)
2. **MundoAfora** (Front-end) — portal de viagens em Next.js e TypeScript, com LCP de 4,3 s para 1,5 s. [Repositório](https://github.com/EukirneRas/Portal-Viagens-EBAC) · [Demo](https://portal-viagens-ebac.vercel.app)
3. **Lista de Tarefas** (CI/CD, testes e performance) — Next.js com 12 testes e pipeline GitHub Actions. [Repositório](https://github.com/EukirneRas/Teste-Next.js-EBAC) · [Demo](https://teste-next-js-ebac.vercel.app)