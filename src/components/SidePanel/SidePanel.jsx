import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import List from '@mui/material/List';
import * as React from 'react';

import Lists from './Lists';

const Sidebar = () => {
  return (
    <List>
      <Lists
        list={{ title: "Main", menus: [{ name: "Overview", icon: SpeedIcon }] }}
      />
      <Lists
        list={{
          title: "Payments",
          menus: [
            { name: "All Payments", icon: AccountBalanceWalletOutlinedIcon },
            {
              name: "Reconcilled Payments",
              icon: AccountBalanceWalletOutlinedIcon,
            },
            {
              name: "Un - Reconcilled Payments",
              icon: AccountBalanceWalletOutlinedIcon,
            },
            {
              name: "Manual Settlements",
              icon: RadioButtonCheckedOutlinedIcon,
            },
          ],
        }}
      />
      <Lists
        list={{
          title: "Orders",
          menus: [
            { name: "All Orders", icon: ReceiptLongOutlinedIcon },
            { name: "Pending Orders", icon: ReceiptLongOutlinedIcon },
            { name: "Reconcilled Orders", icon: ReceiptLongOutlinedIcon },
          ],
        }}
      />
      <Lists
        list={{
          menus: [{ name: "Merchant Profile", icon: PermIdentityOutlinedIcon }],
        }}
      />
    </List>
  );
};

export default Sidebar;
