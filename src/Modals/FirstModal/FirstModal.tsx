import React, {FC, HTMLAttributes, MouseEventHandler, useState} from 'react';
import MainModal from "../MainModal/MainModal";
import style from './style.module.scss'
import Button from "../../Components/Generic/Button/Button";
import {ModalState, Person} from "../../Types/models";
interface Props extends HTMLAttributes<HTMLElement>{
    onClick:()=>void
    persons:{firstPerson:Person,secondPerson:Person}
}

const FirstModal:FC <Props> = ({onClick,persons}) => {

    const handleSubmit = ()=> {
        persons.firstPerson.name=firstName
        persons.secondPerson.name=secondName
        onClick()
    }

    const [firstName,setFirstName] = useState('')
    const [secondName,setSecondName] = useState('')

    return (
        <>
        <div className={style.wrapper}>
                    <div  className={style.header}>Введите имена:</div>
                    <div className={style.actionInputs}>
                        <input placeholder="Ваше имя:"
                               value={firstName}
                               onChange={(e)=>setFirstName(e.currentTarget.value)}
                        />
                        <input placeholder="Имя второго человека:"
                               value={secondName}
                               onChange={(e)=>setSecondName(e.currentTarget.value)}
                        />
                    </div>
            <div className={style.button}>
                        <Button disabled={!firstName || !secondName} className={style.button} type={'button'} onClick={handleSubmit} >Продолжить</Button>
                    </div>
            </div>
        </>
    )
};

export default FirstModal;
