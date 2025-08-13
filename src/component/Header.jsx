import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header class="header">
        <div class="header-nav">
            <Link to="#" class="logo">PhimMoi</Link>
            <nav class="main-nav">
                <ul>
                    <li><Link to="/phimmoi">PHIMMOI</Link></li>
                    <li><Link to="">PHIM LẺ</Link></li>
                    <li><Link to="">PHIM BỘ</Link></li>
                    <li><Link to="">THỂ LOẠI</Link></li>
                    <li><Link to="">QUỐC GIA</Link></li>
                    <li><Link to="">NĂM PHÁT HÀNH</Link></li>
                    <li><Link to="">PHIM CHIẾU RẠP</Link></li>
                    <li><Link to="">TRAILER</Link></li>
                    <li><Link to="">TOP PHIM</Link></li>
                </ul>
            </nav>
            <div class="search-box">
                <input type="text" placeholder="Tìm tên phim, diễn viên..."/>
                <button><i class="fas fa-search"></i></button>
            </div>
        </div>
    </header>
    )
}