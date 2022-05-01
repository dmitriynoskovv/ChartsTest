import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const RadioButtonsGroup = ({ chart, setChart }) => {
  return (
    <FormControl>
      <RadioGroup value={chart} onChange={(e) => setChart(e.target.value)}>
        <FormControlLabel value="Bar" control={<Radio />} label="Bar Chart" />
        <FormControlLabel value="Line" control={<Radio />} label="Line Chart" />
      </RadioGroup>
    </FormControl>
  );
};
