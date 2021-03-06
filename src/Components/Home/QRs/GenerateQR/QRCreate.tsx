import React, {useState, useEffect} from "react";
import * as SC from '../QrStyles'
import {useSelector} from "react-redux";
import {getUUID, getQrLoader, getQrUrl} from "../../../../selector/selectors";
import {useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {URLToBase64} from "../../../../helpers/URLToBase64";
import {Back} from "../../../Back/Back";
import {useDispatch} from "react-redux";
import CircularIndeterminate from "../../../Authentication/Loader/loader";
import {generateQRPromise} from "../../../../redux/qrLoaderSlice/qrLoaderSlice";

export const QRCreate: React.FC = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation();
    const qrLoader = useSelector(getQrLoader)
    const qrUrl = useSelector(getQrUrl)
    const [inputValue, setInputValue] = useState<string>('');
    const [qrTitle, setQRTitle] = useState('')
    const currentUUID = useSelector(getUUID)
    const users = JSON.parse(String(localStorage.getItem('users')))
    const history = useHistory();
    const [message, setMessage] = useState([]);
    const [base64, setBase64] = useState<any>('')

    const getQrTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQRTitle(e.target.value)
    }
    const getQR = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        if (qrUrl !== "" && qrUrl) {
            URLToBase64(qrUrl, function (myBase64: string) {
                setBase64(myBase64)
            })
        }
        setMessage([])
    }, [qrUrl])

    const generateQR = () => {
        if (inputValue !== "" && qrTitle !== "") {
            dispatch(generateQRPromise(inputValue))
        } else {
            setMessage(t('fillInput'))
        }
    }

    const saveQRs = () => {
        if (base64 !== "") {
            const userWithQR = users.map((user: any) => {
                if (user.uuid === currentUUID) {
                    return {
                        ...user,
                        qrs: [...user.qrs, {
                            title: qrTitle,
                            url: base64
                        }]
                    }
                } else {
                    return user
                }
            })
            localStorage.setItem('users', JSON.stringify(userWithQR))
            history.push('/home')
        } else {
            setMessage(t('saveMessage'))
        }
    }

    if (qrLoader) {
        return (
            <CircularIndeterminate/>
        )
    }

    const goToCurrentPage = (currentTargetRout: string) => {
        history.push(currentTargetRout)
    }

    return (
        <>
            <SC.QRContainer>
                <SC.Img id="image"
                        src={base64 ? base64 : "https://images3.alphacoders.com/914/thumb-1920-914159.png"}
                        alt="qr"/>
                <SC.QRCreateTitle>{t('createQR')}</SC.QRCreateTitle>
                <SC.QRInput type="text"
                            placeholder={t('qrTitle')}
                            onChange={getQrTitle}
                            value={qrTitle}
                />
                <SC.QRInput type="text"
                            placeholder={t('qrInput')}
                            value={inputValue}
                            onChange={getQR}/>
                <SC.QRButton value="Generate" onClick={generateQR}>{t('generateMyQR')}</SC.QRButton>
                <SC.QRButton onClick={saveQRs}>{t('SaveQR')}</SC.QRButton>
                <Back onClick={() => goToCurrentPage('/home')}/>
                <p>{message}</p>
            </SC.QRContainer>
        </>
    )
}