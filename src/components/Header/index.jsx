import { Link } from 'react-router';
import Button from '@components/Button';

const Header = () => {
    return (
        <header className='sticky top-0 bg-[var(--white1)]/93 backdrop-blur-[4px] w-full py-[13px] px-[20px] border-b border-gray-200 z-1'>
            <nav className='flex justify-between items-center flex-row max-w-[1024px] m-auto'>
                <Link to='/'>
                    <h1 className='font-inter font-extrabold text-2xl tracking-tighter'>Job<span className='text-[var(--color1)]'>Match</span></h1>
                </Link>
                <ul className='flex justify-center items-center gap-[9px]'>
                    <li className='font-inter font-medium text-[var(--black3)] py-[9px] px-[25px] rounded-lg transiton duration-100 ease hover:cursor-pointer hover:bg-[var(--white2)]'>Sobre</li>
                    <li className='font-inter font-medium text-[var(--black3)] py-[9px] px-[25px] rounded-lg transiton duration-100 ease hover:cursor-pointer hover:bg-[var(--color1)]'>Contato</li>
                    <li>
                        <Link to='/login'>
                            <Button type="button" text='Login' bg='var(--color1)' color='var(--white1)' styleType='small' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/cadastro'>
                            <Button type="button" text='Cadastre-se' bg='var(--white3)' color='var(--black1)' styleType='small' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
