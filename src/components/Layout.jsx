import { Container } from '@mui/material';
import React from 'react';

const Layout = ({ children, id }) => {
  return (
    <Container
      id={id}
      component="section"
      sx={{
        py: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 12,
      }}
    >
      {children}
    </Container>
  );
};
export default Layout;
