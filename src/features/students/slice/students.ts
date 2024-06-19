import {createSlice} from "@reduxjs/toolkit";
import {studentDelete, studentGraduate, studentRead, studentUpdate} from "@/features/students/action/action";
import {EmployeeDTO} from "@/features/types";




export const student = createSlice({
    name: "student",
    initialState: {
        state: false,
        status: '',
        error: null,
        data: null,
        message: '',
        tableDataStudent: [],
    } as State,
    reducers: {
        setTableDataStudent(state, action) {
            state.tableDataStudent = action.payload;
        },

    },
    extraReducers: (builder) => {
        // studentUpdate --------------------------------------------------------------------------------------------------
        builder.addCase(studentUpdate.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentUpdate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentUpdate.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // studentUpdate --------------------------------------------------------------------------------------------------


        // studentRead --------------------------------------------------------------------------------------------------
        builder.addCase(studentRead.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            state.data = action.payload
        });

        builder.addCase(studentRead.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentRead.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });

        // studentRead --------------------------------------------------------------------------------------------------


        // studentGraduate--------------------------------------------------------------------------------------------------
        builder.addCase(studentGraduate.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentGraduate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentGraduate.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });

        // studentGraduate --------------------------------------------------------------------------------------------------


        // studentDelete --------------------------------------------------------------------------------------------------
        builder.addCase(studentDelete.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentDelete.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentDelete.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });


        // studentDelete --------------------------------------------------------------------------------------------------
        // // studentUpdate --------------------------------------------------------------------------------------------------
        // builder.addCase(studentUpdate.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(studentUpdate.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(studentUpdate.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // studentUpdate --------------------------------------------------------------------------------------------------
        //
        //
        // // studentRead --------------------------------------------------------------------------------------------------
        // builder.addCase(studentRead.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(studentRead.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(studentRead.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        //
        // // studentRead --------------------------------------------------------------------------------------------------
        //
        //
        // // studentGraduate--------------------------------------------------------------------------------------------------
        // builder.addCase(studentGraduate.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(studentGraduate.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(studentGraduate.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        //
        // // studentGraduate --------------------------------------------------------------------------------------------------
        //
        //
        // // studentDelete --------------------------------------------------------------------------------------------------
        // builder.addCase(studentDelete.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(studentDelete.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(studentDelete.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        //
        // // studentDelete --------------------------------------------------------------------------------------------------
    }
});

export default student.reducer
export const { setTableDataStudent} = student.actions

export interface State {
    state: boolean;
    status: string;
    error: any;
    data: any;
    tableDataStudent: EmployeeDTO[],
    message: string;
}
