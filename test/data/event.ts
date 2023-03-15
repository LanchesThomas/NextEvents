export interface CityType {
    id: number;
    location: string;
    date: string;
    img: string;
    desc: string;
    events: Array<EventsType>;
    EventsDataFind?: CityType;
}

export interface EventsType {
    id: number;
    name: string;
    date: string;
    img: string;
    desc: string;
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
        location: 'New York',
        date: getTimes(),
        img: 'https://picsum.photos/900/899',
        desc: 'Lorem ipsum dolor sit amet. Quo saepe necessitatibus ut beatae officiis in error unde hic corrupti amet quo eaque neque. Ad eligendi labore ut adipisci obcaecati sit placeat deserunt non illo galisum est aspernatur quia. Est pariatur tenetur et molestiae praesentium cum velit accusantium.',
        events: [
            {
                id: 1,
                name: 'Party Hard',
                date: getTimes(),
                img: 'https://picsum.photos/600/259',
                desc: 'Lorem ipsum dolor sit amet. Ut velit assumenda ut Quis consequatur sit voluptatem accusantium et deleniti libero qui quae quia et aliquam optio ea enim odit! Hic autem odit id incidunt animi quo unde illum rem sint molestiae a corrupti internos non quidem accusantium?',
            },
            {
                id: 2,
                name: 'Looking Good',
                date: getTimes(),
                img: 'https://picsum.photos/600/301',
                desc: 'Lorem ipsum dolor sit amet. Aut voluptatibus ratione aut ducimus laudantium eos minima minus aut dignissimos itaque. Aut atque quis quo expedita tempore ut fuga sint et velit quisquam non neque doloremque et voluptate reiciendis.',
            },
            {
                id: 3,
                name: "Pedro's Dance",
                date: getTimes(),
                img: 'https://picsum.photos/600/302',
                desc: 'Lorem ipsum dolor sit amet. Ea fugiat nobis quo facere nihil ut ipsum ipsa non voluptatem quae 33 sunt quisquam non dolorem iusto quo odio aliquid. Ex quia quis aut iste dolorum ad labore rerum est impedit perferendis eum architecto molestias qui aliquam excepturi sed sequi placeat. In nulla omnis eum harum unde aut magni recusandae et inventore officia vel nihil praesentium.',
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
                desc: 'Lorem ipsum dolor sit amet. Sed corporis dolores ad dolores illum 33 incidunt doloribus. Ab esse iste et expedita laudantium 33 eligendi consequatur. Ut itaque labore a repellendus expedita ut quis consequatur qui porro aspernatur? Eos vitae nihil nam consequatur dolor id aliquid Quis est enim soluta non minima sapiente vel eius velit sit quia deserunt.',
            },
            {
                id: 2,
                name: 'Hello Friends',
                date: getTimes(),
                img: 'https://picsum.photos/600/248',
                desc: 'Lorem ipsum dolor sit amet. At blanditiis veritatis et neque magnam ab nesciunt molestias cum dignissimos dolores ea animi internos aut tempora placeat. Est minima amet qui quidem tempora et molestiae nesciunt et voluptate eaque.',
            },
            {
                id: 3,
                name: "Come on we're Open",
                date: getTimes(),
                img: 'https://picsum.photos/600/246',
                desc: 'Lorem ipsum dolor sit amet. Et reiciendis omnis non sapiente officiis hic voluptas ipsum. Est modi corrupti sit vitae molestiae eos eligendi rerum ex natus nihil et totam esse ut earum illum sit laudantium autem!',
            },
            {
                id: 4,
                name: 'Good Day For Dance',
                date: getTimes(),
                img: 'https://picsum.photos/600/237',
                desc: 'Lorem ipsum dolor sit amet. Ad impedit libero et quaerat culpa 33 eius sapiente est consequatur aspernatur et soluta omnis et quae quod? Non porro rerum eum repudiandae voluptates et omnis molestias qui saepe numquam est adipisci Quis. Qui mollitia harum et illo fuga in itaque voluptatibus est velit deserunt et magnam sint sit aliquid harum.',
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
                desc: 'Lorem ipsum dolor sit amet. Et quia porro ab galisum velit ut vero iusto sed excepturi nisi. Ab quam alias cum repellendus enim in voluptatem animi sit placeat doloremque qui omnis rerum. Eum voluptatibus deleniti sed voluptatum deserunt a consectetur asperiores et fuga quisquam.',
            },
            {
                id: 2,
                name: 'Baby Come Over',
                date: getTimes(),
                img: 'https://picsum.photos/600/296',
                desc: 'Lorem ipsum dolor sit amet. Id laudantium itaque quo nesciunt repellendus qui fugiat aperiam ut modi suscipit est nobis molestias qui voluptatem quae. Et quos consequatur et dolorem vero ea excepturi enim in sunt saepe aut galisum possimus sed suscipit omnis. Aut deleniti totam ut similique possimus non dolorem sunt qui quibusdam porro vel omnis unde 33 voluptatum nobis. 33 iure nisi ea consequatur quos eum quia beatae et facere alias ut totam dolorem et voluptatem minima eos numquam laudantium.',
            },
        ],
    },
];
