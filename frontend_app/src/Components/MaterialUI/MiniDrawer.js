import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HistoryIcon from '@material-ui/icons/History';
import AddCircleOutlineIcon from '@material-ui/icons//AddCircleOutline';


import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';


import CreateLead from '../CreateLead/CreateLead';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'pink',
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#00695f'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  let dispatch = useDispatch();
  let data = useSelector(selectUserData);
  let [currentPage, setCurrentPage] = useState('Web Analysis');

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {`Welcome ${data.userName}`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} style={{color: 'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider style={{backgroundColor: 'white'}}/>
        <List>
          {['Home page'].map((text, index) => (
            <ListItem onClick={() => { setCurrentPage(text) }} button key={text}>
              <ListItemIcon style={(currentPage === text? {color:'#009688'} : {color:'#757575'})}>
                {index === 0 ? <AddCircleOutlineIcon /> : ''}
                {index === 1 ? <AssessmentIcon  /> : ''}
                {index === 2 ? <HistoryIcon /> : ''}
                </ListItemIcon>
              <ListItemText primary={text} style={(currentPage === text? {color:'#009688'} : {color:'#757575'})} />
            </ListItem>
          ))}
        </List>
        <Divider style={{backgroundColor: 'white'}}/>
        <List>
          {['Logout'].map((text, index) => (
            <ListItem onClick={() => {
                dispatch(setVerified(false))

              }} 
            button key={text}>
              <ListItemIcon>{<ExitToAppIcon style={{fill: '#f44336'}}/>}</ListItemIcon>
              <ListItemText style={{color: '#f44336'}} primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderPage(currentPage)}
      </main>
    </div>
  );
}


function renderPage(currentPage){
  if (currentPage === 'Web Analysis' || currentPage === 'Home page'){
    return(<CreateLead />)
  }
}
