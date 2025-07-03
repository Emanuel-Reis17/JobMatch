import { Link } from 'react-router';
import Button from '@components/Button';
import { vagas } from '@/assets/data';

const ModalVaga = ({ vagaID, handleFunction }) => {

    const vaga = vagas.find(item => item.id === vagaID);

    return (
        <div className=' bg-[var(--color2)] w-[600px] p-[20px] rounded-xl'>
            <h3 className='text-3xl text-[var(--white1)] font-inter font-semibold mb-[10px] tracking-tighter'>{vaga.title}</h3>
            <h4 className='font-inter font-bold text-lg text-[var(--white3)] my-[10px]'>Detalhes:</h4>
            <p className='font-inter font-normal text-sm text-[var(--white5)]'>Salário: {vaga.salary}</p>
            <span className='font-inter font-normal text-sm text-[var(--white5)]'>{vaga.model} - {vaga.format}</span>
            <p className='font-inter font-normal text-sm text-[var(--white5)]'>{vaga.company} - {vaga.address}</p>
            <h4 className='font-inter font-bold text-lg text-[var(--white3)] my-[10px]'>Requisitos:</h4>
            <ul className='flex flex-col gap-[5px] bg-[var(--color3)] mb-[20px] p-[20px] rounded-lg list-disc list-inside'>
                {vaga.requirements.map(item => <li key={Math.random()} className='font-inter font-normal text-sm text-[var(--white3)]'>{item}</li>)}
            </ul>
            <div className='flex flex-row gap-[10px]'>
                <Link to={`/cadastro-vaga/${vaga.id}`}>
                    <Button text='Aplicar' bg='var(--color1)' color='var(--white1)' styleType='small' />
                </Link>
                <Button text='Ver outra vaga' bg='var(--white3)' color='var(--color1)' styleType='small' handleFunction={handleFunction} />
            </div>
        </div>
    );
};

export default ModalVaga;
