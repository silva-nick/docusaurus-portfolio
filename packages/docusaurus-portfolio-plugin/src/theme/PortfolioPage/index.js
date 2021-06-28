import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import RepoCard from '@theme/RepoCard';
import UserCard from '@theme/UserCard';
import ContentFrame from '@theme/ContentFrame';
import * as styles from './styles.module.css';

export default function PortfolioPage(props) {
  const { userProps, repoProps, pageProps } = props;
  const { pageTitle, pageDescription } = pageProps;

  function makeGrid(repos) {
    const repoCards = repos.map((repo) => <RepoCard {...repo} />);
    const grid = [];
    for (let index = 0; index < repoCards.length; index++) {
      if (index == repoCards.length - 1) {
        grid.push(
          <div className={'row'} key={index}>
            <div className={'col col--6'}>{repoCards[index]}</div>
          </div>,
        );
      } else {
        grid.push(
          <div className={'row'} key={index}>
            <div className={'col margin-bottom--lg'}>{repoCards[index]}</div>
            <div className={'col margin-bottom--lg'}>{repoCards[++index]}</div>
          </div>,
        );
      }
    }
    return grid;
  }

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <div className={styles.pPageLayout}>
        <div className={styles.userHolder}>
          <UserCard {...userProps} />
        </div>
        <div className={clsx(styles.repoHolder, 'container')}>
          <ContentFrame />
          {makeGrid(repoProps.repos)}
        </div>
      </div>
    </Layout>
  );
}
