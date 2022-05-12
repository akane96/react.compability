import React, {useState} from 'react';
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";
import MainModal from "../Modals/MainModal/MainModal";
import FirstModal from "../Modals/FirstModal/FirstModal";
import SecondModal from "../Modals/SecondModal/SecondModal";
import ThirdModal from "../Modals/ThirdModal/ThirdModal";
import {ModalState} from "../Types/models";


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
    const clickHandler = () => {
        setModalActive(!modalActive)
    }

    const [modalState, setModalState] = useState<ModalState>('First')

    const handleChangeModalState = (state:ModalState)=>{

        setModalState(state)
    }

    const mainModal = (
        <MainModal setOpen={()=>setModalActive(!modalActive)} name={'Подсчёт совместимости'}>
            <FirstModal  disabled={modalState!=='First'} onClick={()=>handleChangeModalState('Second')}  />
            <SecondModal disabled={modalState!=='Second'} onClick={()=>handleChangeModalState('Third')} />
            <ThirdModal  disabled={modalState!=='Third'} onClick={()=>handleChangeModalState('First')} />
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
