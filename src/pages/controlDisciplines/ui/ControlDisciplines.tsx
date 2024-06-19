import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import styled from "styled-components";
import React, {useEffect, useState} from "react";

import Title from "@/shared/ui/Title";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import SpecializationsModalCreate from "@/widgets/specializationsModalCreate/ui/SpecializationsModalCreate";
import DisciplineCard from "@/widgets/DisciplinesCards/ui/DisciplineCards";
import {setTableDataDisciplines} from "@/features/disciplines/slice/disciplines";
import {disciplinesRead} from "@/features/disciplines/action/action";
import DisciplineModalCreate from "@/widgets/disciplineModalCreate/ui/DisciplineModalCreate";


const ControlDisciplines = () => {
    const [open, setOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const data = useAppSelector((state:RootState) => state.disciplines.data)
    const tableData = useAppSelector((state:RootState) => state.disciplines.tableData)


    useEffect(() => {
        dispatch(disciplinesRead())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setTableDataDisciplines(data));
    }, [data, dispatch]);

    useEffect(() => {
        console.log(tableData)
    }, [tableData]);



    const Record = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;`


    return (
        <section>
            <div className="container">

                <Record>
                    <div className="block">
                        <Title title={'Дисциплины'} position={'start'}/>
                    </div>

                    <ButtonAuth title={'Создать дисциплину'} anim={true} width={255} height={65} setOpen={setCreateModalOpen}
                                margin={'0px 0 0 0'}/>

                </Record>

                <DisciplineCard/>

                {
                    createModalOpen && <DisciplineModalCreate setOpen={setCreateModalOpen} />
                }

            </div>

        </section>
    )

}

export default ControlDisciplines;