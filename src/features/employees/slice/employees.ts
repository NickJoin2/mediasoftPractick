import {createSlice} from "@reduxjs/toolkit";
import {
    employeesCreate,
    employeesDelete,
    employeesRead,
    employeesReplace
} from "@/features/employees/action/action";
import {CreateEmployeeCommand} from "@/features/types";



export const employees = createSlice({
    name: "employees",
    initialState: {
        state: false,
        status: '',
        error: null,
        data: null,
        worker: null,
        tableData: [],
        assentModal: false
    } as State,
    reducers: {
        setTableData(state, action) {
            state.tableData = action.payload;
        },
        setTableDataCreate(state, action) {
            state.tableData.push(action.payload);
        },
        setAssentModal(state, action) {
            state.assentModal = action.payload;
        },
        updateTableData: (state, action) => {
            state.tableData = state.tableData.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        middleName: action.payload.middleName,
                        posts: action.payload.posts,
                    };
                }
                return item;
            });
        },
    },
         extraReducers: (builder) => {

// employeesCreate -------------------------------------------------------------------------
             builder.addCase(employeesCreate.fulfilled, (state, action) => {
                 state.status = 'success';
                 state.error = null;
                 // state.state = true;
                 state.data.push(action.payload)
                 state.tableData.push(action.payload);
             });

             builder.addCase(employeesCreate.pending, (state) => {
                 state.error = null;
                 state.state = false;
                 state.status = 'loading';
             });

             builder.addCase(employeesCreate.rejected, (state, action) => {
                 state.error = action.payload;
                 state.state = true;
                 state.status = 'fails';
             });
             // employeesCreate -------------------------------------------------------------------------

             // employeesRead -------------------------------------------------------------------------
             builder.addCase(employeesRead.fulfilled, (state, action) => {
                 state.status = 'success';
                 state.error = null;
                 state.state = true;
                 state.data = action.payload
             });

             builder.addCase(employeesRead.pending, (state) => {
                 state.error = null;
                 state.state = false;
                 state.status = 'loading';
             });

             builder.addCase(employeesRead.rejected, (state, action) => {
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
             builder.addCase(employeesReplace.fulfilled, (state) => {
                 state.status = 'success';
                 state.error = null;
                 state.state = true;
                 // state.data = action.payload
             });

             builder.addCase(employeesReplace.pending, (state) => {
                 state.error = null;
                 state.state = false;
                 state.status = 'loading';
             });

             builder.addCase(employeesReplace.rejected, (state, action) => {
                 state.error = action.payload;
                 state.state = true;
                 state.status = 'fails';
             });
             // employeesReplace -------------------------------------------------------------------------


             // employeesDelete -------------------------------------------------------------------------
             builder.addCase(employeesDelete.fulfilled, (state) => {
                 state.status = 'success';
                 state.error = null;
                 state.state = true;
                 // state.data = action.payload
             });

             builder.addCase(employeesDelete.pending, (state) => {
                 state.error = null;
                 state.state = false;
                 state.status = 'loading';
             });

             builder.addCase(employeesDelete.rejected, (state, action) => {
                 state.error = action.payload;
                 state.state = true;
                 state.status = 'fails';
             });
             // employeesDelete -------------------------------------------------------------------------

        // // employeesCreate -------------------------------------------------------------------------
        // builder.addCase(employeesCreate.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.error = null;
        //     state.state = true;
        //     state.data = action.payload
        // });
        //
        // builder.addCase(employeesCreate.pending, (state) => {
        //     state.error = null;
        //     state.state = false;
        //     state.status = 'loading';
        // });
        //
        // builder.addCase(employeesCreate.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.state = true;
        //     state.status = 'fails';
        // });
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

export default employees.reducer
export const {setTableData,setTableDataCreate,setAssentModal,updateTableData} = employees.actions

export interface State {
    state: boolean;
    status: string;
    error: any;
    data: any;
    tableData: CreateEmployeeCommand[]
    assentModal: boolean;
}