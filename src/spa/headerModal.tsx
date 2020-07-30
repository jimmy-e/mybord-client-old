import * as React from 'react';
import PopOver from './popOver/popOver';
import { PopOverCallback } from 'types/modalTypes';

const HeaderProfile: React.FC = () => {
  const [hidePopOver, setHidePopOver] = React.useState<PopOverCallback['hidePopOver']>(null);

  const handleCallback = (props: PopOverCallback): void => {
    if (!hidePopOver) {
      setHidePopOver(props.hidePopOver);
    }
  };

  return (
    <PopOver
      Content={<h3>This is the popover content</h3>}
      callback={handleCallback}
      placement="bottom-right"
    >
      <div
        style={{
          alignItems: 'center',
          background: 'blueViolet',
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          height: '5rem',
          justifyContent: 'center',
          width: '5rem',
        }}
      >
        Click Me
      </div>
    </PopOver>
  );
};

export default HeaderProfile;