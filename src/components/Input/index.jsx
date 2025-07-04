const Input = ({ type, label, placeholder, value, handleInput }) => {
    return (
        <>
            <label htmlFor={label} className="block font-inter font-bold text-[var(--black4)] mb-[5px]">{label}:</label>
            <input className="bg-white2 font-inter font-medium text-[var(--black4)] w-full py-[11px] px-[15px] rounded-lg" type={type} value={value} name={label} id={label} placeholder={placeholder} onChange={e => handleInput(e.target.value)} />
        </>
    )
}

export default Input;