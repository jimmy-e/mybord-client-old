import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
}

const LinkedinIcon: React.FC<Props> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path
        d="M61.3,0H2.7C1.2,0,0,1.2,0,2.7v58.7C0,62.8,1.2,64,2.7,64h58.7c1.5,0,2.7-1.2,2.7-2.7V2.7 C64,1.2,62.8,0,61.3,0z M19,54.5H9.5V24H19V54.5z M14.2,19.8c-3,0-5.5-2.5-5.5-5.5c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5 C19.7,17.4,17.3,19.8,14.2,19.8z M54.5,54.5H45V39.7c0-3.5-0.1-8.1-4.9-8.1c-4.9,0-5.7,3.9-5.7,7.8v15.1h-9.5V24H34v4.2h0.1 c1.3-2.4,4.4-4.9,9-4.9c9.6,0,11.4,6.3,11.4,14.5V54.5z"
        fill={colors[color]}
      />
    </g>
  </svg>
);

export default LinkedinIcon;
