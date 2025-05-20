import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollTopButton';
import SVGWaveBackground from './components/SVGWaveBackground';
import TopNav from './components/TopNav';
import UnknowPage from './components/UnknowPage';
import About from './containers/About';
import Contact from './containers/Contact';
import Header from './containers/Header';
import Portfolio from './containers/Portfolio';
import ProjectDetails from './containers/ProjectDetails';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import theme from './theme';
import { trackEvent } from './utils/mixpanel';
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
    trackEvent('Page Viewed', { page: location.pathname });
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
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<UnknowPage />} />
        </Routes>
      </Container>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
