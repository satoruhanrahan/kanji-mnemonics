import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Kanji from './pages/Kanji'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
