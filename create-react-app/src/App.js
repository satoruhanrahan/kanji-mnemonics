import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
// pages and components
import Home from './pages/Home'
import Kanji from './pages/Kanji'
import Navbar from './components/Navbar'

export const KanjiContext = createContext(null);

function App() {
  const [kanji, setKanji] = useState(null);

  return (
    <div className="App">
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
            </Routes>
          </div>
        </BrowserRouter>
      </KanjiContext.Provider>
    </div>
  );
}

export default App;
