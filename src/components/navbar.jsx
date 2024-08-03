import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CalendarMonthOutlined, LoginOutlined, Logout } from '@mui/icons-material';
import MyCarousel from './carousel';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './footer';
import Slider from './slider';
import { getFormatDate } from '../utiils/dateFormatter';
import Notice from './notice';
import Duration from './duration';
import Prizes from './prizes';
import CompetenceCard from './competenceCard';
import DivyangAbout from './divyangAbout';

const drawerWidth = 240;

function Navbar(props) {
    const { window } = props;
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    const navItems = [t('home'), t('aboutUs'), t('contactUs')];
  const handleChangeLanguage = () => {
    const languageCode = i18n.language === "mt" ? "en" : "mt"
    i18n.changeLanguage(languageCode)
  }
  console.log(i18n.language)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSignIn = () => {
    if(sessionStorage.getItem('@authToken')){
        sessionStorage.clear();
        // props.window?.location.reload();
    }else{
        navigate('/user-login')
    }
        
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PCMC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={sessionStorage.getItem('@authToken') ? t("logout") : t("signIn")} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar component="nav" sx={{backgroundColor:'white',color:'black'}}>
      <Box sx={{backgroundColor:'#FF0000',display:'flex',justifyContent:'space-between',alignItems:'center'}}><Button sx={{color:'white'}} size='small' onClick={handleChangeLanguage}>{i18n.language === "en" ? "Marathi" : "English"}</Button> <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center'}} mr={1}><CalendarMonthOutlined/> {getFormatDate(new Date())}</Typography> </Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,py:3}}
          >
            PCMC
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{fontSize:15,mr:2}} >
                {item}
              </Button>
            ))}
            
            <Button onClick={handleSignIn} endIcon={<LoginOutlined/>} sx={{fontSize:15,color:'white',backgroundColor:'red','&:hover':{backgroundColor:'#9B3922'}}}>
             {sessionStorage.getItem('@authToken') ? "Logout" : "Register"} 
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ pt: 3,width:'100%' }}>
        <Toolbar />
        <MyCarousel/>
        <Slider/>
        <Notice/>
        <Duration/>
        <Prizes />
        <CompetenceCard/>
        <DivyangAbout/>
        <Footer/>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;