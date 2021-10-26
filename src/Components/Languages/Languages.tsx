import React from "react";
import en from './languageImages/en.png'
import ru from './languageImages/ruu.png'
import * as SC from './languageStyles'
import {useTranslation} from "react-i18next";

export const Languages: React.FC = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng).then(r => r);
    };

    return (
        <SC.LanguageContainer>
            <SC.LanguageImage src={en} alt="en" onClick={() => changeLanguage('en')}/>
            <SC.LanguageImage src={ru} alt="ru" onClick={() => changeLanguage('ru')}/>
        </SC.LanguageContainer>
    )
}