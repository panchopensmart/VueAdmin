import React from 'react';
import {
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

const MenuElement = ({label, link}) => {
    return (
        <Link href={link} style={{textDecoration: 'none'}}>
            <MenuItem>
                <Typography variant="body2" color="text.secondary">
                    {label}
                </Typography>
            </MenuItem>
        </Link>
    );
};

export default MenuElement;