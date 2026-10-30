import { useEffect } from 'react';
import Tag from './Tag.jsx';
import styles from './ProjectModal.module.css';

// Detalhamento do projeto: galeria de imagens, descrição completa, tecnologias e links.
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { title, category, long, highlights, tech, images, repo, demo } = project;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar detalhes">✕</button>
        <p className={styles.eyebrow}>{category}</p>
        <h3>{title}</h3>
        <div className={styles.gallery}>
          {images.map((src, i) => <img key={src} src={src} alt={`${title} — imagem ${i + 1}`} />)}
        </div>
        <p>{long}</p>
        <ul className={styles.highlights}>{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <div className={styles.tags}>{tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className={styles.links}>
          {repo && <a href={repo} target="_blank" rel="noreferrer" className={styles.primary}>Ver repositório</a>}
          {demo && <a href={demo} target="_blank" rel="noreferrer" className={styles.secondary}>Ver demonstração</a>}
        </div>
      </div>
    </div>
  );
}
