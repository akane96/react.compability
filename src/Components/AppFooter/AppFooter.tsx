import React from 'react';
import Section, {SectionType} from "../Generic/Section/Section";
import style from './style.module.scss'
const AppFooter = () => {
    return (
        <Section type={SectionType.Secondary}>
            <div className={style.footerContainer}> <p>Выполнила работу</p>
                <span>Мухутдинова Сонечка</span>
                <div className={style.copyRights}>@Copyrights 2022</div>
            </div>
        </Section>
    );
};

export default AppFooter;
