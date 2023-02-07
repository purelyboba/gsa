import Link from 'next/link';
import Image from 'next/image';

import React, {useState} from 'react';

import styles from '../styles/styles.module.css';

export default function Home() {
  const [status, setStatus] = useState(true);

  const handleStatusToggle = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }
  
  return (
    <>
      <nav class={styles.nav}>
        <div id={styles.navlogo} class={styles.navsection}>
          <Link href="#">
            MillburnFTC
          </Link>
        </div>
        <div id={styles.navlink} class={styles.navsection}>
          <Link href="#">
            about
          </Link>
          <Link href="#">
            build
          </Link>
          <Link href="#">
            code
          </Link>
        </div>
        <div id={styles.navsocial} class={styles.navsection}>
          <Link href="#">
            github
          </Link>
          <Link href="#">
            instagram
          </Link>
          <Link href="#">
            youtube
          </Link>
        </div>
        <div id={styles.navcontact} class={styles.navsection}>
          <Link href="#">
            contact
          </Link>
        </div>
      </nav>

      <main class={styles.main}>
        <article id="article-zero" data-status={status}>
          <div class={styles.mainsection} id={styles.maininfo}>
            <div class={styles.subsection} id={styles.mainimage}></div>
            <div class={styles.subsection} id={styles.maintitle}>
              <h1>8405 Millburn Robotics</h1>
            </div>
          </div>
          <div class={styles.mainsection} id={styles.maindesc}>
            <p>
              We are 8405 Millburn Robotics, a FTC (First Tech Challenge) team based in Millburn, NJ.
            </p>
            <div id={styles.pagenav}>
              <button onClick={handleStatusToggle}>about</button>
            </div>
          </div>
        </article>
        <article id="article-one" data-status={!status}>
          <div class={styles.mainsection} id={styles.maininfo}>
            <div class={styles.subsection} id={styles.aboutimage}></div>
            <div class={styles.subsection} id={styles.maintitle}>
              <h1>About</h1>
            </div>
          </div>
          <div class={styles.mainsection} id={styles.maindesc}>
            <p>
              Out team consists of 15 members across grades at Millburn High School. This is our first year back to FTC after a 2 year break.
            </p>
            <div id={styles.pagenav}>
              <button onClick={handleStatusToggle}>home</button>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
