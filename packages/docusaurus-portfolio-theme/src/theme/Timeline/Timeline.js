// Skills pills for resume page
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Timeline(props) {
  const { data } = props;

  if (!data) {
    return <></>;
  }

  const makeTimeline = (event, index) => {
    if (event && Object.keys(event).length === 0) {
      console.log('AHH', event);
      return (
        <div className={'row'} key={index}>
          <div className={clsx('col col--4', styles.timelineItem)}>
            <div className={styles.dot} />
          </div>
        </div>
      );
    }

    const { title, date, body, link, linkTitle, image, imageAlt } = event;

    return (
      <div className={'row'} key={index}>
        <div className={clsx('col col--4', styles.timelineItem)}>
          <div className={styles.dot} />
        </div>

        <div className={'col col--8 margin-bottom--lg'}>
          <div>
            <div className={clsx('card card--full-height', styles.cardDirect)}>
              {image && (
                <div class="card__image">
                  <img
                    src={require(`@site/static/img/${image}`).default}
                    alt={imageAlt}
                  />
                </div>
              )}
              <div className="card__body">
                <div style={{ height: '1rem' }}>
                  <h4 style={{ float: 'left' }}>{title}</h4>
                  <small style={{ fontStyle: 'italic', float: 'right' }}>
                    {date}
                  </small>
                </div>
                <br />

                <small>{body}</small>
              </div>
              <div className="card__footer">
                <a className={styles.linkButton} href={link}>
                  {linkTitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{data.map((event, index) => makeTimeline(event, index))}</div>;
}
