import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  CssBaseline
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  navLinks: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navLinkItem: {
    margin: theme.spacing(0, 1),
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Portfolio
          </Typography>
          
          <div className={classes.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.navLinkItem}
              >
                <Typography color="inherit">{item.text}</Typography>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: classes.drawer }}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.id}
              component={Link}
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;