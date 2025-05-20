import { Box, Typography, styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 2,
  marginBottom: 24,
  justifyContent: 'space-between',
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

const Stats = ({ totalTechCount, achievementsCount }) => {
  return (
    <StatsContainer>
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
    </StatsContainer>
  )
}

export default Stats;