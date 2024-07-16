import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Header from './components/header'
import Footer from './components/footer'
import '../public/assets/css/style.css'
function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App
