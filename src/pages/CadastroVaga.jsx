import { useState } from 'react';
import { useParams } from 'react-router';
import Form from '@components/Form';
import Input from '@components/Input';
import Select from '@components/Select';
import Textarea from '@components/Textarea';
import { vagas } from '@/assets/data';

const CadastroVaga = () => {

    const { cargoID } = useParams();

    const [data, setData] = useState(() => {
        const initialVal = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : { nome: '', email: '', cargo: '', curriculo: '', mensagem: '' };
        
        if (typeof Number(cargoID) === 'number' && Number(cargoID) <= vagas.length - 1) {
            const [{ title }] = vagas.filter(item => item.id === Number(cargoID));
            initialVal.cargo = title;
        }

        return initialVal;
    });

    const cargos = vagas.map(vaga => vaga.title);

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
        showData(data);
        setData({ nome: '', email: '', cargo: '', curriculo: '', mensagem: '' });
    }

    const showData = data => console.log(data);

    return (
        <div className='flex justify-center items-center bg-(--white1) w-full'>
            <Form title='Cadastre-se' text='Preencha com seus dados e deixe de ser vagabundo!' handleFunction={handleSubmit}>
                <Input
                    type='text'
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={data.nome}
                    handleInput={value => handleData('nome', value)}
                />
                <Input
                    type='text'
                    label='Email'
                    placeholder='Digite seu email'
                    value={data.email}
                    handleInput={value => handleData('email', value)}
                />
                <Select
                    name='Cargo'
                    value={data.cargo}
                    list={cargos}
                    handleFunction={value => handleData('cargo', value)}
                />
                <Input
                    type='text'
                    label='Currículo'
                    placeholder='Anexe seu currículo'
                    value={data.curriculo}
                    handleInput={value => handleData('curriculo', value)}
                />
                <Textarea
                    name="Bio"
                    value={data.mensagem}
                    placeholder="Conte mais sobre você. (Opcional)"
                    handleFunction={value => handleData('mensagem', value)}
                />
            </Form>
        </div>
    );
};

export default CadastroVaga;
