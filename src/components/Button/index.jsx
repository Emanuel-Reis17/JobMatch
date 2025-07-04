const Button = ({ text, bg, color, styleType, children, handleFunction = false, type = 'button' }) => {
    let style = '';
    switch (styleType) {
        case 'extrasmall':
            return (
                <button type={type} className={`flex justify-center items-center gap-[5px] ${bg ? `bg-${bg}` : ''} ${color ? `text-${color}` : ''} font-semibold text-sm font-inter p-[5px] cursor-pointer rounded-sm transition-all duration-300 ease hover:bg-${bg}/75 hover:scale-[0.95]`} onClick={handleFunction }>
                    {text}{children}
                </button>
            );
        case 'small':
            style = `text-sm py-[9px] px-[25px]`;
            break;
        default:
            style = `w-full py-[9px] px-[15px]`;
    }

    const functionHandler = () => typeof handleFunction === 'function' ? handleFunction() : handleFunction;

    return (
        <button type={type} className={`block ${bg ? `bg-${bg}` : 'bg-primary'} ${color ? `text-${color}` : ''} font-semibold text-base font-inter ${style} cursor-pointer rounded-[7px] transition-all duration-300 ease hover:bg-${bg}/75 hover:scale-[0.95]`} onClick={() => functionHandler()} >{text}{children}</button>
    );
};

export default Button;
