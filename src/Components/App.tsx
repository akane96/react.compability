import React, {useCallback, useEffect, useState} from 'react';
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";
import MainModal from "../Modals/MainModal/MainModal";
import FirstModal from "../Modals/FirstModal/FirstModal";
import SecondModal from "../Modals/SecondModal/SecondModal";
import ThirdModal from "../Modals/ThirdModal/ThirdModal";
import {IPerson, ModalState, Person} from "../Types/models";


interface Props {
    str?:string
    width?:number,
    height?:number,
    color?:string
}

const App:React.FC<Props> = ({
    str,
    width,
    height,
    color,
    ...props
}) => {
    const [modalActive,setModalActive] = useState<boolean>(false)

    const [firstPerson,setFirstPerson] = useState<Person>(new Person('',''))
    const [secondPerson,setSecondPerson] = useState<Person>(new Person('',''))

    const clickHandler = () => {
        setModalActive(!modalActive)
        setModalState('First')
    }

    const [modalState, setModalState] = useState<ModalState>('First')

    const handleChangeModalState = (state:ModalState)=>{
        setModalState(state)
    }
    useEffect(()=>{
        handleChangeModalState('First')
    },[firstPerson,secondPerson])

    const resetParameters= () => {

        setFirstPerson(new Person('',''))
        setSecondPerson(new Person('',''))
    }

    const mainModal = (
        <MainModal setOpen={()=>setModalActive(!modalActive)} name={'Совместимость'}>
            { modalState==='First' && <FirstModal  persons={{firstPerson,secondPerson}}  onClick={()=>handleChangeModalState('Second')}  />}
            { modalState==='Second' && <SecondModal persons={{firstPerson,secondPerson}}  onClick={()=>handleChangeModalState('Third')} />}
            { modalState==='Third' && <ThirdModal persons={{firstPerson,secondPerson}} onClick={()=>{
                resetParameters()
            }} />}
        </MainModal>
    )

    return (
        <>
            <div>
                <AppHeader/>
                <AppMain action={clickHandler}/>
                <AppFooter/>
            </div>
            {modalActive && mainModal}
        </>
    )
};

export default App;
