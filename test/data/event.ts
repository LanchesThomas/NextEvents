interface CityType {
    id: number;
    location: string;
    date: string;
    img: string;
    desc: string;
    events: EventsType[];
}

interface EventsType {
    id: number;
    name: string;
    date: string;
    img: string;
}

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getTimes = () => {
    return `${day + 20}, ${monthNames[month]}, ${year}`;
};

export const EventsData: CityType[] = [
    {
        id: 1,
        location: 'New york',
        date: getTimes(),
        img: 'https://picsum.photos/900/899',
        desc: 'Lorem ipsum dolor sit amet. Quo saepe necessitatibus ut beatae officiis in error unde hic corrupti amet quo eaque neque. Ad eligendi labore ut adipisci obcaecati sit placeat deserunt non illo galisum est aspernatur quia. Est pariatur tenetur et molestiae praesentium cum velit accusantium.',
        events: [
            {
                id: 1,
                name: 'Party Hard',
                date: getTimes(),
                img: 'https://picsum.photos/600/259',
            },
            {
                id: 2,
                name: 'Looking Good',
                date: getTimes(),
                img: 'https://picsum.photos/600/301',
            },
            {
                id: 3,
                name: "Pedro's Dance",
                date: getTimes(),
                img: 'https://picsum.photos/600/302',
            },
        ],
    },
    {
        id: 2,
        location: 'San Francisco',
        date: getTimes(),
        img: 'https://picsum.photos/900/800',
        desc: 'Lorem ipsum dolor sit amet. Qui voluptates repellendus ea rerum voluptatum ea dolores odio est quasi maiores. Vel accusantium suscipit et omnis quisquam in incidunt delectus et doloribus galisum?',
        events: [
            {
                id: 1,
                name: 'Coconu Beach Party',
                date: getTimes(),
                img: 'https://picsum.photos/600/247',
            },
            {
                id: 2,
                name: 'Hello Friends',
                date: getTimes(),
                img: 'https://picsum.photos/600/248',
            },
            {
                id: 3,
                name: "Come on we're Open",
                date: getTimes(),
                img: 'https://picsum.photos/600/246',
            },
            {
                id: 4,
                name: 'Good Day For Dance',
                date: getTimes(),
                img: 'https://picsum.photos/600/237',
            },
        ],
    },
    {
        id: 3,
        location: 'Los Angeles',
        date: getTimes(),
        img: 'https://picsum.photos/900/901',
        desc: 'Lorem ipsum dolor sit amet. Et eligendi quae cum libero consectetur et necessitatibus voluptate et quae minus ut unde vero sit dolor aspernatur est deleniti esse. Ab quia nihil id modi omnis cum vitae labore cum atque rerum et quod quidem.',
        events: [
            {
                id: 1,
                name: 'One Two We Dancing',
                date: getTimes(),
                img: 'https://picsum.photos/600/268',
            },
            {
                id: 2,
                name: 'Baby Come Over',
                date: getTimes(),
                img: 'https://picsum.photos/600/296',
            },
        ],
    },
];
