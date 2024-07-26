import { Link } from "react-router-dom"
import { Formulario, RegisterContainer } from "./styles"

export const Register = () => {
    return (
        <RegisterContainer>
            <Formulario>
                <h3>Mercadinho <br />do Gui!</h3>
                <span>Registre-se!</span>
                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="name"
                        id="name"
                        placeholder="Guilherme Ferreira da Silva"
                    />
                </fieldset>
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
                    <button>Registrar</button>
                </div>
                <p>já possui uma conta? <Link to='/login'>faça login aqui!!</Link></p>
            </Formulario>
        </RegisterContainer>
    )
}
