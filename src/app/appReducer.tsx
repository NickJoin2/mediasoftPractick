import { combineReducers } from "@reduxjs/toolkit";
import { employees } from "@/features/employees/slice/employees";
import { disciplines } from "@/features/disciplines/slice/disciplines";
import { stages } from "@/features/stages/slice/stages";
import { stagesAnswer } from "@/features/stagesAnswer/slice/stagesAnswer";
import { projectsStagesGrades } from "@/features/projectStagesGrade/slice/projectStagesGrades";
import { specializations } from "@/features/specializations/slice/specialization";
import { groups } from "@/features/group/slice/group";
import { student } from "@/features/students/slice/students";
import { registerSlice } from "@/features/userAuthorization/slice/registerSlice";
import {studentCursach} from "@/features/diplomWork/slice/slice";
import {studentDiplom} from "@/features/diplomStudents/slice/slice";

const rootReducer = combineReducers({
    register: registerSlice.reducer,
    student: student.reducer,
    group: groups.reducer,
    specialization: specializations.reducer,
    employees: employees.reducer,
    disciplines: disciplines.reducer,
    stages: stages.reducer,
    stagesAnswer: stagesAnswer.reducer,
    projectStagesGrades: projectsStagesGrades.reducer,
    cursach: studentCursach.reducer,
    diplom: studentDiplom.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;