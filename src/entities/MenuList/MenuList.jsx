import React from 'react';
import MenuElement from "@/entities/MenuElement";

const MenuList = () => {

    return (
        <div>
            <MenuElement label={'about'} link={'/about'}/>
            <MenuElement label={'download'} link={'/download'}/>
            <MenuElement label={'messages'} link={'/messages'}/>
            <MenuElement label={'profile'} link={'/profile'}/>
        </div>
    );
};

export default MenuList;