import React from "react";
// import {useHistory} from 'react-router-dom';
import * as SC from './backStyle';
import { TiArrowBackOutline } from "react-icons/ti";

export const Back = (props:{onClick:()=>void}) => {
    // const history = useHistory();

    // const goBack = (location:string) => {
    //     history.push(location)
    // }
    return (
        <SC.Back onClick={props.onClick}> <TiArrowBackOutline style={{display:"block"}}/> Back</SC.Back>
    )
}