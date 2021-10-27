import React from "react";
import {useTranslation} from 'react-i18next';
// import {useHistory} from 'react-router-dom';
import * as SC from './backStyle';
import { TiArrowBackOutline } from "react-icons/ti";

export const Back = (props:{onClick:()=>void}) => {
    const {t} = useTranslation()
    // const history = useHistory();

    // const goBack = (location:string) => {
    //     history.push(location)
    // }
    return (
        <SC.Back onClick={props.onClick}> <TiArrowBackOutline style={{display:"block"}}/> {t('back')}</SC.Back>
    )
}