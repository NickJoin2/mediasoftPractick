import React, {Dispatch, useState} from 'react';
import close from '@/shared/image/modal/close.svg';
import ButtonAuth from '@/features/buttonAuth/ui/ButtonAuth';
import '../styles/styles.scss';
import {Person, TableWorkerPerson} from "@/types";


interface StudentProps {
    open?: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    setTableData: Dispatch<React.SetStateAction<Person[]>>;
    selectedItem: Person;
    body: Person[];

}

const StudentWork: React.FC<StudentProps> = ({ open, setOpen, body, setTableData,selectedItem }) => {
    const [fio, setFio] = useState<string>(selectedItem.fio || '');
    const [project, setProject] = useState<string>(selectedItem.title || '');
    const [procent, setProcent] = useState<number>(selectedItem.progress || 0);
    const [level, setLevel] = useState<number>(selectedItem.level || 1);

    const handleClose = () => {
        setOpen(false);
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const parsedValue = parseInt(value, 10);
        setProcent(isNaN(parsedValue) ? 0 : parsedValue);
    };

    const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value, 10);
        setLevel(isNaN(value) ? 0 : value);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setTableData(body.map((itemInBody) => {
            if (itemInBody.id === selectedItem.id) {
                return {...selectedItem, fio, title: project, progress: procent, level};
            } else {
                return itemInBody;
            }
        }))

        setOpen(false);
    };

    return (
        open &&
        <div className="modal__overlay">
            <div className="modal__content">
                <form className="modal__form" onSubmit={submit}>
                    <div className="modal__close">
                        <button type="button" onClick={handleClose}>
                            <img src={close} alt="close"/>
                        </button>
                    </div>

                    <h2 className="modal__title">Редактировать запись</h2>

                    <div className="modal__form__content">
                        <div className="modal-block">
                            <input
                                required
                                value={fio}
                                onChange={e => setFio(e.target.value)}
                                className="modal__input"
                                type="text"
                                placeholder="Введите ФИО студента"
                            />
                        </div>

                        <div className="modal-block">
                            <input
                                required
                                value={project}
                                onChange={e => setProject(e.target.value)}
                                className="modal__input"
                                type="text"
                                placeholder="Введите название проекта"
                            />
                        </div>

                        <div className="modal-block">
                            <input
                                required
                                value={procent}
                                onChange={handleProgressChange}
                                className="modal__input"
                                type="number"
                                placeholder="Введите прогресс проекта"
                                min={0}
                                max={100}
                            />
                        </div>

                        <div className="modal-block">
                            <select name="level" id="level" value={level} onChange={handleLevelChange}>
                                <option value="1">Не начат</option>
                                <option value="2">В процессе</option>
                                <option value="3">Завершен</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-block-button">
                        <ButtonAuth title="Сохранить" width={128} height={52} hover={true}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default StudentWork;