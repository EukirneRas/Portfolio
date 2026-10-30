import Tag from './Tag.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, onOpen }) {
  const { title, category, short, tech, images } = project;
  return (
    <article className={styles.card}>
      <img src={images[0]} alt={`Captura de tela do projeto ${title}`} className={styles.image} loading="lazy" />
      <div className={styles.body}>
        <p className={styles.eyebrow}>{category}</p>
        <h3>{title}</h3>
        <p className={styles.text}>{short}</p>
        <div className={styles.tags}>{tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <button className={styles.button} onClick={() => onOpen(project)}>Ver detalhes</button>
      </div>
    </article>
  );
}
