import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useContext } from 'react'
import { UserContext } from "../App"

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useContext(UserContext)

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Kanji Mnemonics</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span className='username'>Hello {user.username}!</span>
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar