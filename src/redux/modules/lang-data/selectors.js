import { createSelector } from 'reselect';

const langData = state => state.langData;

export const getLangData = createSelector(
    [langData],
    data => data
);
