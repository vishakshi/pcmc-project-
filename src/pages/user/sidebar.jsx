// import React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { Button } from "@mui/material";
// import { EmojiEventsOutlined, Logout, Settings } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import Competetion from "./competetion";
// import UpdateUser from "../../components/update-user";
// import Setting from "./setting";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       style={{flex:1}}
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3, }}>{children}</Box>}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// const Sidebar = () => {
//   const [value, setValue] = React.useState(0);
//   const navigate = useNavigate();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate("/user-login", { replace: true });
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         bgcolor: "background.paper",
//         display: "flex",
//         height: "100vh",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           borderRight: 1,
//           borderColor: "divider",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box></Box>
//         <Tabs
//           orientation="vertical"
//           variant="scrollable"
//           value={value}
//           onChange={handleChange}
//           aria-label="Vertical tabs example"
//         >
//           <Tab
//             icon={<EmojiEventsOutlined />}
//             label="Competetion"
//             {...a11yProps(0)}
//           />
//           <Tab icon={<Settings />} label="Setting" {...a11yProps(1)} />
//         </Tabs>
//         <Box>
//           <Button
//             size="medium"
//             sx={{ border: 0, ":hover": { border: 0 } }}
//             onClick={handleLogout}
//             endIcon={<Logout />}
//             variant="outlined"
//           ></Button>
//         </Box>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <Competetion />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Setting />
//       </TabPanel>
//     </Box>
//   );
// };

// export default Sidebar;

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  Collapse  from '@mui/material/Collapse';
import { Home,ChevronRight,Logout, EmojiEventsOutlined,  Settings, HomeOutlined, AccountCircle, AccountCircleOutlined,} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function UserSidebar({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    // When the route changes, update the current route state
    setCurrentRoute(location.pathname);
    console.log(location.pathname)
  }, [location.pathname]);


  const handleDrawer = () => {
    setOpen(!open)
  }

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/user-login',{replace:true})
  }

  const menuItems = [
    {
        id:0,
        title:"Home",
        icon:<HomeOutlined/>,
        route:'/',
    },
    {
        id:1,
        title:"Competetion",
        icon:<EmojiEventsOutlined/>,
        route:'/dashboard',
    },
    {
      id:2,
      title:"Setting",
      icon:<Settings/>,
      route:'/setting',
  },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar variant="outlined" sx={{border:'none',background:'#03A9F4', ...(open ? {width: { sm: `calc(100% - ${drawerWidth}px)` }}:{width: { sm: `calc(100% - ${70}px)` }})
         }} color="inherit">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{flexGrow:1}}></Typography>
          <Box >
            <Tooltip title="Open Profile">
              {/* <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}> */}
              <IconButton sx={{ p: 0 }}>
                <AccountCircleOutlined fontSize='large' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={()=>setAnchorElUser(null)}
            >
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:1,px:2,pt:1,pb:3}}>
                <Avatar sx={{height:60,width:60}}/>
                  <Typography variant='body2' textAlign="center">Mohd Saqlain</Typography>
                  <Typography variant='body1' textAlign="center">saqlainmohd639@gmail.com</Typography>
                  </Box>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}   sx={{
            '& .MuiDrawer-paper': { backgroundColor:"#2A323C",color:'white' },
          }}>
        <DrawerHeader>
          {/* <Typography variant='h6'>{open ? "Admin Panel" : "A.P"}</Typography> */}
          <Typography variant="h6" sx={{ my: 3 }}>
        {open ? <Typography component='img' src={logo} alt='Logo' height={open ? 50 : 20} /> : 
        <Typography color="#006ACD" variant='h6'>{"PCMC"}</Typography> }
      </Typography>
        </DrawerHeader>
        <Divider />
        <Box sx={{pt:5,display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
        <List disablePadding>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{display: "block",}}
            >

              {item.subItems ? (
                <>
                <ListItemButton
                  to={item.subItems[0].route}
                  LinkComponent={Link}
                //   sx={{
                //     minHeight: 48,
                //     justifyContent: open ? "initial" : "center",
                //     pl: 2.5,
                //     pr:1
                //   }}
                sx={{ borderRadius: '10px', mx: 1,py:0.4, my: 0.3,'&:hover':{backgroundColor: '#03A9F4'}, ...(currentRoute === item.route && { backgroundColor: '#03A9F4' }) }}
                >
                  <ListItemIcon
                   sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {open ? currentRoute.includes(item.route) ? <KeyboardArrowDown/> : <ChevronRight/> : null}
                </ListItemButton>
                <Collapse in={currentRoute.includes(item.route)} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.subItems.map((subItem,ind)=>(
                      <ListItem
                      key={subItem.id}
                      disablePadding
                    //   sx={
                    //     currentRoute === subItem.route // Check if the current route matches the menu item's route
                    //       ? {
                    //           background: ` linear-gradient(90deg, #77429A 0%, #CA79FF 100%); collection Component instance`,
                    //           display: "block",
                    //           color: "white",
                    //         }
                    //       : {
                    //           display: "block",
                    //         }
                    //   }
                    sx={{display:'block'}}
                    >
                       <ListItemButton
                  LinkComponent={Link}
                  to={subItem.route}
                //   sx={{
                //     minHeight: 48,
                //     justifyContent: open ? "initial" : "center",
                //     px: 2.5,
                //     pl:4
                //   }}
                sx={{ borderRadius: '10px',m:0, py:0.4, my: 0.3, ...(open && {m:1} ), ...(currentRoute === subItem.route && { backgroundColor: '#03A9F4' }) }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                      visibility:'hidden'
                    }}
                  >
                    {subItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={subItem.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
                    </ListItem>
                    ))}
                  </List>
                </Collapse>
                </>
              ) : (
                <ListItemButton
                  LinkComponent={Link}
                  to={item.route}
                //   sx={{
                //     minHeight: 48,
                //     justifyContent: open ? "initial" : "center",
                //     px: 2.5,
                //   }}
                  sx={{ py:1, my: 0.3, ...(currentRoute === item.route && { backgroundColor: '#03A9F4','&:hover':{backgroundColor:'#03A9F4'} }) }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    color='white'
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>

        <List sx={{ width: "100%" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLogout}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'#545F71'
                }}
              >
                <Logout />
              </ListItemIcon>
              <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0,color:'white' }} />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{width:`calc(100% - ${drawerWidth}px)`, flexGrow: 1,px:3,pt:2 }}>
        <DrawerHeader />
       {children}
      </Box>
    </Box>
  );
}