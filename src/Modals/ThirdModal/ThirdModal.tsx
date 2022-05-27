import React, {FC, HTMLAttributes, useEffect, useState} from 'react';
import {IPerson, ModalState, Person} from "../../Types/models";
import style from "../FirstModal/style.module.scss";
import Button from "../../Components/Generic/Button/Button";
import {CircleLoader} from "react-spinners";
import {mainAlgo} from "../../Utils/Algo";
interface Props {
    disabled:boolean
    onClick:()=>void
    persons:{firstPerson:Person,secondPerson:Person}
}
const override = `
 
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:120px;
`;
const ThirdModal:FC<Props> = ({disabled,onClick,persons}) => {
    const [loading,setLoading] = useState(true)
    const [compatibility,setCompatibility] = useState(0)
    useEffect(()=>{

        if(!disabled && loading){
            setCompatibility(mainAlgo(persons.firstPerson,persons.secondPerson))
            setTimeout(()=>{
                setLoading(false)
            },3000)
        }
    },[loading,disabled])
    const loader =
        <div>
            <CircleLoader color={'#CB82CE'} css={override} size={150} loading={loading}/>
        </div>
    return !disabled ?(
        <div>
            {loader}
            {!loading && <div className={style.button}>
                <div>
                    {persons.firstPerson.name}-{persons.firstPerson.sign}
                    {persons.secondPerson.name} - {persons.secondPerson.sign}
                    Compatibility: {compatibility}
                </div>
                <Button className={style.button} type={'button'} onClick={onClick} >Продолжить</Button>
            </div>}
        </div>
    ) : <></>
};

export default ThirdModal;
