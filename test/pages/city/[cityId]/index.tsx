import React, { FC } from 'react';
import { EventsData } from '@/data/event';
import { NextRouter, useRouter } from 'next/router';
import Header from '@/components/header';
import Events from '@/components/Events';
import Footer from '@/components/footer/footer';

interface EventProps {
    EventDataFind: Array<Object>;
    location: string;
    id: number;
    date: string;
    img: string;
    desc: string;
    events: Array<Object>;
}

const Event: FC<EventProps> = () => {
    const router: NextRouter = useRouter();
    const locationId = router.query.cityId?.toString().replace(/-/g, ' ');
    const EventsDataFind = EventsData.find(
        ({ location }) => location === locationId
    );

    return (
        <>
            <Header />
            <Events
                EventsDataFind={EventsDataFind}
                location={locationId}
                id={0}
                date={''}
                img={''}
                desc={''}
                events={[]}
            />
            <Footer />
        </>
    );
};

export default Event;
