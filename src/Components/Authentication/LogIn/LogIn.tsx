import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import * as SC from '../AuthenticationStyles'
import {setLogin, setUUID} from "../../../redux/auth/authSlice";
import {REGEXP} from "../../../constants";
import {useTranslation} from 'react-i18next';
import {Back} from "../../Back/Back";

interface UserType {
    uuid: string
    qrs?: any
}

export const LogInLayout: React.FC = () => {
    const dispatch = useDispatch()
    const [uuid, setUuid] = useState<string>('')
    const [message, setMessage] = useState([]);
    const history = useHistory();
    const users = JSON.parse(String(localStorage.getItem('users')))
    const {t} = useTranslation();

    const getUUID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUuid(e.target.value)
    }

    const submitLogin = () => {
        const isExist = users.filter((currentUser: UserType) => currentUser.uuid === uuid)
        if (REGEXP.uuid.test(uuid) && isExist.length) {
            dispatch(setUUID(uuid))
            dispatch(setLogin(true))
            history.push('/home')
        } else {
            setMessage(t('messageUUID'));
        }
    }

    const goToCurrentPage = (currentTargetRout: string) => {
        history.push(currentTargetRout)
    }

    return (
        <SC.Container>
            <SC.AuthTitle>{t('login')}</SC.AuthTitle>
            <SC.Input name="uuid" type="text" placeholder={t('loginInput')} onChange={getUUID} value={uuid}/>
            <SC.Button onClick={submitLogin}>
                <SC.Link>
                    {t('loginStart')}
                </SC.Link>
            </SC.Button>
            <Back onClick={() => goToCurrentPage('/')}   />
            <SC.Span onClick={() => goToCurrentPage('/signup')}>
                {t('noUUid')}
            </SC.Span>
            <SC.Warning>
                {message}
            </SC.Warning>
        </SC.Container>
    )
}

