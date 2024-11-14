import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import styles from '@/styles/Projects.module.css';

const projects = [
  {
    title: 'URL Shortener',
    desc: 'Implemented a form to integrate with the Clean URI link shortening API and leveraged the Fetch API as well as local storage.',
    tags: ['React', 'Next.js', 'Fetch API'],
    url: 'https://shortly-one-chi.vercel.app/'
  },
  {
    title: 'Dictionary App',
    desc: 'Integrated with the Dictionary API to create a real-world dictionary web app. Includes color themes and font selection.',
    tags: ['React', 'Chakra UI', 'Vite'],
    url: 'https://npkorintus.github.io/dictionary-web-app/'
  },
  {
    title: 'Job Listings',
    desc: 'Utilized JavaScript to filter out jobs based on selected categories using data from a local JSON file.',
    tags: ['React', 'MUI', 'Vite'],
    url: 'https://filterable-job-listings.netlify.app/'
  },
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      {projects.map(project => (
        <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.project}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.tags}>{project.tags.join(" / ")}</p>
          <p>{project.desc}</p>
        </div>
        </a>
      ))}
    </Layout>
  );
}
