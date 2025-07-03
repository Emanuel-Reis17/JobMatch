import { Link } from 'react-router'
import Button from '@components/Button';

const Card = ({ id, title, model, format, company, address, handleFunction }) => {
    return (
        <div className='bg-[var(--color3)] w-[300px] p-[13px] rounded-lg border border-[var(--color3)]'>
            <div className='mb-[10px]'>
                <h3 className='text-2xl text-[var(--white2)] font-inter font-semibold tracking-tighter'>{title}</h3>
                <span className='font-inter font-normal text-sm text-[var(--white5)]'>{model} - {format}</span>
                <p className='font-inter font-normal text-sm text-[var(--white5)]'>{company} - {address}</p>
            </div>
            <Button text='Detalhes' bg='var(--color1)' color='var(--white1)' styleType='small' handleFunction={handleFunction} />
        </div>
    );
};

export default Card;
