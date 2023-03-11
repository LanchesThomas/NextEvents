import { EventsData } from '@/data/event';

interface Props {
    id: number;
}

const Events = (props: Props) => {
    return (
        <div className="flex justify-around mt-7">
            {EventsData[props.id - 1].events.map((event) => (
                <div key={event.id} className="border-2 border-white h-full">
                    <div style={{ height: '20%' }}>
                        <h1 className="text-lg">{event.name}</h1>
                        <h2 className="text-lg">{event.date}</h2>
                    </div>
                    <div style={{ height: '80%' }}>
                        <img src={event.img} className="object-cover h-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;
