import { dataPhimDeCu, dataPhimLe, dataPhimChieuRap, dataPhimBoMoi,dataPhimThinhHanh,dataPhimMoiSapChieu } from '../../data'
import SectionPhimDeCu from "./section/sectionPhimDeCu";
import SectionPhim from "./section/Section";

export default function MainContent() {
    return (
<main class="main-content">
        {/* <section class="banner-ads">
            <div class="ads-container">
                <img src="https://via.placeholder.com/1200x120?text=SaoBet+-+VB88+Quang+cao" alt="Banner quảng cáo lớn"/>
            </div>
        </section> */}
        {dataPhimDeCu.map((section)=>(
            <SectionPhimDeCu key={section.id} dataPhimDeCu={section}/>
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
        ))}

        <section class="pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span>...</span>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
        </section>
    </main>
    )
}