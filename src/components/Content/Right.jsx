import Box from '@mui/material/Box';
import React from 'react';

import Chart from '../Chart/Chart';
import Payments from '../Payment/PaymentTable';

function Right() {
  return (
    <Box>
      <Chart />
      <Payments />
    </Box>
  );
}

export default Right;
