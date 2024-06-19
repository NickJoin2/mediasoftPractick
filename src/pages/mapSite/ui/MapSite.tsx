import React, {useEffect, useState} from "react";
import '../style/style.scss'

import img1 from '@/shared/image/map/1.jpg'
import img2 from '@/shared/image/map/2.jpg'
import img3 from "@/shared/image/map/3.jpg";
import Title from "@/shared/ui/Title";
import {MainBlock} from "@/widgets/mainBlock";
import StudentTeacherModal from "@/widgets/studentTeacher/ui/StudentTeacterModal";
import {Navigate, useNavigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";


const Map = () => {
    const [open, setOpen] = useState(false);

    const [errors, setErrors] = useState(false);


    useEffect(() => {
        if(errors) {
             console.log('errors')
        }
    }, [errors]);

    const [teacherDiplomRedirect, setTeacherDiplomRedirect] = useState(false);
    const [teacherCursachRedirect, setTeacherCursachRedirect] = useState<boolean>(false)
    const [studentDiplomRedirect, setStudentDiplomRedirect] = useState<boolean>(false)
    const [studentCursachRedirect, setStudentCursachRedirect] = useState<boolean>(false)

    if(teacherDiplomRedirect) {
       return <Navigate to={'/teacher/diplom'} replace={true}/>
    } else if (teacherCursachRedirect) {
        return <Navigate to={'/cursach/teacher'} replace={true}/>
    }else if (studentDiplomRedirect) {
       return <Navigate to={'/diplom/student'} replace={false}/>
    } else if (studentCursachRedirect) {
        return <Navigate to={'cursovik/student'} replace={false}/>
    }


    return (
        <>
            <section className="control">
                <div className="container">
                    <Title title={'Карта сайта'}/>

                    <div className="map__list">
                        <MainBlock img={img1} gridColumn={'1 / 2'} gridRow={'1 / 12'} text={'Выпускники'} disabled={true}
                                   mapLink={''}/>
                        <MainBlock img={img2} gridColumn={'2 / 2'} gridRow={'1 / 12'} text={'Управление'}
                                   mapLink={'control'}/>
                        <MainBlock img={img3} gridColumn={'1 / 3'} gridRow={'14 / 27'} text={'Студенческие работы'}
                                   mapLink={''} setOpen={setOpen}/>
                    </div>

                </div>
            </section>

            {
                open && <StudentTeacherModal
                    setOpen={setOpen}
                    setTeacherDiplomRedirect={setTeacherDiplomRedirect}
                    setTeacherCursachRedirect={setTeacherCursachRedirect}
                    setStudentDiplomRedirect={setStudentDiplomRedirect}
                    setStudentCursachRedirect={setStudentCursachRedirect}
                />
            }
        </>

    )
}

export default Map