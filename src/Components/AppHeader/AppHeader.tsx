import React from 'react';
import style from './style.module.scss'

const AppHeader = () => {
    return (
        <div className={style.headerWrapper}>
            <nav className={style.navHeader}>
                <div className={style.headerName}>
                    <span>Soul Conjuction</span>
                </div>
            </nav>
        </div>
    );
};

export default AppHeader;
