import React from 'react';
import Select from "../Select/Select";
interface Props{
    value:string,
    onChange:any
}
const SelectSign : React.FC<Props> = ({value,onChange}) => {
    return (
        <div>
            <Select value={value} onChange={onChange} >
                <option>Овен</option>
                <option>Телец</option>
                <option>Близнецы</option>
                <option>Рак</option>
                <option>Лев </option>
                <option>Дева</option>
                <option>Весы</option>
                <option>Скорпион</option>
                <option>Стрелец</option>
                <option>Козерог</option>
                <option>Водолей</option>
                <option>Рыбы</option>
            </Select>
        </div>
    );
};

export default SelectSign;
