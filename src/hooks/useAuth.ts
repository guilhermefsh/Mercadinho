import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/rootReducer';
import { signInSuccess, signOutSuccess, setError } from '../Redux/reducers/Auth';
import { SignInCredentials } from '../interfaces/AuthCT';
import { AppDispatch } from '../Redux/store';
import { authAPI } from '../infra/axios';

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, signed } = useSelector((state: RootState) => state.auth);

    const signIn = async ({ email, password }: SignInCredentials) => {
        try {
            const response = await authAPI.post('/auth', { email, password });
            if (response.data.error) {
                dispatch(setError('email ou senha incorretos!'));
                return;
            }

            const { token, user } = response.data;
            dispatch(signInSuccess({ ...user, token }));
        } catch (error) {
            dispatch(setError('Ocorreu um erro no servidor! Tente reiniciar a página!'));
        }
    };

    const signOut = () => {
        dispatch(signOutSuccess());
    };

    return { user, signed, signIn, signOut };
};
