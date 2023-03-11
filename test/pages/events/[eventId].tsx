import React, { FC } from 'react';
import { EventsData } from '@/data/event';
import { NextRouter, useRouter } from 'next/router';
import Nav from '@/components/header/nav';
import Header from '@/components/header';
import Events from '@/components/Events';

const Event:FC = () => {
    const router: NextRouter = useRouter();
    const id: number = Number(router.query.eventId);

    return (
        <>
            <Header pageName={`Events in ${EventsData[id - 1].location}`} />
            <Events id={id}/>
        </>
    );
};

export default Event;
