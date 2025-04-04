import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import ThemeImage from '@/components/theme-image';
import styles from '@/styles/Projects.module.css';
import Image from 'next/image';

const projects = [
  {
    title: 'Space Tourism',
    desc: 'Built a multi-page landing website for a mock space tourism company. Fully responsive, includes a local data.json file for mocking API calls, and follows WCAG and ADA compliance guidelines. Developed using Figma design files.',
    tags: ['Vue', 'Nuxt.js', 'SCSS', 'Netlify'],
    url: 'https://nk-space-tourism.netlify.app/',
    image: '/projects/space-tourism-md.png'
  },
  {
    title: 'URL Shortener',
    desc: 'Implemented a form to integrate with the Clean URI link shortening API and leveraged the Fetch API as well as local storage.',
    tags: ['React', 'Next.js', 'Fetch API', 'Vercel'],
    url: 'https://shortly-one-chi.vercel.app/',
    image: '/projects/url-shortener-md.png'
  },
  {
    title: 'Dictionary App',
    desc: 'Integrated with the Dictionary API to create a real-world dictionary web app. Includes color themes and font selection.',
    tags: ['React', 'Chakra UI', 'Vite', 'GitHub Pages'],
    url: 'https://npkorintus.github.io/dictionary-web-app/',
    image: '/projects/dictionary-app-md.png'
  },
  {
    title: 'Job Listings',
    desc: 'Utilized JavaScript to filter out jobs based on selected categories using data from a local JSON file.',
    tags: ['React', 'Material UI', 'Vite', 'Netlify'],
    url: 'https://filterable-job-listings.netlify.app/',
    image: '/projects/job-listings-md.png'
  },
  {
    title: 'Advice Generator',
    desc: 'Connected to third-party Advice Slip API using the Fetch API to create an advice generator web app. Fully responsive for multiple device sizes.',
    tags: ['Astro', 'CSS', 'Fetch API', 'Netlify'],
    url: 'https://advice-generator-v2.netlify.app',
    image: '/projects/advice-generator-md.png'
  }
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section className={styles.projectList}>
        {projects.map(project => (
          <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.projectImg}
              src={project.image}
              width={400}
              height={300}
              alt="project image"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <div className={styles.project}>
              <div className={styles.title}>
                <h3>{project.title}</h3>
                <div className={styles.linkImgWrapper}>
                  <ThemeImage
                    alt="external link"
                    srcDark="/svgs/external-link-white.svg"
                    srcLight="/svgs/external-link.svg"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <p className={styles.tags}>{project.tags.join(" / ")}</p>
              <p>{project.desc}</p>
            </div>
          </a>
        ))}
      </section>
    </Layout>
  );
}
