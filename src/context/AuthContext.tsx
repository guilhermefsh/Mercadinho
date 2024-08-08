import { createContext, useState } from "react";
import { AuthContextProps, SignInCredentials, UserProps } from "../interfaces/AuthCT";
import { authAPI } from "../infra/axios";
import { toast } from "react-toastify";
import { ContextProvider } from "../interfaces/ContextProvider";

export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: ContextProvider) => {
    const [user, setUser] = useState<UserProps | null>(null);

    const SignIn = async ({ email, password }: SignInCredentials) => {

        try {
            const response = await authAPI.post('/auth', {
                email,
                password
            })

            if (response.data.error) {
                toast.error('email ou senha incorretos!');
            }

            const { token, user } = response.data;
            setUser(user);
            authAPI.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`

            localStorage.setItem("@AuthToken", token);
            localStorage.setItem("@AuthUser", JSON.stringify(user));

        } catch (error) {
            toast.error('Ocorre um erro no servidor! Tente reiniciar a página!')
        }

    }

    const SignOut = () => {
        setUser(null);
        localStorage.removeItem("@AuthToken");
        localStorage.removeItem("@AuthUser");
        authAPI.defaults.headers.common["Authorization"] = '';
        toast.info('Você foi desconectado');
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    )
}
