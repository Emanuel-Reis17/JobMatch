import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Form from '@components/Form';
import Input from '@components/Input';
import Modal from '@components/Modal';
import Button from '@components/Button';

const Cadastro = () => {

    const [data, setData] = useState({ nome: '', email: '', password: '' });
    const [showModal, setShowModal] = useState();
    const dialogRef = useRef(null);

    const handleData = (prop, value) => {
        const obj = {};
        obj[prop] = value;
        setData(prev => {
            return { ...prev, ...obj }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        showUserData(data);
        setShowModal(true);
        setData({ nome: '', email: '', password: '' });
    }

    const showUserData = userData => console.log(userData);

    useEffect(() => showModal ? dialogRef.current.showModal() : dialogRef.current.close(), [showModal]);

    return (
        <>
            <Modal dialogRef={dialogRef}>
                <div className='relative flex flex-col justify-center items-center gap-[15px]bg-white1 w-[600px] h-[300px] p-[20px] rounded-lg'>
                    <span className='absolute top-[20px] right-[20px]'>
                        <Button bg='white3' styleType='extrasmall' handleFunction={() => setShowModal(false)}>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px'}}>close</span>
                        </Button>
                    </span>
                    <h1 className='font-inter font-bold text-2xl text-primary'>Página em Desenvolvimento</h1>
                    <p className='text-center text-base font-inter font-normal '>Este projeto não acaba por aqui, em breve terá novas páginas e funcionalidades para melhorar a experiência do usuário (<em>incluindo o estilo</em>).</p>
                    <Link to='/'>
                        <Button text='Voltar a página inicial' bg='primary' color='white1' />
                    </Link>
                </div>
            </Modal>
            <Form title='Cadastre-se' text='Crie sua conta e arranje um emprego' handleFunction={handleSubmit}>
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
                <Input
                    type='password'
                    label='Senha'
                    placeholder='Digite sua senha'
                    value={data.password}
                    handleInput={value => handleData('password', value)}
                />
            </Form>
        </>
    );
};

export default Cadastro;
