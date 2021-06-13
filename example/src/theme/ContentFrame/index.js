// Utility frame for easily displaying custom pictures, webgl content, or biography etc.
import React from 'react';

export default function ContentFrame(props) {
  if (props.noFrame) {
    return <></>;
  }

  return (
    <div className={'row'}>
      {/*
        Custom defined content.
      */}
    </div>
  );
}
