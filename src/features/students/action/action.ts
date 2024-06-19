import {createAsyncThunk} from "@reduxjs/toolkit";
import {EmployeeDTO, Parametr, StudentDTO, UpdateStudentDTO} from "@/features/types";




export const studentUpdate = createAsyncThunk<StudentDTO, { groupId: UpdateStudentDTO; firstname: UpdateStudentDTO; middlename: UpdateStudentDTO; lastname: UpdateStudentDTO; blocked: UpdateStudentDTO; studentId: string|number; }, { rejectValue:  any  }>(
    'student/update',
    async ({studentId, groupId, firstname, middlename, lastname, blocked}, thunkAPI) => {
        try {
            const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    groupId: groupId,
                    firstname: firstname,
                    middlename: middlename,
                    lastname: lastname,
                    blocked: blocked,
                })
            });

            if(response.status === 200) {
                const data = await response.json();
                return data
                // return 'Студент был обновлен'
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

export const studentRead = createAsyncThunk<EmployeeDTO>(
    'student/read',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/students`, {
                method: 'GET',
            });

            if(response.status === 200) {
                const data: EmployeeDTO = await response.json();
                return data
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

export const studentDelete = createAsyncThunk<StudentDTO, { id: Parametr }, { rejectValue:  any  }>(
    'student/delete',
    async ({ id}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/students/${id}/`, {
                method: 'DELETE',
            });

            if(response.status === 200) {
                // return 'Студент был удален'
                const data = await response.json();
                console.log(data)
                return data
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

export const studentGraduate = createAsyncThunk<StudentDTO, { studentId: Parametr,  }, { rejectValue:  any  }>(
    'student/graduate',
    async ({ studentId }, thunkAPI) => {
        try {
            const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/Graduate/`, {
                method: 'PATCH',
            });

            if(response.status === 200) {
                const data = await response.json();
                return data
                // return 'Cтатус студента обновлен'
            } else  {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);



// export const studentUpdate = createAsyncThunk<string, { groupId: UpdateStudentDTO; firstname: UpdateStudentDTO; middlename: UpdateStudentDTO; lastname: UpdateStudentDTO; blocked: UpdateStudentDTO; studentId: string|number; }, { rejectValue:  any  }>(
//     'student/update',
//     async ({studentId, groupId, firstname, middlename, lastname, blocked}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     groupId: groupId,
//                     firstname: firstname,
//                     middlename: middlename,
//                     lastname: lastname,
//                     blocked: blocked,
//                 })
//             });
//
//             if(response.status === 204) {
//                 return 'Студент был обновлен'
//             } else {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//
//     }
// );
//
// export const studentRead = createAsyncThunk<UpdateStudentDTO, { studentId: Parametr }, { rejectValue:  any  }>(
//     'student/read',
//     async ({ studentId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//             });
//
//             if(response.status === 200) {
//                 const data: UpdateStudentDTO = await response.json();
//                 return data
//             } else {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//
//     }
// );
//
// export const studentDelete = createAsyncThunk<string, { studentId: Parametr }, { rejectValue:  any  }>(
//     'student/delete',
//     async ({ studentId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/`, {
//                 method: 'DELETE',
//             });
//
//             if(response.status === 204) {
//                 return 'Студент был удален'
//             } else {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//
//     }
// );
//
// export const studentGraduate = createAsyncThunk<string, { studentId: Parametr,  }, { rejectValue:  any  }>(
//     'student/graduate',
//     async ({ studentId }, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Students/${studentId}/Graduate/`, {
//                 method: 'PATCH',
//             });
//
//             if(response.status === 204) {
//                 return 'Cтатус студента обновлен'
//             } else  {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//
//     }
// );

export default {studentUpdate, studentRead, studentGraduate, studentDelete};