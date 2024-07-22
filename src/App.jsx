import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Header from './components/header'
import Footer from './components/footer'
import '../public/assets/css/style.css'
import Analysts from './pages/Analysts'
import Adcademy from './pages/Adcademy'
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/analysts" element={<Analysts />} />
            <Route path="/adcademy" element={<Adcademy />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
