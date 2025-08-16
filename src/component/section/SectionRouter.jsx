export default function SectionPhimLe({dataPhimLe,dataPhimBoMoi,dataPhimChieuRap}){
    return (
        <section className="movie-section max-width-1500">
            <div className="section-header ">
                <h2>{dataPhimLe.title}</h2>
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