import { Outlet } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main className='relative flex-grow flex justify-center items-center flex-col w-full h-full'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default HomeLayout;
