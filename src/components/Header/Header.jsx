import { SearchOutlined } from '@mui/icons-material';
import NotificationsNonesIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import userImage from '../../resources/images/Tosin.png';
import Profile from '../ProfileContainer/ProfileContainer';
import { Logo } from '../ui/Logo';

const dummyUser = { name: "Jane Doe", image: userImage };

function Header({ searchFieldChange, notifications }) {
  return (
    <Toolbar
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <TextField
        placeholder="Search"
        type="search"
        variant="standard"
        sx={{ minWidth: 1 / 2 }}
        onChange={searchFieldChange}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <Typography sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="#"
          sx={{ p: 1, flexShrink: 0 }}
        >
          Support
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="#"
          sx={{ p: 1, flexShrink: 0 }}
        >
          FAQ
        </Link>
        <IconButton>
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsNonesIcon fill={0} />
          </Badge>
        </IconButton>
      </Typography>
      <Button variant="outlined" size="small">
        Sign up
      </Button>
      <Profile user={dummyUser} />
    </Toolbar>
  );
}

export default Header;
