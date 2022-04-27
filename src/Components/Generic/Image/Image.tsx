import React, {ReactNode} from 'react';
import style from './style.module.scss';

const Image:React.FC<{children:ReactNode}> = ({children}) => {
    return (
        <div className={style.imageContainer}>
            {children}
        </div>
    );
};

export default Image;
