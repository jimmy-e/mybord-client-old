import * as React from 'react';
import PopOver from 'popOver/popOver';
import { CheckboxOptions } from 'types/inputTypes';
import { PopOverProps } from 'types/modalTypes';
import PopCheckboxSearchMenuContent from './popCheckboxSearchMenuContent';

interface Props {
  children: PopOverProps['children'];
  options: CheckboxOptions;
  title: string;
}

const PopCheckboxSearchMenu: React.FC<Props> = ({
  children,
  options,
  title,
}) => (
  <PopOver
    Content={<PopCheckboxSearchMenuContent options={options} title={title} />}
    caretPlacement="center"
    placement="right-center"
  >
    {children}
  </PopOver>
);

export default PopCheckboxSearchMenu;
