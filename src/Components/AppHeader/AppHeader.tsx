import React from 'react';
import style from './style.module.scss'

const AppHeader = () => {
    return (
        <div className={style.headerWrapper}>
            <nav className={style.navHeader}>
                <div className={style.headerName}>
                    <span>Soul Conjuction</span>
                </div>
                <ul className={style.headerContent}>
                    <li className={style.nav_item}>Информация</li>
                    <li className={style.nav_item}>Совместимость</li>
                    <li className={style.nav_item}>Контакты</li>
                </ul>
            </nav>
        </div>
    );
};

export default AppHeader;
