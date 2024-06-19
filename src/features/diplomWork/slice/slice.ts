import {createSlice} from "@reduxjs/toolkit";
import {

} from "@/features/employees/action/action";
import {Person} from "@/types";
import {
    studentCursachDelete,
    studentCursachRead,
    studentsReplace,
    studetnCursachCreate
} from "@/features/diplomWork/action/action";



export const studentCursach = createSlice({
    name: "workStudent",
    initialState: {
        state: false,
        status: '',
        error: null,
        data: [],
        tableData: [],
        assentModal: false
    } as State,
    reducers: {
        setTableDataStudentCursach(state, action) {
            state.tableData = action.payload;
        },
        setTableDataCreateStudentCursach(state, action) {
            state.tableData.push(action.payload);
        },
        updateTableDataCursach: (state, action) => {
            state.tableData = state.tableData.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title,
                        fio: action.payload.fio,
                        prepodFio: action.payload.prepodFio,
                        link: action.payload.link,
                        level: action.payload.level,
                    };
                }
                return item;
            });
        },
        // updateTableDataStudentDiplom: (state, action) => {
        //     state.tableData = state.tableData.map(item => {
        //         if (item.id === action.payload.id) {
        //             return {
        //                 ...item,
        //                 firstName: action.payload.firstName,
        //                 lastName: action.payload.lastName,
        //                 middleName: action.payload.middleName,
        //                 posts: action.payload.posts,
        //             };
        //         }
        //         return item;
        //     });
        // },
    },
    extraReducers: (builder) => {

// employeesCreate -------------------------------------------------------------------------
//         builder.addCase(employeesCreate.fulfilled, (state, action) => {
//             state.status = 'success';
//             state.error = null;
//             // state.state = true;
//             state.data.push(action.payload)
//             state.tableData.push(action.payload);
//         });
//
//         builder.addCase(employeesCreate.pending, (state) => {
//             state.error = null;
//             state.state = false;
//             state.status = 'loading';
//         });
//
//         builder.addCase(employeesCreate.rejected, (state, action) => {
//             state.error = action.payload;
//             state.state = true;
//             state.status = 'fails';
//         });
        // employeesCreate -------------------------------------------------------------------------

        // employeesRead -------------------------------------------------------------------------
        builder.addCase(studentCursachRead.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            state.data = action.payload
        });

        builder.addCase(studentCursachRead.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentCursachRead.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // employeesRead -------------------------------------------------------------------------

        // // employeesFind -------------------------------------------------------------------------
        // builder.addCase(employeesFind.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesFind.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesFind.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // employeesFind -------------------------------------------------------------------------

        // employeesReplace -------------------------------------------------------------------------
        builder.addCase(studentsReplace.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentsReplace.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentsReplace.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // employeesReplace -------------------------------------------------------------------------


        // employeesDelete -------------------------------------------------------------------------
        builder.addCase(studentCursachDelete.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentCursachDelete.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentCursachDelete.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // employeesDelete -------------------------------------------------------------------------

        // // employeesCreate -------------------------------------------------------------------------
        builder.addCase(studetnCursachCreate.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.tableData.push(action.payload)
        });

        builder.addCase(studetnCursachCreate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studetnCursachCreate.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // // employeesCreate -------------------------------------------------------------------------
        //
        // // employeesRead -------------------------------------------------------------------------
        // builder.addCase(employeesRead.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesRead.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesRead.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // employeesRead -------------------------------------------------------------------------
        //
        // // employeesFind -------------------------------------------------------------------------
        // builder.addCase(employeesFind.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesFind.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesFind.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // employeesFind -------------------------------------------------------------------------
        //
        // // employeesReplace -------------------------------------------------------------------------
        // builder.addCase(employeesReplace.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesReplace.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesReplace.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // employeesReplace -------------------------------------------------------------------------
        //
        //
        // // employeesDelete -------------------------------------------------------------------------
        // builder.addCase(employeesDelete.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesDelete.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesDelete.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
        // // employeesDelete -------------------------------------------------------------------------

    }
});

export default studentCursach.reducer
export const {setTableDataStudentCursach,setTableDataCreateStudentCursach,updateTableDataCursach} = studentCursach.actions

export interface State {
    state: boolean;
    status: string;
    error: any;
    data: Person[];
    tableData: Person[];
    assentModal: boolean;
}