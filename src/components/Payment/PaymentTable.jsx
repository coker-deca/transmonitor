import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import Pagination from './Pagination';
import ToolBar from './ToolBar';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2019",
//     "Paul McCartney",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2019",
//     "Tom Scholz",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2019",
//     "Michael Jackson",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "15 Mar, 2019",
//     "Bruce Springsteen",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   ),
// ];

function Payments() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [expand, setExpand] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setExpand(false);
  };

  const fetchRows = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {
        setRows(result);
        setIsLoading(false);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    fetchRows();
  }, []);
  const handleChangePage = (newPage) => {
      console.log(newPage);
    newPage !== page && setPage(newPage);

  };

  const handleSearch = () => {};
  const handleFilter = () => {};

  const toggleExpand = () => {
    setExpand(true);
  };

  const rowsPerPageOptions = [5, 10, 25];

  return (
    <Box sx={{ padding: "30px 0" }}>
      <Typography component="h2" variant="h4" textAlign="start" gutterBottom>
        Payments
      </Typography>
      <ToolBar
        selectRowPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        total={rows.length}
        searchFieldChange={handleSearch}
        handleChange={handleFilter}
        rowsPerPageOptions={rowsPerPageOptions}
        options={[
          "All",
          "Reconcilled",
          "Un-reconcilled",
          "Settled",
          "Unsettled",
        ]}
        expand={expand}
        toggleExpand={toggleExpand}
      />
      <Paper>
        {!isLoading && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Transaction No</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                .map((row) => (
                  <TableRow key={row["Transaction No"]}>
                    <TableCell>{row["Item Type"]}</TableCell>
                    <TableCell align="right">{`$${row.Price}`}</TableCell>
                    <TableCell>{row["Transaction No"]}</TableCell>
                    <TableCell>
                      {new Date(row.Time).toTimeString().split(" ")[0]}
                    </TableCell>
                    <TableCell>{row.Status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
        <Pagination
          totalPages={Math.ceil(rows.length / rowsPerPage)}
          currentPage={page}
          handleChangePage={handleChangePage}
          isLoading={isLoading}
        />
      </Paper>
    </Box>
  );
}
export default Payments;
