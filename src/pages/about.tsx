import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section className={styles.about}>
        <p className={styles.text}>
          Hi, I&apos;m Nick - a passionate front-end developer based in Media,
          PA. With a diverse background that spans full-stack development, UI/UX
          design, and software engineering, I specialize in creating intuitive,
          responsive web interfaces that provide seamless user experiences.
          Whether it&apos;s delivering new features for customer-facing
          applications or optimizing legacy systems, I focus on building clean,
          maintainable code that scales with your needs.
        </p>
        <p className={styles.text}>
          I have hands-on experience with a variety of modern web technologies,
          including HTML, CSS, JavaScript, React, AngularJS, and TypeScript,
          along with back-end knowledge in C#, .NET, and SQL. My journey as a
          developer has equipped me with a comprehensive understanding of the
          full software development life cycle, from initial design and
          documentation to testing and deployment.
        </p>
        <p className={styles.text}>
          What drives me is the continuous opportunity to learn and grow -
          whether it&apos;s experimenting with the latest frameworks, improving
          UI/UX design, or staying up to date with industry trends. I&apos;m a
          natural problem-solver, and I thrive in environments where I can make
          meaningful contributions to both the product and the team.
        </p>
        <p className={styles.text}>
          If you&apos;re looking for a developer who is detail-oriented,
          collaborative, and always eager to take on new challenges, let&apos;s
          connect!
        </p>
        <p className={styles.text}>
          Explore my work on{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/npkorintus"
          >
            GitHub
          </a>
          , check out my{" "}
          <a
            className={styles.link}
            href="/Nick_Korintus_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          , or shoot me an{" "}
          <a href="mailto:nicholas.korintus@gmail.com" className={styles.link}>
            email
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
