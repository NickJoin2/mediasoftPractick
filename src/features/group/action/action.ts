import {createAsyncThunk} from "@reduxjs/toolkit";
import {CreateStudentDTO, GroupDTO} from "@/features/types";

// export const groupCreate = createAsyncThunk<string, { name: string, specializationId: number }, { rejectValue: any }>(
//     'group/create',
//     async ({name, specializationId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups/`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     specializationId: specializationId
//                 })
//             });
//
//             if (response.status === 201) {
//                 return 'Группа успешно создана'
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
// export const groupRead = createAsyncThunk<GroupDTO, { rejectValue: any }>(
//     'group/read',
    // async (_, thunkAPI) => {
    //     try {
    //         const response = await fetch(`http://exam.uaviak.ru/api/Groups/`, {
    //             method: 'GET',
    //         });
    //
    //         if (response.status === 200) {
    //             const data: GroupDTO = await response.json();
    //             return data
    //         } else {
    //             const error: Error = await response.json();
    //             return thunkAPI.rejectWithValue(error);
    //         }
    //
    //     } catch (error) {
    //         return thunkAPI.rejectWithValue(error);
    //     }
    //
    // }
// );
//
// export const groupUpdate = createAsyncThunk<string, { groupId: GroupDTO, name: GroupDTO, specializationId: GroupDTO }, {
//     rejectValue: any
// }>(
//     'group/update',
//     async ({groupId, name, specializationId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups/${groupId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     specializationId: specializationId
//                 })
//             });
//
//             if (response.status === 204) {
//                 return 'Группы успешно обновленна'
//             } else {
//                 const error: any = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error as any);
//         }
//
//     }
// );
//
// export const groupFindRead = createAsyncThunk<GroupDTO, { groupId: string }, { rejectValue: any }>(
//     'group/findRead',
//     async ({groupId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups${groupId}/`, {
//                 method: 'GET',
//             });
//
//             if (response.status === 200) {
//                 const data: GroupDTO = await response.json();
//                 return data
//             } else {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error as any);
//         }
//
//     }
// );
//
// export const groupDelete = createAsyncThunk<string, { groupId: number }, { rejectValue: any }>(
//     'group/delete',
//     async ({groupId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups/${groupId}/`, {
//                 method: 'DELETE',
//             });
//
//             if (response.status === 204) {
//                 return 'Группа была удалена'
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
// export const groupCreateStudent = createAsyncThunk<string, { firstname:CreateStudentDTO; middlename: CreateStudentDTO; lastname: CreateStudentDTO; groupId: string; }, { rejectValue: any }>(
//     'group/createStudent',
//     async ({firstname, middlename,lastname, groupId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups${groupId}/students/`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     firstname: firstname,
//                     middlename: middlename,
//                     lastname: lastname,
//                 })
//             });
//
//             if (response.status === 201) {
//                 // const data: any = await response.json();
//                 return 'Группа успешно создана'
//             } else  {
//                 const error: Error = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//
//     }
// );
//
// export const groupReadStudent = createAsyncThunk<GroupDTO, { groupId: string }, { rejectValue: any }>(
//     'group/readStudent',
//     async ({groupId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Groups/${groupId}/students/`, {
//                 method: 'GET',
//             });
//
//             if (response.status === 200) {
//                 const data: GroupDTO = await response.json();
//                 return data
//             } else {
//                 const error: any = await response.json();
//                 return thunkAPI.rejectWithValue(error);
//             }
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error as any);
//         }
//
//     }
// );


export const groupCreate = createAsyncThunk<any, { name: string, studentsCol: number }, { rejectValue: any }>(
    'group/create',
    async ({name, studentsCol}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/groups/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    studentsCol:studentsCol
                })
            });

            if (response.status === 200) {
                // return 'Группа успешно создана'
                const data = await response.json();
                return data;
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

export const groupRead = createAsyncThunk<GroupDTO>(
    'group/read',
async (_, thunkAPI) => {
    try {
        const response = await fetch(`http://localhost:3000/groups/`, {
            method: 'GET',
        });

        if (response.status === 200) {
            const data: GroupDTO = await response.json();
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

export const groupUpdate = createAsyncThunk<string, { id: GroupDTO, name: GroupDTO, studentsCol: GroupDTO }, {
    rejectValue: any
}>(
    'group/update',
    async ({id, name, studentsCol}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/groups/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    studentsCol: studentsCol
                })
            });

            if (response.status === 200) {
                return 'Группы успешно обновленна'
            } else {
                const error: any = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error as any);
        }

    }
);


export const groupDelete = createAsyncThunk<string, { id: number }, { rejectValue: any }>(
    'group/delete',
    async ({id}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/groups/${id}/`, {
                method: 'DELETE',
            });

            if (response.status === 200) {
                return 'Группа была удалена'
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);



export default {
    groupCreate,
    groupUpdate,
    groupRead,
    groupDelete,
};