import React from 'react';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';

interface Props {
  className: string;
  color: string;
  type: 'three-bounce' | 'double-bounce' | 'rotating-plane' | 'folding-cube' | 'wave' | 'wandering-cubes' | 'pulse' | 'chasing-dots' | 'circle' | 'cube-grid' | 'wordpress' |
  'ball-grid-beat' | 'ball-grid-pulse' | 'line-spin-fade-loader' | 'ball-spin-fade-loader' | 'ball-pulse-rise' | 'line-scale' | 'line-scale-pulse-out' |
  'line-scale-pulse-out-rapid' | 'line-scale-party' | 'ball-triangle-path' | 'ball-scale-ripple-multiple' | 'ball-pulse-sync' | 'ball-beat' |
  'ball-scale-multiple' | 'ball-zig-zag' | 'ball-zig-zag-deflect' | 'ball-clip-rotate' | 'ball-clip-rotate-pulse' | 'ball-clip-rotate-multiple' |
  'ball-scale-ripple' | 'triangle-skew-spin' | 'pacman';
}

const defaultSpinner = {
  color: COLOR_SPINNER,
  type: SPINNER_DEFAULT
};

function Loading({ className, type, color }: Props) {
  return <Spinner name={type || defaultSpinner.type} fadeIn="half" color={color || defaultSpinner.color} className={className} />;
}

export default Loading;
