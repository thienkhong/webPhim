import {
  dataPhimDeCu,
  dataPhimLe,
  dataPhimChieuRap,
  dataPhimBoMoi,
  dataPhimThinhHanh,
  dataPhimMoiSapChieu,
} from "../../../data";
import SectionPhim from "../section/Section";
import SectionPhimDeCu from "../section/SectionPhimDeCu.jsx";

export default function MainContent() {
  const allFilmSections = [
    dataPhimLe[0],
    dataPhimBoMoi[0],
    dataPhimChieuRap[0],
    dataPhimThinhHanh[0],
  ].filter(Boolean);
  return (
    <main className="main-content max-width-1500">
      {dataPhimDeCu.map((section) => (
        <SectionPhimDeCu key={section.id} dataPhimDeCu={section} />
      ))}

      {allFilmSections.map((section) => (
        <SectionPhim key={section.id} dataPhimLe={section} />
      ))}
      {dataPhimMoiSapChieu.map((section) => (
        <SectionPhimDeCu key={section.id} dataPhimDeCu={section} />
      ))}
    </main>
  );
}
