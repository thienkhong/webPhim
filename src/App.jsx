import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainContent from './component/MainContent'
import Header from './component/Header'
import Footer from './component/Footer'
import MainContentPhim from './component/MainContentPhim'
import PhimBo from "./component/MainSection/PhimBo"
import PhimChieuRap from "./component/MainSection/PhimChieuRap"
import PhimLe from "./component/MainSection/PhimLe"
import TopPhim from "./component/MainSection/TopPhim"


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/phimle" element={<PhimLe />} />
        <Route path="/phimbo" element={<PhimBo/>}/>
        {/* <Route path="/theloai" element={<MainContentPhim />} />
        <Route path="/quocgia" element={<MainContentPhim/>}/>
        <Route path="/namphathanh" element={<MainContentPhim />} /> */}
        <Route path="/phimchieurap" element={<PhimChieuRap />} />
        {/* <Route path="/trailer" element={<MainContentPhim />} /> */}
        <Route path="/topphim" element={<TopPhim />} />
        {/* Thêm các Route khác nếu cần */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
