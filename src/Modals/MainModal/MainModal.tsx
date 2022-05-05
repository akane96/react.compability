import React, {ReactNode} from 'react';
import style from './style.module.scss'

interface Props{
    name?:string
    children?:ReactNode
}

const MainModal:React.FC<Props> = ({
    name,
    children
}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
            <div className={style.header}>
                {name}
            </div>
            <div>
                {children}
            </div>
            </div>
        </div>

    );
};

export default MainModal;