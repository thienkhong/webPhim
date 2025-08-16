import { dataPhimChieuRap } from "../../../data"
import SectionPagi from "../section/SectionPagi"
import SectionRouter from "../section/SectionRouter"

export default function PhimChieuRap (){
    return (
        <main className="main-content movie-grid-container">
            {dataPhimChieuRap.map((section)=>(
                <SectionRouter key={section.id} dataPhimLe={section}/>
            ))}
            <SectionPagi/>
        </main>
    )
}