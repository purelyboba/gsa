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
          p="Our robotics team consists of 15 members across all four grades at Millburn High School. This is our first year back to FTC after a 2 year break, and all but one of our members are new to FTC. However, many of our members have previous robotics experience from other competitions like our school's VEX and VEXAI teams. This past experience gives our team a diverse skillset and profiency in many areas of STEM, such as AI and machine learning. Our team is composed of 9 builders and 6 coders, but many of us also have other roles like driving the robot, and managing outreach. CAD and the production of custom parts through machining is also important to the team. "
        />
      </main>
    </div>
  )
}
