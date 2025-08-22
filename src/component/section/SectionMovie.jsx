import { useParams } from "react-router-dom";
import SectionPhimDeCu from "../section/SectionPhimDeCu";
import {
  dataPhimMoiSapChieu,
  dataPhimDeCu,
  dataPhimLe,
  dataPhimBoMoi,
  dataPhimChieuRap,
  dataPhimThinhHanh,
  dataCoTheMuonXem,
} from "../../../data";
export default function SectionMovie() {
  const { idphim } = useParams();
  const movieIdSlug = idphim;

  let movie = null; // Biến để lưu trữ thông tin phim tìm được

  // Tập hợp tất cả các nguồn dữ liệu phim vào một mảng để dễ dàng duyệt qua
  const allMovieSources = [
    dataPhimMoiSapChieu[0]?.film,
    dataPhimDeCu[0]?.film,
    dataPhimLe[0]?.film,
    dataPhimBoMoi[0]?.film,
    dataPhimChieuRap[0]?.film,
    dataCoTheMuonXem[0]?.film, // Thêm mảng này vào nguồn tìm kiếm
    dataPhimThinhHanh[0]?.film, // Thêm mảng này vào nguồn tìm kiếm
  ].filter(Boolean); // Lọc bỏ các giá trị undefined nếu một nguồn không tồn tại hoặc không có mảng 'film'

  // Duyệt qua từng nguồn dữ liệu để tìm kiếm bộ phim có ID tương ứng
  for (const source of allMovieSources) {
    // So sánh trực tiếp chuỗi ID
    const foundMovie = source.find((film) => film.idphim === movieIdSlug);
    if (foundMovie) {
      movie = foundMovie; // Gán phim tìm được vào biến movie
      break; // Dừng vòng lặp ngay khi tìm thấy phim để tối ưu hiệu suất
    }
  }

  // Kiểm tra nếu không tìm thấy phim
  if (!movie) {
    return (
      <div>
        <h2>Không tìm thấy phim này! 😢</h2>
      </div>
    );
  }

  // Nếu tìm thấy phim, hiển thị thông tin chi tiết
  return (
    <div class="maincontent-phim">
      <div class="maincontent-img">
        <img src={movie.imgbig} alt="" />
        <div class="maincontent-title">
          <img src={movie.img} alt="" />
          <div class="title-content">
            <h1>{movie.title}</h1>
            <h2>{movie.title}</h2>
            <div class="title-content-button">
              <button class="button-red">
                <span class="button-flex">
                  <i class="fa-brands fa-youtube"></i>
                  <p>Trailer</p>
                </span>
              </button>
              <button class="button-blue">
                <span class="button-flex">
                  <i class="fa-solid fa-circle-play"></i>
                  <p>Xem Phim</p>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="icon-play">
          <a href="#">
            <i class="fa-solid fa-circle-play"></i>
          </a>
        </div>
      </div>
      <div class="maincontent-noidung">
        <div class="maincontent-danhgia">
          <button>
            <span class="button-flex">
              <i class="fa-solid fa-thumbs-up"></i>
              <p>Thích</p>
              <p>0</p>
            </span>
          </button>
          <button>
            <span>Chia sẻ</span>
          </button>
        </div>
        <ul class="maincontent-infor">
          <li>
            <label>Đang phát: </label>
            <span>
              <p>{movie.quality}</p>
            </span>
          </li>
          <li>
            <label>Năm Phát Hành:</label>
            <span>
              <p>{movie.year}</p>
            </span>
          </li>
          <li>
            <label>Quốc gia: </label>
            <span>
              <p>{movie.country}</p>
            </span>
          </li>
          <li>
            <label>Thể loại:</label>
            <span>
              <p>{movie.category}</p>
            </span>
          </li>
          <li>
            <label>Đạo diễn:</label>
            <span>
              <p>{movie.director}</p>
            </span>
          </li>
          <li>
            <label>Điểm IMDb</label>
            <span>
              <p>{movie.scoreIMDb}</p>
            </span>
          </li>
          <li>
            <label>Điểm Rottentomatoes: </label>
            <span>
              <p>{movie.scoreRot}</p>
            </span>
          </li>
          <li>
            <label>Thời lượng:</label>
            <span>
              <p>{movie.duration}</p>
            </span>
          </li>
          <li>
            <label>Diễn viên: </label>
            <span>
              <p>{movie.charecter}</p>
            </span>
          </li>
        </ul>
        <div class="noidungphim">
          <h1>Nội dung phim</h1>
          <p>{movie.moviecontent}</p>
        </div>
      </div>
      {dataCoTheMuonXem.map((section) => (
        <SectionPhimDeCu key={section.id} dataPhimDeCu={section} />
      ))}
      {dataPhimDeCu.map((section) => (
        <SectionPhimDeCu key={section.id} dataPhimDeCu={section} />
      ))}
    </div>
  );
}
