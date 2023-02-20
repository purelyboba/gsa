import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/styles.module.css';
import Navbar from './navbar';
import Page from './pageLayout';

export default function PowerplayPage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main className={styles.main}>
      <article>
        <div className={styles.mainsection} id={styles.maininfo}>
          <div className={styles.subsection} id={styles[`powerplayimage`]}></div>
          <div className={styles.subsection} id={styles.maintitle}>
            <h1>Powerplay 2022-23</h1>
          </div>
        </div>
        <div className={styles.mainsection} id={styles.maindesc}>
          <p>This is our first season back after a 2 year break. We are doing really well so far, being crowned league champions and advancing to the state championship.</p>
          <Image />
          <Link id={styles.pagenav} href="/home">
            <button>home</button>
          </Link>
        </div>
      </article>
      </main>
    </div>
  )
}