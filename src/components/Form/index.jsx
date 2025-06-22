import { useEffect, useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';
import Textarea from '@components/Textarea';

const Form = ({ handleFunction }) => {

    const [data, setData] = useState(() => {
        const initialVal = { nome: '', email: '', cargo: '', curriculo: '', mensagem: '' };
        return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : initialVal;
    });

    const cargos = ['Frontend', 'Backend', 'UI/UX Designer', 'DevOps', 'DevSecOps', 'QA', 'Product Manager'];

    const handleData = (prop, value) => {
        const obj = {};
        obj[prop] = value;
        setData(prev => {
            return { ...prev, ...obj }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(data));
        handleFunction(data);
        setData({ nome: '', email: '', cargo: '', curriculo: '', mensagem: '' });
    }

    useEffect(() => console.log(data), [data]);

    return (
        <form onSubmit={e => handleSubmit(e)} className="bg-(--white1) w-[500px] max-w-[500px]  p-[19px] rounded-xl" action="/" method='POST' autoComplete='true'>
            <h1 className='text-[var(--black5)] text-4xl font-inter font-bold tracking-tighter mb-2'>Cadastre-se</h1>
            <p className='text-[var(--black1)] font-inter mb-5'>Preencha com seus dados e deixe de ser vagabundo!</p>
            <div className="mb-[15px]">
                <Input
                    type='text'
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={data.nome}
                    handleInput={value => handleData('nome', value)}
                />
            </div>
            <div className="mb-[15px]">
                <Input
                    type='text'
                    label='Email'
                    placeholder='Digite seu email'
                    value={data.email}
                    handleInput={value => handleData('email', value)}
                />
            </div>
            <div className="mb-[15px]">
                <Select 
                    name='Cargo'
                    value={data.cargo}
                    list={cargos} 
                    handleFunction={value => handleData('cargo', value)} 
                />
            </div>
            <div className="mb-[15px]">
                <Input
                    type='text'
                    label='Currículo'
                    placeholder='Anexe seu currículo'
                    value={data.curriculo}
                    handleInput={value => handleData('curriculo', value)}
                />
            </div>
            <div className="mb-[15px]">
                <Textarea 
                    name="Mensagem"
                    value={data.mensagem}
                    placeholder="Mensagem (Opcional)"
                    handleFunction={value => handleData('mensagem', value)}
                />
            </div>
            <Button  type='submit' text='Enviar' bg='var(--color1)' color='var(--white1)' handleFunction={() => handleSubmit()} />
        </form>
    )
}

export default Form;
