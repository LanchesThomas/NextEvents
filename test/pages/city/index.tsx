import Nav from '@/components/header/nav';
import React, { FC } from 'react';
import City from '@/components/city';
import Header from '@/components/header';
import Footer from '@/components/footer/footer';

const Events:FC = () => {
    return (
        <>
            <Header />
            <main className='mb-[249px]'>
                <City />
            </main>
            <Footer />
        </>
    );
};

export default Events;
