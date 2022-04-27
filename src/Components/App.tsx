import React from 'react';
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";


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
    return (
        <>
            <AppHeader/>
            <AppMain/>
            <AppFooter/>
        </>
    )
};

export default App;
