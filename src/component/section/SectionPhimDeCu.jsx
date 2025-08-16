import { useRef, useEffect } from "react";
import styles from "./SectionPhimDeCu.module.css";

export default function SectionPhimLe({ dataPhimDeCu }) {
  const movieListRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  useEffect(() => {
    const movieList = movieListRef.current;
    const btnLeft = btnLeftRef.current;
    const btnRight = btnRightRef.current;

    if (!movieList || !btnLeft || !btnRight) return;

    const handleLeft = () => {
      movieList.scrollBy({ left: -220, behavior: "smooth" });
    };
    const handleRight = () => {
      movieList.scrollBy({ left: 220, behavior: "smooth" });
    };

    btnLeft.addEventListener("click", handleLeft);
    btnRight.addEventListener("click", handleRight);

    return () => {
      btnLeft.removeEventListener("click", handleLeft);
      btnRight.removeEventListener("click", handleRight);
    };
  }, []);

  return (
    <section className="movie-section">
      <div className="section-header">
        <h2>{dataPhimDeCu.title}</h2>
      </div>

      <div className="movie-slider">
        <button className="nav-btn nav-left" ref={btnLeftRef}>
          &#10094;
        </button>

        <div className="movie-list" ref={movieListRef}>
          {dataPhimDeCu.flim.map((item) => (
            <a
              key={item.idphim}
              href={`/phim/${item.idphim}`}
              className="movie-item"
            >
              <span className="movie-quality">{item.quality}</span>
              <img src={item.img} alt={item.title} />
              <div className="movie-title">
                <p>{item.title}</p>
              </div>
            </a>
          ))}
        </div>

        <button className="nav-btn nav-right" ref={btnRightRef}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
