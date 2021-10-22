import React from "react";
import * as SC from './cocktailStyle/cocktail';
import './cocktailStyle/cocktail.css';
import bg from './cocktailStyle/cocktailImg/hbg.png';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/cocktail/cocktailSlice";
import {getShake, getPlay} from "../../selector/selectors";
import {Back} from "../Back/Back";
import soundFile from './bgsound.mp3'
import {useHistory} from "react-router-dom";

export const CocktailBanner: React.FC = () => {
    const dispatch = useDispatch()
    const shake = useSelector(getShake)
    const play = useSelector(getPlay)
    const history = useHistory()

    const getCocktail = () => {
        dispatch(fetchData("https://www.thecocktaildb.com/api/json/v1/1/random.php"))
        setTimeout(() => {
            history.push('/currentCocktail')
        }, 3000)
    }

    if (play && shake) {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        if (audioEl instanceof HTMLAudioElement) {
            audioEl.play().then(res => res).catch(err => audioEl.pause())
        }
    }

    return (
        <SC.CocktailBG id="box">
            <SC.CocktailBGImage src={bg} alt="cocktailBG" onClick={getCocktail} className={shake ? 'shake' : ""}/>
            <audio className='audio-element' >
                <source src={soundFile}/>
            </audio>
            <Back/>
        </SC.CocktailBG>
    )
}
