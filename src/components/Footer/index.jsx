import { Link } from "react-router";

const Footer = () => {
    const year = new Date().toLocaleDateString('pt-br', {year: "numeric"});
    return (
        <footer className='sticky top-0 bg-color3 w-full py-[13px] px-[20px]'>
            <div className="flex justify-between items-center flex-row max-w-[1024px] m-auto">
                <Link to='/'>
                    <h1 className='font-inter font-extrabold text-white4 text-2xl tracking-tighter'>JobMatch</h1>
                </Link>
                <ul className="flex justify-center items-center gap-[15px]">
                    <li>
                    </li>
                    <li className="font-inter text-sm text-white5 hover:underline hover:cursor-pointer"><Link to='login'>Login</Link></li>
                    <li className="font-inter text-sm text-white5 hover:underline hover:cursor-pointer"><Link to='cadastro'>Cadastre-se</Link></li>
                    <li className="font-inter text-sm text-white5 hover:underline hover:cursor-pointer">Contato</li>
                    <li className="font-inter text-sm text-white5 hover:underline hover:cursor-pointer">Sobre</li>
                </ul>
                <p className='font-inter text-sm text-white5'>By: <a href="https://github.com/Emanuel-Reis17" target="_blank" rel='external' className="underline font-bold">Emanuel Reis</a>.</p>
            </div>
        </footer>
    );
};

export default Footer;
