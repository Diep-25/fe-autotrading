import Adcademy from '../pages/academy/Adcademy'
import Analysts from '../pages/analysts/Analysts'
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
    path: '/adcademy',
    page: <Adcademy />,
    isShowHeader: true
  }
]
