import { SearchOutlined } from '@mui/icons-material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { FormControl, Grid, IconButton, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

export default function ToolBar({
  rowsPerPage,
  total,
  searchFieldChange,
  handleChange,
  rowsPerPageOptions,
  options,
  expand,
  selectRowPerPage,
  toggleExpand,
}) {
  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
      sx={{ justifyContent: "space-between", textAlign: "start" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Typography alignItems="center">
          Showing
          {expand ? (
            <FormControl variant="filled" sx={{ m: 2, display: "inline" }}>
              <Select
                // eslint-disable-next-line no-dupe-keys
                sx={{ width: "-moz-fit-content", width: "fit-content" }}
                onChange={selectRowPerPage}
                size="small"
                defaultValue={rowsPerPage}
              >
                {rowsPerPageOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <IconButton onClick={toggleExpand}>
              {rowsPerPage}
              <ExpandMoreOutlinedIcon />
            </IconButton>
          )}
          out of {total} payments
        </Typography>
      </Grid>
      <Grid item xs={8} sm={6} md={4}>
        <TextField
          placeholder="Search"
          type="search"
          variant="standard"
          sx={{ minWidth: 1 / 2, width: "100%" }}
          onChange={searchFieldChange}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <span>Show </span>
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 120, width: "100%" }}
        >
          <Select
            onChange={handleChange}
            defaultValue={options[0]}
            size="small"
          >
            {options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
