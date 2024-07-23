import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import '../public/assets/css/style.css'
import Analysts from './pages/Analysts'
import Layout from './components/Layout'
import CopyTrade from './pages/CopyTrade'
import News from './pages/News'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Academy from './pages/Academy'
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="analysts" element={<Analysts />} />
            <Route path="academy" element={<Academy />} />
            <Route path="copytrade" element={<CopyTrade />} />
            <Route path="news" element={<News />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
