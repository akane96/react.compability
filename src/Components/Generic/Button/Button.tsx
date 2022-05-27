import React, {MouseEventHandler, ReactNode} from 'react';
import style from './style.module.scss'

interface Props{
    onClick : ()=>void,
    type?:"button" | "submit" | "reset" | undefined,
    children?:ReactNode,
    className?: string
    disabled?:boolean

}

const Button:React.FC<Props> = ({
    onClick,
    type,
    children,
    className,disabled
}) => {
    return (
        <div className={className}>
            <button disabled={!!disabled} className={style.button} onClick={onClick} type={type || 'button'} >
                {children}
            </button>
        </div>
    );
};

export default Button;
