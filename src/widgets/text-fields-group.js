import React from 'react';
import { Grid, TextField } from '@mui/material';

export const TextFieldsGroup = ({ setNewLabels, setDiapason }) => {
  const [labels, setLabels] = React.useState('');
  const [range, setRange] = React.useState('');

  return (
    <>
      <Grid item xs={12} sx={{ mt: 4, px: 4 }}>
        <TextField
          label="X axis labels"
          fullWidth
          value={labels}
          helperText="Write labels in next pattern: 1, 2, 3, 4, 5, 6 etc. After that press Enter"
          onChange={(e) => setLabels(e.currentTarget.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && setNewLabels(labels.replace(/\s+/g, '').split(','))
          }
        />
      </Grid>
      <Grid item xs={12} sx={{ px: 4, mt: 2 }}>
        <TextField
          label="Y axis diapason"
          value={range}
          helperText="Choose diapason in next pattern: 0 - 1000. After that press Enter"
          onChange={(e) => setRange(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && setDiapason(range)}
          fullWidth
        />
      </Grid>
    </>
  );
};
