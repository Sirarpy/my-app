import React from "react";
import * as SC from '../../HomeStyles'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next';
import '../home.css'


export const GenerateQr: React.FC = () => {
    const {t} = useTranslation()

    const history = useHistory();
    return (
        <SC.BubbleContainer>
            <SC.Bubble>
                <SC.ContainerItem onClick={() => history.push('/home/QR_create')}>
                    {t('generateQR')}
                </SC.ContainerItem>
            </SC.Bubble>
        </SC.BubbleContainer>
    )
}