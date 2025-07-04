const Select = ({ name, value, list, handleFunction }) => {
    return (
        <>
            <label htmlFor={name.toLowerCase()} className="block font-inter font-bold tracking-[-1px] text-[var(--black4)]">{name}: </label>
            <select className='bg-white2 font-inter font-medium text-[var(--black4)] w-full py-[11px] px-[15px] rounded-lg' name={name.toLowerCase()} id={name.toLowerCase()} value={value} onChange={e => handleFunction(e.target.value)}>
                <option value="" disabled>Selecione o cargo</option>
                {list.map(item => <option key={Math.random()} value={item}>{item}</option>)}
            </select>
        </>
    );
};

export default Select;
