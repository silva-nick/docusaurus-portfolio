// Utility frame for easily displaying custom pictures, webgl content, or biography etc.
import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

class ContentFrame extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col margin-bottom--lg'}>
          <div className={clsx('card card--full-height', styles.cardDirect)}>
            <img
              className={styles.backgroundImg}
              src={
                require('../../../static/img/mountain-background.jpg').default
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentFrame;
