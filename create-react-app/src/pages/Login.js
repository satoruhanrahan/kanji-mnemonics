import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await login(username, password)

        if (response.ok) {
            navigate("/")
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div>
                <label>Username:</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading}>Login</button>
                {error && <span className="error">{error}</span>}
            </div>
        </form>
    )
}

export default Login