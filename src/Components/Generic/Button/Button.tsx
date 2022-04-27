import React, {ReactNode} from 'react';

interface Props{
    onClick : ()=>void,
    type:string,
    children?:ReactNode,

}

const Button:React.FC<Props> = ({
    onClick,
    type,
    children
}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Button;
