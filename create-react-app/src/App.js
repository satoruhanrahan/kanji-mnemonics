import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
// pages and components
import Home from './pages/Home'
import Kanji from './pages/Kanji'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'

export const KanjiContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [kanji, setKanji] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <KanjiContext.Provider value={{ kanji: kanji, setKanji: setKanji }}>
          <BrowserRouter basename="/">
            <Navbar />
            <div className="pages">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/:id"
                  element={<Kanji />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
              </Routes>
            </div>
          </BrowserRouter>
        </KanjiContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
