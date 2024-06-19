import React, {Dispatch, useState} from 'react';

import '@/widgets/control/studentCursachModalCreate/styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import close from "@/shared/image/modal/close.svg";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";
import {ToastContainer} from "react-toastify";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {Person} from "@/types";
import {setTableDataCreateStudentDiplom, updateTableDataDiplom} from "@/features/diplomStudents/slice/slice";
import {studentDiplomCreate, studentsReplaceDiplom} from "@/features/diplomStudents/action/action";

interface WorkerCreateModalProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedItem?: Person | null;
    titlePage: string;
}

const DiplomStudentModal: React.FC<WorkerCreateModalProps> =
    ({
         setOpen,
         selectedItem,
         titlePage
     }) => {
        const [title, setTitle] = useState<string>(selectedItem && selectedItem.title || '');
        const [fio, setFio] = useState<string>(selectedItem && selectedItem.fio || '')
        const [prepodFio, setPrepodFio] = useState<string>(selectedItem && selectedItem.prepodFio || '')
        const [level, setLevel] = useState<string>(selectedItem && selectedItem.level || '');
        const [link, setLink] = useState<string>(selectedItem && selectedItem.link || '');


        const dispatch = useAppDispatch();
        const tableData = useAppSelector((state: RootState) => state.diplom.tableData)



        const submitCreate = (e: React.FormEvent) => {
            e.preventDefault();


            const newEntry: string[] = {
                id: String(new Date().getTime()),
                title: title,
                fio: fio,
                prepodFio: prepodFio,
                link: link,
                level: level,
            };
            dispatch(setTableDataCreateStudentDiplom(newEntry));
            dispatch(studentDiplomCreate(newEntry))


            setOpen(false);
        }

        const submitEdit = (e: React.FormEvent) => {
            e.preventDefault();

            if (!selectedItem) {
                return;
            }

            tableData.map((item:Person) => {
                if (item.id === selectedItem.id) {
                    dispatch(updateTableDataDiplom({
                        id: item.id,
                        title: title,
                        fio: fio,
                        prepodFio: prepodFio,
                        link: link,
                        level: level,
                    }))

                    dispatch(studentsReplaceDiplom({
                        id: item.id,
                        title: title,
                        fio: fio,
                        prepodFio: prepodFio,
                        link: link,
                        level: level,
                    }));

                }

                return item;
            });

            setOpen(false);
        };


        const handleClose = () => {
            console.log(23)
            setOpen(false)
        }


        return (
            <>
                <div className="student__modal__overlay">
                    <div className="student__modal__content">

                        <ToastContainer/>
                        {/*<form className="modal__form">*/}
                        <form className="student__modal__form" onSubmit={selectedItem ? submitEdit : submitCreate}>
                            <div className="student__modal__close">
                                <img onClick={handleClose} src={close} alt="close" style={{cursor: "pointer"}} />
                            </div>

                            <h2 className="student__modal__title">{titlePage}</h2>

                            <div className="student__modal__form__content">
                                <div className="student__modal-block">
                                    <input
                                        required
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        className="student__modal__input"
                                        type="text"
                                        placeholder="Введите название проэкта"
                                    />
                                </div>

                                <div className="student__modal-block">
                                    <input
                                        required
                                        value={fio}
                                        onChange={e => setFio(e.target.value)}
                                        className="student__modal__input"
                                        type="text"
                                        placeholder="Введите ФИО"
                                    />
                                </div>

                                <div className="student__modal-block">
                                    <input
                                        required
                                        value={prepodFio}
                                        onChange={e => setPrepodFio(e.target.value)}
                                        className="student__modal__input"
                                        type="text"
                                        placeholder="Введите ФИО преподавателя"
                                    />
                                </div>

                                <div className="student__modal-block">
                                    <input
                                        value={link}
                                        onChange={e => setLink(e.target.value)}
                                        className="student__modal__input"
                                        type="text"
                                        placeholder="Ссылка на проэкт"
                                    />
                                </div>

                                <div className="student__modal-block">
                                    <select className='student__modal__select'
                                            onChange={e =>  setLevel(e.target.value)}
                                            required={true}
                                            value={level}>
                                        <option value="1">Не начат</option>
                                        <option value="2">В процессе</option>
                                        <option value="3">Завершен</option>
                                    </select>
                                </div>
                            </div>

                            <div className="student__modal-block-button">
                                <ButtonAuth title="Сохранить" width={128} height={52} hover={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    };

export default DiplomStudentModal;