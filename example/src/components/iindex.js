import React, { useState, useRef } from 'react';
import Overlay from 'react-overlays/Overlay';

import styles from './sstyles.module.css';

export function TrophyOverlay() {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      ref={containerRef}>
      <button ref={triggerRef} onClick={handleClick}>
        Example button
      </button>

      <Overlay
        show={show}
        rootClose
        offset={[0, 10]}
        onHide={() => setShow(false)}
        placement={'top'}
        container={containerRef}
        target={triggerRef.current}>
        {({ props, arrowProps, placement }) => (
          <div className={styles.Overlay} {...props}>
            <div
              className={styles.overlayArrow}
              {...arrowProps}
              placement={placement}
              style={{ ...arrowProps.style }}
            />
            <div className={styles.overlayBody}>{'lets go'}</div>
          </div>
        )}
      </Overlay>
    </div>
  );
}
