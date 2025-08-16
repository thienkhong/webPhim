import { dataPhimLe } from "../../../data"
import SectionRouter from "../section/SectionRouter"
import SectionPagi from "../section/SectionPagi"

export default function PhimLe (){
    return (
        <main className="main-content movie-grid-container">
            {dataPhimLe.map((section)=>(
                <SectionRouter key={section.id} dataPhimLe={section}/>
            ))}
            <SectionPagi/>
        </main>
    )
}