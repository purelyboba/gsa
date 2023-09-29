import React from 'react';
import Link from 'next/link';

import styles from '../styles/styles.module.css';
import Navbar from './navbar';
import Page from './pageLayout';

export default function HomePage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main className={styles.main}>
      <article>
        <div className={styles.mainsection} id={styles.maininfo}>
          <div className={styles.subsection} id={styles[`homeimage`]}></div>
          <div className={styles.subsection} id={styles.maintitle}>
            <h1>The Garden State Alliance</h1>
          </div>
        </div>
        <div className={styles.mainsection} id={styles.maindesc}>
          <p>The Garden State Alliance is a distinguished collective of First Tech Challenge (FTC) teams based in New Jersey, dedicated to furthering the ideals of cooperative competition and community involvement. Emphasizing both technological advancement and community connection, this alliance not only competes at a high level but also organizes an array of outreach events to engage the public and inspire future generations. Recognizing that preparation and practice are paramount, the alliance also hosts scrimmages, fostering a collaborative environment where teams can test their robotic designs, share strategies, and refine their skills. Through these endeavors, The Garden State Alliance exemplifies the true spirit of FTC, blending competition with camaraderie, and innovation with outreach.</p>
          <Link id={styles.pagenav} href="https://discord.gg/8XKe3gyCZG" target='blank'>
            <button>join now</button>
          </Link>
        </div>
      </article>
      </main>
    </div>
  )
}
