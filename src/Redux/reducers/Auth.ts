import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserProps } from '../../interfaces/AuthCT';
import { authAPI } from '../../infra/axios';
import { toast } from 'react-toastify';

const initialState: AuthState = {
    user: null,
    signed: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess(state, action: PayloadAction<UserProps>) {
            state.user = action.payload;
            state.signed = true;
            authAPI.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            localStorage.setItem('@AuthToken', action.payload.token);
            localStorage.setItem('@AuthUser', JSON.stringify(action.payload));
        },
        signOutSuccess(state) {
            state.user = null;
            state.signed = false;
            authAPI.defaults.headers.common['Authorization'] = '';
            localStorage.removeItem('@AuthToken');
            localStorage.removeItem('@AuthUser');
            toast.info('Você foi desconectado');
        },
        setError(_state, action: PayloadAction<string>) {
            toast.error(action.payload);
        }
    },
});

export const { signInSuccess, signOutSuccess, setError } = authSlice.actions;

export default authSlice.reducer;
