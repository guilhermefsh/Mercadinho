import { Link, useNavigate } from "react-router-dom"
import { Formulario, RegisterContainer, TextError, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderForm } from "../../components/LoaderForm"
import { authAPI } from "../../lib/axios"
import { toast } from "react-toastify"

const schema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    email: z.string().email("Insira um email válido").nonempty("O cmapo email é obrigatório"),
    password: z.string().nonempty("A senha é obrigatória")
})

type FormData = z.infer<typeof schema>

export const Register = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleSubmitRegister = async (data: FormData) => {
        try {
            const createUser = await authAPI.post('/create', data)
            console.log(createUser.data)
            navigate('/login');
        } catch (error) {
            toast.error('Ocorreu um erro ao se registrar, tente novamente!')
        }
    }

    return (
        <RegisterContainer>
            <Formulario onSubmit={handleSubmit(handleSubmitRegister)}>
                <h3>Mercadinho <br />do Gui!</h3>
                <Title>Registre-se!</Title>
                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Guilherme Ferreira da Silva"
                        {...register('name')}
                    />
                    {errors.name && <TextError>{errors.name.message}</TextError>}
                </fieldset>
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
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <LoaderForm /> : 'Registrar'}
                    </button>
                </div>
                <p>já possui uma conta? <Link to='/login'>faça login aqui!!</Link></p>
            </Formulario>
        </RegisterContainer>
    )
}
