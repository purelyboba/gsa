import React from 'react';
import Link from 'next/link';

import styles from '../styles/styles.module.css';

export default function Page({id, title, p}) {
  return (
    <article>
      <div className={styles.mainsection} id={styles.maininfo}>
        <div className={styles.subsection} id={styles[`${id}image`]}></div>
        <div className={styles.subsection} id={styles.maintitle}>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.mainsection} id={styles.maindesc}>
        <p>{p}</p>
      </div>
    </article>
  )
}