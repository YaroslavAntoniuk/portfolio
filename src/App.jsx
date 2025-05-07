import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect } from 'react';
import SVGWaveBackground from './components/SVGWaveBackground';
import TopNav from './components/TopNav';
import About from './containers/About';
import theme from './theme';
import Header from './containers/Header';
import Portfolio from './containers/Portfolio';
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import ProjectDetails from './containers/ProjectDetails';
import ScrollToTopButton from './components/ScrollTopButton';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',

  paddingTop: theme.spacing(12),
}));

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Timeout ensures the DOM is fully rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SVGWaveBackground />
      <TopNav />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Container>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
