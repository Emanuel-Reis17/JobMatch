import Form from '@components/Form';

const Cadastro = () => {
    
    const showData = data => console.log(data);

    return (
        <div className='flex justify-center items-center bg-(--white1) w-full h-screen'>
            <Form handleFunction={data => showData(data)} />
        </div>
    );
};

export default Cadastro;
