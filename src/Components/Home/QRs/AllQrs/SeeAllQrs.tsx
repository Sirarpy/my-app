import React from "react";
import * as SC from '../../HomeStyles'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next';

export const SeeAllQrs: React.FC = () => {
    const history = useHistory();
    const {t} = useTranslation();

    return (
        <SC.BubbleContainer>
            <SC.Bubble>
                <SC.ContainerItem onClick={() => history.push('/home/QR_List')}>
                    {t('seeQRList')}
                </SC.ContainerItem>
            </SC.Bubble>
        </SC.BubbleContainer>

    )
}