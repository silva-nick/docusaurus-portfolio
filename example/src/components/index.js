import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

/*
let userData = {
  username: 'silva-nick',
  fullName: 'Nick Silva',
  links: ['google.com', 'linkedin.com'],
  avatar_url: 'https://avatars.githubusercontent.com/u/39960606?v=4',
  html_url: 'https://github.com/silva-nick',
  company: null,
  location: null,
  email: null,
  hireable: null,
  bio: 'Sophomore CS Student.',
  created_at: '2018-06-05T15:17:27Z',
};
*/

export function UserCard(props) {
  const {
    username,
    fullName,
    links,
    avatar_url,
    html_url,
    company,
    location,
    hireable,
    bio,
    created_at,
  } = props;

  const years = [
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
    '👴',
  ];

  const age = new Date().getFullYear() - created_at.substring(0, 4);

  return (
    <div className={'col col--6 margin-bottom--lg'}>
      <div className="avatar avatar--vertical">
        <a href={html_url}>
          <img
            className="avatar__photo avatar__photo--xl"
            src={avatar_url}
            alt={`${username}'s avatar`}
          />
        </a>
        <div className="avatar__intro">
          <h3 className="avatar__name">{username}</h3>
          {fullName && (
            <small className="avatar__name">{`{ ${fullName} }`}</small>
          )}
        </div>
        <small>{bio}</small>
        <div className={styles.tHolder}>
          {company && <div className={styles.trophy}>🏭</div>}
          {location && <div className={styles.trophy}>🏦</div>}
          {hireable && <div className={styles.trophy}>🙋</div>}
          <div className={styles.trophy}>{years[age]}</div>
        </div>
      </div>
    </div>
  );
}
