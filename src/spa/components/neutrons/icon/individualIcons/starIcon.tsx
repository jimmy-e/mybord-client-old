import * as React from 'react';

interface Props {
  size: number;
}

const StarIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>star</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <polygon fill="none" points="32,5.846 40.498,23.065 59.5,25.826 45.75,39.229 48.996,58.154 32,49.219 15.004,58.154 18.25,39.229 4.5,25.826 23.502,23.065 " stroke="#565e5f" />
    </g>
  </svg>
);

export default StarIcon;
