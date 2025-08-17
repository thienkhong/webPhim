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