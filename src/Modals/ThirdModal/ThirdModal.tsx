import React, {FC, HTMLAttributes} from 'react';
import {ModalState} from "../../Types/models";
import style from "../FirstModal/style.module.scss";
import Button from "../../Components/Generic/Button/Button";
interface Props {
    disabled:boolean
    onClick:()=>void
}
const ThirdModal:FC<Props> = ({disabled,onClick}) => {
    return !disabled ?(
        <div>
            345
            <div className={style.button}>
                <Button className={style.button} type={'button'} onClick={onClick} >Продолжить</Button>
            </div>
        </div>
    ) : <></>
};

export default ThirdModal;
