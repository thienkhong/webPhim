import { dataPhimBoMoi } from "../../../data"
import SectionRouter from "../section/SectionRouter"

export default function PhimBo (){
    return (
        <main className="movie-grid-container">
            {dataPhimBoMoi.map((section)=>(
                <SectionRouter key={section.id} dataPhimBoMoi={section}/>
            ))}
        </main>
    )
}