export default function MainContentPhim (){
    return (
        <main class="movie-grid-container">
        <h2>Phim Mới > Phim Lẻ</h2>
        <div class="movie-grid">
            <a href="#" class="movie-card">
                <div class="movie-image-container">
                    <img src="placeholder.jpg" alt="Movie Title"/>
                    <div class="quality-tag">HD-VietSub</div>
                </div>
                <div class="movie-title">Phòng Thần 2: Chiến Hỏa Tây Kỳ</div>
            </a>
            <a href="#" class="movie-card">
                <div class="movie-image-container">
                    <img src="placeholder.jpg" alt="Movie Title"/>
                    <div class="quality-tag">HD-VietSub</div>
                </div>
                <div class="movie-title">Giờ Thú Máu</div>
            </a>
            <a href="#" class="movie-card">
                <div class="movie-image-container">
                    <img src="placeholder.jpg" alt="Movie Title"/>
                    <div class="quality-tag">HD-VietSub</div>
                </div>
                <div class="movie-title">Buôn Thần Bán Thánh</div>
            </a>
            </div>

        <div class="pagination">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">...</a>
        </div>
    </main>
    )
}