import React, {useEffect, useState} from "react";
import * as SC from './HomeStyles'
import Avatar from './images/avatar.jpg';
import {SeeAllQrs} from "./QRs/AllQrs/SeeAllQrs";
import {GenerateQr} from "./QRs/GenerateQR/GenerateQr";
import {hiddenInput, toBase64} from "../../helpers/fileInput";
import {useSelector} from "react-redux";
import {getUUID} from "../../selector/selectors";
import _ from "lodash";
import {useTranslation} from 'react-i18next';
import {Back} from "../Back/Back";


interface AvatarType {
    avatar: string
    uuid: string
}

export const Home: React.FC = () => {
    const {t} = useTranslation();
    const [avatar, setAvatar] = useState("")
    const currentUUID = useSelector(getUUID)
    const storageData = JSON.parse(String(localStorage.getItem('users')))

    useEffect(() => {
        const isAvatarExist = storageData.filter((item: AvatarType) => item.uuid === currentUUID)
        const avatarExists = _.get(isAvatarExist[0], 'avatar')
        setAvatar(avatarExists)
    }, [currentUUID, storageData])


    const addAvatar = () => {
        hiddenInput().then(response => {
            toBase64(response).then((res) => {
                setAvatar(res)
                const usersWithAvatars = storageData.map((user: any) => {
                    if (user.uuid === currentUUID) {
                        return {
                            ...user,
                            avatar: res
                        }
                    } else {
                        return user
                    }
                })
                localStorage.setItem('users', JSON.stringify(usersWithAvatars))
            })
        })
    }
    return (
        <SC.HomeContainer>
            <SC.HomeTitle>{t('home')}</SC.HomeTitle>
            <SC.Avatar style={{backgroundImage: `url(${avatar ? avatar : Avatar})`}} onClick={addAvatar}/>
            <SC.HomeContent>
                <SeeAllQrs/>
                <GenerateQr/>
            </SC.HomeContent>
            <Back />
        </SC.HomeContainer>
    )
}