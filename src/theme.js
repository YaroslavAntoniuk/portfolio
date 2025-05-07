import { createTheme } from '@mui/material/styles';

// Theme creator function that takes mode as parameter
const createAppTheme = (mode = 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#a4a5a6',
      light: '#e3f2fd',
      dark: '#0e314d',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f5f5f7',
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundImage: theme.palette.mode === 'dark' 
            ? 'radial-gradient(circle at 25% 25%, rgba(42, 54, 59, 0.2) 0%, transparent 50%), ' +
              'radial-gradient(circle at 75% 44%, rgba(25, 55, 109, 0.2) 0%, transparent 50%), ' +
              'radial-gradient(circle at 85% 89%, rgba(76, 40, 77, 0.2) 0%, transparent 50%)'
            : 'radial-gradient(circle at 25% 25%, rgba(236, 242, 245, 0.6) 0%, transparent 50%), ' +
              'radial-gradient(circle at 75% 44%, rgba(202, 232, 255, 0.6) 0%, transparent 50%), ' +
              'radial-gradient(circle at 85% 89%, rgba(231, 222, 255, 0.6) 0%, transparent 50%)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-color 0.5s ease',
          "&::before": {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2000 1500\'%3E%3Cdefs%3E%3Crect stroke=\'%23121212\' fill=\'none\' x=\'0\' y=\'0\' width=\'1600\' height=\'900\'/%3E%3Cpattern id=\'b\' width=\'3\' height=\'3\' patternUnits=\'userSpaceOnUse\' patternTransform=\'scale(14.05) translate(-933.85 -700.38)\'%3E%3Cuse fill=\'%23161616\' href=\'%23a\'/%3E%3Cuse fill=\'%23161616\' href=\'%23a\' x=\'5\' y=\'5\'/%3E%3Cuse fill=\'%231a1a1a\' href=\'%23a\' x=\'10\' y=\'10\'/%3E%3Cuse fill=\'%231a1a1a\' href=\'%23a\' x=\'15\' y=\'15\'/%3E%3Cuse fill=\'%231e1e1e\' href=\'%23a\' x=\'20\' y=\'20\'/%3E%3C/pattern%3E%3Cpattern id=\'c\' width=\'7\' height=\'11\' patternUnits=\'userSpaceOnUse\' patternTransform=\'scale(14.05) translate(-933.85 -700.38)\'%3E%3Cg fill=\'%23222222\'%3E%3Cuse href=\'%23a\'/%3E%3Cuse href=\'%23a\' y=\'5\' /%3E%3Cuse href=\'%23a\' x=\'1\' y=\'10\'/%3E%3Cuse href=\'%23a\' x=\'2\' y=\'1\'/%3E%3Cuse href=\'%23a\' x=\'2\' y=\'4\'/%3E%3Cuse href=\'%23a\' x=\'3\' y=\'8\'/%3E%3Cuse href=\'%23a\' x=\'4\' y=\'3\'/%3E%3Cuse href=\'%23a\' x=\'4\' y=\'7\'/%3E%3Cuse href=\'%23a\' x=\'5\' y=\'2\'/%3E%3Cuse href=\'%23a\' x=\'5\' y=\'6\'/%3E%3Cuse href=\'%23a\' x=\'6\' y=\'9\'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'%23121212\' width=\'100%\' height=\'100%\'/%3E%3Crect fill=\'url(%23a)\' width=\'100%\' height=\'100%\'/%3E%3Crect fill=\'url(%23b)\' width=\'100%\' height=\'100%\'/%3E%3Crect fill=\'url(%23c)\' width=\'100%\' height=\'100%\'/%3E%3C/svg%3E")'
              : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2000 1500\'%3E%3Cdefs%3E%3Crect stroke=\'%23f5f5f7\' fill=\'none\' x=\'0\' y=\'0\' width=\'1600\' height=\'900\'/%3E%3Cpattern id=\'b\' width=\'3\' height=\'3\' patternUnits=\'userSpaceOnUse\' patternTransform=\'scale(14.05) translate(-933.85 -700.38)\'%3E%3Cuse fill=\'%23f8f8f9\' href=\'%23a\'/%3E%3Cuse fill=\'%23f8f8f9\' href=\'%23a\' x=\'5\' y=\'5\'/%3E%3Cuse fill=\'%23fafafb\' href=\'%23a\' x=\'10\' y=\'10\'/%3E%3Cuse fill=\'%23fafafb\' href=\'%23a\' x=\'15\' y=\'15\'/%3E%3Cuse fill=\'%23ffffff\' href=\'%23a\' x=\'20\' y=\'20\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'%23f5f5f7\' width=\'100%\' height=\'100%\'/%3E%3Crect fill=\'url(%23a)\' width=\'100%\' height=\'100%\'/%3E%3Crect fill=\'url(%23b)\' width=\'100%\' height=\'100%\'/%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: theme.palette.mode === 'dark' ? 0.2 : 0.4,
            zIndex: -1,
            transition: 'opacity 0.5s ease',
          },
        },
      }),
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(18, 18, 18, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 30px rgba(0, 0, 0, 0.1)'
            : '0 4px 30px rgba(0, 0, 0, 0.05)',
          transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(30, 30, 30, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 30px rgba(0, 0, 0, 0.1)'
            : '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(0, 0, 0, 0.03)',
          transition: 'background-color 0.5s ease, box-shadow 0.5s ease, border 0.5s ease',
        }),
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
      background: mode === 'dark' 
        ? 'linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)' 
        : 'linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
  },
});

// Export both the creator function and the default theme (dark mode)
export { createAppTheme };
export default createAppTheme('dark');