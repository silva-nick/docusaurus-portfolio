import React, { useState, useRef } from 'react';
import Overlay from 'react-overlays/Overlay';

import styles from './sstyles.module.css';

export function TrophyOverlay() {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const placement = 'top';

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <button
        type="button"
        className="btn mb-4"
        id="overlay-toggle"
        ref={triggerRef}
        onClick={handleClick}>
        I am an Overlay target
      </button>

      <Overlay
        show={show}
        rootClose
        offset={[0, 10]}
        onHide={() => setShow(false)}
        placement={placement}
        container={containerRef}
        target={triggerRef}>
        {({ props, arrowProps, placement }) => (
          <div className={styles.Overlay} {...props} placement={placement}>
            <div
              className={styles.overlayArrow}
              {...arrowProps}
              placement={placement}
              style={arrowProps.style}
            />
            <div className={styles.overlayBody}>
              I&rsquo;m placed to the <strong>{placement}</strong>
            </div>
          </div>
        )}
      </Overlay>
    </div>
  );
}
