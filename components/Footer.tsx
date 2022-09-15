import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-indigo-200 text-center p-10 mt-24 mx-0 mb-10">
            <p className="m-1.5">Copyright &copy; Eevents {currentYear}</p>

            <p>
                <Link href="/about">
                    <a className="text-m text-indigo-900 hover:underline">
                        About this Project
                    </a>
                </Link>
            </p>
        </footer>
    );
}
