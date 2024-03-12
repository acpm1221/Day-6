import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    composes: 'badge', // Use the styles from the CSS file
  },
});

export default function CustomizedBadges({ quantity }) {
  return (
    <IconButton aria-label="shopping cart" style={{ color: "#ff9800", fontSize: "35px" }}>
      <StyledBadge badgeContent={quantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
