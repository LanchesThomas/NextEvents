import Header from '@/components/header';
import Nav from '@/components/header/nav';
import Cards from '@/components/home/cards';
import Link from 'next/link';
import { FC } from 'react';
import { EventsData } from '@/data/event';
import Footer from '@/components/footer/footer';

const Home: FC = () => {
    return (
        <div id="home" className='relative'>
            <Header pageName={'HomePage'} />
            <main className="flex flex-col gap-7 py-10 pb-28">
                {EventsData.map((event) => (
                    <Cards
                        id={event.id}
                        location={event.location}
                        img={event.img}
                        desc={event.desc}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
