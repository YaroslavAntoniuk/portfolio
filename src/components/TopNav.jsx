import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  borderBottom: active ? `2px solid ${theme.palette.common.white}` : 'none',
  borderRadius: 0,
  textTransform: 'none',
  fontWeight: 500,
  color: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

const TopNav = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setDrawerOpen(false); // Close drawer on selection
    if (window.location.pathname === '/' && document.getElementById(section)) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${section}`);
    }
  };

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Yaroslav Antoniuk
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                  },
                }}
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 1,
                    }}
                  >
                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {navItems.map(({ label, section }) => (
                      <ListItem
                        button
                        key={section}
                        onClick={() => handleSectionClick(section)}
                      >
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            navItems.map(({ label, section }) => (
              <NavButton
                key={section}
                active={activeSection === section}
                onClick={() => handleSectionClick(section)}
              >
                {label}
              </NavButton>
            ))
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNav;
