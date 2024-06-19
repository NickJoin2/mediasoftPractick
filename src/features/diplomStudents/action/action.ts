import {createAsyncThunk} from "@reduxjs/toolkit";
import {Person, Posts} from "@/types";



export const studentDiplomCreate = createAsyncThunk<Person[], {id:Person[],title:Person[]; fio:Person[]; prepodFio:Person[]; level:Person[], link:Person[]}, { rejectValue:  any  }>(
    'employees/create',
    async ({ id,title, fio, prepodFio, level, link }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/studentDiplom/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    title: title,
                    fio: fio,
                    prepodFio: prepodFio,
                    link:link,
                    level: level,
                })
            });

            if(response.status === 200) {
                const data = await response.json()
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


export const studentDiplomRead = createAsyncThunk<Person[]>(
    'workStudent/diplomRead',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/studentDiplom`, {
                method: 'GET',
            });

            if(response.status === 200) {
                const data: Person[] = await response.json();
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

export const studentsReplaceDiplom = createAsyncThunk<Person, {id:Person, title:Person; fio:Person; prepodFio:Person, link:Person,level:Person }, { rejectValue:  any  }>(
    'student/CursachReplace',
    async ({id, title, fio, prepodFio,link, level}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/studentDiplom//${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    title: title,
                    fio: fio,
                    prepodFio: prepodFio,
                    link: link,
                    level: level
                }),
            });

            if(response.status === 200) {
                const data = await response.json()
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

// export const employeesFind = createAsyncThunk<EmployeeDTO, {employeeId: number}, { rejectValue:  any  }>(
//     'employees/find',
//     async ({employeeId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Employees/${employeeId}/`, {
//                 method: 'GET',
//             });
//
//             if(response.status === 200) {
//                 const data: EmployeeDTO = await response.json();
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


export const studentDiplomDelete = createAsyncThunk<string, {id: number}, { rejectValue:  any  }>(
    'workStudent/cursachDelete',
    async ({id}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/studentDiplom/${id}`, {
                method: 'DELETE',
            });


            if(response.status === 200) {
                return 'Сотрудник удален'
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);



// export default  {employeesCreate,employeesRead,employeesFind,employeesReplace}
export default  {studentDiplomCreate,studentDiplomRead,studentsReplaceDiplom,studentDiplomDelete}
