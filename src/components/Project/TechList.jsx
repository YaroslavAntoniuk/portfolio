import { Box, Chip, Stack, Typography, styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const SectionTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontWeight: '600',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
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

const TechList = ({ techSections }) => {
  if (!techSections?.length) return null;

  return (
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
  )
}

export default TechList;
