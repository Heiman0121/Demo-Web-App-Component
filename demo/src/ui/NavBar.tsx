import React, { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <a href="/">
        <button className={styles.title}>Demo</button>
      </a>
      <nav>
        <ul
          className={
            nav
              ? [styles.menu, styles.active].join(' ')
              : styles.menu
          }>
          <li>
            <a href="/password">PasswordValidation</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
          <li>
            <a href="/landing">Landing</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>

          <li>
            <Bars3Icon />
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setNav(!nav)}
        className={styles.mobile_btn}>
        {nav ? (
          <XMarkIcon className="block h-6 w-6" />
        ) : (
          <Bars3Icon className="block h-6 w-6" />
        )}
      </div>
    </header>
  );
};

export default NavBar;
