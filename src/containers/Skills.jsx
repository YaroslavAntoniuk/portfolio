import { Box, List, Typography } from '@mui/material';
import React from 'react';
import Skill from '../components/Skill';
import TabSwitcher from '../components/TabSwitcher';
import { skills } from '../utils/constants';

const Skills = () => {
  const [activeTab, setActiveTab] = React.useState('primary');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box
      id="skills"
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
      <Box sx={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          My Skills
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          component={'p'}
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          I have a diverse set of skills that allow me to tackle various
          challenges in web development. Here are some of the technologies and
          tools I am proficient in:
        </Typography>

        <TabSwitcher
          tabs={[
            { label: 'Primary Stack', value: 'primary' },
            { label: 'Previous Experience', value: 'previous' },
            { label: 'Explored Technologies', value: 'explored' },
          ]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {skills[activeTab].map((skill, index) => (
            <Skill key={index} name={skill.name} icon={skill.icon} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
