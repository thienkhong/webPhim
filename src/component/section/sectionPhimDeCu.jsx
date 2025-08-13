export default function SectionPhimDeCu ({dataPhimDeCu}){
    return (
        <section className="movie-section featured-movies">
                    <div className="section-header">
                        <h2>{dataPhimDeCu.title}</h2>
                    </div>
                    <div className="movie-list">
                            {dataPhimDeCu.flim.map((item)=>(
                                
                            <div className="movie-item" key={item.idphim}>
                                <img src={item.img} alt={item.title}/>
                                <div className="movie-info">
                                    <span className="movie-quality">{item.quality}</span>
                                    <div className="movie-title">{item.title}</div>
                                </div>
                            </div>
                            ))}
                        
                    </div>
                </section>
    )
} 