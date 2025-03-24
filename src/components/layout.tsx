import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';
import { merriweather, montserrat } from '@/fonts';
import Image from 'next/image';

const name = 'Nick Korintus';
export const siteTitle = `${name} Portfolio Website`;

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean
};

export default function Layout({ children, home }: LayoutProps) {
  const pathname = usePathname().slice(1);
  // console.log(pathname)
  const YEAR = new Date().getFullYear();

  return (
    <div className={`${home && styles.fadetext} ${styles.container} ${merriweather.className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A simple personal portfolio website built using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li><Link className={styles.navlink} href="/about" data-active={pathname === 'about' || undefined}>about</Link></li>
            <li><Link className={styles.navlink} href="/projects" data-active={pathname === 'projects' || undefined}>projects</Link></li>
          </ul>
        </nav>
      </header>
      <main className={montserrat.className}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← <span className={styles.homelink}>Back to home</span></Link>
        </div>
      )}
      <footer className={`${styles.footer} ${montserrat}`}>
        <small className={styles.copyright}>&copy; {YEAR} Nick Korintus</small>
        <div className={styles.socialLinks}>
          <a href="https://github.com/npkorintus" target="_blank"><Image src="/github.svg" height={18} width={18} alt="Github icon" /></a>
          <a href="https://www.linkedin.com/in/nick-korintus/" target="_blank"><Image src="/linkedin.svg" height={18} width={18} alt="LinkedIn icon" /></a>
          <a href="mailto:nicholas.korintus@gmail.com" target="_blank"><Image src="/email.svg" height={18} width={18} alt="Email icon" /></a>
        </div>
      </footer>
    </div>
  );
}
