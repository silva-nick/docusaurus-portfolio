import React, { userState } from 'react';
import Layour from '@theme/Layout';

import RepoCard from '@theme/RepoCard';
import UserCard from '@theme/UserCard';
import styles from './styles.module.css';

export default function PortfolioPage(props) {
  const { userProps, repoProps, pageProps } = props;

  function makeGrid(repos) {
    const repoCards = repos.map((repo) => <RepoCard {...repo} />);
    const grid = [];
    for (let index in repoCards) {
      if (index == repoCards.length - 1) {
        grid.push(
          <div className={'row'}>
            <div className={'col--6'}>{repoCards[index]}</div>
          </div>,
        );
      } else {
        grid.push(
          <div className={'row'}>
            <div className={'col'}>{repoCards[index]}</div>
            <div className={'col'}>{repoCards[++index]}</div>
          </div>,
        );
      }
    }
    return grid;
  }

  return (
    <Layout title={pageProps.title} description={pageProps.description}>
      <div className={'userHolder'}>
        <UserCard {...userProps} />
      </div>
      <div className={'repoHolder container'}>{makeGrid(repoProps)}</div>
    </Layout>
  );
}
