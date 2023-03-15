import { EventsData } from '@/data/event';
import { NextRouter, useRouter } from 'next/router';
import { FC } from 'react';

interface SingleEventType {
    id: number;
    name: string;
    date: string;
    img: string;
}

const SingleEventMain: FC = () => {
    const router: NextRouter = useRouter();
    const locationId = router.query.cityId?.toString().replace(/-/g, ' ');
    const eventName = router.query.singleEventId?.toString().replace(/-/g, ' ');

    const EventsDataFind = EventsData.find(
        ({ location }) => location === locationId
    );

    const SingleEventFind = EventsDataFind?.events.find(
        ({ name }) => name === eventName
    );

    if (SingleEventFind) {
        const { id, name, date, img } = SingleEventFind;

        return (
            <main>
                <p>{name}</p>
            </main>
        );
    } else {
        return <p>No event found</p>;
    }
};

export default SingleEventMain;
