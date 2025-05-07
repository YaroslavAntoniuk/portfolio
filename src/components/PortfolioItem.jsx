import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, ListItem, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';

const Item = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '300px',
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],

  '&:hover': {
    '& img': {
      transform: 'scale(1.1)',
    },
    color: theme.palette.common.white,
  },

  '& img': {
    transform: 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  },
}));

const PortfolioItem = ({
  item,
  withButton = true,
  centered = false,
  isCert = false,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Item onClick={isCert ? handleOpen : null} sx={{ cursor: isCert ? 'pointer' : 'default', maxWidth: isCert ? 250 : 350 }}>
        <img
          src={item.url}
          alt={item.label}
          style={{ width: 150, height: 150 }}
        />
        <Box
          sx={{
            width: '100%',
            mt: 2,
            display: 'flex',
            justifyContent: centered ? 'center' : 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" color="text.primary">
              {item.label}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.description}
            </Typography>
          </Box>
          {withButton && (
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Button
                component={RouterLink}
                to={`/projects/${item.id}`}
                sx={{ textTransform: 'none', color: 'text.primary' }}
                variant="outlined"
              >
                <Typography variant="body2" color="text.primary">
                  Details
                </Typography>
                <ArrowForwardIcon sx={{ ml: 1, fontSize: 16 }} />
              </Button>
            </Box>
          )}
        </Box>
      </Item>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {item.label}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            component="img"
            src={item.url}
            alt="Certificate"
            sx={{ width: '100%', maxHeight: 600, objectFit: 'contain' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioItem;
