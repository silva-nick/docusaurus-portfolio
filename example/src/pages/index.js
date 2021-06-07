import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { UserCard } from '../components/index';

// TEM<P
let userData = {
  username: 'silva-nick',
  fullName: 'Nick Silva',
  links: ['google.com', 'linkedin.com'],
  avatar_url: 'https://avatars.githubusercontent.com/u/39960606?v=4',
  html_url: 'https://github.com/silva-nick',
  company: "google",
  location: "nowhere",
  hireable: "yes",
  bio: 'Sophomore CS Student.',
  created_at: '2018-06-05T15:17:27Z',
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <UserCard {...userData} />
    </Layout>
  );
}
