import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contacts } from '../data/portfolio.js';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <div className={styles.grid}>
        <ContactForm />
        <div className={styles.links}>
          <h3>Redes profissionais</h3>
          <a href={contacts[2].href} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contacts[3].href} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contacts[0].href}>E-mail</a>
        </div>
      </div>
    </Section>
  );
}
