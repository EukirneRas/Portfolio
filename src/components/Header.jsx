import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ links, active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <a href="#inicio" className={styles.logo}>HR</a>
        <button
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu"
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <ul id="menu" className={`${styles.menu} ${open ? styles.open : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? styles.active : ''}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
