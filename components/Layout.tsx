import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Showcase from 'components/Showcase';

type Props = {
    title?: string;
    keywords: string;
    description: string;
    children: React.ReactNode;
};

export default function Layout({
    title,
    keywords,
    description,
    children,
}: Props) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{title || 'Eevents'}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <main className="container mx-auto">{children}</main>
            <Footer />
        </>
    );
}

Layout.defaultProps = {
    title: 'Eevents',
    keywords: 'Events, Find Events, Find Local Events, Find Online Events',
    description: 'Find the latest events',
};
