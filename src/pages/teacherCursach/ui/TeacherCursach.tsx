import styled from "styled-components";
import React, {useEffect} from "react";
import SecondText from "@/shared/ui/SecondText";
import Title from "@/shared/ui/Title";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {studentDiplomRead} from "@/features/diplomStudents/action/action";
import CursachTeacherTable from "@/widgets/cursachTeacherTable/ui/CursachTeacherTable";


const CursachTeacher = () => {

    const dispatch = useAppDispatch();

    const data = useAppSelector((state:RootState) => state.cursach.data)
    useEffect(() => {
        dispatch(studentDiplomRead())
    }, [dispatch]);

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
    };

    return (
        <section>
            <div className="container">

                <Record>
                    <div className="block">
                        <Title title={'Графический дизайн'} position={'start'}/>
                        <SecondText title={'Группа'} text={'18ИС-1'}/>
                    </div>

                </Record>

                <CursachTeacherTable theadObj={theadObj} teacher={false}/>

            </div>
        </section>
    )

}

export default CursachTeacher;