import { useState } from 'react';
import { contacts } from '../data/portfolio.js';
import styles from './ContactForm.module.css';

const initial = { name: '', email: '', message: '' };

// Formulário sem backend: valida os campos e abre o app de e-mail do visitante (mailto).
export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Preencha nome, e-mail e mensagem para enviar.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nDe: ${form.name} (${form.email})`);
    window.location.href = `mailto:${contacts[0].value}?subject=${subject}&body=${body}`;
    setForm(initial);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label>Nome<input name="name" value={form.name} onChange={handleChange} autoComplete="name" /></label>
      <label>E-mail<input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" /></label>
      <label>Mensagem<textarea name="message" rows="5" value={form.message} onChange={handleChange} /></label>
      {error && <p role="alert" className={styles.error}>{error}</p>}
      <button type="submit">Enviar mensagem</button>
    </form>
  );
}
