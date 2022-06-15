import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './dashboard.css';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar)(({ theme }) => ( {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    zIndex:2,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  }));

const mdTheme = createTheme();



  
export default function Header() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >     
            <Typography
              component="span"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 , color: '#454547', fontWeight:'bold'}}
            >
             Главная
        </Typography>    
        <Divider/>
        <Box  
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:'white'
            }}>
        <Tooltip title="Set personal photo">
              <IconButton 
              //  onClick
                >
                <Avatar alt="Remy Sharp" sx={{width:'30px', height:'30px'}} />
              </IconButton>
        </Tooltip>
        <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{ color: 'black', fontSize: '14px'}}
            >
             Bilimova Rimma 
        </Typography>  
        <IconButton 
              //  onClick 
            >
          <KeyboardArrowDownIcon sx={{width:'20px', height:'20px'}}/>
         </IconButton>
        </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}