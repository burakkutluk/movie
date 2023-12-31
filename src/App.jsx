import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Explore from './pages/explore/Explore'
import Search from './pages/search/Search'
import NotFound from './pages/404/notFound'
import Details from './pages/Details/Details'
import Footer from './components/footer/Footer'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/details/:category/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
