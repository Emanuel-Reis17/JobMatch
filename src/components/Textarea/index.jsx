const Textarea = ({ name, placeholder, value, handleFunction }) => {
    return (
        <>
            <label htmlFor={name.toLowerCase()} className='block font-inter font-bold tracking-[-1px] text-[var(--black4)] mb-[5px]'>{name}</label>
            <textarea className='bg-white2 font-inter font-medium text-[var(--black4)] w-full py-[11px] px-[15px] rounded-lg' name={name.toLowerCase()} id={name.toLowerCase()} value={value} onChange={e => handleFunction(e.target.value)} placeholder={placeholder}></textarea>
        </>
    )
}

export default  Textarea;
