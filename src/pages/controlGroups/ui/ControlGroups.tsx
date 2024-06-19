import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import styled from "styled-components";
import React, {useEffect, useState} from "react";

import Title from "@/shared/ui/Title";
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import {groupRead} from "@/features/group/action/action";
import {setTableDataGroup} from "@/features/group/slice/group";
import GroupCard from "@/widgets/groupCards/ui/GroupCards";
import GroupModalCreate from "@/widgets/groupModalCreate/ui/GroupModalCreate";


const ControlGroups = () => {
    const [open, setOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const data = useAppSelector((state:RootState) => state.group.data)
    const tableData = useAppSelector((state:RootState) => state.group.tableData)


    useEffect(() => {
        dispatch(groupRead())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setTableDataGroup(data));
    }, [data, dispatch]);


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
                        <Title title={'Группы'} position={'start'}/>
                    </div>

                    <ButtonAuth title={'Создать Группу'} anim={true} width={255} height={65} setOpen={setCreateModalOpen}
                                margin={'0px 0 0 0'}/>
                </Record>

                <GroupCard/>

                {
                    createModalOpen && <GroupModalCreate setOpen={setCreateModalOpen} />
                }

            </div>

        </section>
    )

}

export default ControlGroups;