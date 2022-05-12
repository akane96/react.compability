import React, {FC, HTMLAttributes, MouseEventHandler} from 'react';
import MainModal from "../MainModal/MainModal";
import style from './style.module.scss'
import Button from "../../Components/Generic/Button/Button";
import {ModalState} from "../../Types/models";
interface Props extends HTMLAttributes<HTMLElement >{
    disabled:boolean
    onClick:()=>void
}

const FirstModal:FC <Props> = ({disabled,onClick}) => {

    return !disabled ?(
        <>
        <div className={style.wrapper}>
                    <div  className={style.header}>Введите имена:</div>
                    <div>
                        <input className={style.actionInputs} placeholder="Ваше имя:"/>
                        <input className={style.actionInputs} placeholder="Имя второго человека:"/>
                    </div>
                    <div className={style.button}>
                        <Button className={style.button} type={'button'} onClick={onClick} >Продолжить</Button>
                    </div>
            </div>

        </>
    ) : <></>
};

export default FirstModal;
