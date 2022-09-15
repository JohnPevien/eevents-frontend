import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="bg-indigo-700 h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-9xl text-white font-bold mb-5">404</h1>
                <h2 className="text-3xl text-white font-bold mb-14">
                    Sorry, the page you we&apos;re looking for was not found.
                </h2>
                <Link href="/">
                    <a className="text-2xl rounded-2xl p-4 bg-white text-indigo-900 duration-300 transition-all hover:-translate-y-2">
                        Go Back Home
                    </a>
                </Link>
            </div>
        </section>
    );
}
