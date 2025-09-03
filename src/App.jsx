
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Hajj from './components/Hajj';
import Omra from './components/Omra';
import OmraCombinee from './components/OmraCombinee';
import VoyagesMonde from './components/VoyagesMonde';
import NosServices from './components/NosServices';
import MonCompte from './components/MonCompte';
import EspaceClient from './components/EspaceClient';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-background' >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/hajj" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/omra" element={<Omra />} />
          <Route path="/omra-combinee" element={<OmraCombinee />} />
          <Route path="/voyages-monde" element={<VoyagesMonde />} />
          <Route path="/nos-services" element={<NosServices />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/espace-client" element={<EspaceClient />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}

export default App
