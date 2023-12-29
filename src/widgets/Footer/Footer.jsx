import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Footer = () => {
    const StyledFooter = styled.div`
      display: flex;
      justify-content: space-around;
      height: 30px;
      position: fixed;
      bottom: 0;
      width: 100%;
    `
    const StyledRightFooterBlock = styled.div`
        display: flex;
        align-items: center;
    `
    return (
        <StyledFooter>
            <Typography>2023 | © Your Company</Typography>
               <StyledRightFooterBlock>
                   <Typography fontWeight='bolder'>so funny | </Typography>
                   <SentimentSatisfiedAltIcon />
               </StyledRightFooterBlock>
        </StyledFooter>
    );
};

export default Footer;