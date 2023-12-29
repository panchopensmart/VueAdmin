import React from 'react';
import {Avatar, Typography} from "@mui/material";
import styled from '@emotion/styled';

const ProfileHeader = () => {
    const StyledProfileHeaderWithAvatar = styled.div`
      display: flex;
      align-items: center;
    `
    const StyledProfileHeaderNonAvatar = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    `

    return (
        <StyledProfileHeaderWithAvatar>
            <Avatar>OP</Avatar>
            <StyledProfileHeaderNonAvatar>
                <Typography variant="body1" fontWeight={'bold'}>User</Typography>
                <Typography variant="body2">Description person</Typography>
            </StyledProfileHeaderNonAvatar>
        </StyledProfileHeaderWithAvatar>
    );
};

export default ProfileHeader;