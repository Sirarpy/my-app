import React from "react";
import {LogInLayout} from "../Authentication/LogIn/LogIn";
import {GlobalStyle, MainLayoutContainer} from "./styles";
import {SignUpLayout} from "../Authentication/SignUp/SignUp";
import {Home} from "../Home/Home"
import {getLoginUser} from "../../selector/selectors";
import {useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {QRCreate} from "../Home/QRs/GenerateQR/QRCreate";
import {QRList} from "../Home/QRs/AllQrs/QRList";
import {Languages} from "../Languages/Languages";
import {CocktailBanner} from "../Cocktail/CocktailBanner";
import {CocktailDescription} from "../Cocktail/CocktailDescription";
import {ChooseApp} from "../ChooseApp/ChooseApp";
export const MainLayout: React.FC = () => {

    const loginStatus = useSelector(getLoginUser)

    return (
        <div>
            <GlobalStyle/>
            <Router >
                <Switch>
                    <Route path="/" exact component={ChooseApp}/>
                    <Route path="/cocktail" component={CocktailBanner}/>
                    <Route path="/currentCocktail" component={CocktailDescription}/>
                    <MainLayoutContainer>
                        <Languages/>
                        <Route path="/login" component={LogInLayout}/>
                        <Route path="/signup" component={SignUpLayout}/>
                        <Route exact path="/home">
                            {!loginStatus ? <Redirect to="/login"/> : <Home/>}
                        </Route>
                        <Route path="/home/QR_create" component={QRCreate}/>
                        <Route path="/home/QR_List" component={QRList}/>
                    </MainLayoutContainer>
                </Switch>
            </Router>
        </div>
    )
}