import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Lists = ({ list }) => {
  return (
    <>
      {list.title ? <Typography>{list.title}</Typography> : <Divider />}
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
