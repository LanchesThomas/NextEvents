import { EventsData } from '@/data/event';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { FC } from 'react';

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
        const { name, date, img, desc } = SingleEventFind;

        return (
            <main className='my-12'>
                <div className='mb-12 w-1/3 m-auto'>
                    <h1 className="text-4xl font-bold text-center">{name}</h1>
                </div>
                <div className="flex ">
                    <div className="w-1/2 flex items-center justify-center">
                        <Image
                            width={800}
                            height={500}
                            src={img}
                            alt={`${name}-image`}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-1/2">
                        <p>{date}</p>
                        <p className='text-lg'>{desc}</p>
                    </div>
                </div>
            </main>
        );
    } else {
        return <p>No event found</p>;
    }
};

export default SingleEventMain;
