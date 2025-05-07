// TabSwitcher.tsx or .jsx

import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';

const TabButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  color: theme.palette.text.primary,

  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

/**
 *
 * @param {Array} tabs - Array of tab objects: { label: string, value: string }
 * @param {string} activeTab - The value of the currently active tab
 * @param {function} onTabChange - Function to call when a tab is clicked
 * @returns
 */
const TabSwitcher = ({ tabs, activeTab, onTabChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          variant={'outlined'}
          onClick={() => onTabChange(tab.value)}
          sx={{
            textTransform: 'none',
            backgroundColor:
              activeTab === tab.value ? 'primary.dark' : 'transparent',
          }}
        >
          <Typography variant="body1" color="text.primary">
            {tab.label}
          </Typography>
        </TabButton>
      ))}
    </Box>
  );
};

export default TabSwitcher;
