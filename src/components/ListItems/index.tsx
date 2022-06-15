import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import { Logo } from '../Logo';

import {
    Link as RouterLink,
    LinkProps as RouterLinkProps
  } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';


interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to?: string;
  }
  
const DashboardNavbarRoot = styled(MuiAppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    position: 'fixed',
    left:0,
    whiteSpace: 'nowrap',
    width:240,
    minHeight:'auto',
    height:'100%',
    zIndex:3,
    color: 'black',
    boxSizing: 'border-box'
  }));
function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;
    
    const renderLink = React.useMemo(
      () =>
        React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
          itemProps,
          ref,
        ) {
          return <RouterLink to={to ? to : '/tasks'} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

export const ListItems = () =>{
    const [nums, setNums] = useState({  
        num1: Math.floor(Math.random() * 101),
        num2: Math.floor(Math.random() * 101)
    });

    const [toLayout, setToLayout] = useState<string>();

    const clickMain = () => {
        setNums({
            num1: Math.floor(Math.random() * 101),
            num2: Math.floor(Math.random() * 101)
        });
      const p =  prompt(`Сколько будет ${nums.num1} + ${nums.num2}`);

        if(Number(p) === Number(nums.num1+nums.num2)){
            window.localStorage.setItem('isAvailableLayout', 'true');
            setToLayout('/layout');
        }else{
            window.localStorage.setItem('isAvailableLayout', 'false');
            alert('Error, try again the sum of two numbers!');
        }

    }
    return (     
    <DashboardNavbarRoot>
        <Box  sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         width: '100%',
         height:'60px',
         padding:'10px'
       }}>
        <Box  sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-start',
       }}>
             <Logo height= '30px' width='30px'/>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className='logoText'
            sx={{ flexGrow: 1 }}
            >
            aibomed
            </Typography>
        </Box>
            <IconButton color="inherit">
            <Badge color="secondary">
            <MenuIcon/>
            </Badge>
        </IconButton>
        </Box>
        <List aria-label="main mailbox folders">
           <Box onClick={()=>clickMain()}>
           <ListItemLink  primary="Главная" to={toLayout} icon={<AssignmentIcon />} />
           </Box>
            <ListItemLink to="/tasks" primary="Задачи" icon={<ListIcon />} />
        </List>
    </DashboardNavbarRoot>
    )
}
