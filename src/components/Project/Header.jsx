import { Box, Typography, Button, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';

const BackButton = styled(Button)(() => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },  
}));

const Header = ({ label }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
      <BackButton component={RouterLink} to="/projects" startIcon={<WestIcon />}>
        Back
      </BackButton>
      <Typography color="text.secondary" sx={{ mx: 1 }}>
        |
      </Typography>
      <Typography sx={{ color: '#c7c7c7', textDecoration: 'none' }} component={RouterLink} to="/projects">
        Projects
      </Typography>
      <Typography color="text.secondary" sx={{ mx: 1 }}>
        /
      </Typography>
      <Typography sx={{ color: '#c7c7c7' }}>{label}</Typography>
    </Box>
  )
}

export default Header;