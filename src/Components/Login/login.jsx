import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            alert("Preencha os campos.");
        } else {
            alert("Enviando os dados.");
            console.log("Usuário:", username, '/', "Senha:", password);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className='input-field'>
                    <input 
                        type="email" 
                        placeholder='Digite seu E-mail...' 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <FaUser className="icon" />
                </div>
                <div className='input-field'>
                    <input 
                        type="password" 
                        placeholder='Digite sua Senha...'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar de mim
                    </label>
                    <a href="">Esqueceu a senha?</a>
                </div>
                <button type="submit">Entrar</button>
                <div className="signup-link">
                    <p>Ainda não tem conta? <a href="">Registrar</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
