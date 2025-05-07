import { Box, Button, Container, List, Typography } from '@mui/material';
import React from 'react';

import PortfolioItem from '../components/PortfolioItem';
import TabSwitcher from '../components/TabSwitcher';
import { certificates, PortfolioTabs, projects } from '../utils/constants';

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState(PortfolioTabs.Projects);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box
      component="section"
      id="portfolio"
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
      <Container maxWidth="lg" sx={{ width: '100%', margin: 0, padding: 0 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          My Portfolio
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          component={'p'}
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Here are some of the projects I have worked on and certificates I
          earned. Click on the links to view the live demos or the source code.
        </Typography>

        <TabSwitcher
          tabs={[
            { label: 'Projects', value: PortfolioTabs.Projects },
            { label: 'Certificates', value: PortfolioTabs.Certificates },
          ]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

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
          {activeTab === PortfolioTabs.Projects &&
            projects.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          {activeTab === PortfolioTabs.Certificates &&
            certificates.map((item, index) => (
              <PortfolioItem
                key={index}
                item={item}
                withButton={false}
                centered={true}
                isCert={true}
              />
            ))}
        </List>
      </Container>
    </Box>
  );
};

export default Portfolio;
