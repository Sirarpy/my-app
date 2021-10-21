import React from 'react'
import {useSelector} from "react-redux";
import {getDrinks} from "../../selector/selectors";
import * as SC from './cocktailStyle/cocktail'
import {Back} from "../Back/Back";

interface Key {
    [key: string]: string;
}

export const CocktailDescription: React.FC = () => {

    const getCurrentDrink: Key = useSelector(getDrinks)

    return (
        <SC.CurrentDrinkBG>
            {
                Object.keys(getCurrentDrink).length > 0 ?
                    <SC.CurrentDrinkBanner key={getCurrentDrink.idDrink}>
                        <SC.CurrentDrinkItem>
                            <SC.CocktailItemImage src={getCurrentDrink.strDrinkThumb} alt=""/>
                        </SC.CurrentDrinkItem>
                        <SC.CurrentDrinkItem>
                            <h2 style={{textAlign: "center"}}>{getCurrentDrink.strDrink}</h2>
                            <SC.Paragraph><SC.Span> category: </SC.Span> {getCurrentDrink.strCategory}</SC.Paragraph>
                            <SC.Paragraph><SC.Span> alcoholic: </SC.Span> {getCurrentDrink.strAlcoholic}</SC.Paragraph>
                            <SC.Paragraph><SC.Span> glass: </SC.Span> {getCurrentDrink.strGlass}</SC.Paragraph>
                            <SC.Paragraph><SC.Span> ingredients: </SC.Span> {getCurrentDrink.strIngredient1} / {getCurrentDrink.strIngredient2} ...</SC.Paragraph>
                        </SC.CurrentDrinkItem>
                        <SC.CurrentDrinkItem style={{width: "100%"}}>
                            <SC.Paragraph><SC.Span> instructions: </SC.Span> {getCurrentDrink.strInstructions}
                            </SC.Paragraph>
                            <SC.Paragraph><SC.Span> modified: </SC.Span> {getCurrentDrink.dateModified && getCurrentDrink.dateModified.split(" ", 1)}
                            </SC.Paragraph>
                        </SC.CurrentDrinkItem>
                        <Back/>
                    </SC.CurrentDrinkBanner>
                    : false
            }
        </SC.CurrentDrinkBG>
    )
}