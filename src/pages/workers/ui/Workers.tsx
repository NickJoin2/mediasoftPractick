
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import TableWorker from "@/widgets/control/table/ui/TableWorker";
import Title from "@/shared/ui/Title";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";
import WorkerCreateModal from "@/widgets/control/modal/workerCreate/ui/WorkerCreateModal";


import {employeesRead} from "@/features/employees/action/action";
import {setTableData} from "@/features/employees/slice/employees";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {TableHeadProps} from "@/types";


const Workers = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const dispatch = useAppDispatch();

    const data = useAppSelector((state: RootState) => state.employees.data)

    useEffect(() => {
        dispatch(employeesRead())
    }, [dispatch]);

    // const data = useAppSelector((state: RootState) => state.employees.data)

    useEffect(() => {
        dispatch(setTableData(data));
    }, [data, dispatch]);


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
        pole4: 'Должность',
        pole5: 'Действие',
    }

    return (
        <section>
            <div className="container">
                <Record>
                    <Title title={'Сотрудники'} position={'start'}/>
                    <ButtonAuth title={'Добавить'} anim={true} width={178} height={65} setOpen={setOpenCreate}
                                margin={'40px 0 0 0'}/>
                </Record>

                <TableWorker theadObj={theadObj}/>

                {
                    openCreate ? <WorkerCreateModal setOpen={setOpenCreate}/> : null
                }

            </div>
        </section>
    )

}

export default Workers