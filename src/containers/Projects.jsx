import { Box, Container, List, Typography } from '@mui/material';
import PortfolioItem from '../components/PortfolioItem';
import { projects } from '../utils/constants';

const Projects = () => {
  return (
    <Box sx={{ mb: 4}}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4 }}>All Projects</Typography>
        <List
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
          {projects.map((project) => (
            <PortfolioItem key={project.id} item={project} />
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Projects; 