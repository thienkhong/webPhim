export default function SectionPhimLe({dataPhimLe,dataPhimChieuRap,dataPhimBoMoi,dataPhimThinhHanh, dataPhimMoiSapChieu}){
    return(
        <section className="movie-section newly-updated-singles">
            <div className="section-header">
                <h2>{dataPhimLe.title}</h2>
                <div className="movie-category-nav" >
                {dataPhimLe.list.map((item)=>(
                        <a href="#" key={item.idphim}>{item.title}</a>
                    ))}
                    </div>
                <a href="#" className="see-all">Xem tất cả <i className="fas fa-chevron-right"></i></a>
            </div>
            <div className="movie-list">
            {dataPhimLe.flim.map((item)=>(
                <a href={`/phim/${item.idphim}`} className="movie-item">
                    <img src={item.img} key={item.idphim} alt={item.title}/>
                    <div className="movie-info">
                        <span className="movie-quality">{item.quality}</span>
                        <div className="movie-title">{item.title}</div>
                    </div>
                </a>
            ))}
                
            </div>
        </section>
    )
}