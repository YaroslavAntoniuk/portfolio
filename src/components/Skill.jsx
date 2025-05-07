import { ListItem, styled, Typography } from "@mui/material";
import React from "react";

const StyledItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  width: 'fit-content',
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Skill = ({ name, icon }) => {
  return (
    <StyledItem>
      <img src={icon} alt={name} style={{ width: 40, height: 40 }} />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        {name}
      </Typography>
    </StyledItem>
  )
};

export default Skill;