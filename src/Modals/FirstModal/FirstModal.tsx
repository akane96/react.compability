import React from 'react';
import MainModal from "../MainModal/MainModal";
import style from './style.module.scss'
import Button from "../../Components/Generic/Button/Button";
const FirstModal = () => {
    return(
        <>

        <div className={style.wrapper}>
                    <div className={style.header}>Введите имена:</div>
                    <div>
                        <input className={style.actionInputs} placeholder="Ваше имя:"/>
                        <input className={style.actionInputs} placeholder="Имя второго человека:"/>
                    </div>
                    <div className={style.button}>
                        <Button className={style.button} type={'button'} onClick={()=>console.log('Кнопка нажата')}>Продолжить</Button>
                    </div>
            </div>

        </>
    );
};

export default FirstModal;
