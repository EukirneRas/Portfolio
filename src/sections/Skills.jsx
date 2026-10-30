import Section from '../components/Section.jsx';
import Tag from '../components/Tag.jsx';
import { skillGroups } from '../data/portfolio.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className={styles.grid}>
        {skillGroups.map(({ title, items }) => (
          <div key={title} className={styles.group}>
            <h3>{title}</h3>
            <div className={styles.tags}>{items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
