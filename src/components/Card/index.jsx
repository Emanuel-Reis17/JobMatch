import { Link } from 'react-router'
import Button from '@components/Button';

const Card = ({ id, title, model, format, company, address, handleFunction }) => {
    return (
        <div className='bg-color3 w-[300px] p-[13px] rounded-lg'>
            <div className='mb-[10px]'>
                <h3 className='text-2xl text-white2 font-inter font-semibold tracking-tighter'>{title}</h3>
                <span className='font-inter font-normal text-sm text-white5'>{model} - {format}</span>
                <p className='font-inter font-normal text-sm text-white5'>{company} - {address}</p>
            </div>
            <Button text='Detalhes' bg='primary' color='white1' styleType='small' handleFunction={handleFunction} />
        </div>
    );
};

export default Card;
