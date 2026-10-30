import { useState } from 'react';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import { projects } from '../data/portfolio.js';
import styles from './Projects.module.css';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="projetos" title="Projetos">
      <div className={styles.grid}>
        {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
