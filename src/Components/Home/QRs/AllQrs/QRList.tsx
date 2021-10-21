import React, {useState} from "react";
import * as SC from '../QrStyles'
import {getUUID} from "../../../../selector/selectors";
import {useSelector} from "react-redux";
import _ from "lodash";
import Modal from '@mui/material/Modal';
import {useTranslation} from 'react-i18next';
import {Back} from "../../../Back/Back";

interface UserType {
    uuid: string
    qrs: any
}

export const QRList: React.FC = () => {
    const {t} = useTranslation()
    const [open, setOpen] = React.useState(false);
    const currentUUID = useSelector(getUUID)
    const users = JSON.parse(String(localStorage.getItem('users')))
    const currentUser = users.filter((currentUser: UserType) => currentUser.uuid === currentUUID)
    const currentUserQrs = _.get(currentUser[0], 'qrs')

    const [newQrs, setNewQrs] = useState<any>(currentUserQrs)



    const openQR = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteQR = (key: number) => {
        const userWithDeletedQR = users.map((user: any) => {
            if (user.uuid === currentUUID) {
                currentUserQrs.splice(key, 1)
                setNewQrs(currentUserQrs)
                return {
                    ...user,
                    qrs: currentUserQrs

                }
            } else {
                return user
            }
        })
        // dispatch(setUsers(userWithDeletedQR))
        localStorage.setItem('users', JSON.stringify(userWithDeletedQR))
    }

    return (
        <SC.QRContainer>
            <SC.QRCreateTitle> {t('myQRlist')}</SC.QRCreateTitle>
            {
                newQrs ?
                    newQrs.map((item: { title: string, url: string }, key: number) => {
                        return (
                            <SC.QRList key={key}>
                                <SC.QRListItem>
                                    <SC.QRImage src={item.url} alt="qrl" style={{width: "30px", marginRight: "10px"}}/>
                                    <SC.QRTitle>{item.title}</SC.QRTitle>
                                </SC.QRListItem>
                                <SC.QRListItem>
                                    <SC.QRListButtons onClick={openQR}>{t('preview')}</SC.QRListButtons>
                                    <SC.QRListButtons> <SC.QRDownload download={true}
                                                                      href={item.url}>download</SC.QRDownload></SC.QRListButtons>
                                    <SC.QRListButtons onClick={() => deleteQR(key)}>{t('delete')}</SC.QRListButtons>
                                </SC.QRListItem>
                                <Modal
                                    open={open}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                    onClose={handleClose}
                                >
                                    <SC.Box>
                                        <SC.QRImage src={item.url} alt="qrl"/>
                                    </SC.Box>
                                </Modal>
                            </SC.QRList>
                        )
                    }) : false
            }
            <Back />
        </SC.QRContainer>
    )
}

