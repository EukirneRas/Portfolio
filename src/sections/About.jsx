import Section from '../components/Section.jsx';
import { profile, contacts } from '../data/portfolio.js';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className={styles.grid}>
        <img src={profile.photo} alt={`Foto de ${profile.name}`} className={styles.photo} />
        <div>
          {profile.about.map((p) => <p key={p} className={styles.text}>{p}</p>)}
          <ul className={styles.contacts}>
            {contacts.map(({ label, value, href }) => (
              <li key={label}><strong>{label}:</strong> <a href={href} target="_blank" rel="noreferrer">{value}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
