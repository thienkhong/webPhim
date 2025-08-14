import { dataPhimBoMoi } from "../../../data"
import SectionRouter from "../section/SectionRouter"
import SectionPagi from "../section/SectionPagi"


export default function PhimBo (){
    return (
        <main className="movie-grid-container">
            {dataPhimBoMoi.map((section)=>(
                <SectionRouter key={section.id} dataPhimLe={section}/>
            ))}
            <SectionPagi/>
        </main>
    )
}