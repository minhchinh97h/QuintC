import React from 'react';
import RootNavigation from './routes';
import { useSelector } from "react-redux";
import { getLanguage } from 'selectors/SettingsSelector';
import i18next from 'i18next';
const App = () => {
    const language = useSelector(getLanguage)
    i18next.changeLanguage(language)

    return (<RootNavigation />)
}

export default App;
