import WestIcon from '@mui/icons-material/West';
import {
  Box,
  Button,
  Container,
  styled,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import FullScreenModal from '../components/FullScreenModal';
import Features from '../components/Project/Features';
import Header from '../components/Project/Header';
import ImageCarousel from '../components/Project/ImageCarousel';
import Stats from '../components/Project/Stats';
import TechList from '../components/Project/TechList';
import { projectDetails } from '../utils/constants';
import { getTechDetails } from '../utils/helper';

const PageContainer = styled(Box)(({ theme }) => ({
  background: '#060818',
  color: '#fff',
  padding: theme.spacing(2),
  borderRadius: '12px',
  marginBottom: theme.spacing(8),
  height: 'auto',
}));

const BackButton = styled(Button)(() => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  background: theme.palette.info,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: '#c7c7c7',
  fontSize: '1.1rem',
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
}));

const ProjectUrl = styled(Typography)(({ theme }) => ({
  color: theme.palette.info,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
  textDecoration: 'none',
  marginTop: theme.spacing(2),
  display: 'block',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const location = useLocation();
  const project = projectDetails.find((p) => p.id === projectId);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { techSections, totalTechCount } = getTechDetails(project);
  const achievementsCount = project.achievements?.length || 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackEvent('Page Viewed', { page: location.pathname });
  }, [location]);

  const openFullscreen = (index) => {
    setActiveIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  if (!project) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ pt: 4 }}>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Project not found
            </Typography>
            <BackButton component={RouterLink} to="/" startIcon={<WestIcon />}>
              Go to Home page
            </BackButton>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <PageContainer>
        <Container maxWidth="lg" sx={{ width: '100%', position: 'relative' }}>
          <Header label={project.label} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              width: '100%',
            }}
          >
            <Box sx={{ flex: 1, width: '100%' }}>
              <ProjectTitle variant="h1">{project.label}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.url && (
                <ProjectUrl component={RouterLink} to={project.url} target="_blank">{project.url}</ProjectUrl>
              )}

              <Stats totalTechCount={totalTechCount} achievementsCount={achievementsCount} />
              <TechList techSections={techSections} />
            </Box>

            <Box sx={{ flex: 1, width: '100%', height: '100%' }}>
              <ImageCarousel project={project} projectId={projectId} openFullscreen={openFullscreen} setActiveIndex={setActiveIndex} />
              <Features achievements={project?.achievements} />
            </Box>
          </Box>
        </Container>
      </PageContainer>

      <FullScreenModal
        isOpen={isFullscreen}
        onClose={closeFullscreen}
        project={project}
        projectId={projectId}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default ProjectDetails;
