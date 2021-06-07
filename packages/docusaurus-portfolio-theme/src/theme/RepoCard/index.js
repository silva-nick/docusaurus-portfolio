import clsx from 'clsx';
import React, { Children } from 'react';
import styles from './index.module.css';

/*
const exampleProps = {
  name: 'Block-Dict',
  repoUrl: 'https://github.com/facebook/docusaurus',
  description:
    'This is an application that does something useful for development in the real world development',
  language: 'Java',
  stargazers_count: 100,
  forks_count: 10,
};
*/

export function RepoCard(props) {
  const {
    name,
    repoUrl,
    description,
    language,
    stargazers_count,
    forks_count,
  } = props;

  return (
    <div className={'col col--6 margin-bottom--lg'}>
      <div className={'card card--full-height'}>
        <div className={'card__header'}>
          <h3>{name}</h3>
        </div>
        <div className={'card__body'}>
          <p>{description}</p>
        </div>
        <div className={clsx('card__footer', styles.bottom)}>
          <div className={styles.bottomIcon}>
            <p>{`💻 ${language}`}</p>
          </div>
          <div className={styles.bottomIcon}>
            <p>{`⭐ ${stargazers_count}`}</p>
          </div>
          <div className={styles.bottomIcon}>
            <p>{`🍴 ${forks_count}`}</p>
          </div>
          <div className={styles.bottomSpace} />
        </div>
      </div>
    </div>
  );
}
