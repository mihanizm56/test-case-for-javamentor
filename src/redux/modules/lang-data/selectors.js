import { createSelector } from 'reselect'

const langData = state => state.langData

export const getLangData = createSelector(
    [langData],
    data => data.length
        ? data.filter(item => Boolean(item.logo))
        : data
)
