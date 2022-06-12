export const selectFilter = ({ filter }) => filter;
export const selectChoseFilter = ({ filter: { chose } }) => chose;
export const selectRefreshData = ({ filter: { autoRefresh } }) => autoRefresh;
export const selectOrderData = ({ filter: { order } }) => order;
export const selectLanguagesData = ({ filter: { languages } }) => languages;
