/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';

import { Settings, Info, Lock, ExitToApp, Menu } from '@material-ui/icons';

import { removeStorage } from '../../services/adminStorage';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function SideMenu() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const logout = () => {
    removeStorage('nameStorage');
    removeStorage('jwt');
    removeStorage('tokenJwt');
    removeStorage('role');
    removeStorage('userIdStorage');
    removeStorage('userAdminStorage');
    removeStorage('appointments');
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleOpen}
        className={classes.menuButton}
      >
        <Menu />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Settings" onClick={() => {}}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
          <ListItem
            button
            key="About"
            onClick={() => window.open('https://www.virtumed.com.br/')}
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Sobre nós" />
          </ListItem>
          <ListItem button key="Privacy" onClick={() => {}}>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Privacidade e segurança" />
          </ListItem>
          <ListItem button key="Logout" onClick={logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideMenu;
