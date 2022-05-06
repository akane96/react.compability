import React, {ReactNode} from 'react';
import style from './style.module.scss'

interface Props{
    onClick : ()=>void,
    type?:"button" | "submit" | "reset" | undefined,
    children?:ReactNode,
    className?: string

}

const Button:React.FC<Props> = ({
    onClick,
    type,
    children,
    className
}) => {
    return (
        <div className={className}>
            <button className={style.button} onClick={onClick} type={type || 'button'} >
                {children}
            </button>
        </div>
    );
};

export default Button;
