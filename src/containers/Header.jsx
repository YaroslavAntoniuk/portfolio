import { Container, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import HeaderImage from '../assets/header.gif';
import { StackItems } from '../utils/constants';

const StackBoxList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
}));

const StackBoxItem = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.h6.fontSize,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    cursor: 'pointer',
  },
}));

const Header = () => {
  const StackItemsList = StackItems.map((item, index) => (
    <StackBoxItem key={index} variant="h6" color="text.secondary">
      {item.icon && (
        <img
          src={item.icon}
          alt={item.name}
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
      )}
      {item.name}
    </StackBoxItem>
  ));

  return (
    <Box
      id="home"
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        mb: 12,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="textDisabled"
          gutterBottom
        >
          Hi!
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          I'm{' '}
          <Typography component="span" variant="h2" color="info">
            Yaroslav
          </Typography>{' '}
          Antoniuk
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          I am a{' '}
          <Typography component="span" variant="h6" color="text.primary">
            Full Stack Developer
          </Typography>{' '}
          with a knack for creating dynamic and responsive web applications.
        </Typography>
        <StackBoxList>{StackItemsList}</StackBoxList>
      </Container>

      <Container
        maxWidth="md"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          width: 'fit-content',
        }}
      >
        <img src={HeaderImage} width={400} alt="Description of image" />
      </Container>
    </Box>
  );
};
export default Header;
