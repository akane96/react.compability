import React, {useState} from 'react';
import Section, {SectionType} from "../Generic/Section/Section";
import style from './style.module.scss'
import Image from "../Generic/Image/Image";
import Button from "../Generic/Button/Button";

const AppMain = () => {

    const [modalActive,setModalActive] = useState<boolean>(false)

    const clickHandler = () => {
        setModalActive(!modalActive)
    }
    const firstSection = (
        <Section type={SectionType.Info}>
            <div className={style.sectionWrapper}>
                <p className={style.sectionSpanText}>
                    <p>
                        Добро пожаловать!
                    </p>
                    На этом сайте вы
                    сможете проверить свою совместимость
                    с любым человеком -
                    достаточно знать лишь имя и знак зодиака!
                </p>
            </div>
            <div>
                <Image>
                    <img className={style.primaryHeart} src={`${process.env.PUBLIC_URL}/assets/Heart.png`}/>
                    <img className = {style.secondaryHeart} src={`${process.env.PUBLIC_URL}/assets/Heart-1.png`}/>
                </Image>
            </div>
        </Section>)
    const primarySection = (
        <Section type={SectionType.Primary}>
            <div className={style.primarySectionWrapper}>
                <p className={style.sectionSpanText}>
                    <p>
                        Вам интересно ?
                    </p>
                    Нажмите на кнопку ниже и узнайте совместимость с другим человеком !
                </p>

                <Button onClick={clickHandler} type={'button'} className={style.primarySectionWrapper}>
                </Button>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#C8EBFF" fillOpacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,122.7C274.3,139,343,181,411,208C480,235,549,245,617,224C685.7,203,754,149,823,122.7C891.4,96,960,96,1029,106.7C1097.1,117,1166,139,1234,149.3C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </Section>

    )

    return (
        <>
            {firstSection}
            {primarySection}
        </>
    );
};

export default AppMain;
