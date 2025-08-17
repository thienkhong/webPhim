import { useParams } from 'react-router-dom';
import { 
  dataPhimMoiSapChieu, 
  dataPhimDeCu, 
  dataPhimLe, 
  dataPhimBoMoi,
  dataPhimChieuRap, // Đảm bảo import cả dataPhimChieuRap
  dataPhimThinhHanh // Đảm bảo import cả dataPhimThinhHanh
} from '../../../data'; 
export default function SectionMovie (){
    const { idphim } = useParams();
  const movieIdSlug = idphim; 

  let movie = null; // Biến để lưu trữ thông tin phim tìm được

  // Tập hợp tất cả các nguồn dữ liệu phim vào một mảng để dễ dàng duyệt qua
  const allMovieSources = [
    dataPhimMoiSapChieu[0]?.flim, 
    dataPhimDeCu[0]?.flim,        
    dataPhimLe[0]?.flim,          
    dataPhimBoMoi[0]?.flim,       
    dataPhimChieuRap[0]?.flim,    // Thêm mảng này vào nguồn tìm kiếm
    dataPhimThinhHanh[0]?.flim,   // Thêm mảng này vào nguồn tìm kiếm
  ].filter(Boolean); // Lọc bỏ các giá trị undefined nếu một nguồn không tồn tại hoặc không có mảng 'flim'

  // Duyệt qua từng nguồn dữ liệu để tìm kiếm bộ phim có ID tương ứng
  for (const source of allMovieSources) {
    // So sánh trực tiếp chuỗi ID
    const foundMovie = source.find(film => film.idphim === movieIdSlug); 
    if (foundMovie) {
      movie = foundMovie; // Gán phim tìm được vào biến movie
      break; // Dừng vòng lặp ngay khi tìm thấy phim để tối ưu hiệu suất
    }
  }

  // Các style CSS được định nghĩa dưới dạng đối tượng JavaScript
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#1a202c', // Tương đương bg-gray-900
    color: '#ffffff', // Tương đương text-white
    padding: '1rem', // Tương đương p-4
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box', // Đảm bảo padding không làm tràn layout
  };

  const notFoundContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a202c',
    color: '#ffffff',
    textAlign: 'center',
  };

  const notFoundTextStyle = {
    fontSize: '1.5rem', // Tương đương text-2xl
    fontWeight: 'bold',
    color: '#ef4444', // Tương đương text-red-500
  };

  const cardStyle = {
    backgroundColor: '#2d3748', // Tương đương bg-gray-800
    borderRadius: '0.5rem', // Tương đương rounded-lg
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Tương đương shadow-lg
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column', // Tương đương flex-col (mặc định cho mobile)
    maxWidth: '48rem', // Tương đương max-w-4xl
    width: '100%',
  };

  const imageWrapperStyle = {
    padding: '1rem', // Tương đương p-4
    flexShrink: 0, // Ngăn hình ảnh co lại
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem', // Tương đương rounded-lg
    objectFit: 'cover',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  };

  const infoWrapperStyle = {
    padding: '1rem', // Tương đương p-4
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1, // Cho phép phần thông tin mở rộng
  };

  const titleStyle = {
    fontSize: '1.875rem', // Tương đương text-3xl
    fontWeight: '800', // Tương đương font-extrabold
    marginBottom: '1rem', // Tương đương mb-4
    color: '#a78bfa', // Tương đương text-purple-400
  };

  const textStyle = {
    fontSize: '1.125rem', // Tương đương text-lg
    color: '#d1d5db', // Tương đương text-gray-300
    marginBottom: '0.5rem', // Tương đương mb-2
  };

  const descriptionStyle = {
    fontSize: '1rem', // Tương đương text-base
    color: '#9ca3af', // Tương đương text-gray-400
  };

  const buttonContainerStyle = {
    marginTop: '1.5rem', // Tương đương mt-6
  };

  const buttonStyle = {
    backgroundColor: '#dc2626', // Tương đương bg-red-600
    color: '#ffffff', // Tương đương text-white
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem', // Tương đương py-3 px-6
    borderRadius: '9999px', // Tương đương rounded-full
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)', // Tương đương transition duration-300 ease-in-out
    cursor: 'pointer', // Thêm cursor pointer cho nút
    border: 'none', // Bỏ border mặc định của button
    outline: 'none', // Bỏ outline khi focus
  };

  const buttonHoverStyle = { // Style cho hover, sẽ được áp dụng qua JS events
    backgroundColor: '#b91c1c', // Tương đương hover:bg-red-700
    transform: 'scale(1.05)', // Tương đương transform hover:scale-105
  };


  // Xử lý responsive (min-width: 768px)
  const isLargeScreen = window.innerWidth >= 768; 

  if (isLargeScreen) {
    Object.assign(cardStyle, { flexDirection: 'row' }); // md:flex-row
    Object.assign(imageWrapperStyle, { width: '50%', padding: '1.5rem' }); // md:w-1/2 md:p-6
    Object.assign(infoWrapperStyle, { width: '50%', padding: '1.5rem' }); // md:w-1/2 md:p-6
    Object.assign(containerStyle, { padding: '2rem' }); // md:p-8
    Object.assign(notFoundTextStyle, { fontSize: '1.875rem' }); // md:text-3xl
    Object.assign(titleStyle, { fontSize: '2.25rem' }); // md:text-4xl
  }


  // Kiểm tra nếu không tìm thấy phim
  if (!movie) {
    return (
      <div style={notFoundContainerStyle}>
        <h2 style={notFoundTextStyle}>
          Không tìm thấy phim này! 😢
        </h2>
      </div>
    );
  }

  // Nếu tìm thấy phim, hiển thị thông tin chi tiết
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={imageWrapperStyle}>
          <img
            src={movie.img || 'https://placehold.co/400x600/1a202c/e2e8f0?text=No+Image'}
            alt={movie.title}
            style={imageStyle}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/1a202c/e2e8f0?text=Image+Error'; }}
          />
        </div>
        <div style={infoWrapperStyle}>
          <h1 style={titleStyle}>
            {movie.title}
          </h1>
          {/* idphim giờ là chuỗi, hiển thị trực tiếp */}
          <p style={textStyle}>
            <strong>ID Phim:</strong> {movie.idphim}
          </p>
          <p style={{ ...textStyle, marginBottom: '1rem' }}> 
            <strong>Chất lượng:</strong> {movie.quality || 'Chưa cập nhật'}
          </p>
          <p style={descriptionStyle}>
            Đây là phần mô tả chi tiết của phim. Bạn có thể thêm nhiều thông tin khác về bộ phim ở đây như đạo diễn, diễn viên, thể loại, tóm tắt nội dung, v.v. Để làm được điều này, bạn cần bổ sung các trường dữ liệu tương ứng vào đối tượng phim trong file `data.js` của mình.
          </p>
          <div style={buttonContainerStyle}>
            <button 
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Xem Phim Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}