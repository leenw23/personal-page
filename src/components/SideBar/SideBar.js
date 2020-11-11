import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PublicIcon from '@material-ui/icons/Public';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom"

import './SideBar.css';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export function SideBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className="SideBarTitle">
              <p>{props.title}</p>
            </div>
            <Divider />
            <List>
              <Link className="SideLink" to="/">
                <ListItem button key='TIMELINE'>
                  <ListItemIcon><EventNoteIcon /></ListItemIcon>
                  <ListItemText primary={'TIMELINE'} />
                </ListItem>
              </Link>
              <Link className="SideLink" to={'/experience'}>
                <ListItem button key='EXPERIENCE'>
                  <ListItemIcon><PublicIcon /></ListItemIcon>
                  <ListItemText primary={'EXPERIENCE'} />
                </ListItem>
              </Link>
              <Link className="SideLink" to={'/publication'}>
              <ListItem button key='PUBLICATIONS'>
                <ListItemIcon><ReceiptIcon /></ListItemIcon>
                <ListItemText primary={'PUBLICATIONS'} />
              </ListItem>
              </Link>
              <Link className="SideLink" to="/about">
                <ListItem button key='ABOUT'>
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary={'ABOUT'} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}