import * as React from 'react';
import PopOver from 'popOver/popOver';
import { CheckboxOptions } from 'types/inputTypes';
import { PopOverProps } from 'types/modalTypes';
import PopCheckboxMenuContent from './popCheckboxMenuContent';

interface Props {
  children: PopOverProps['children'];
  options: CheckboxOptions;
}

const PopCheckboxMenu: React.FC<Props> = ({
  children,
  options,
}) => (
  <PopOver
    Content={<PopCheckboxMenuContent options={options} />}
    caretPlacement="center"
    placement="right-center"
  >
    {children}
  </PopOver>
);

export default PopCheckboxMenu;
