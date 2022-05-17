import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const Lists = ({ list }) => {
  return (
    <>
      <ListSubheader sx={{ textAlign: "start" }}>
        {list.title ? list.title : <br />}
      </ListSubheader>
      {list.menus.map((item) => {
        const Icon = item.icon;
        return (
          <ListItemButton key={item.name}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        );
      })}
    </>
  );
};

export default Lists;
