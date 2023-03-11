import Content from '@/components/about/content';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import Nav from '@/components/header/nav';
import React, { FC } from 'react';


const About = () => {
    return (
        <div id ="about" className='relative'>
            <Header pageName='About'/>
            <Content />
            <Footer />
        </div>
    );
};

export default About;
