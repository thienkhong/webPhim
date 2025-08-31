import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header className="header">
            <div className="header-nav max-width-1500">
                <Link to="/" className="logo">PhimMoi</Link>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/">PHIMMOI</Link></li>
                        <li><Link to="/phimle">PHIM LẺ</Link></li>
                        <li><Link to="/phimbo">PHIM BỘ</Link></li>
                        {/* <li><Link to="/theloai">THỂ LOẠI</Link></li>
                        <li><Link to="/quocgia">QUỐC GIA</Link></li>
                        <li><Link to="/namphathanh">NĂM PHÁT HÀNH</Link></li> */}
                        <li><Link to="/phimchieurap">PHIM CHIẾU RẠP</Link></li>
                        {/* <li><Link to="/trailer">TRAILER</Link></li> */}
                        <li><Link to="/topphim">TOP PHIM</Link></li>
                    </ul>
                </nav>
                <div className="search-box">
                    <input type="text" placeholder="Tìm tên phim, diễn viên..."/>
                    <button><i className="fas fa-search"></i></button>
                </div>
            </div>
        </header>
    )
}