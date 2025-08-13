import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainContent from './component/MainContent'
import Header from './component/Header'
import Footer from './component/Footer'
import MainContentPhim from './component/MainContentPhim';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/phimmoi" element={<MainContentPhim />} />
        {/* Thêm các Route khác nếu cần */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
