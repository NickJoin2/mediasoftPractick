import React, {useState} from 'react';
import '../styles/styles.scss'
import {RootState, useAppDispatch, useAppSelector} from "@/app/appStore";
import NoRecords from "@/shared/ui/NoRecords";
import editImg from "@/shared/image/table-button/editControl.svg";
import deleteImg from "@/shared/image/table-button/deleteControl.svg";
import {setAssentModal} from "@/features/employees/slice/employees";
import AssentModal from "@/widgets/modal/assent/ui/AssentModal";
import {specializationsDelete} from "@/features/specializations/action/action";
import {setTableDataSpecialization} from "@/features/specializations/slice/specialization";
import SpecializationsModalCreate from "@/widgets/specializationsModalCreate/ui/SpecializationsModalCreate";
import {disciplinesDelete} from "@/features/disciplines/action/action";
import {setTableDataDisciplines} from "@/features/disciplines/slice/disciplines";
import DisciplineModalCreate from "@/widgets/disciplineModalCreate/ui/DisciplineModalCreate";

const DisciplineCard = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const assentModal = useAppSelector((state: RootState) => state.employees.assentModal);
    const [confirm, setConfirm] = useState<string | null>(null)

    const dispatch = useAppDispatch();
    const data = useAppSelector((state:RootState) => state.disciplines.tableData)



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

        const disciplinesId: any = confirm


        dispatch(disciplinesDelete({disciplinesId}))
        dispatch(setTableDataDisciplines(data.filter((item) => item.id !== confirm)))

        dispatch(setAssentModal(false))
    };

    const submitRed = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setAssentModal(false))
    }

    return (
        <>
            <div className="container">
                <ul className="specializations__list">

                    {data && data.length !== 0 ? (
                        data.map(item => (
                            <li className="specializations__item" key={item.id}>
                                <p className="specializations__title">{item.name}</p>
                                <div className="specializations__button">
                                    <img onClick={() => handleEdit(item.id)} src={editImg}
                                         alt="edit"/>
                                    <img onClick={(e) => handleDelete(e, item.id)} src={deleteImg}
                                         alt='delete'/>
                                </div>
                            </li>
                        ))
                    ) : (
                        <NoRecords title={'Нет курсовых работ'}/>
                    )}

                    {
                        assentModal && <AssentModal title={'Вы уверены что хотите удалить специализацию?'}
                                                    submitGreen={submitGreen} submitRed={submitRed}/>
                    }

                    {
                        open && <DisciplineModalCreate setOpen={setOpen} selectedItem={selectedItemId} />
                    }

                </ul>
            </div>
        </>
    );
};

export default DisciplineCard;