import React from "react";
import {useHistory} from 'react-router-dom';
import * as SC from './backStyle';
import { TiArrowBackOutline } from "react-icons/ti";

export const Back = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    return (
        <SC.Back onClick={goBack} > <TiArrowBackOutline style={{display:"block"}}/> Back</SC.Back>
    )
}