import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/styles.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div id={styles.navlogo} class={styles.navsection}>
                <Link className={styles.navimage} href="/"><Image src="/logo.png" width={30} height={30} /></Link>
                <Link className={styles.navtitle} href="/">
                8405 | Millburn Robotics
                </Link>
            </div>
            <div id={styles.navsocial} class={styles.navsection}>
                <Link href="https://github.com/SaazM/8405FTC" target={"_blank"}>
                github
                </Link>
                <Link href="https://www.instagram.com/8405millburnrobotics/" target={"_blank"}>
                instagram
                </Link>
                <Link href="https://www.youtube.com/@millburnrobotics174" target={"_blank"}>
                youtube
                </Link>
            </div>
            <div id={styles.navcontact} class={styles.navsection}>
                <Link href="#">
                contact
                </Link>
            </div>
            <div id={styles.hamburger} />
        </nav>
    )
}