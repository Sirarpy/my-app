import React from "react";
import {useHistory} from "react-router-dom";
import * as SC from './chooseAppStyles';
import qrGig from './downsign-qr-code.gif'
import cocktailGig from './f.gif'

export const ChooseApp:React.FC = ()=>{
    const history = useHistory()

    const goToCurrentPage = (currentTargetRout: string) => {
        history.push(currentTargetRout)
    }

    return(
        <SC.Wrapper>
            <SC.ChooseAppImage src={qrGig} onClick={()=> goToCurrentPage('/login')}/>
            <h1>VS</h1>
            <SC.ChooseAppImage src={cocktailGig} onClick={()=> goToCurrentPage('/cocktail')}/>
        </SC.Wrapper>
    )
}