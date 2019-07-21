import React, { memo } from "react";
import { LangCard } from "../lang-card";
import "./lang-list.css";

export interface LangCardType {
    name: string;
    year: number;
    projectsCount: number;
    docs: string;
    logo: string;
}

interface LangListType {
    langData: Array<LangCardType>;
}

export const LangList = memo<LangListType>(({ langData }) => (
    <div className="list-container">
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
));
