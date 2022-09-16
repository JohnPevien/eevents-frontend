import Image from 'next/image';

type Props = {};
export default function Showcase({}: Props) {
    return (
        <section className="h-[300px] w-full bg-gradient-to-r from-indigo-700 via purple-700 to-pink-700 flex flex-col justify-center items-center text-white relative">
            <Image
                src="https://res.cloudinary.com/dka0kjngw/image/upload/v1663341812/Eevents/showcase-img_iekmkz.jpg?w=1400"
                layout="fill"
                objectPosition="center"
                objectFit="cover"
                alt="Man Standing In Front Of People Sitting On Chairs
"
                className="mix-blend-soft-light"
            />
            <h2 className="text-8xl mb-5">Eevents</h2>
            <p className="text-3xl">Your best place to look for events.</p>
        </section>
    );
}

// bg-[url('https://res.cloudinary.com/dka0kjngw/image/upload/v1663341812/Eevents/showcase-img_iekmkz.jpg?w=1485')]
