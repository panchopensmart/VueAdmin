import React from 'react';
import {
    Box,
    Typography
} from "@mui/material";
import styled from '@emotion/styled';

const PanelHeader = () => {
    const StyledPanelHeader = styled.div`
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
    const StyledPanelHeaderLabel = styled.div`
      margin: 20px;
    `
    return (
        <StyledPanelHeader>
            <StyledPanelHeaderLabel>
                <Typography>Admin Dashboard</Typography>
            </StyledPanelHeaderLabel>
        </StyledPanelHeader>
    );
};

export default PanelHeader;