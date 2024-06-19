import React, {Dispatch, useState} from 'react';
import '../styles/styles.scss'

import 'react-toastify/dist/ReactToastify.css';
import close from "@/shared/image/modal/close.svg";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";
import { SpecializationDTO} from "@/features/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {setTableDataCreateGroup, updateTableDataGroup} from "@/features/group/slice/group";
import {groupCreate, groupUpdate} from "@/features/group/action/action";

interface WorkerCreateModalProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedItem?: any;
}

const GroupModalCreate: React.FC<WorkerCreateModalProps> =
    ({
         setOpen,
         selectedItem,
     }) => {
        const [name, setName] = useState<string>(selectedItem && selectedItem.name || '');
        const [studentsCol, setStudentsCol] = useState<string>(selectedItem && selectedItem.studentsCol || '');

        const tableData = useAppSelector((state: RootState) => state.group.tableData)

        const dispatch = useAppDispatch();

        const submitCreate = (e: React.FormEvent) => {
            e.preventDefault();

            const newEntry: any = {
                id: String(new Date().getTime()),
                name: name,
                studentsCol:studentsCol
            };

            console.log(newEntry)

            dispatch(setTableDataCreateGroup(newEntry));
            dispatch(groupCreate(newEntry))
            setOpen(false);
        }

        const submitEdit = (e: React.FormEvent) => {
            e.preventDefault();

            if (!tableData || !selectedItem) {
                return;
            }

            tableData.map((item:SpecializationDTO) => {

                if (item.id === selectedItem.id) {
                    dispatch(updateTableDataGroup({
                        id: item.id,
                        name: name,
                        studentsCol:studentsCol
                    }));

                    dispatch(groupUpdate({
                        id: item.id,
                        name: name,
                        studentsCol:studentsCol
                    }))
                }

                return item;
            });

            setOpen(false);
        };

        const handleClose = () => {
            setOpen(false)
        }

        return (
            <>
                <div className="group__modal__overlay">
                    <div className="group__modal__content">

                        <form className="group__modal__form" onSubmit={selectedItem ? submitEdit : submitCreate}>
                            <div className="group__modal__close">
                                <button type="button" onClick={handleClose}>
                                    <img src={close} alt="close"/>
                                </button>
                            </div>

                            <h2 className="group__modal__title">{selectedItem ? 'Редактировать группу' : 'Добавить группу'}</h2>

                            <div className="group__modal__form__content">
                                <div className="group__modal-block">
                                    <input
                                        required
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="group__modal__input"
                                        type="text"
                                        placeholder="Введите название специализации"
                                    />
                                </div>
                                <div className="group__modal-block">
                                    <input
                                        required
                                        value={studentsCol}
                                        onChange={e => setStudentsCol(e.target.value)}
                                        className="group__modal__input"
                                        type="number"
                                        placeholder="Введите количество студентов группы"
                                    />
                                </div>

                            </div>

                            <div className="group__modal-block-button">
                                <ButtonAuth title="Сохранить" width={128} height={52} hover={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    };

export default GroupModalCreate;