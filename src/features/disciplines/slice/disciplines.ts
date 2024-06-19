import {createSlice} from "@reduxjs/toolkit";
import {
    disciplinesAssign,
    disciplinesCreate, disciplinesDelete,
    disciplinesRead, disciplinesUnassign,
    disciplinesUpdate
} from "@/features/disciplines/action/action";


export const disciplines = createSlice({
    name: "disciplines",
    initialState: {
        state: false,
        status: '',
        error: null,
        data: null,
        tableData: []
    } as State,
    reducers: {
        setTableDataDisciplines(state, action) {
            state.tableData = action.payload;
        },
        setTableDataCreateDisciplines(state, action) {
            state.tableData.push(action.payload);
        },
        updateTableDataDisciplines: (state, action) => {
            state.tableData = state.tableData.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.name
                    };
                }
                return item;
            });
        }
    },
    extraReducers: (builder) => {
        // disciplinesCreate -------------------------------------------------------------------------
        builder.addCase(disciplinesCreate.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            state.data.push(action.payload)
        });

        builder.addCase(disciplinesCreate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(disciplinesCreate.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // disciplinesCreate -------------------------------------------------------------------------


        // disciplinesRead -------------------------------------------------------------------------
        builder.addCase(disciplinesRead.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            state.data = action.payload
        });

        builder.addCase(disciplinesRead.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(disciplinesRead.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // disciplinesRead -------------------------------------------------------------------------


        // disciplinesUpdate -------------------------------------------------------------------------
        builder.addCase(disciplinesUpdate.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(disciplinesUpdate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(disciplinesUpdate.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // disciplinesUpdate -------------------------------------------------------------------------


        // disciplinesAssign -------------------------------------------------------------------------
        // builder.addCase(disciplinesAssign.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(disciplinesAssign.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(disciplinesAssign.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // disciplinesAssign -------------------------------------------------------------------------
        //

        // disciplinesDelete -------------------------------------------------------------------------
        builder.addCase(disciplinesDelete.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(disciplinesDelete.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(disciplinesDelete.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // disciplinesDelete -------------------------------------------------------------------------


        // disciplinesUnassign -------------------------------------------------------------------------
        // builder.addCase(disciplinesUnassign.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(disciplinesUnassign.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(disciplinesUnassign.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // disciplinesUnassign -------------------------------------------------------------------------
    }
});

export const { setTableDataDisciplines, updateTableDataDisciplines, setTableDataCreateDisciplines} = disciplines.actions
export default disciplines.reducer

export interface State {
    state: boolean;
    status: string;
    error: any;
    data: any;
    tableData: any
}

