import styles from './Section.module.css';

// Wrapper reutilizável: toda seção compartilha id (âncora), título e espaçamento.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
