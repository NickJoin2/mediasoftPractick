import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    CreateDisciplineCommand,
    Error,
    DisciplineDTO,
    UpdateDisciplineDTO,
    Parametr, DisciplineAssignmentDTO
} from "@/features/types";

export const disciplinesCreate = createAsyncThunk<string, { name: CreateDisciplineCommand }, { rejectValue: any }>(
    'disciplines/create',
    async ({ name }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/disciplines`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name
                }),
            });

            if (response.status === 201) {
                const data: string = await response.json();
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

export const disciplinesRead = createAsyncThunk<DisciplineDTO>(
    'disciplines/read',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/disciplines`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 200) {
                const data: DisciplineDTO = await response.json();
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

export const disciplinesUpdate = createAsyncThunk<UpdateDisciplineDTO, { disciplinesId: UpdateDisciplineDTO, name: UpdateDisciplineDTO }, { rejectValue: any }>(
    'disciplines/update',
    async ({ disciplinesId, name }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/disciplines/${disciplinesId}/`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                })
            });

            if (response.status === 204) {
                const data: any = await response.json();
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

export const disciplinesDelete = createAsyncThunk<string, {disciplinesId: Parametr}, { rejectValue:  any  }>(
    'disciplines/delete',
    async ({disciplinesId}, thunkAPI) => {

        try {
            const response = await fetch(`http://localhost:3000/disciplines/${disciplinesId}/`, {
                method: 'DELETE',
            });

            if(response.status === 204) {
                return 'Запись была удалена'
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

// export const disciplinesAssign = createAsyncThunk<string, {disciplinesId: DisciplineAssignmentDTO, employeeId: DisciplineAssignmentDTO}, { rejectValue:  any  }>(
//     'disciplines/assign',
//     async ({disciplinesId, employeeId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Disciplines/unassign/`, {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     disciplinesId: disciplinesId,
//                     employeeId: employeeId
//                 })
//             });
//
//             if(response.status === 204) {
//                 return 'Дисциплина успешно назначена'
//             } else {
//                 const error: any = await response.json();
//                 return thunkAPI.rejectWithValue(error as any);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error as any);
//         }
//
//     }
// )

// export const disciplinesUnassign = createAsyncThunk<string, {disciplinesId: DisciplineAssignmentDTO, employeeId: DisciplineAssignmentDTO}, { rejectValue:  any  }>(
//     'disciplines/unassign',
//     async ({disciplinesId, employeeId}, thunkAPI) => {
//         try {
//             const response = await fetch(`http://exam.uaviak.ru/api/Disciplines/unassign/`, {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     disciplinesId: disciplinesId,
//                     employeeId: employeeId
//                 })
//             });
//
//             if(response.status === 204) {
//                 return 'Дисциплина успешно снята'
//             } else {
//                 const error: any = await response.json();
//                 return thunkAPI.rejectWithValue(error as any);
//             }
//
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error as any);
//         }
//
//     }
// )

export default {disciplinesCreate,disciplinesRead,disciplinesUpdate,disciplinesDelete}