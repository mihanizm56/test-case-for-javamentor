import React, { memo } from 'react'
import { LangCard } from '../lang-card'
import './lang-list.css'

export const LangList = memo(({ langData }) => (
    <div className='list-container'>
        {
            langData.map(({name, year, projectsCount, docs, logo}, index) => (
                <LangCard
                    title={name}
                    createdAt={year}
                    numberOfProjects={projectsCount}
                    link={docs}
                    key={index}
                    logo={logo}
                />
            ))
        }
    </div>
))

LangList.defaultProps = { langData: [] }
