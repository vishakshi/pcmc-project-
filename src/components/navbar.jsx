import * as React from 'react';
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
import { CalendarMonthOutlined, KeyboardArrowUp, LoginOutlined, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './footer';
import { getFormatDate } from '../utiils/dateFormatter';
// import logo from '../assets/logo.png';

import logoEN from '../assets/main-logo-EN.png';
import logoMAR from '../assets/logo.png';

import shivajiLogo from '../assets/shivaji-logo.png'
import { Container, Fab, Fade, useScrollTrigger } from '@mui/material';
import { pxToRem } from '../utiils/utility';

const drawerWidth = 240;




function Navbar(props) {
    const { window } = props;
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    const navItem = [{
      page:'home',
      route:'/'
    }]
    // const navItems = [t('home'), t('contactUs')];
  const handleChangeLanguage = () => {
    const languageCode = i18n.language === "mt" ? "en" : "mt"
    i18n.changeLanguage(languageCode)
  }
  console.log(i18n.language)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSignIn = () => {
    if(sessionStorage.getItem('@authToken') && sessionStorage.getItem('@userType') === "user"){
      navigate('/dashboard')
    }else{
        navigate('/user-login')
    }
        
  }

  const handleFontSize = (type) => {
    switch(type){
      case "A+":
        document.documentElement.style.fontSize = "1.3rem";
        break;
      case "A-":
        document.documentElement.style.fontSize = "0.8rem";
        break;
      case "A":
        document.documentElement.style.fontSize = "1rem";
        break;
    }
  }

  const logo = i18n.language === "en" ? logoEN : logoMAR

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Typography component='img' src={logo} alt='Logo' height={50} />
      </Typography>
      <Divider />
      <List>
        {navItem.map(({route,page}) => (
          <ListItem key={page} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={t(page)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#footer' sx={{ textAlign: 'center' }}>
              <ListItemText primary={t('contactUs')} />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={sessionStorage.getItem('@authToken') ? t("logout") : t("signIn")} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }
  

  const container = window !== undefined ? () => window().document.body : undefined;
  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar component="nav" sx={{backgroundColor:'white',color:'black'}}>

      <Box sx={{backgroundColor:'#800080',display:'flex',justifyContent:'space-between',alignItems:'center',px:{xs:0,sm:10}}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box sx={{borderRight:'2px solid #951595'}}>
        <Button sx={{color:'white'}} size='small' onClick={handleChangeLanguage}>{i18n.language === "en" ? "Marathi" : "English"}</Button> 
        </Box>
        <Box sx={{borderRight:'2px solid #951595'}}>
        <Button sx={{color:'white'}} onClick={()=>handleFontSize('A+')} size='small'>A+</Button> 
        </Box>
        <Box sx={{borderRight:'2px solid #951595'}}>
        <Button sx={{color:'white'}} onClick={()=>handleFontSize('A')} size='small'>A</Button> 
        </Box>
        <Box sx={{borderRight:'2px solid #951595'}}>
        <Button sx={{color:'white'}} onClick={()=>handleFontSize('A-')} size='small'>A-</Button> 
        </Box>
        </Box>

        <Box>
        <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',gap:1}} mr={1}><CalendarMonthOutlined/> {getFormatDate(new Date())}</Typography> 
        </Box>
      </Box>
      <Container maxWidth='lg'>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ display:{xs:"flex",md:'none'},position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}>
        <Typography component='img' src={logo} alt='Logo' height={60} />
      </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' },pt:1 }}
          >
            <Typography component='img' src={logo} alt='Logo' height={70} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItem.map(({route,page}) => (
              <Button key={page} sx={{fontSize:pxToRem(15),mr:2}} >
                {t(page)}
              </Button>
            ))}
             <Button LinkComponent='a' href='#footer' sx={{fontSize:pxToRem(15),mr:2}} >
                {t('contactUs')}
              </Button>
            <Button onClick={handleSignIn} endIcon={<LoginOutlined/>} sx={{fontSize:15,color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}}>
             {t('registerNow')}
            </Button>
          </Box>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' }, }}
          >
            <Typography component='img' src={shivajiLogo} alt='Logo' width={120} />
          </Typography> */}
        </Toolbar>
        </Container>
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
      <ScrollTop {...props}>
        <Fab size="medium" sx={{backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}}>
          <KeyboardArrowUp sx={{color:'white'}} />
        </Fab>
      </ScrollTop>
      <Box component="main" sx={{ width:'100%' }}>
        <Toolbar id="back-to-top-anchor" />
     {props.children}
     <Box id="footer">
        <Footer/>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;