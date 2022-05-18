import './style.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import LinearProgress from "@mui/material/LinearProgress";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const salesData = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

function Chart() {
  const renderMiniChart = (dataLocale, title, value) => {
    return (
      <Grid item xs={12} md={2} lg={2}>
        <Box>
          <Typography>{title}</Typography>
          <Typography fontSize={18}>{value}</Typography>
        </Box>
        <AreaChart width={120} height={50} data={dataLocale}>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#0294FF73" />
        </AreaChart>
      </Grid>
    );
  };
  return (
    <>
      <Typography component="h2" variant="h6" textAlign="start" gutterBottom>
        Today: 5, Aug 2018
      </Typography>
      <Box>
        <Grid container spacing={4} justifyContent="space-between">
          {renderMiniChart(data, "Daily Transaction Value", "₦4,000,000")}
          {renderMiniChart(data, "Daily Transaction Value", "₦4,000,000")}
          {renderMiniChart(data, "Daily Transaction Value", "₦4,000,000")}
          {renderMiniChart(data, "Daily Transaction Value", "₦4,000,000")}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  className="big-chart"
                  data={salesData}
                  margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
                >
                  <CartesianGrid strokeDasharray={0} horizontal={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#0294FF73"
                    fillOpacity={1}
                    fill="#0294FF73"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box width={350}>
              <Box>
                <Typography textAlign="start">Orders</Typography>
                <LinearProgress variant="determinate" value={80} />
                <Typography textAlign="start">Pending Orders: 20</Typography>
                <Typography textAlign="start">Reconcilled Orders: 80</Typography>
                <Typography textAlign="start">Total Orders: 100</Typography>
              </Box>
              <Box>
                <Typography textAlign="start">Payments</Typography>
                <LinearProgress variant="determinate" value={80} />
                <Typography textAlign="start">Un-reconcilled Payments: 20</Typography>
                <Typography textAlign="start">Reconcilled Payments: 80</Typography>
                <Typography textAlign="start">Total Payments: 100</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Chart;
