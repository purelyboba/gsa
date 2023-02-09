import React from 'react';

import styles from '../styles/styles.module.css';
import Navbar from './navbar';
import Page from './pageLayout';

export default function HomePage() {
  return (
    <div className={styles.body}>
      <Navbar />
      <main class={styles.main}>
        <Page
          id="home"
          title="8405 Millburn Robotics"
          p="8405 Millburn Robotics is a FIRST® Tech Challenge team based at Millburn High School in Millburn, New Jersey. FIRST® is a nonprofit inspiring students to become future leaders in stem through unique, hands-on programs worldwide. Despite being the first year in FTC for all but one of our members, our previous robotics experience drives our mission. Our experience with AI and machine learning spurs us to create with the elimination of human error and optimization of menial tasks in mind. We strive to build with the same ideals of optimization and reliability; whether that be through CAD, discussion or illustration."
        />
      </main>
    </div>
  )
}
