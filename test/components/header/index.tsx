import React from 'react';
import Nav from './nav';
import PageName from './pageName';
import clsx from 'clsx';
import Logo from '../../images/logo_black.png';
import Image from 'next/image';
import Desc from './desc';

interface Props {
    pageName: string;
}

const Header = (props: Props) => {
    return (
        <header className=" flex flex-col h-64 gap-8 header border-b border-b-background">
            <div className="flex justify-between items-center w-3/4 m-auto ">
                <Image width={50} height={50} src={Logo} alt="logo" />
                <Nav />
            </div>
            <div className="w-3/4 m-auto">
                <Desc />
            </div>
        </header>
    );
};

export default Header;
