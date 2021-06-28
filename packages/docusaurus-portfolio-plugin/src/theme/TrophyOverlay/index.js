import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'react-overlays/Overlay';

import * as styles from './styles.module.css';

export default function TrophyOverlay(props) {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const { desc, icon } = props;

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    triggerRef.current.addEventListener('mouseenter', (e) => {
      setShow(true);
    });

    triggerRef.current.addEventListener('mouseleave', (e) => {
      setShow(false);
    });
  });

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      ref={containerRef}>
      <div ref={triggerRef} onClick={handleClick}>
        {icon}
      </div>

      <Overlay
        show={show}
        rootClose
        offset={[0, 10]}
        onHide={() => setShow(false)}
        onEnter={() => setShow(true)}
        placement={'bottom'}
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
            <div className={styles.overlayBody}>{desc}</div>
          </div>
        )}
      </Overlay>
    </div>
  );
}
