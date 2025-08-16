import { dataPhimDeCu, dataPhimLe, dataPhimChieuRap, dataPhimBoMoi,dataPhimThinhHanh,dataPhimMoiSapChieu } from "../../../data"
import SectionPhim from "../section/Section";
import SectionPhimDeCu from "../section/SectionPhimDeCu.jsx"
import SectionPagi from '../section/SectionPagi';

export default function MainContent() {
    const allFilmSections = [
        dataPhimLe[0],
        dataPhimBoMoi[0],
        dataPhimChieuRap[0],
        dataPhimThinhHanh[0],
        dataPhimMoiSapChieu[0],
    ].filter(Boolean);
    return (
        <main className="main-content max-width-1500">
        {/* <section class="banner-ads">
            <div class="ads-container">
                <img src="https://via.placeholder.com/1200x120?text=SaoBet+-+VB88+Quang+cao" alt="Banner quảng cáo lớn"/>
            </div>
        </section> */}

        {dataPhimDeCu.map((section)=>(
            <SectionPhimDeCu key={section.id} dataPhimDeCu={section}/>
        ))}

        {allFilmSections.map((section) => (
            <SectionPhim 
            key={section.id} 
            // sectionData={section}
            dataPhimLe={section} 
            />
        ))}

        {/* {dataPhimDeCu.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))}

        {dataPhimLe.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))}

        {dataPhimChieuRap.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))}

        {dataPhimBoMoi.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))}

        {dataPhimThinhHanh.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))}

        {dataPhimMoiSapChieu.map((section)=>(
            <SectionPhim key={section.id} dataPhimLe={section}/>
        ))} */}

        <SectionPagi/>
    </main>
    )
}