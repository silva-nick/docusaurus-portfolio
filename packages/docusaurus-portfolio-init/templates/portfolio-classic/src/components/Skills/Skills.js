// Skills pills for resume page
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Skills(props) {
  const { skills } = props;

  return (
    <div className={'row'}>
      <div className={'col margin-bottom--lg'}>
        <div className={clsx('card card--full-height', styles.cardDirect)}>
          {skills.map((skill) => (
            <div>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
