export default function Header(){
    return(
        <header class="header">
        <div class="header-nav">
            <a href="" class="logo">PhimMoi</a>
            <nav class="main-nav">
                <ul>
                    <li><a href="#">PHIMMOI</a></li>
                    <li><a href="#">PHIM LẺ</a></li>
                    <li><a href="#">PHIM BỘ</a></li>
                    <li><a href="#">THỂ LOẠI</a></li>
                    <li><a href="#">QUỐC GIA</a></li>
                    <li><a href="#">NĂM PHÁT HÀNH</a></li>
                    <li><a href="#">PHIM CHIẾU RẠP</a></li>
                    <li><a href="#">TRAILER</a></li>
                    <li><a href="#">TOP PHIM</a></li>
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