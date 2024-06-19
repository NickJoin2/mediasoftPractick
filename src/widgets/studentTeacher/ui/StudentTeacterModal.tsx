import React, {Dispatch, useEffect, useState} from 'react';

import '../styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import close from "@/shared/image/modal/close.svg";
import {Navigate, useNavigate} from "react-router-dom";

interface WorkerCreateModalProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    setStudentCursachRedirect: Dispatch<React.SetStateAction<boolean>>;
    setStudentDiplomRedirect: Dispatch<React.SetStateAction<boolean>>;
    setTeacherCursachRedirect: Dispatch<React.SetStateAction<boolean>>;
    setTeacherDiplomRedirect: Dispatch<React.SetStateAction<boolean>>;

}

const StudentTeacherModal: React.FC<WorkerCreateModalProps> =
    ({
         setOpen,
         setStudentCursachRedirect,
         setStudentDiplomRedirect,
         setTeacherCursachRedirect,
         setTeacherDiplomRedirect,
     }) => {

    const [event, setEvent] = useState<string[]>([]);

    const navigate = useNavigate();

    const teacherDiplom = ['teacher', 'diplom']
    const teacherCursach = ['teacher', 'cursach']
    const studentCursach = ['student', 'cursach']
    const studentDiplom = ['student', 'diplom']

        const handleClose = () => {
            setOpen(false)
        }

        const teacher = () => {
            setEvent(prevState => [...prevState, 'teacher'])
        }

        const student = () => {
            setEvent(prevState => [...prevState, 'student'])
        }

        const diplom = () => {
            setEvent(prevState => [...prevState, 'diplom'])
        }

        const cursach = () => {
            setEvent(prevState => [...prevState, 'cursach'])
        }



        useEffect(() => {
            if(event.length === 2) {
                setTeacherDiplomRedirect(teacherDiplom.every(word => event.includes(word)))
                setTeacherCursachRedirect(teacherCursach.every(word => event.includes(word)))
                setStudentDiplomRedirect(studentCursach.every(word => event.includes(word)))
                setStudentCursachRedirect(studentDiplom.every(word => event.includes(word)))
            }
        }, [event]);


    // if(event.length  === 2) {

    // }

        return (
            <>
                <div className="modal__overlay">
                    <div className="modal__content" style={{background: 'transparent'}}>
                        <div className="modal__close">
                            <button type="button" onClick={handleClose}>
                                <img src={close} alt="close"/>
                            </button>
                        </div>
                        <div className="modal__form">
                            <div style={{background: '#fff'}}  onClick={event.length === 0 ? teacher : diplom} className="modal__form-item"><span>{event.length === 0 ? 'Учитель' : 'Дипломные работы'}</span></div>
                            <div style={{background: '#fff'}} onClick={event.length === 0 ? student : cursach} className="modal__form-item"><span>{event.length === 0 ? 'Студент' : 'Курсовые работы'}</span></div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

export default StudentTeacherModal;