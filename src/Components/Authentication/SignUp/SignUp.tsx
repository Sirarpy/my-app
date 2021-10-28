import React, {useEffect, useState} from "react";
import * as SC from "../AuthenticationStyles";
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {sendEmail, setSignup} from "../../../redux/auth/authSlice";
import {v4 as uuidv4} from 'uuid';
import {REGEXP} from "../../../constants";
import Modal from '@mui/material/Modal';
import CircularIndeterminate from "../Loader/loader";
import {getLoader} from "../../../selector/selectors";
import {useTranslation} from 'react-i18next';
import {Back} from "../../Back/Back";

export const SignUpLayout: React.FC = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [open, setOpen] = React.useState(false);
    const [typedEmail, setTypedEmail] = useState('')
    const [message, setMessage] = useState([]);
    const history = useHistory();
    const loading = useSelector(getLoader);

    useEffect(() => {
        setEmail(typedEmail)
    }, [])

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setEmail(e.target.value)
        setTypedEmail(e.target.value)
    }

    const generateUUID = () => {
        if (REGEXP.email.test(email)) {
            dispatch(setSignup(email))
            console.log(email)
            dispatch(sendEmail(uuidv4(), email))
            setOpen(true);
        } else {
            setMessage(t('validEmail'));
        }
    }

    const handleClose = () => {
        setOpen(false);
        history.push('/login')
    };

    if (loading) {
        return (
            <CircularIndeterminate/>
        )
    }
    const goToCurrentPage = (currentTargetRout: string) => {
        history.push(currentTargetRout)
    }
    return (
        <SC.Container>
            <SC.AuthTitle>{t('signUp')}</SC.AuthTitle>
            <SC.Input type="text" value={email} placeholder={t('enterEmail')} onChange={getEmail} name="email"/>
            <SC.Button onClick={generateUUID}>
                {t('getUU')}
            </SC.Button>
            <Back onClick={() => goToCurrentPage('/login')}/>
            <Modal
                open={open}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <SC.Box>
                    <SC.LoaderText id="parent-modal-description">
                        {t('loaderText')}
                    </SC.LoaderText>
                    <SC.LoaderText>{email}</SC.LoaderText>
                    <SC.Button onClick={handleClose}>OK</SC.Button>
                </SC.Box>
            </Modal>
            <SC.Warning>
                {message}
            </SC.Warning>
        </SC.Container>
    )
}

