import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, ListItem, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';

const Item = styled(ListItem)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '200px auto',
  width: '100%',
  height: '350px',
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
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
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
        <Box
          sx={{
            width: '100%',
            mt: 2,
            display: 'flex',
            padding: 2,
            justifyContent: centered ? 'center' : 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" color="text.primary">
              {item.label}
            </Typography>
            <Typography variant="p" color="text.secondary" sx={{ display: 'flex', textOverflow: 'ellipsis', overflow: 'hidden', width: '200px', whiteSpace: 'nowrap' }}>
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
