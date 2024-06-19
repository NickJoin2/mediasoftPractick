import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Layout} from '@/pages/layout'
import Map from "@/pages/mapSite/ui/MapSite";
import Control from "@/pages/control/ui/Control";
import ControlSpecializations from "@/pages/controlSpecializations/ui/ControlSpecialization";
import ControlDisciplines from "@/pages/controlDisciplines/ui/ControlDisciplines";
import Office from "@/widgets/office/ui/Office";
import СursovikStudents from "@/pages/cursachStudent/ui/CursachS";
import CursachTeacher from "@/pages/teacherCursach/ui/TeacherCursach";
import TeacherDiplom from "@/pages/teacherDiplom/ui/TeacherDiplom";
import DiplomStudents from "@/pages/diplomStudents/ui/DiplomStudents";
import ControlStudents from "@/pages/controlStudents/ui/ControlStudents";
import Workers from "@/pages/workers/ui/Workers";
import ControlGroups from "@/pages/controlGroups/ui/ControlGroups";



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path="/" element={<Map/>}/>


                    <Route path={"/office"} element={<Office/>}/>


                    <Route path="control/students" element={<ControlStudents/>}/>
                    <Route path="control/specialization" element={<ControlSpecializations/>}/>
                    <Route path="control/disciplines" element={<ControlDisciplines/>}/>


                    <Route path="control/group" element={<ControlGroups/>}/>

                    <Route path='control/worker' element={<Workers/>}/>



                    <Route path="control" element={<Control/>}/>
                    <Route path="cursovik/student" element={<СursovikStudents/>}/>
                    <Route path="diplom/student" element={<DiplomStudents/>}/>
                    <Route path="teacher/diplom" element={<TeacherDiplom />}/>
                    <Route path="cursach/teacher" element={<CursachTeacher/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
