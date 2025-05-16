import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

import Layout from '../components/Layout';
import { InfoItems } from '../utils/constants';

const InfoBox = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: '1fr',
  maxWidth: '300px',
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transform: 'scale(1)',
  transition: 'transform 0.5s ease',

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    transform: 'scale(1.05)',
  },
}));

const Highlight = styled('span')(() => ({
  color: '#ffff',
  fontWeight: 'bold',
  fontSize: '1em',
}));

const About = () => {
  const InfoItemsList = InfoItems.map((item, index) => (
    <InfoBox key={index}>
      <Box>
        <item.icon sx={{ fontSize: 40, color: '#fff', mb: 2 }} />
        <Typography variant="body1" color='text.primary'>{item.label}</Typography>
      </Box>

      <Typography variant="h3" color='text.primary'>{item.value}</Typography>
    </InfoBox>
  ));

  return (
    <Layout id="about">
      <Container maxWidth="lg" sx={{ width: '100%', margin: 0, padding: 0 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          About Me
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          component={'p'}
          gutterBottom
        >
          I’m a passionate <Highlight>Full-Stack Developer</Highlight> with a strong focus on building
          modern, scalable web applications. With a solid understanding of both 
          <Highlight> frontend</Highlight> and <Highlight>backend</Highlight> development, I enjoy turning complex ideas into
          clean, efficient code.
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Beyond writing code, I love <Highlight>mentoring</Highlight> junior developers. I also enjoy collaborating
          with teams and learning new technologies to enhance my skills.
        </Typography>
        <Typography variant="h5" color="text.secondary" component={'p'}>
          Whether it’s optimizing algorithm performance or building feature-rich
          interfaces, I aim to create software that’s not only <Highlight>functional</Highlight> but
          also <Highlight>a joy to use.</Highlight>
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          width: '100%',
          margin: 0,
          mt: 4,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {InfoItemsList}
      </Container>
    </Layout>
  );
};

export default About;
