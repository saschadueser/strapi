import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './styles/fontawesome/css/all.min.css'

// Components:
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// Sites:
import Index from './Index'
import Service from './Service-Page'
import Projekte from './Projekte-Page'
import About from './About-Page'
import Kontakt from './Kontakt-Page'


export default function App() {

  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/referenzen" element={<Projekte />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>
        
        <Footer />
      </Router>
    </>
  )
}

