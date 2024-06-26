import * as React from 'react';

interface Props {
  size: number;
}

const FriendsIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>a heart</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <path d="M14,16 c0-7.732,6.268-14,14-14s14,6.268,14,14s-6.268,16-14,16S14,23.732,14,16z" fill="none" stroke="#565e5f" />
      <path d="M39.195,40.869 C36.009,40.345,32.285,40,28,40c-11.14,0-18.494,2.331-22.453,4.087C3.379,45.048,2,47.196,2,49.567V60h37" fill="none" stroke="#565e5f" strokeLinecap="butt" />
      <path d="M60.083,39.984 C57.164,36.962,52.292,37.456,50,41.03c-2.294-3.578-7.167-4.065-10.083-1.047c-2.556,2.645-2.556,6.935,0,9.58L49.999,60 l10.084-10.436C62.639,46.918,62.639,42.629,60.083,39.984z" fill="none" />
    </g>
  </svg>
);

export default FriendsIcon;
