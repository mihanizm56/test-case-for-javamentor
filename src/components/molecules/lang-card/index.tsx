import React, {memo} from 'react'
import './lang-card.css'

interface LangCardType {
    title:string, 
    createdAt:number, 
    numberOfProjects:number, 
    link:string, 
    logo:string
}

export const LangCard = memo<LangCardType>(({
    title, createdAt, numberOfProjects, link, logo
}) => (
        <div className='card-container'>
            <div className='card-first-line'>
                <img alt='logo' src={logo} height='118px' width='118px' />
            </div>
            <div className='card-second-line'>
                <span className='card__lang-name'>{title}</span>
                <span className='card__created'>
                    {`Основан в ${createdAt} году`}
                </span>
                <span className='card__number-of-projects'>
                    {`Проектов на GitHub ${numberOfProjects} году`}
                </span>
                <a className='card__link' href={link}>
                  Документация
                </a>
            </div>
        </div>
    )
)
