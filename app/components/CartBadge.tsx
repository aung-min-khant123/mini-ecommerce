import * as React from 'react'
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartBadge(){
    return(
        <Badge badgeContent={4} color= 'warning'>
            <ShoppingCartIcon color="action" sx={{color: "#fff"}}/>
        </Badge>
    );
}