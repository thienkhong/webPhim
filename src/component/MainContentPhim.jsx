import { dataPhimLe } from "../../data"
import SectionPhim from "./section/Section"

export default function MainContentPhim (){
    return (
        <main className="movie-grid-container">
            {dataPhimLe.map((section)=>(
                <SectionPhim key={section.id} dataPhimLe={section}/>
            ))}
        </main>
    )
}