import * as React from 'react';

import LoadingSpinner from './LoadingSpinner';

interface Props {
  color?: string;
  style?: React.CSSProperties;
  state?: 'entering' | 'exited' | 'entered' | 'exiting' | 'unmounted';
  duration?: number;
}
const FullScreenSpinner: React.FC<Props> = ({
  color = '#fff',
  style = {},
  state = 'entering',
  duration = 500,
}) => {
  const opacity = {
    entering: 1,
    exiting: 0,
    entered: 1,
    exited: 0,
    unmounted: 0,
  };
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '100%',
        bottom: '100%',
        display: 'grid',
        opacity: opacity[state],
        transition: `opacity ${duration}ms ease-in-out`,
        background: '#0f121a',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        zIndex: 9999999999,
        ...style,
      }}
    >
      <LoadingSpinner color={color} />
    </div>
  );
};
export default FullScreenSpinner;
