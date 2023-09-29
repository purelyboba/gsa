import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/styles.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div id={styles.navlogo} class={styles.navsection}>
                <Link className={styles.navimage} href="/"><Image src="/gsaLogoClear.png" width={70} height={70} /></Link>
                <Link className={styles.navtitle} href="/">
                The Garden State Alliance
                </Link>
            </div>
            <div id={styles.navcontact} class={styles.navsection}>
                <Link href="https://discord.gg/8XKe3gyCZG" target='_blank'>
                join now
                </Link>
            </div>
            <div id={styles.hamburger} />
        </nav>
    )
}