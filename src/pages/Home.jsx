import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router';
import { vagas } from '../assets/data';
import SearchBar from "@components/SearchBar";
import Card from '@components/Card';
import Button from "@components/Button";
import Modal from "@components/Modal";
import ModalVaga from "@components/ModalVaga";

const Home = () => {

    const [searchVal, setSearchVal] = useState('');
    const [vaga, setVaga] = useState();
    const [showModal, setShowModal] = useState();
    const dialogRef = useRef(null);
    const listaVagas = vagas.map(({ id, title}) => {
        return { id, title };
    });

    const toggleModal = id => {
        if (showModal) {
            setShowModal(false);
        } else {
            setShowModal(true);
            const selectedVaga = vagas.find(item => item.id === id);
            setVaga(selectedVaga);
        }
    }

    useEffect(() => showModal ? dialogRef.current.showModal() : dialogRef.current.close(), [showModal]);

    return (
        <>
            <Modal dialogRef={dialogRef}>
                {vaga && <ModalVaga vagaID={vaga.id} handleFunction={toggleModal} />}
            </Modal>
            <section className='bg-white1 w-full p-[20px]'>
                <div className="flex justify-center items-center flex-col gap-[15px] bg-linear-to-r from-primary to-color3 max-w-[1024px] min-h-[500px] m-auto px-[50px] rounded-2xl shadow-lg">
                    <h1 className='text-white2 font-inter font-bold text-5xl text-center tracking-tighter'>Encontre seu próximo emprego com facilidade</h1>
                    <p className='text-white4 font-inter font-normal text-base text-center'>Encontre seu próximo emprego CLT com mais facilidade</p>
                    <SearchBar
                        title='vaga'
                        placeholder='Procure por empregos'
                        value={searchVal}
                        list={listaVagas}
                        handleFunction={val => setSearchVal(val)} 
                        listOptionFunction={toggleModal}
                    />
                </div>
            </section>
            <section className='bg-color2 w-full p-[40px]'>
                <div className='max-w-[1024px] m-auto px-[50px]'>
                    <h2 className='text-2xl text-white1 font-inter font-bold tracking-tighter'>Vagas em Destaque</h2>
                    <div className='flex justify-center items-center flex-row flex-wrap gap-[9px] py-[20px]'>
                        {vagas.map(item => <Card key={item.id} handleFunction={() => toggleModal(item.id)} {...item} />)}
                    </div>
                </div>
            </section>
            <section className="bg-white1 w-full">
                <div className="max-w-[1024px] m-auto p-[40px]">
                    <h2 className='text-color3 font-inter font-bold text-5xl tracking-tighter mb-[13px]'>Encontre o emprego do seus sonhos</h2>
                    <p className='text-black2 font-inter font-normal text-base'>Descubra os benefícios de usar a nossa plataforma para avançar na sua carreira.</p>
                    <div className='flex justify-between items-center gap-[9px] flex-row flex-wrap w-full mt-[30px]'>
                        <div className='flex flex-1 gap-3 rounded-lg p-4 flex-col bg-white2 w-[calc(100%/3-10px)] h-[200px]'>
                            <span className="material-symbols-outlined text-primary">done</span>
                            <h3 className='font-inter font-semibold text-lg my-[9px]'>Foco em vagas do seu interesse</h3>
                            <p className='text-black2 font-inter font-normal text-sm'>Navegue por milhares de vagas em vários setores e locais.</p>
                        </div>
                        <div className='flex flex-1 gap-3 rounded-lg p-4 flex-col bg-white2 w-[calc(100%/3-10px)] h-[200px]'>
                            <span className="material-symbols-outlined text-primary">done</span>
                            <h3 className='font-inter font-semibold text-lg my-[9px]'>Processo de aplicação fácil</h3>
                            <p className='text-black2 font-inter font-normal text-sm'>Candidate-se a empregos com um único clique usando seu currículo enviado.</p>
                        </div>
                        <div className='flex flex-1 gap-3 rounded-lg p-4 flex-col bg-white2 w-[calc(100%/3-10px)] h-[200px]'>
                            <span className="material-symbols-outlined text-primary">done</span>
                            <h3 className='font-inter font-semibold text-lg my-[9px]'>Conecte-se com as principais empresas</h3>
                            <p className='text-black2 font-inter font-normal text-sm'>Seja notado pelas principais empresas que buscam ativamente profissionais talentosos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white2 w-full'>
                <div className='max-w-[1024px] m-auto p-[40px]'>
                    <h1 className='font-inter font-bold text-5xl tracking-tighter mb-[40px]'>Nossos resultados</h1>
                    <div className='flex justify-between items-center gap-[9px] w-full'>
                        <div className='flex flex-col gap-[10px] bg-white3 w-[calc(100%/3-9px)] p-[15px] rounded-lg '>
                            <p className="font-inter text-sm text-black3">Vagas publicadas</p>
                            <h3 className='text-black2 font-inter font-extrabold text-3xl tracking-tighter'>+10.000</h3>
                        </div>
                        <div className='flex flex-col gap-[10px] bg-white3 w-[calc(100%/3-9px)] p-[15px] rounded-lg '>
                            <p className="font-inter text-sm text-black3">Candidatos cadastrados</p>
                            <h3 className='text-black2 font-inter font-extrabold text-3xl tracking-tighter'>+50.000</h3>
                        </div>
                        <div className='flex flex-col gap-[10px] bg-white3 w-[calc(100%/3-9px)] p-[15px] rounded-lg '>
                            <p className="font-inter text-sm text-black3">Empresas contratando</p>
                            <h3 className='text-black2 font-inter font-extrabold text-3xl tracking-tighter'>+3.000</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white1 w-full p-[20px]'>
                <div className="flex justify-center items-center flex-col gap-[11px] bg-linear-to-r from-primary to-color3 max-w-[1024px] min-h-[500px] m-auto px-[50px] rounded-2xl shadow-lg">
                    <h1 className='text-white2 font-inter font-bold text-5xl text-center tracking-tighter'>Pronto para dar o próximo passo na sua carreira?</h1>
                    <p className='text-white4 font-inter font-normal text-base text-center'>Comece agora mesmo a sua jornada no mercado de trabalho com as melhores oportunidades.</p>
                    <Link to='/cadastro'>
                        <Button
                            text='Cadastrar currículo agora'
                            bg='primary'
                            color='white1'
                            styleType='small'
                        />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
