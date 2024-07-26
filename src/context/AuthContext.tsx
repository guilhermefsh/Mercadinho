import { createContext, useState } from "react";
import { ContextProvider, } from "../interfaces/ProductsContext";
import { AuthContextProps, UserProps } from "../interfaces/AuthCT";
import { authAPI } from "../lib/axios";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: ContextProvider) => {
    const [user, setUser] = useState<UserProps | null>(null);

    const SignIn = async ({ email, password }: UserProps) => {
        try {
            const response = await authAPI.post('/auth', {
                email,
                password
            })

            const { token, user } = response.data;
            setUser(user);
            authAPI.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`

            localStorage.setItem("@AuthToken", token);
            localStorage.setItem("@AuthUser", JSON.stringify(user));

        } catch (error) {
            toast.error('Erro ao fazer login')
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
