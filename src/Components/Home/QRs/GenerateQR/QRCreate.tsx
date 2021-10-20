import React, {useState} from "react";
import * as SC from '../QrStyles'
import {useSelector} from "react-redux";
import {getUUID} from "../../../../selector/selectors";
import {useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {URLToBase64} from "../../../../helpers/URLToBase64";

export const QRCreate: React.FC = () => {
    const {t} = useTranslation();
    const [inputValue, setInputValue] = useState<string>('');
    const [qrTitle, setQRTitle] = useState('')
    const [url, setUrl] = useState('')
    const currentUUID = useSelector(getUUID)
    const users = JSON.parse(String(localStorage.getItem('users')))
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [base64, setbase64] = useState<any>('')

    const getQrTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQRTitle(e.target.value)
    }

    const getQR = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    async function generateQR() {
        let size = "500x500"
        let data = inputValue;
        let title = qrTitle
        let apiUrl = "http://api.qrserver.com/v1/create-qr-code/";
        if (data && data !== "" && title !== "") {
            setUrl(`${apiUrl}?data=${data}&size=${size}`)
        } else {
            setMessage("Fill all Inputs")
        }
        // setQRTitle("")
        // setInputValue("")
    }

    URLToBase64(url, function (myBase64: any) {
        setbase64(myBase64)
    })

    const saveQRs = () => {
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
    }

    return (
        <>
            <SC.QRContainer>
                <SC.Img id="image" src={url ? url : "https://images3.alphacoders.com/914/thumb-1920-914159.png"}
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
                <p>{message}</p>
            </SC.QRContainer>
        </>

    )
}