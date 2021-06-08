import clsx from 'clsx';
import React, {useState} from 'react';
import Overlay from 'react-overlays/Overlay';

import styles from './sstyles.module.css';

const Tooltip = styled('div')`
  position: absolute;
`;

const Arrow = styled('div')`
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    background: #000;
    width: 10px;
    height: 10px;
    top: 0;
    left: 0;
  }

 "bottom: -4px;",
`;

const Body = styled('div')`
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  background-color: #000;
`;

const initialSstate = {
  show: false,
};


export function TropyOverlay() {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => 
    setShow(!show)
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
      <p>Keep clicking to see the placement change.</p>

      <Overlay
        show={show}
        rootClose
        offset={[0, 10]}
        onHide={() => setShow(false)}
        placement={placement}
        container={containerRef}
        target={triggerRef}>
        {({ props, arrowProps, placement }) => (
          <Tooltip {...props} placement={placement}>
            <Arrow
              {...arrowProps}
              placement={placement}
              style={arrowProps.style}
            />
            <Body>
              I&rsquo;m placed to the <strong>{placement}</strong>
            </Body>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}
