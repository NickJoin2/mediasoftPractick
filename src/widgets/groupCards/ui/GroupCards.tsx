import React, {useEffect, useState} from 'react';
import '../styles/styles.scss'
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import NoRecords from "@/shared/ui/NoRecords";
import editImg from "@/shared/image/table-button/editControl.svg";
import deleteImg from "@/shared/image/table-button/deleteControl.svg";
import {setAssentModal} from "@/features/employees/slice/employees";
import AssentModal from "@/widgets/modal/assent/ui/AssentModal";
import {disciplinesDelete} from "@/features/disciplines/action/action";
import {setTableDataDisciplines} from "@/features/disciplines/slice/disciplines";
import DisciplineModalCreate from "@/widgets/disciplineModalCreate/ui/DisciplineModalCreate";
import {groupDelete} from "@/features/group/action/action";
import {setTableDataGroup} from "@/features/group/slice/group";
import GroupModalCreate from "@/widgets/groupModalCreate/ui/GroupModalCreate";

const GroupCard = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const assentModal = useAppSelector((state: RootState) => state.employees.assentModal);
    const [confirm, setConfirm] = useState<string | null>(null)

    const dispatch = useAppDispatch();
    const data = useAppSelector((state:RootState) => state.group.tableData)


    const handleEdit = (id: string) => {
        setOpen(true);

        const item:any = data.find(item => item.id === id);
        setSelectedItemId(item);
    }

    const handleDelete = (e: React.FormEvent, id: string) => {
        e.preventDefault()
        dispatch(setAssentModal(true))
        setConfirm(id)
    };

    const submitGreen = async(e: React.FormEvent) => {
        e.preventDefault();

        const id: any = confirm


        dispatch(groupDelete({id}))
        dispatch(setTableDataGroup(data.filter((item) => item.id !== confirm)))

        dispatch(setAssentModal(false))
    };

    const submitRed = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setAssentModal(false))
    }

    return (
        <>
            <div className="container">
                <ul className="group__list">

                    {data && data.length !== 0 ? (
                        data.map(item => (
                            <li className="group__item" key={item.id}>
                                <div className="group__block">
                                    <p className="group__title">{item.name}</p>
                                    <p className="group__title"><span>Студентов:{item.studentsCol}</span></p>
                                </div>

                                <div className="group__button">
                                    <img onClick={() => handleEdit(item.id)} src={editImg}
                                         alt="edit"/>
                                    <img onClick={(e) => handleDelete(e, item.id)} src={deleteImg}
                                         alt='delete'/>
                                </div>
                            </li>
                        ))
                    ) : (
                        <NoRecords title={'Нет групп'}/>
                    )}

                    {
                        assentModal && <AssentModal title={'Вы уверены что хотите удалить группу?'}
                                                    submitGreen={submitGreen} submitRed={submitRed}/>
                    }

                    {
                        open && <GroupModalCreate setOpen={setOpen} selectedItem={selectedItemId} />
                    }

                </ul>
            </div>
        </>
    );
};

export default GroupCard;