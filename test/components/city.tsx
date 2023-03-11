import Link from 'next/link';
import React, { FC } from 'react';
import { EventsData } from '@/data/event';
import { clear } from 'console';

const City: FC = () => {
    return (
        <div className="flex justify-around">
            {EventsData.map((event) => (
                <Link
                    href={`/events/${event.id}`}
                    key={event.id}
                    className="border-2 border-white mt-8 rounded-md shadow-lg shadow-slate-500"
                >
                    <h2 className="text-center h-10 border-b-2 border-b-white text-xl">
                        {event.location}
                    </h2>
                    <img src={event.img} />
                </Link>
            ))}
        </div>
    );
};

export default City;
