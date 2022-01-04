import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// FRONT
import './assets/front/css/main.css'




// PAGES FRONT
import Landing from './pages/front/Landing'
import Artikel from './pages/front/Artikel'
import ArtikelDetail from './pages/front/ArtikelDetail'
import Portofolio from './pages/front/Portofolio'
import CariKonten from './pages/front/CariKonten'

// PAGES BACK

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/artikel" exact element={<Artikel />} />
          <Route path="/artikel/:slug" exact element={<ArtikelDetail />} />
          <Route path="/cari" exact element={<CariKonten />} />
          <Route path="/portofolio" exact element={<Portofolio />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
