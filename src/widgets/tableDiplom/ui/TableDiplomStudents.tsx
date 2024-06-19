import React, { useState} from 'react';
import '@/widgets/Table/style/styles.scss'
import editImg from '@/shared/image/table-button/edit.svg';
import deleteImg from '@/shared/image/table-button/delete.svg';
import NoRecords from "@/shared/ui/NoRecords";
import send from "@/shared/image/table-button/send.svg";
import ButtonSend from "@/features/buttonSend/ui/ButtonSend";
import file from '@/shared/image/table-button/file.svg'
import {Person, TableHeadProps} from "@/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";

import {setTableDataStudentCursach} from "@/features/diplomWork/slice/slice";
import {studentCursachDelete} from "@/features/diplomWork/action/action";
import AssentModal from "@/widgets/modal/assent/ui/AssentModal";
import StudentCursachModalCreate from "@/widgets/control/studentCursachModalCreate/ui/StudentCursachModalCreate";
import DiplomStudentModal from "@/widgets/diplomStudentModal/ui/DiplomStudentModal";
import {setTableDataStudentDiplom} from "@/features/diplomStudents/slice/slice";
import {studentDiplomDelete} from "@/features/diplomStudents/action/action";



interface TableProps {
    theadObj: TableHeadProps;
    teacher: boolean;
}

const TableDiplomStudents: React.FC<TableProps> = ({theadObj, teacher,}) => {
    const [open, setOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<Person[] | null>(null);
    const [assentModalOpen, setAssentModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null)
    const [confirm, setConfirm] = useState<string | null>(null)
    const [openEdit, setOpenEdit] = useState<boolean>(false)


    const tableData = useAppSelector((state:RootState) => state.diplom.tableData)

    const dispatch = useAppDispatch();

    const handleEditClick = (element: number) => {
        setOpenEdit(true);
        const item: any = tableData.find(item => item.id === element);
        setSelectedItemId(item);
    };


    const getWorkStatus = (level: string): string => {
        if (typeof level === 'string') {
            switch (level) {
                case "1":
                    return 'Не начат';
                case "2":
                    return 'В процессе';
                case "3":
                    return 'Завершен';
                default:
                    return 'Неизвестно';
            }
        } else {
            return 'Неизвестно';
        }
    };

    const handleDelete = (id: number) => {
        const itemId = String(id)
        setAssentModalOpen(true)
        setConfirm(itemId)
    };

    const submitGreen = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(23)
        const id:any = confirm
        dispatch(setTableDataStudentDiplom(tableData.filter(item => item.id !== id)))
        dispatch(studentDiplomDelete({id}))
        setAssentModalOpen(false)
    }

    const submitRed = (e:React.FormEvent) => {
        e.preventDefault()
        setAssentModalOpen(false)
    }


    return (
        <>
            {tableData.length !== 0 ? (
                <div className="craete__table-border">
                    <div className="craete__table-container">
                        <table className="craete__table">
                            <thead className="craete__table__thead">
                            <tr className="craete__table__tr craete__table__tr-thead">
                                {theadObj.pole1 ? <th>{theadObj.pole1}</th> : null}
                                {theadObj.pole2 ? <th>{theadObj.pole2}</th> : null}
                                {theadObj.pole3 ? <th>{theadObj.pole3}</th> : null}
                                {theadObj.pole4 ? <th>{theadObj.pole4}</th> : null}
                                {theadObj.pole5 ? <th>{theadObj.pole5}</th> : null}
                                {theadObj.pole6 ? <th>{theadObj.pole6}</th> : null}
                            </tr>
                            </thead>
                            <tbody className="craete__table__tbody">
                            {tableData.map((item) => (
                                <tr className="craete__table__tr craete__table__tr-body" key={item.id}>
                                    <td>{item.fio}</td>
                                    <td>{item.title}</td>
                                    <td>{item.prepodFio}</td>
                                    <td>{getWorkStatus(item.level as any)}</td>
                                    <td>{item.link !== "" ? <a href={item.link} target="_blank"><img width={50} src={file} alt="file"/></a> : 'Отсутствует'}
                                    </td>
                                    <td className="craete__table-button">
                                        <div className="craete__table__tr-btn">
                                            <button className="edit" onClick={() => handleEditClick(item.id as number)}>
                                                Изменить
                                            </button>
                                            <img src={editImg} alt="edit"/>
                                        </div>
                                        <div className="craete__table__tr-btn">
                                            <button className="delete"
                                                    onClick={() => handleDelete(item.id as number)}>Удалить
                                            </button>
                                            <img src={deleteImg} alt="delete"/>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <NoRecords title={'У вас нет курсовых работ'}/>
            )}

            {!teacher && tableData.length !== 0 ?
                <ButtonSend title={'Отправить задание на проверку'} img={send}/>
                : null
            }

            {
                assentModalOpen && <AssentModal title={"Вы уверены что хотите удалить работу?"} submitGreen={submitGreen} submitRed={submitRed}/>
            }


            {
                openEdit && <DiplomStudentModal titlePage={"Редактировать дипломную работу"} setOpen={setOpenEdit} selectedItem={selectedItemId}/>
            }


        </>
    );
};

export default TableDiplomStudents;