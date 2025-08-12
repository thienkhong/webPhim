import { dataPhimDeCu, dataPhimLe } from '../../data'
import SectionPhimDeCu from "./sectionPhimDeCu";
import SectionPhimLe from "./SectionPhimLe";

export default function MainContent() {
    return (
<main class="main-content">
        {/* <section class="banner-ads">
            <div class="ads-container">
                <img src="https://via.placeholder.com/1200x120?text=SaoBet+-+VB88+Quang+cao" alt="Banner quảng cáo lớn"/>
            </div>
        </section> */}
        {dataPhimDeCu.map((section)=>(
            <SectionPhimDeCu key={section.id} dataPhimDeCu={section}/>
        ))}

        {dataPhimLe.map((section)=>(
            <SectionPhimLe key={section.id} dataPhimLe={section}/>
        ))}

        <section class="movie-section new-in-theaters">
            <div class="section-header">
                <h2>PHIM CHIẾU RẠP MỚI</h2>
                <div class="movie-category-nav">
                    <a href="#" class="active">2023</a>
                    <a href="#">2022</a>
                    <a href="#">2021</a>
                    <a href="#">2020</a>
                </div>
                <a href="#" class="see-all">Xem tất cả <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="movie-list">
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Bo+Tu+Sieu+Dang" alt="Bộ Tứ Siêu Đẳng"/>
                    <div class="movie-info">
                        <span class="movie-quality">CAM-Vietsub</span>
                        <div class="movie-title">Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Phong+Than+2" alt="Phong Thần 2"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Phong Thần 2: Chiến Hỏa Tây Kỷ</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Gio+Tha+Mau" alt="Giờ Thả Máu"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Giờ Thả Máu</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Buon+Ban+Than+Thanh" alt="Buôn Bán Thần Thánh"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Buôn Bán Thần Thánh</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Superman" alt="Superman"/>
                    <div class="movie-info">
                        <span class="movie-quality">TS-Vietsub</span>
                        <div class="movie-title">Superman</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Cuoi+Ma+Giai+Han" alt="Cưới Ma Giải Hạn"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Cưới Ma Giải Hạn</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Bi+Kip+Luyen+Rong" alt="Bí Kíp Luyện Rồng"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Bí Kíp Luyện Rồng (Live Action)</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=M3GAN+2.0" alt="M3GAN 2.0"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">M3GAN 2.0</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="movie-section newly-updated-series">
            <div class="section-header">
                <h2>PHIM BỘ MỚI CẬP NHẬT</h2>
                <div class="movie-category-nav">
                    <a href="#" class="active">Hàn Quốc</a>
                    <a href="#">Trung Quốc</a>
                    <a href="#">Âu - Mỹ</a>
                    <a href="#">Phim Bộ Full</a>
                </div>
                <a href="#" class="see-all">Xem tất cả <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="movie-list">
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Doi+Tuyen+Ky+Tich" alt="Đội Tuyển Kỳ Tích"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 6-Vietsub</span>
                        <div class="movie-title">Đội Tuyển Kỳ Tích</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Pho+Luat+Seocho" alt="Phó Luật Seocho"/>
                    <div class="movie-info">
                        <span class="movie-quality">Hoàn Tất(12/12)</span>
                        <div class="movie-title">Phó Luật Seocho</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Giac+Mo+Nguoi+Luat+Su" alt="Giấc Mơ Người Luật Sư"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 4-Vietsub</span>
                        <div class="movie-title">Giấc Mơ Người Luật Sư</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Hoa+Son+Luan+Kiem" alt="Hoa Sơn Luận Kiếm"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 9-Vietsub</span>
                        <div class="movie-title">Hoa Sơn Luận Kiếm - Ngũ Tuyệt Tr...</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Cam+Nguyet+Nhu+Ca" alt="Cẩm Nguyệt Như Ca"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 12-Vietsub</span>
                        <div class="movie-title">Cẩm Nguyệt Như Ca</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Pham+Nhan+Tu+Tien" alt="Phàm Nhân Tu Tiên Truyện"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 25-Vietsub</span>
                        <div class="movie-title">Phàm Nhân Tu Tiên Truyện</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=The+Gioi+Khong+Dong" alt="Thế Giới Không Đồng"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 12-Vietsub</span>
                        <div class="movie-title">Thế Giới Không Đồng: Tái Sinh</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Wednesday+2" alt="Wednesday"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 4-Vietsub</span>
                        <div class="movie-title">Wednesday (Phần 2)</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="movie-section trending-movies">
            <div class="section-header">
                <h2>PHIM THỊNH HÀNH</h2>
                <div class="movie-category-nav">
                    <a href="#">Phim Lẻ Thịnh hành</a>
                    <a href="#" class="active">Phim Bộ Thịnh hành</a>
                </div>
                <a href="#" class="see-all">Xem tất cả <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="movie-list">
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Pham+Nhan+Tu+Tien" alt="Phàm Nhân Tu Tiên Truyện"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 25-Vietsub</span>
                        <div class="movie-title">Phàm Nhân Tu Tiên Truyện</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Phong+Than+2" alt="Phong Thần 2"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Phong Thần 2: Chiến Hỏa Tây Kỷ</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Cam+Nguyet+Nhu+Ca" alt="Cẩm Nguyệt Như Ca"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 12-Vietsub</span>
                        <div class="movie-title">Cẩm Nguyệt Như Ca</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Wednesday+2" alt="Wednesday (Phần 2)"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 4-Vietsub</span>
                        <div class="movie-title">Wednesday (Phần 2)</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Na+Tra+2" alt="Na Tra 2"/>
                    <div class="movie-info">
                        <span class="movie-quality">HD-Vietsub</span>
                        <div class="movie-title">Na Tra 2: Ma Đồng Giáng Hỏa</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Hoa+Son+Luan+Kiem" alt="Hoa Sơn Luận Kiếm"/>
                    <div class="movie-info">
                        <span class="movie-quality">Tập 4-Vietsub</span>
                        <div class="movie-title">Hoa Sơn Luận Kiếm - Ngũ Tuyệt Tr...</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="movie-section coming-soon">
            <div class="section-header">
                <h2>PHIM MỚI SẮP CHIẾU</h2>
                <a href="#" class="see-all">Xem tất cả <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="movie-list">
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=F1" alt="F1"/>
                    <div class="movie-info">
                        <div class="movie-title">F1</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Doraemon" alt="Doraemon"/>
                    <div class="movie-info">
                        <div class="movie-title">Doraemon Movie 44: Nobita và...</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Nhiem+Vu+Bat+Kha+Thi" alt="Nhiệm Vụ Bất Khả Thi"/>
                    <div class="movie-info">
                        <div class="movie-title">Nhiệm Vụ Bất Khả Thi - Nghiệp B...</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Dat+Nuoc+Cua+Phan+Dien" alt="Đất Nước Của Phản Diện"/>
                    <div class="movie-info">
                        <div class="movie-title">Đất Nước Của Phản Diện</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Panor" alt="Panor"/>
                    <div class="movie-info">
                        <div class="movie-title">Panor: Tà Thuật Huyết Ngải</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Rider" alt="Rider"/>
                    <div class="movie-info">
                        <div class="movie-title">Rider: Giao Hàng Cho Ma</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Nhoc+Quy+Va+Khu+Rung" alt="Nhóc Quỷ Và Khu Rừng Kỳ Diệu"/>
                    <div class="movie-info">
                        <div class="movie-title">Nhóc Quỷ Và Khu Rừng Kỳ Diệu</div>
                    </div>
                </div>
                <div class="movie-item">
                    <img src="https://via.placeholder.com/200x300?text=Thien+Tai+Nem+Phao" alt="Thiên Tài Ném Phao"/>
                    <div class="movie-info">
                        <div class="movie-title">Thiên Tài Ném Phao</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span>...</span>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
        </section>
    </main>
    )
}