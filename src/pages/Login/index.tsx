import { Link, useNavigate } from "react-router-dom"
import { Formulario, LoginContainer, TextError, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderForm } from "../../components/LoaderForm"

import { toast } from "react-toastify"
import { useAuth } from "../../hooks/useAuth"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/rootReducer"
import { useEffect } from "react"

const schema = z.object({
    email: z.string().email("Insira um email válido").min(1, "O campo email é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória")
})

type FormData = z.infer<typeof schema>

export const Login = () => {

    const { signIn } = useAuth()
    const navigate = useNavigate();

    const signed = useSelector((state: RootState) => state.auth.signed)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleSubmitSign = async (data: FormData) => {
        try {
            await signIn(data)
        } catch (error) {
            toast.error('Ocorreu um erro, tente novamente!');
        }
    }

    useEffect(() => {
        if (signed) {
            navigate('/')
        }
    }, [signed, navigate])

    return (
        <LoginContainer>
            <Formulario onSubmit={handleSubmit(handleSubmitSign)}>
                <h3>Mercadinho <br />do Gui!</h3>
                <Title>Entre na sua conta!</Title>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seuemail@gmail.com"
                        {...register('email')}
                    />
                    {errors.email && <TextError>{errors.email.message}</TextError>}
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*******"
                        {...register('password')}
                    />
                    {errors.password && <TextError>{errors.password.message}</TextError>}
                </fieldset>
                <div>
                    <button type="submit">
                        {isSubmitting ? <LoaderForm /> : 'Logar'}
                    </button>
                </div>
                <p>Não possui conta? <Link to='/register'>registre-se aqui!!</Link></p>
            </Formulario>
        </LoginContainer>
    )
}