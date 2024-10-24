"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';


export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState: any) => (
                <React.Fragment>
                    <Button {...bindTrigger(popupState)}>
                        <RxHamburgerMenu className='text-black text-[35px]'/>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}><Link href={'/'}>MAIN</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={'/gallery'}>GALLERY</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={'/projects'}>PROJECTS</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={'/'}>CERTIFICATIONS</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={'/'}>CONTACTS</Link></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
