import {createAsyncThunk} from "@reduxjs/toolkit";
import {CreateEmployeeCommand, EmployeeDTO} from "@/features/types";



// export const employeesCreate = createAsyncThunk<string, {firstName:CreateEmployeeCommand; middleName:CreateEmployeeCommand; lastName:CreateEmployeeCommand; roles:CreateEmployeeCommand}, { rejectValue:  any  }>(
//     'employees/create',
//     async ({ firstName, middleName, lastName, roles }, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Employees/`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     firstName: firstName,
//                     middlename: middleName,
//                     lastName: lastName,
//                     roles: roles,
//                 })
//             });
//
//             if(response.status === 201) {
//                 return 'Сотрудник создан'
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
//
// export const employeesRead = createAsyncThunk<EmployeeDTO>(
//     'employees/read',
//     async (_, thunkAPI) => {
//         try {
//             const response = await fetch(`http://localhost:3000/employees`, {
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
//
// export const employeesReplace = createAsyncThunk<string, {employeeId: number, firstName:CreateStudentDTO; lastName:CreateStudentDTO; middleName:CreateStudentDTO }, { rejectValue:  any  }>(
//     'employees/replace',
//     async ({employeeId, firstName,middleName, lastName}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Employees/${employeeId}/`, {
//                 method: 'PATCH',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     firstName: firstName,
//                     middleName: middleName,
//                     lastName: lastName,
//                 }),
//             });
//
//             if(response.status === 204) {
//                 return 'Сотрудник обновлен'
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
//
//
// export const employeesDelete = createAsyncThunk<string, {employeeId: string}, { rejectValue:  any  }>(
//     'employees/delete',
//     async ({employeeId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Employees/${employeeId}/`, {
//                 method: 'DELETE',
//             });
//
//             if(response.status === 204) {
//                 return 'Сотрудник удален'
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

export const employeesCreate = createAsyncThunk<CreateEmployeeCommand, {id:CreateEmployeeCommand,firstName:CreateEmployeeCommand; middleName:CreateEmployeeCommand; lastName:CreateEmployeeCommand; posts:CreateEmployeeCommand}, { rejectValue:  any  }>(
    'employees/create',
    async ({ id,firstName, middleName, lastName, posts }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/employees/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    middleName: middleName,
                    blocked: false,
                    posts: posts,
                })
            });

            if(response.status === 200) {
                const data = await response.json()
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


export const employeesRead = createAsyncThunk<EmployeeDTO>(
    'employees/read',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/employees/`, {
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

export const employeesReplace = createAsyncThunk<CreateEmployeeCommand, {id:CreateEmployeeCommand, firstName:CreateEmployeeCommand; lastName:CreateEmployeeCommand; middleName:CreateEmployeeCommand, posts:CreateEmployeeCommand }, { rejectValue:  any  }>(
    'employees/replace',
    async ({id, firstName,middleName, lastName, posts}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/employees/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    blocked: false,
                    posts: posts
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


export const employeesDelete = createAsyncThunk<string, {id: number}, { rejectValue:  any  }>(
    'employees/delete',
    async ({id}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/employees/${id}`, {
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
export default  {employeesCreate,employeesRead,employeesReplace}
