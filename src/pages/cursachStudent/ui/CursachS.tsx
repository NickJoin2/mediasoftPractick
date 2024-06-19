import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Table from "@/widgets/Table/ui/Table";
import SecondText from "@/shared/ui/SecondText";
import Title from "@/shared/ui/Title";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {studentCursachRead} from "@/features/diplomWork/action/action";
import {setTableDataStudentCursach} from "@/features/diplomWork/slice/slice";
import StudentCursachModalCreate from "@/widgets/control/studentCursachModalCreate/ui/StudentCursachModalCreate";


const СursovikStudents = () => {
    const [open, setOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const data = useAppSelector((state:RootState) => state.cursach.data)
    useEffect(() => {
        dispatch(studentCursachRead())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setTableDataStudentCursach(data));
    }, [data, dispatch]);


    const Record = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;`



    const theadObj = {
        pole1: 'ФИО студента',
        pole2: 'Название проекта',
        pole3: 'Преподаватель',
        pole4: 'Этап работы',
        pole5: 'Ссылка на проект',
        pole6: 'Действия'
    };

    return (
        <section>
            <div className="container">
                <Record>
                    <div className="block">
                        <Title title={'Графический дизайн'} position={'start'}/>
                        <SecondText title={'Группа'} text={'18ИС-1'}/>
                    </div>

                    <ButtonAuth title={'Создать курсовую'} anim={true} width={255} height={65} setOpen={setCreateModalOpen}
                                                          margin={'40px 0 0 0'}/>

                </Record>

                <Table theadObj={theadObj} teacher={false}/>

                {
                    createModalOpen && <StudentCursachModalCreate titlePage={"Создать курсовую работу"} setOpen={setCreateModalOpen} />
                }

            </div>

        </section>
    )

}

export default СursovikStudents;