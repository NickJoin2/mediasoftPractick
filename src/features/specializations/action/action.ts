import {createAsyncThunk} from "@reduxjs/toolkit";
import {CreateSpecializationCommand, SpecializationDTO, UpdateSpecializationDTO} from "@/features/types";


export const specializationsCreate = createAsyncThunk<string, {id:CreateSpecializationCommand, name: CreateSpecializationCommand }, { rejectValue:  any  }>(
    'specializations/create',
    async ({id,name}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/specialization`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                })
            });

            if(response.status === 200) {
                return "Специализация успешно создана"
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error as any);
        }

    }
);

export const specializationsRead = createAsyncThunk<SpecializationDTO>(
    'specializations/read',
    async (_,thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/specialization`, {
                method: 'GET',
            });

            if(response.status === 200) {
                const data: SpecializationDTO = await response.json();
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

export const specializationsUpdate = createAsyncThunk<string, { id: number; name:  UpdateSpecializationDTO }, { rejectValue:  any  }>(
    'specializations/update',
    async ({id, name}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/specialization/${id}/`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                })
            });

            if(response.status === 200) {
                return "Специализация успешно обновленна"
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);


export const specializationsDelete = createAsyncThunk<string, {specializationId: number}, { rejectValue:  any  }>(
    'specializations/delete',
    async ({specializationId}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3000/specialization/${specializationId}/`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(response.status === 200) {
                return 'Специализация удалена'
            } else {
                const error: Error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);

export default {specializationsRead, specializationsCreate, specializationsUpdate, specializationsDelete}