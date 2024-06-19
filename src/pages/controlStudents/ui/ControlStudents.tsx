import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Title from "@/shared/ui/Title";

import {studentRead} from "@/features/students/action/action";
import StudentTable from "@/widgets/control/studentTable/ui/StudentTable";
import {CreateEmployeeCommand, EmployeeDTO, StudentDTO} from "@/features/types";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {setTableDataStudent} from "@/features/students/slice/students";
import {TableHeadProps} from "@/types";

const ControlStudents = () => {

    const dispatch = useAppDispatch();

    const data:EmployeeDTO[] = useAppSelector((state: RootState) => state.student.data)
    


    useEffect(() => {
        dispatch(studentRead())
    }, []);


    console.log(data)
    useEffect(() => {
        dispatch(setTableDataStudent(data));
    }, [data]);


    const Record = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;`

    const theadObj: TableHeadProps = {
        pole1: 'Имя',
        pole2: 'Фамилия',
        pole3: 'Отчество',
        pole4: 'Блокировка',
        pole5: 'Действие',
    }

    return (
        <section>
            <div className="container">
                <Record>
                    <Title title={'Студенты'} position={'start'}/>
                </Record>

                <StudentTable theadObj={theadObj}/>

            </div>
        </section>
    )

}

export default ControlStudents;