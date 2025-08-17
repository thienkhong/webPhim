export default function SectionPhimLe({dataPhimDeCu,dataPhimLe,dataPhimChieuRap,dataPhimBoMoi,dataPhimThinhHanh, dataPhimMoiSapChieu}){
    return(
        <section className="movie-section newly-updated-singles">
            <div className="section-header">
                <h2>{dataPhimLe.title}</h2>
                {dataPhimLe.list && dataPhimLe.list.length > 0 && (
                <div className="movie-category-nav" >
                    {dataPhimLe.list.map((item)=>(
                        <a href="#" key={item.idphim}>{item.title}</a>
                    ))}
                </div>
                )}
                <a href="/" className="see-all">Xem tất cả <i className="fas fa-chevron-right"></i></a>
            </div>
            <div className="movie-list">
            {dataPhimLe.flim.map((item,index)=>(
                <a href={`/phim/${item.idphim}`} className={`movie-item ${index === 0 ? 'big':''}`}>
                    <span className="movie-quality">{item.quality}</span>
                    <img src={item.imgbig} key={item.idphim} alt={item.title}/>
                    <div className="movie-title">
                        <p>{item.title}</p>
                    </div>
                </a>
            ))}  
            </div>
        </section>
    )
}