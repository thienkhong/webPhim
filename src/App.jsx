import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainContent from './component/MainContents/MainContent';
import Header from './component/Header'
import Footer from './component/Footer'
import PhimBo from "./component/MainContents/PhimBo"
import PhimChieuRap from "./component/MainContents/PhimChieuRap"
import PhimLe from "./component/MainContents/PhimLe"
import TopPhim from "./component/MainContents/TopPhim"
import MovieDetail from './component/MovieDetail'; // Thêm dòng này

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
        <Route path="/phim/:idphim" element={<MovieDetail />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
