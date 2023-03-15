import { TeamDatas } from '@/data/team';
import Image from 'next/image';

const Team = () => {
    return (
        <div className="flex justify-center gap-24">
            {TeamDatas.map((member) => (
                <div className='flex flex-col items-center' key={member.id}>
                    <Image
                        src={member.img}
                        width={96}
                        height={96}
                        alt={`${member.name}-photo`}
                        className="rounded-full h-24 object-cover"
                    />
                    <h3 className='text-lg font-semibold'>{member.name}</h3>
                    <p>{member.job}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;
