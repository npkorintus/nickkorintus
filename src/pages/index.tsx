import Head from "next/head";
import Layout from "@/components/layout";
import styles from '@/styles/Home.module.css';
import { montserrat400, montserrat700 } from "@/fonts";

export default function Home() {
  console.log("I get computers 'puting.");

  return (
    <>
      <Head>
        <title>Nick Korintus</title>
        <meta name="description" content="Just another personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <h1 className={`${montserrat400.className} ${styles.title}`}>Hello there! I&apos;m <span className={montserrat700.className}>Nick Korintus</span>, a front-end developer who enjoys building simple, beautiful user experiences.</h1>
      </Layout>
    </>
  );
}
