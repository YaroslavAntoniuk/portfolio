import WestIcon from '@mui/icons-material/West';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/mixpanel';

const BackButton = styled(Button)(() => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const UnknowPage = () => {
  const location = useLocation();

  useEffect(() => {
    trackEvent('Page Viewed', { page: location.pathname });
  }, [location]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Page not found
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: '#8A8A8A' }}>
          The page you are looking for does not exist.
        </Typography>
        <BackButton component={RouterLink} to="/" startIcon={<WestIcon />}>
          Go to Home page
        </BackButton>
      </Box>
    </Container>
  );
};

export default UnknowPage;
