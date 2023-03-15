import { FC } from 'react';
import { CityType, EventsType } from '@/data/event';
import Link from 'next/link';
import Image from 'next/image';

const Events: FC<CityType> = ({ EventsDataFind, location }) => {
    if (EventsDataFind) {
        return (
            <main className="flex justify-between m-auto mt-7 flex-wrap w-3/4 mb-[223px]">
                {EventsDataFind?.events.map(
                    (event: EventsType, index: Number, tab: Array<Object>) => (
                        <Link
                            href={`/city/${location}/${event.name.replaceAll(
                                ' ',
                                '-'
                            )}`}
                            key={event.id}
                            className={`border border-background rounded-lg w-${
                                tab.length <= 2 ? '1/3' : '1/4'
                            } h-80 box-content mb-7`}
                        >
                            <div className="h-1/4 w-full flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-bold">
                                    {event.name}
                                </h1>
                                <h2 className="text-lg">{event.date}</h2>
                            </div>
                            <div className="h-3/4 w-full">
                                <Image
                                width={700}
                                height={700}
                                alt={`${event.name}-image`}
                                    src={event.img}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </Link>
                    )
                )}
            </main>
        );
    } else {
        return <p>No Events Found</p>;
    }
};

export default Events;
