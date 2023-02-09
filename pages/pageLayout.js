import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '../styles/styles.module.css';

export default function Page({id, title, p}) {
  return (
    <article>
      <div class={styles.mainsection} id={styles.maininfo}>
        <div class={styles.subsection} id={styles[`${id}image`]}></div>
        <div class={styles.subsection} id={styles.maintitle}>
          <h1>{title}</h1>
        </div>
      </div>
      <div class={styles.mainsection} id={styles.maindesc}>
        <p>{p}</p>
        <Link id={styles.pagenav} href="/about">
          <button>about</button>
        </Link>
      </div>
    </article>
  )
}