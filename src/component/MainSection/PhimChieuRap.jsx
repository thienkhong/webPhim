import { dataPhimChieuRap } from "../../../data"
import SectionRouter from "../section/SectionRouter"

export default function PhimChieuRap (){
    return (
        <main className="movie-grid-container">
            {dataPhimChieuRap.map((section)=>(
                <SectionRouter key={section.id} dataPhimChieuRap={section}/>
            ))}
        </main>
    )
}