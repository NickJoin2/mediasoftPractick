import React, {Dispatch, useEffect, useState} from 'react';
import '../styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import close from "@/shared/image/modal/close.svg";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";
import { SpecializationDTO} from "@/features/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {setTableDataCreateDisciplines, updateTableDataDisciplines} from "@/features/disciplines/slice/disciplines";
import {disciplinesCreate, disciplinesUpdate} from "@/features/disciplines/action/action";
import {updateTableDataGroup} from "@/features/group/slice/group";

interface WorkerCreateModalProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedItem?: any;
}

const DisciplineModalCreate: React.FC<WorkerCreateModalProps> =
    ({
         setOpen,
         selectedItem,
     }) => {
        const [name, setName] = useState<string>(selectedItem && selectedItem.name || '');

        const tableData = useAppSelector((state: RootState) => state.disciplines.tableData)

        const dispatch = useAppDispatch();

        const submitCreate = (e: React.FormEvent) => {
            e.preventDefault();

            const newEntry: any = {
                id: String(new Date().getTime()),
                name: name
            };

            console.log(newEntry)

            dispatch(setTableDataCreateDisciplines(newEntry));
            dispatch(disciplinesCreate(newEntry))
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
                        name: name
                    }));

                    dispatch(disciplinesUpdate({
                        id: item.id,
                        name: name
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
                <div className="discipline__modal__overlay">
                    <div className="discipline__modal__content">

                        <form className="discipline__modal__form" onSubmit={selectedItem ? submitEdit : submitCreate}>
                            <div className="discipline__modal__close">
                                <button type="button" onClick={handleClose}>
                                    <img src={close} alt="close"/>
                                </button>
                            </div>

                            <h2 className="discipline__modal__title">{selectedItem ? 'Редактировать дисциплину' : 'Добавить дисциплину'}</h2>

                            <div className="discipline__modal__form__content">
                                <div className="discipline__modal-block">
                                    <input
                                        required
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="discipline__modal__input"
                                        type="text"
                                        placeholder="Введите название специализации"
                                    />
                                </div>


                            </div>

                            <div className="discipline__modal-block-button">
                                <ButtonAuth title="Сохранить" width={128} height={52} hover={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    };

export default DisciplineModalCreate;