import React from 'react';

import styles from '../styles/styles.module.css';
import Navbar from './navbar';
import Page from './pageLayout';

export default function HomePage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main className={styles.main}>
        <Page
          id="home"
          title="8405 Millburn Robotics"
          p="8405 Millburn Robotics is a FIRST® Tech Challenge (FTC) team based at Millburn High School in Millburn, New Jersey. FTC is a nonprofit robotics competition where teams build and program robots to compete, inspiring students in STEM through hands-on learning and direct experience in the competition. We strive to exhibit gracious professionalism in all that we do as an FTC team. Aside from the competition itself, our team members also participate in outreach events, such as EssexIQ, a nonprofit where we pass on robotics skills we have learned through FTC."
        />
      </main>
    </div>
  )
}
