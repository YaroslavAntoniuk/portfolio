import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import StarIcon from '@mui/icons-material/Star';
import WestIcon from '@mui/icons-material/West';
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { projectDetails } from '../utils/constants';
import { useEffect } from 'react';

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  background: '#060818',
  color: '#fff',
  minHeight: '100vh',
  padding: theme.spacing(2),
  borderRadius: '12px',
  marginBottom: theme.spacing(4),
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

const StatCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  width: '45%',
  minWidth: '220px',
  justifyContent: 'space-between',
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.07)',
  color: '#fff',
  margin: theme.spacing(0.5),
  borderRadius: '8px',
  '& .MuiChip-icon': {
    color: '#6a6a6a',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontWeight: '600',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(26, 32, 53, 0.8)',
  borderRadius: '12px',
  padding: theme.spacing(3),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  alignItems: 'flex-start',
}));

const FeatureBullet = styled(Box)(() => ({
  color: '#8A2BE2',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
}));

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projectDetails.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, []);

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

  // Determine which technologies arrays to use
  const techSections = [];
  let totalTechCount = 0;

  if (project.technologies) {
    totalTechCount += project.technologies.length;
    techSections.push({
      title: 'Technologies Used',
      techs: project.technologies,
    });
  }

  if (project.technologiesMobile) {
    totalTechCount += project.technologiesMobile.length;
    techSections.push({
      title: 'Mobile Technologies',
      techs: project.technologiesMobile,
    });
  }

  if (project.technologiesWeb) {
    totalTechCount += project.technologiesWeb.length;
    techSections.push({
      title: 'Web Technologies',
      techs: project.technologiesWeb,
    });
  }

  if (project.technologiesBackend) {
    totalTechCount += project.technologiesBackend.length;
    techSections.push({
      title: 'Backend Technologies',
      techs: project.technologiesBackend,
    });
  }

  const achievementsCount = project.achievements?.length || 0;

  return (
    <PageContainer>
      <Container maxWidth="lg">
        {/* Header with back button */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
          <BackButton component={RouterLink} to="/#portfolio" startIcon={<WestIcon />}>
            Back
          </BackButton>
          <Typography color="text.secondary" sx={{ mx: 1 }}>
            |
          </Typography>
          <Typography sx={{ color: '#8A8A8A', textDecoration: 'none' }}>
            Projects
          </Typography>
          <Typography color="text.secondary" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography sx={{ color: '#c7c7c7' }}>{project.label}</Typography>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mt: 4,
          }}
        >
          {/* Left column */}
          <Box sx={{ flex: 1 }}>
            <ProjectTitle variant="h1">{project.label}</ProjectTitle>

            <ProjectDescription>{project.description}</ProjectDescription>

            {/* Stats cards */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mb: 4,
                justifyContent: 'space-between',
              }}
            >
              <StatCard>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    {totalTechCount}
                  </Typography>
                  <Typography variant="body2" color="#8A8A8A">
                    Total Technology
                  </Typography>
                </Box>
                <CodeIcon sx={{ color: '#6a6a6a' }} />
              </StatCard>

              <StatCard>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    {achievementsCount}
                  </Typography>
                  <Typography variant="body2" color="#8A8A8A">
                    Key Features
                  </Typography>
                </Box>
                <LayersIcon sx={{ color: '#6a6a6a' }} />
              </StatCard>
            </Box>

            {/* Technologies */}
            <Box sx={{ mb: 4 }}>
              <SectionTitle>
                <CodeIcon /> Technologies Used
              </SectionTitle>

              {techSections.map((section, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  {techSections.length > 1 && (
                    <Typography variant="h6" sx={{ mb: 1, color: '#8A8A8A' }}>
                      {section.title}
                    </Typography>
                  )}
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {section.techs.map((tech, techIndex) => (
                      <TechChip key={techIndex} label={tech} />
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right column */}
          <Box sx={{ flex: 1 }}>
            {/* Project image */}
            {project.url && (
              <Box
                sx={{
                  mb: 4,
                  background: 'linear-gradient(135deg, #00C853, #008F7B)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  p: 3,
                  color: '#fff',
                }}
              >
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Socializing
                  <br />
                  feels natural
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Download the {project.label || `Project ${projectId}`} App now
                </Typography>
                <img
                  src={project.url || '/api/placeholder/600/400'}
                  alt={project.label || `Project ${projectId}`}
                  style={{
                    maxWidth: '100%',
                    borderRadius: '12px',
                  }}
                />
              </Box>
            )}

            {/* Achievements/Features */}
            {project.achievements && project.achievements.length > 0 && (
              <FeatureCard>
                <SectionTitle sx={{ color: '#fff', mb: 3 }}>
                  <StarIcon sx={{ color: '#FFD700' }} /> Key Features
                </SectionTitle>

                {project.achievements.map((achievement, index) => (
                  <FeatureItem key={index}>
                    <FeatureBullet>•</FeatureBullet>
                    <Typography variant="body1" color="#c7c7c7">
                      {achievement}
                    </Typography>
                  </FeatureItem>
                ))}
              </FeatureCard>
            )}
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default ProjectDetails;
