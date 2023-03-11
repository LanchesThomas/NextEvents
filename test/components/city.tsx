import Link from 'next/link';
import React, { FC } from 'react';
import { EventsData } from '@/data/event';
import { clear } from 'console';

const City: FC = () => {
    return (
        <div className="flex justify-around mt-8">
            {EventsData.map((event) => (
                <Link
                    href={`/city/${event.id}`}
                    key={event.id}
                    className="border border-background rounded-md h-80 w-1/4"
                >
                    <h2 className="flex items-center justify-center h-1/4 border-b-2 border-b-white text-2xl font-bold">
                        {event.location}
                    </h2>
                    <img src={event.img} className='w-full h-3/4 object-cover rounded-b-md border-t border-t-background'/>
                </Link>
            ))}
        </div>
    );
};

export default City;
