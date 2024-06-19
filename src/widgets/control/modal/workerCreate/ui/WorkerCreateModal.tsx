import React, {Dispatch, useEffect, useState} from 'react';

import '../styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import close from "@/shared/image/modal/close.svg";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import {Bounce, toast, ToastContainer} from "react-toastify";

import {setTableDataCreate, updateTableData} from "@/features/employees/slice/employees";
import {employeesCreate, employeesReplace} from "@/features/employees/action/action";
import {CreateEmployeeCommand} from "@/features/types";
import {Posts} from "@/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";

interface WorkerCreateModalProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedItem?: any;
    // selectedItem?: CreateEmployeeCommand | null;
}

const WorkerCreateModal: React.FC<WorkerCreateModalProps> =
    ({
         setOpen,
         selectedItem,
     }) => {
        const [firstName, setFirstName] = useState<string>(selectedItem && selectedItem.firstName || '');
        const [lastName, setLastName] = useState<string>(selectedItem && selectedItem.middleName || '')
        const [middleName, setMiddleName] = useState<string>(selectedItem && selectedItem.middleName || '')
        const [posts, setPosts] = useState<Posts[]>([])

        const tableData = useAppSelector((state: RootState) => state.employees.tableData)

        const dispatch = useAppDispatch();

        useEffect(() => {
            if (selectedItem && selectedItem.posts) {
                setPosts(selectedItem?.posts)
            }
        }, [selectedItem]);


        const submitCreate = (e: React.FormEvent) => {
            e.preventDefault();

            if (posts.length === 0) {
                toast.error('Необходима добавить должность!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                return
            }

            const newEntry: any = {
                id: String(new Date().getTime()),
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                blocked: false,
                posts: posts,
            };
            dispatch(setTableDataCreate(newEntry));

            dispatch(employeesCreate(newEntry))

            setPosts([])
            setOpen(false);
        }

        const submitEdit = (e: React.FormEvent) => {
            e.preventDefault();

            if (!tableData || !selectedItem) {
                return;
            }

            if (posts.length === 0) {
                toast.error('Необходима добавить должность!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                return;
            }

            tableData.map((item:CreateEmployeeCommand) => {
                if (item.id === selectedItem.id) {
                    dispatch(updateTableData({
                        id: item.id,
                        firstName: firstName,
                        lastName: lastName,
                        middleName: middleName,
                        posts: posts,
                    }));

                    dispatch(employeesReplace({
                        id: item.id,
                        firstName: firstName,
                        lastName: lastName,
                        middleName: middleName,
                        posts: posts,
                    }))

                }

                return item;
            });

            setOpen(false);
        };

        const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedValue: number = parseInt(e.target.value, 10);

            let name;

            switch (selectedValue) {
                case 0:
                    name = "Студент"
                    break
                case 1:
                    name = "Преподаватель"
                    break
                case 2:
                    name = "Заведующий отделением"
                    break
                case 3:
                    name = "Классный руководитель"
                    break
                case 4:
                    name = "Представитель компании"
                    break
                default:
                    return
            }

            const selectObj = {id: selectedValue, name: name}

            const allExists = posts.some(item => item.id === selectObj.id)


            if (!allExists) {
                setPosts(prevState => [...prevState, {id: selectedValue, name: name}])
            }

        }

        const handleClose = () => {
            setOpen(false)
        }

        const deleteRole = (id: number) => {
            setPosts(posts.filter(item => item.id !== id))
        }

        return (
            <>
                <div className="worker__modal__overlay">
                    <div className="worker__modal__content">

                        <ToastContainer/>
                        <form className="worker__modal__form" onSubmit={selectedItem ? submitEdit : submitCreate}>
                            <div className="worker__modal__close">
                                <button type="button" onClick={handleClose}>
                                    <img src={close} alt="close"/>
                                </button>
                            </div>

                            <h2 className="worker__modal__title">{selectedItem ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</h2>

                            <div className="worker__modal__form__content">
                                <div className="modal-block">
                                    <input
                                        required
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        className="worker__modal__input"
                                        type="text"
                                        placeholder="Введите имя"
                                    />
                                </div>

                                <div className="worker__modal-block">
                                    <input
                                        required
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        className="worker__modal__input"
                                        type="text"
                                        placeholder="Введите фамилию"
                                    />
                                </div>

                                <div className="worker__modal-block">
                                    <input
                                        required
                                        value={middleName}
                                        onChange={e => setMiddleName(e.target.value)}
                                        className="worker__modal__input"
                                        type="text"
                                        placeholder="Введите отчество"
                                    />
                                </div>

                                <div className="worker__modal-block">
                                    <div className='worker__modal__selected'>
                                        {posts.map(item => (
                                            <span className="worker__modal__selected-item" key={item.id}
                                                  onClick={() => deleteRole(item.id)}>
                                        {item.name}
                                                <img style={{cursor: "pointer"}} src={close} width={8} alt="close"/>
                                    </span>
                                        ))}
                                    </div>

                                    <select className='worker__modal__select' onChange={changeSelect} value={-1}
                                            required={true}>
                                        <option
                                            value="-1">{posts.length === 0 ? 'Выберите роль' : `Выбрана ${posts.length} роль`}</option>
                                        <option value="0">Студент</option>
                                        <option value="1">Преподаватель</option>
                                        <option value="2">Заведующий отделением</option>
                                        <option value="3">Классный руководитель</option>
                                        <option value="4">Представитель компании</option>
                                    </select>
                                </div>
                            </div>

                            <div className="worker__modal-block-button">
                                <ButtonAuth title="Сохранить" width={128} height={52} hover={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    };

export default WorkerCreateModal;