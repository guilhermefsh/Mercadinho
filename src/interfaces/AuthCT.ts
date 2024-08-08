export type UserProps = {
    email: string | null;
    permissions?: string[] | null;
    roles?: string[] | null;
    token: string
}

export type SignInCredentials = {
    email: string;
    password: string;
}

export type AuthState = {
    user: UserProps | null
    signed: boolean
}