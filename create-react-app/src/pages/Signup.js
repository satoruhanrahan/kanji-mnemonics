import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await signup(username, password)

        if (response.ok) {
            navigate("/")
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
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

                <button disabled={isLoading}>Sign Up</button>
                {error && <span className="error">{error}</span>}
            </div>
        </form>
    )
}

export default Signup