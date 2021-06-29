// Socials links for about me page
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Links(props) {
  const { links } = props;
  const platforms = links.map((link) => link.match(/https?:\/\/*(.+)\./)[1]); // Regex only matches links w/out www.

  const getIcon = (platform) => {
    try {
      return require(`../../../static/img/nucleo-social-icons/social-1_logo-${platform}.svg`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className={'row'}>
      <div className={'col margin-bottom--lg'}>
        <div className={clsx('card card--full-height', styles.linkCard)}>
          {links.map((link, index) => (
            <a href={link} key={index} className={styles.linkImgHolder}>
              <img
                className={styles.linkImg}
                src={
                  getIcon(platforms[index])
                    ? getIcon(platforms[index]).default
                    : getIcon('link').default
                }
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
