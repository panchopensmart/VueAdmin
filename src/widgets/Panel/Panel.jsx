import React from 'react';
import PanelHeader from "@/entities/PanelHeader";
import MenuList from '@/entities/MenuList/MenuList';
import styled from '@emotion/styled';
import useStore from "@/store/mainStore";

const Panel = () => {
    const buttonClicked = useStore((state) => state.buttonClicked);

    const StyledPanelComponent = styled.div`
      width: 300px;
      padding: 0;
      margin: 0 10px 0 0;
      border: 2px solid #e5e5e5;
      border-radius: 7px;
    `

    return (
       <>
           {buttonClicked  && (
               <StyledPanelComponent>
                   <PanelHeader/>
                   <MenuList/>
               </StyledPanelComponent>
           )}
       </>
    );
};

export default Panel;