import React from 'react';
import { Grid, Card } from '@mui/material';
import { SelectedChart, RadioButtonsGroup, TextFieldsGroup } from '../../widgets';

export const App = () => {
  const [chart, setChart] = React.useState('Bar');
  const [diapason, setDiapason] = React.useState('0 - 1000');
  const [labels, setLabels] = React.useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]);

  return (
    <Grid container variant="general">
      <Card sx={{ height: '90%', width: '50%', minWidth: '350px' }}>
        <TextFieldsGroup setNewLabels={setLabels} setDiapason={setDiapason} />

        <Grid item sx={{ px: 4, mt: 5 }}>
          <SelectedChart chart={chart} labels={labels} diapason={diapason} />
        </Grid>

        <Grid item sx={{ px: 4, mt: 5 }}>
          <RadioButtonsGroup chart={chart} setChart={setChart} />
        </Grid>
      </Card>
    </Grid>
  );
};
