import React, {FC, HTMLAttributes} from 'react';
import {ModalState} from "../../Types/models";
import style from "../FirstModal/style.module.scss";
import Button from "../../Components/Generic/Button/Button";
import SelectSign from "../../Components/Generic/SelectSign/SelectSign";
interface Props {
    disabled:boolean
    onClick:()=>void
}
const SecondModal:FC<Props> = ({disabled,onClick}) => {
    return !disabled ?(
        <>
            <div className={style.wrapper}>
                <div  className={style.header}>Введите имена:</div>
                <div className={style.actionInputs}>
                    <SelectSign></SelectSign>
                    <SelectSign></SelectSign>
                </div>
                <div className={style.button}>
                    <Button className={style.button} type={'button'} onClick={onClick} >Продолжить</Button>
                </div>
            </div>
        </>
    ) : <></>
};

export default SecondModal;
