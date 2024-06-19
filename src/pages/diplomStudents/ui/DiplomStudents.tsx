import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import styled from "styled-components";
import React, {useEffect, useState} from "react";

import SecondText from "@/shared/ui/SecondText";
import Title from "@/shared/ui/Title";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {studentDiplomRead} from "@/features/diplomStudents/action/action";
import {setTableDataStudentDiplom} from "@/features/diplomStudents/slice/slice";
import TableDiplomStudents from "@/widgets/tableDiplom/ui/TableDiplomStudents";
import DiplomStudentModal from "@/widgets/diplomStudentModal/ui/DiplomStudentModal";


const DiplomStudents = () => {
    const [open, setOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const data = useAppSelector((state:RootState) => state.diplom.data)
    useEffect(() => {
        dispatch(studentDiplomRead())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setTableDataStudentDiplom(data));
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

                    <ButtonAuth title={'Создать дипломную'} anim={true} width={255} height={65} setOpen={setCreateModalOpen}
                                margin={'40px 0 0 0'}/>

                </Record>

                <TableDiplomStudents theadObj={theadObj} teacher={false}/>

                {
                    createModalOpen && <DiplomStudentModal titlePage={"Создать дипломную работу"} setOpen={setCreateModalOpen} />
                }

            </div>

        </section>
    )

}

export default DiplomStudents;