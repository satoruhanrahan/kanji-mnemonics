import { useState, useContext } from 'react'
import { UserContext } from "../App"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user, setUser } = useContext(UserContext)

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        let api = "/api/user/login";
        if (process.env.REACT_APP_NODE_ENV === 'development') {
            api = 'http://localhost:4000' + api
        }

        const response = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            setUser(json)

            setIsLoading(false)
        }

        return response
    }

    return { login, isLoading, error, user }
}