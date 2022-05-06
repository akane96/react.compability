import React, {ButtonHTMLAttributes, HTMLProps, ReactNode} from 'react';

interface Props{
    onClick : ()=>void,
    type: "button" | "submit" | "reset" | undefined,
    children?:ReactNode,
    className:string
}

const Button:React.FC<Props> = ({
    onClick,
    type,
    children,
    className
}) => {
    return (
        <div>
            <button type={type} className={className} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;
