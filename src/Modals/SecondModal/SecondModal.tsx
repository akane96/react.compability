import React, {FC, HTMLAttributes, useState} from 'react';
import {ModalState, Person} from "../../Types/models";
import style from "../FirstModal/style.module.scss";
import modalStyle from './style.module.scss'
import Button from "../../Components/Generic/Button/Button";
import SelectSign from "../../Components/Generic/SelectSign/SelectSign";

interface Props {
    onClick:()=>void
    persons:{firstPerson:Person,secondPerson:Person}
}
const SecondModal:FC<Props> = ({onClick,persons}) => {

    const [firstSign,setFirstSign] = useState('Овен')
    const [secondSign,setSecondSign] = useState('Овен')

    const handleSubmit = ()=> {
        persons.firstPerson.sign=firstSign
        persons.secondPerson.sign=secondSign
        setFirstSign('Овен')
        setSecondSign('Овен')
        onClick()
    }

    return  (
        <>
            <div className={style.wrapper}>
                <div  className={style.header}>Введите имена:</div>
                <div className={modalStyle.selectButtons}>
                    <SelectSign value={firstSign} onChange={(e:any)=>setFirstSign(e.currentTarget.value)}></SelectSign>
                    <SelectSign value={secondSign} onChange={(e:any)=>setSecondSign(e.currentTarget.value)}></SelectSign>
                </div>
                <div className={style.button}>
                    <Button className={style.button} type={'button'} onClick={handleSubmit} >Продолжить</Button>
                </div>
            </div>
        </>
    )
};

export default SecondModal;
