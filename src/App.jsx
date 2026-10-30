import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import useActiveSection from './hooks/useActiveSection.js';

// Definidos fora do componente para manter a referência estável no hook.
const NAV = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];
const IDS = ['inicio', ...NAV.map((n) => n.id)];

export default function App() {
  const active = useActiveSection(IDS);
  return (
    <>
      <Header links={NAV} active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Henrique de Andrade Rodrigues
      </footer>
    </>
  );
}
