import React, {useEffect, useState} from "react";
import * as SC from '../QrStyles'
import {getUUID} from "../../../../selector/selectors";
import {useSelector} from "react-redux";
import _ from "lodash";
import Modal from '@mui/material/Modal';
import {useTranslation} from 'react-i18next';
import {Back} from "../../../Back/Back";
import {useHistory} from "react-router-dom";
import ReactPaginate from 'react-paginate';

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
    const history = useHistory()
    const [newQrs, setNewQrs] = useState<any>([])

    useEffect(() => {
        setNewQrs(currentUserQrs)
    }, [])

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
        localStorage.setItem('users', JSON.stringify(userWithDeletedQR))
    }

    const goToCurrentPage = (currentTargetRout: string) => {
        history.push(currentTargetRout)
    }

    const Items = ({currentQrs}: any) => {
        return (
            <>
                {
                    currentQrs ?
                        currentQrs.map((item: { title: string, url: string }, key: number) => {
                            return (
                                <SC.QRList key={key}>
                                    <SC.QRListItem>
                                        <SC.QRImage src={item.url} alt="qrl"
                                                    style={{width: "30px", marginRight: "10px"}}/>
                                        <SC.QRTitle>{item.title}</SC.QRTitle>
                                    </SC.QRListItem>
                                    <SC.QRListItem className="actions">
                                        <SC.QRListButtons onClick={openQR}>{t('preview')}</SC.QRListButtons>
                                        <SC.QRListButtons> <SC.QRDownload download={true}
                                                                          href={item.url}>{t('download')}</SC.QRDownload></SC.QRListButtons>
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
            </>
        );
    }

    const PaginatedItems = ({itemsPerPage}: any) => {

        const [currentQrs, setCurrentQrs] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            if (newQrs) {
                setCurrentQrs(newQrs.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(newQrs.length / itemsPerPage));
            }
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event: { selected: number; }) => {
            const newOffset = (event.selected * itemsPerPage) % newQrs.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentQrs={currentQrs}/>

                <SC.PaginateContainer>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="prev"
                        previousLabel="next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        breakClassName="break-me"
                        marginPagesDisplayed={1}
                        activeClassName={'active'}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        nextClassName={'page-item'}
                        previousClassName={'page-item'}
                    />
                </SC.PaginateContainer>
            </>
        );
    }

    return (
        <SC.QRContainer>
            <SC.QRCreateTitle> {t('myQRlist')}</SC.QRCreateTitle>
            <PaginatedItems itemsPerPage={4}/>
            <Back onClick={() => goToCurrentPage('/home')}/>
        </SC.QRContainer>
    )
}

