import React, {ReactNode} from 'react';
import style from './style.module.scss'

interface Props{
    name?:string
    children?:ReactNode
    setOpen:()=>void
}

const MainModal:React.FC<Props> = ({
    name,
    children,
    setOpen,
}) => {
    return (
        <dialog className={style.wrapper} >
            <div className={style.modal}>
            <div className={style.header}>
                <div></div>
                {name}
                <div onClick={setOpen} className={style.closeModal}>
                </div>
            </div>
            <div className={style.modalContainer}>
                {children}
            </div>
            </div>
        </dialog>

    );
};

export default MainModal;
