import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, TextField} from "@mui/material";
import ProfileHeader from "@/entities/ProfileHeader/ProfileHeader";
import styled from "@emotion/styled";
import useStore from "@/store/mainStore";

const Header = () => {
    const {setButtonClicked, buttonClicked} = useStore();

    const StyledHeaderBlock = styled.div`
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    `

    const clickToggle = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <StyledHeaderBlock>
            <div onClick={clickToggle}>
                <IconButton aria-label="delete" size="small">
                    <MenuIcon fontSize="small"/>
                </IconButton>
            </div>
            <TextField
                sx={{
                    width: '300px'
                }}
                size="small"
                id="outlined-textarea"
                label="Поиск"
                placeholder="Я ищу..."
                multiline
            />
            <ProfileHeader/>
        </StyledHeaderBlock>
    );
};

export default Header;