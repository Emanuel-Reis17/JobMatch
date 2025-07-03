import Button from "@components/Button";
import { useEffect, useState } from "react";

const SearchBar = ({ title, placeholder, value, list, handleFunction = false, listOptionFunction = false }) => {

    const [results, setResults] = useState([]);

    function handleSearch(val) {
        handleFunction(val);
        if (val.length <= 0) return setResults([]);
        let queryResults = list.filter(item => item.title.toLowerCase().includes(val.toLowerCase()));
        if (val.length > 0 && queryResults.length === 0) 
            queryResults[0] = { id: 0, title: 'Nenhum resultado encontrado'};
        setResults(queryResults);
    }

    useEffect(() => console.log(results), [results])

    return (
        <div className='relative flex justify-center items-center gap-[5px] bg-[var(--color3)] w-[400px] p-[5px] rounded-lg border border-[var(--color1)]'>
            <input className='flex-grow font-inter text-[var(--white1)] text-sm py-[9px] px-[5px] rounded-sm' type="text" name={title} id={title} value={value} placeholder={placeholder} onChange={e => handleSearch(e.target.value)} />
            <Button text='Buscar' bg='var(--color1)' color='var(--white1)' styleType='small' />
            <ul className={`${results.length > 0 ? 'block' : 'hidden'} absolute top-[55px] left-0 flex flex-col gap-[5px] w-full bg-[var(--color3)] p-[5px] rounded-lg border border-[var(--color1)]`}>
                {results.map(item => <li key={item.id} className={`bg-[var(--color2)] hover:bg-[var(--color1)] font-inter font-normal text-sm text-[var(--white5)] p-[10px] rounded-sm cursor-pointer ${item.title === 'Nenhum resultado encontrado' ? 'pointer-events-none' : ''}`} onClick={() => listOptionFunction(item.id)}>{item.title}</li>)}
            </ul>
        </div>
    );
};

export default SearchBar;