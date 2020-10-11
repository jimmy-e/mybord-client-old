import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const SettingsIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth="4">
      <path d="M47.75,37.458,56.352,45a8.034,8.034,0,0,1,.575,11.347c-.091.1-.184.2-.28.3h0a8.035,8.035,0,0,1-11.363,0c-.1-.1-.189-.2-.28-.3L35.667,46.167" fill="none" />
      <polyline fill="none" points="29.439 25.439 20 16 20 12 13 5 5 13 12 20 16 20 25.234 29.234" strokeLinecap="butt" />
      <path
        d="M58.376,14.5,51,21.879l-8.872-8.872L49.5,5.629a15.142,15.142,0,0,0-5.266-.586,13.9,13.9,0,0,0-12.7,12.7,15.124,15.124,0,0,0,.588,5.271L6.283,46.344a3.89,3.89,0,0,0-.277,5.495c.044.049.089.1.135.142l5.882,5.882a3.891,3.891,0,0,0,5.5-.009c.044-.045.088-.09.13-.137L41,31.881a15.127,15.127,0,0,0,5.272.588,13.9,13.9,0,0,0,12.7-12.7A15.145,15.145,0,0,0,58.376,14.5Z"
        fill="none"
        stroke={colors[color]}
      />
    </g>
  </svg>
);

export default SettingsIcon;
