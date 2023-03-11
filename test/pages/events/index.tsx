import Nav from '@/components/header/nav';
import React, { FC } from 'react';
import City from '@/components/city';
import Header from '@/components/header';

const Events:FC = () => {
    return (
        <>
            <Header pageName='Events'/>
            <div >
                <City />
            </div>
        </>
    );
};

export default Events;
