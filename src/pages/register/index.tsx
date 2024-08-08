import { Link, useNavigate } from "react-router-dom"
import { Formulario, RegisterContainer, TextError, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderForm } from "../../components/LoaderForm"
import { authAPI } from "../../infra/axios"
import { toast } from "react-toastify"
import { useAuth } from "../../hooks/useAuth"

const schema = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Insira um email válido").min(1, "O campo email é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória").min(8, "A senha deve conter no mínimo 8 dígitos")
});

type FormData = z.infer<typeof schema>

export const Register = () => {

    const navigate = useNavigate();
    const { signIn } = useAuth()

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleSubmitRegister = async (data: FormData) => {
        try {
            const response = await authAPI.post('/create', data);

            if (response.data.error) {
                toast.error(response.data.error);
                return;
            }
            toast.success('Registrado com sucesso! Redirecionando para a página inicial');
            await signIn(data);
            navigate('/');
        } catch (error) {
            toast.error('Ocorreu um erro ao se registrar, tente novamente!');
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
