import React, {ReactNode} from 'react';

interface Props{
    onClick : ()=>void,
    type:"button" | "submit" | "reset" | undefined,
    children?:ReactNode,
    className: string

}

const Button:React.FC<Props> = ({
    onClick,
    type,
    children,
    className
}) => {
    return (
        <div className={className}>
            <button onClick={onClick} type={type}>
                {children}
            </button>
        </div>
    );
};

export default Button;
