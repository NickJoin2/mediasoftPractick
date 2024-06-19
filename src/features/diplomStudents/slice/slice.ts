import {createSlice} from "@reduxjs/toolkit";
import {

} from "@/features/employees/action/action";
import {Person} from "@/types";
import {
    studentDiplomCreate,
    studentDiplomDelete,
    studentDiplomRead,
    studentsReplaceDiplom
} from "@/features/diplomStudents/action/action";



export const studentDiplom = createSlice({
    name: "diplomStudent",
    initialState: {
        state: false,
        status: '',
        error: null,
        data: [],
        tableData: [],
    } as State,
    reducers: {
        setTableDataStudentDiplom(state, action) {
            state.tableData = action.payload;
        },
        setTableDataCreateStudentDiplom(state, action) {
            state.tableData.push(action.payload);
        },
        updateTableDataDiplom: (state, action) => {
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
        builder.addCase(studentDiplomRead.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            state.data = action.payload
        });

        builder.addCase(studentDiplomRead.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentDiplomRead.rejected, (state, action) => {
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
        builder.addCase(studentsReplaceDiplom.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentsReplaceDiplom.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentsReplaceDiplom.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // employeesReplace -------------------------------------------------------------------------


        // employeesDelete -------------------------------------------------------------------------
        builder.addCase(studentDiplomDelete.fulfilled, (state) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.data = action.payload
        });

        builder.addCase(studentDiplomDelete.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentDiplomDelete.rejected, (state, action) => {
            state.error = action.payload;
            state.state = true;
            state.status = 'fails';
        });
        // employeesDelete -------------------------------------------------------------------------

        // // employeesCreate -------------------------------------------------------------------------
        builder.addCase(studentDiplomCreate.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.state = true;
            // state.tableData.push(action.payload)
        });

        builder.addCase(studentDiplomCreate.pending, (state) => {
            state.error = null;
            state.state = false;
            state.status = 'loading';
        });

        builder.addCase(studentDiplomCreate.rejected, (state, action) => {
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

export default studentDiplom.reducer
export const {setTableDataStudentDiplom,setTableDataCreateStudentDiplom,updateTableDataDiplom} = studentDiplom.actions

export interface State {
    state: boolean;
    status: string;
    error: any;
    data: Person[];
    tableData: Person[];
}