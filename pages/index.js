import React from 'react';

import styles from '../styles/styles.module.css';
import HomePage from './home';
import Navbar from './navbar';
import Page from './pageLayout';

export default function Home() {
  return (
    <div className={styles.body}>
      <HomePage />
    </div>
  )
}
