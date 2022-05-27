import React, {FC, HTMLAttributes} from 'react';
import style from './style.module.scss'
interface Props extends HTMLAttributes<HTMLSelectElement>{}

const Select:FC<Props> = ({children}) => {
    return (
        <div>
            <select className={style.select}>{children}</select>
        </div>
    );
};

export default Select;
