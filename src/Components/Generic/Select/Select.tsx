import React, {FC, HTMLAttributes} from 'react';
import style from './style.module.scss'
interface Props extends HTMLAttributes<HTMLSelectElement>{
    value:string,
    onChange:any
}

const Select:FC<Props> = ({children,value,onChange}) => {
    return (
        <div>
            <select onChange={onChange} value={value} className={style.select}>{children}</select>
        </div>
    );
};

export default Select;
