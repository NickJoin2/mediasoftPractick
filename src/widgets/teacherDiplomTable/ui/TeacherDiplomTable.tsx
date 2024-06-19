import React, {Dispatch, useEffect, useState} from 'react';
import '@/widgets/control/studentCursachModalCreate/styles/styles.scss'
import NoRecords from "@/shared/ui/NoRecords";
import file from '@/shared/image/table-button/file.svg'
import {TableHeadProps} from "@/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {studentDiplomRead} from "@/features/diplomStudents/action/action";


interface TableProps {
    theadObj: TableHeadProps;
    teacher: boolean;
}

const TeacherDiplomTable: React.FC<TableProps> = ({theadObj, teacher,}) => {

    const tableData = useAppSelector((state:RootState) => state.diplom.data)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(studentDiplomRead())
    }, [dispatch]);


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
    return (
        <>
            {tableData.length !== 0 ? (
                <div className="table-border">
                    <div className="table-container">
                        <table className="table">
                            <thead className="table__thead">
                            <tr className="table__tr table__tr-thead">
                                {theadObj.pole1 ? <th>{theadObj.pole1}</th> : null}
                                {theadObj.pole2 ? <th>{theadObj.pole2}</th> : null}
                                {theadObj.pole3 ? <th>{theadObj.pole3}</th> : null}
                                {theadObj.pole4 ? <th>{theadObj.pole4}</th> : null}
                                {theadObj.pole5 ? <th>{theadObj.pole5}</th> : null}
                                {theadObj.pole6 ? <th>{theadObj.pole6}</th> : null}
                            </tr>
                            </thead>
                            <tbody className="table__tbody">
                            {tableData.map((item) => (
                                <tr className="table__tr table__tr-body" key={item.id}>
                                    <td>{item.fio}</td>
                                    <td>{item.title}</td>
                                    <td>{item.prepodFio}</td>
                                    <td>{getWorkStatus(item.level as any)}</td>
                                    <td>{item.link !== "" ? <a href={item.link} target="_blank"><img width={50} src={file} alt="file"/></a> : 'Отсутствует'}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <NoRecords title={'Нет дипломных работ'}/>
            )}

        </>
    );
};

export default TeacherDiplomTable;