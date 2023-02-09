import React from 'react';

import styles from '../styles/styles.module.css';
import Navbar from './navbar';
import Page from './pageLayout';

export default function AboutPage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main class={styles.main}>
        <Page
          id="about"
          title="About"
          p="Our team consists of 15 members across grades at Millburn High School. This is our first year back to FTC after a 2 year break."
        />
      </main>
    </div>
  )
}
