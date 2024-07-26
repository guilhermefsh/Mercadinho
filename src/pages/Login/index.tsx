import { Link } from "react-router-dom"
import { Formulario, LoginContainer } from "./styles"

export const Login = () => {
    return (
        <LoginContainer>
            <Formulario>
                <h3>Mercadinho <br />do Gui!</h3>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seuemail@gmail.com"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*******"
                    />
                </fieldset>
                <div>
                    <button>Logar</button>
                </div>
                <p>Não possui conta? <Link to='/register'>registre-se aqui!!</Link></p>
            </Formulario>
        </LoginContainer>
    )
}