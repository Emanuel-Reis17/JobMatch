const Button = ({ type, text, bg, color }) => {
    return (
        <button type={type} className={`block ${ bg ? `bg-[${bg}]` : ''} ${ color ? `text-[${color}]` : '' } font-semibold text-[1em] font-inter w-full py-[9px] px-[15px] cursor-pointer rounded-[7px] transition-all duration-300 ease hover:bg-[${bg}]/75 hover:scale-[0.95]`}>{text}</button>
    )
};

export default Button;
