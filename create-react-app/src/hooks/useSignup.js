import { useState, useContext } from 'react'
import { UserContext } from "../App"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user, setUser } = useContext(UserContext)

    const signup = async (username, password, navigate) => {
        setIsLoading(true)
        setError(null)

        // const response = await fetch('/api/user/signup', {
        const response = await fetch('http://localhost:4000/api/user/signup', {
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

    return { signup, isLoading, error, user }
}