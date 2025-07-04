import { Link } from 'react-router';
import Button from '@components/Button';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-[20px]'>
            <h1 className='font-inter font-bold text-color3 text-8xl'>404</h1>
            <p className='font-inter font-normal text-base text-black2'>Parece que esta página não foi encontrada.</p>
            <Link to='/'>
                <Button text='Voltar a página inicial' bg='primary' color='white1' styleType='small' />
            </Link>
        </div>
    );
};

export default NotFound;