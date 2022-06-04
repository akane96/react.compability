import React, {FC, HTMLAttributes, useEffect, useState} from 'react';
import {IPerson, ModalState, Person} from "../../Types/models";
import style from "./style.module.scss";
import Button from "../../Components/Generic/Button/Button";
import {CircleLoader} from "react-spinners";
import {mainAlgo} from "../../Utils/Algo";
interface Props {
    onClick:()=>void
    persons:{firstPerson:Person,secondPerson:Person}
}
const override = `
  display: block;
  margin: 0 auto;
  margin-top:80px;
`;

const ThirdModal:FC<Props> = ({onClick,persons}) => {
    const [loading,setLoading] = useState(true)
    const [compatibility,setCompatibility] = useState(0)

    useEffect(()=>{
        if(loading && compatibility===0 ) {
             setTimeout(() => {
                setCompatibility(mainAlgo(persons.firstPerson, persons.secondPerson))
            }, 3000)
        }
        else {
            setLoading(false)
        }
    },[loading,compatibility])


    const loader =
        <div>
            <p className={style.additionLoader}>Узнаем у предсказателя...</p>
            <CircleLoader color={'#CB82CE'} css={override} size={150} loading={loading}/>
        </div>


    return (
        <div className={style.container}>
            {loading && loader}
            {!loading && <div className={style.wrapper}>
                <div className={style.content}>
                    <div className = {style.contentInfo}>
                        <span>{persons.firstPerson.name}</span>
                        <span className={style.firstSign}>{persons?.firstPerson.sign}</span>
                    </div>
                    <div className = {style.contentInfo}>
                        <span>{persons.secondPerson.name}</span>
                        <span className={style.secondSign}>{persons.secondPerson.sign}</span>
                    </div>
                    <div className={style.contentResult}>
                        <span className={style.info}>Cовместимость</span>
                        <span className={style.result}>{compatibility}%</span>
                    </div>
                </div>
                <span className={style.addition}>Хотите попробовать снова ?</span>
                <Button className={style.button} type={'button'} onClick={()=> onClick()}>Начать заново</Button>
            </div>}
        </div>
    )
};

export default ThirdModal;
