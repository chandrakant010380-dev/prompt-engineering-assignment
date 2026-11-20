import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as employeeApi from '../api/employeeApi';
import type { Employee, EmployeeInput } from '../types/employee';

interface EmployeeState {
  items: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll',
  employeeApi.getEmployees
);

export const createEmployeeThunk = createAsyncThunk(
  'employees/create',
  (data: EmployeeInput) => employeeApi.createEmployee(data),
);

// NOTE: payload typed as 'any' here - a quality issue to fix.
export const updateEmployeeThunk = createAsyncThunk(
  'employees/update',
  (payload: any) =>
    employeeApi.updateEmployee(payload.id, payload.data),
);

export const deleteEmployeeThunk = createAsyncThunk(
  'employees/delete',
  (id: string) => employeeApi.deleteEmployee(id),
);

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchEmployees.fulfilled,
        (state, action: PayloadAction<Employee[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )

      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      })

      .addCase(
        createEmployeeThunk.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          state.items.push(action.payload);
        }
      )

      .addCase(createEmployeeThunk.rejected, (state) => {
        state.error = 'Error';
      })

      .addCase(
        updateEmployeeThunk.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          const idx = state.items.findIndex(
            (employee) => employee.id === action.payload.id
          );

          if (idx !== -1) {
            state.items[idx] = action.payload;
          }
        }
      )

      .addCase(updateEmployeeThunk.rejected, (state) => {
        state.error = 'Error';
      })

      .addCase(
        deleteEmployeeThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter(
            (employee) => employee.id !== action.payload
          );
        }
      )

      .addCase(deleteEmployeeThunk.rejected, (state) => {
        state.error = 'Error';
      });
  },
});