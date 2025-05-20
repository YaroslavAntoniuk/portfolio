import StarIcon from '@mui/icons-material/Star';
import { Typography, Box, styled } from '@mui/material';

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

const Features = ({ achievements }) => {
  if (!achievements?.length) return null;

  return (
    <FeatureCard>
      <SectionTitle sx={{ color: '#fff', mb: 3 }}>
        <StarIcon sx={{ color: '#FFD700' }} /> Key Features
      </SectionTitle>

      {achievements.map((achievement, index) => (
        <FeatureItem key={index}>
          <FeatureBullet>•</FeatureBullet>
          <Typography variant="body1" color="#c7c7c7">
            {achievement}
          </Typography>
        </FeatureItem>
      ))}
    </FeatureCard>
  )
}

export default Features;