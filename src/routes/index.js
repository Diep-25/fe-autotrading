import Academy from '../pages/Academy'
import Analysts from '../pages/analysts/Analysts'
import Contact from '../pages/Contact'
import CopyTrade from '../pages/CopyTrade'
import Products from '../pages/Products'
import Home from './pages'

export const routes = [
  {
    path: '/',
    page: <Home />,
    isShowHeader: true
  },
  {
    path: '/analysts',
    page: <Analysts />,
    isShowHeader: true
  },
  {
    path: '/academy',
    page: <Academy />,
    isShowHeader: true
  },
  {
    path: '/copytrade',
    page: <CopyTrade />,
    isShowHeader: true
  },
  {
    path: '/news',
    page: <Analysts />,
    isShowHeader: true
  },
  {
    path: '/products',
    page: <Products />,
    isShowHeader: true
  },
  {
    path: '/contact',
    page: <Contact />,
    isShowHeader: true
  }
]
