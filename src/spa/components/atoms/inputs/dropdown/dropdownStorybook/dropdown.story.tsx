import * as React from 'react';
import Typography from 'typography/typography';
import Dropdown from '../dropdown';

const mockOptions = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
];

const DropdownStory: React.FC = () => (
  <>
    <Typography type="h1" text="Standard Dropdown" />
    <Dropdown onChange={() => {}} options={mockOptions} />
  </>
);

export default DropdownStory;
