import React, {FC, HTMLAttributes} from 'react';
interface Props extends HTMLAttributes<HTMLSelectElement>{}
const Select:FC<Props> = ({children}) => {
    return (
        <div>
            <select>{children}</select>
        </div>
    );
};

export default Select;
