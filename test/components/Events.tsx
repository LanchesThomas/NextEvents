import { EventsData } from '@/data/event';

interface Props {
    id: number;
}

const Events = (props: Props) => {
    return (
        <div className="flex justify-between m-auto mt-7 flex-wrap w-3/4 mb-[223px]">
            {EventsData[props.id - 1].events.map((event, index, tab) => (
                <div
                    key={event.id}
                    className={`border border-background rounded-lg w-${tab.length <= 2 ? '1/3' : '1/4'} h-80 box-content mb-7`}
                >
                    <div className="h-1/4 w-full flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold" >{event.name}</h1>
                        <h2 className="text-lg">{event.date}</h2>
                    </div>
                    <div className="h-3/4 w-full">
                        <img
                            src={event.img}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;
