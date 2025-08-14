export default function SectionMCH({dataPhimLe}){
    return (
        <>
        <h2>{dataPhimLe.title}</h2>
        <div className="movie-grid">
            {dataPhimLe.flim.map((item)=>(
                <a href="#" className="movie-card" key={item.idphim}>
                    <div className="movie-image-container">
                        <img src={item.img} alt="Movie Title"/>
                        <div className="quality-tag">{item.quality}</div>
                    </div>
                    <div className="movie-title">{item.title}</div>
                </a>
            ))}
        </div>
        <div className="pagination">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">...</a>
        </div>
        </>
    )
}