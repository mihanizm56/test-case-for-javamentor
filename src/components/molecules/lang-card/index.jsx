import React from 'react'
import './lang-card.css'

export const LangCard = ({
    title, createdAt, numberOfProjects, link, logo
}) => {
    console.log('check LangCard', title, createdAt, numberOfProjects, link, logo)

    return (
        <div className='card-container'>
            <div className='card-first-line'>
                <img alt='logo' src={logo} />
            </div>
            <div className='card-second-line'>
                <span className='card__lang-name'>{title}</span>
                <span className='card__created'>
                  Основан в
                    {createdAt}
                  году
                </span>
                <span className='card__number-of-projects'>
                    {numberOfProjects}
                    проектов на GitHub
                </span>
                <a className='card__link' href={link}>
                  Документация
                </a>
            </div>
        </div>
    )
}

LangCard.defaultProps = {}
