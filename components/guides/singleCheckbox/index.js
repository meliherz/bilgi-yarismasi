import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function SingleCheckBox() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      color="success"
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}