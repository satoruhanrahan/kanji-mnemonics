import { useContext } from 'react'
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom";

export const useLogout = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        setUser(null)

        navigate("/")
    }

    return { logout, user }
}