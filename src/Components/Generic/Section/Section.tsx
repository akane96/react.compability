import React, {ReactNode} from 'react';
import style from './style.module.scss'

export enum SectionType{
    Info,
    Primary,
    Secondary
}

const SectionMap = new Map<SectionType,any>()
    .set(SectionType.Info,style.infoStyle)
    .set(SectionType.Primary, style.primaryStyle)
    .set(SectionType.Secondary, style.secondaryStyle)

interface Props{
    type:SectionType,
    children?:ReactNode
}


const Section:React.FC<Props> = (
    {
        type,
        children
    }) => {
    const sectionType = SectionMap.get(type)
    return (
        <div className={sectionType}>
            <div className={sectionType === SectionMap.get(SectionType.Secondary) ? style.wrapperFooter : style.wrapper}>
            {children}
            </div>
        </div>
    );
};

export default Section;
