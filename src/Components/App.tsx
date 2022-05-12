import React, {useState} from 'react';
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";
import MainModal from "../Modals/MainModal/MainModal";
import FirstModal from "../Modals/FirstModal/FirstModal";


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
    const mainModal = (
        <MainModal setOpen={()=>setModalActive(!modalActive)} name={'Подсчёт совместимости'}>
            <FirstModal></FirstModal>
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
