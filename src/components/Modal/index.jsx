const Modal = ({ dialogRef, children }) => {
    return (
        <dialog ref={dialogRef} className='fixed top-0 left-0 z-1 bg-transparent backdrop:bg-[var(--black5)]/75 w-full h-full open:flex open:justify-center open:items-center'>
            { children }
        </dialog>
    );
};

export default Modal;
