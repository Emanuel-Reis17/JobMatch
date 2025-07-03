import Button from '@components/Button';

const Form = ({ title, text, handleFunction, children, action = '/', method = 'GET' }) => {

    return (
        <form onSubmit={e => handleFunction(e)} className="bg-(--white1) w-[500px] max-w-[500px]  p-[19px] rounded-xl" action={action} method={method} autoComplete='true'>
            <h1 className='text-[var(--black5)] text-4xl font-inter font-bold tracking-tighter mb-2'>{title}</h1>
            <p className='text-[var(--black1)] font-inter mb-5'>{text}</p>

            {children.map((item, index) => {
                return (
                    <div key={`input-${index}`} className="mb-[15px]">
                        {item}
                    </div>
                );
            })}

            <Button type='submit' text='Enviar' bg='var(--color1)' color='var(--white1)' />
        </form>
    )
}

export default Form;
