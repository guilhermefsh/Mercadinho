import { Link, useNavigate } from "react-router-dom"
import { Formulario, LoginContainer, TextError, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderForm } from "../../components/LoaderForm"
import { authAPI } from "../../lib/axios"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { toast } from "react-toastify"

const schema = z.object({
    email: z.string().email("Insira um email válido").nonempty("O cmapo email é obrigatório"),
    password: z.string().nonempty("A senha é obrigatória")
})

type FormData = z.infer<typeof schema>

export const Login = () => {

    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleSubmitSign = async (data: FormData) => {
        try {
            const SignUser = await authAPI.post('/auth', data)
            console.log(SignUser)
            await SignIn(data)
            navigate('/')
        } catch (error) {
            toast.error('Ocorreu um erro, tente novamente!');
        }
    }

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