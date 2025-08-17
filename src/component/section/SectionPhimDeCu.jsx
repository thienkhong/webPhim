import { useRef, useEffect } from "react";

export default function SectionPhimLe({ dataPhimDeCu }) {
  const movieListRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  useEffect(() => {
    const movieList = movieListRef.current;
    const btnLeft = btnLeftRef.current;
    const btnRight = btnRightRef.current;

    if (!movieList || !btnLeft || !btnRight) return;

    const scrollStep = 1475; // bước cuộn

    const handleLeft = () => {
      if (movieList.scrollLeft === 0) {
        // nếu đang ở đầu -> nhảy về cuối
        movieList.scrollTo({
          left: movieList.scrollWidth,
          behavior: "smooth",
        });
      } else {
        movieList.scrollBy({ left: -scrollStep, behavior: "smooth" });
      }
    };

    const handleRight = () => {
      if (
        movieList.scrollLeft + movieList.clientWidth >=
        movieList.scrollWidth
      ) {
        // nếu đang ở cuối -> nhảy về đầu
        movieList.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        movieList.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    };

    btnLeft.addEventListener("click", handleLeft);
    btnRight.addEventListener("click", handleRight);

    return () => {
      btnLeft.removeEventListener("click", handleLeft);
      btnRight.removeEventListener("click", handleRight);
    };
  }, []);

  return (
    <section className="sectionPhimLe">
      <div className="sectionPhimLeHeader">
        <h2>{dataPhimDeCu.title}</h2>
      </div>

      <div className="phimSlider">
        <button className="phimNavBtn phimNavLeft" ref={btnLeftRef}>
          &#10094;
        </button>

        <div className="phimList" ref={movieListRef}>
          {dataPhimDeCu.flim.map((item) => (
            <a
              key={item.idphim}
              href={`/phim/${item.idphim}`}
              className="phimItem"
            >
              <span className="phimQuality">{item.quality}</span>
              <img src={item.imgbig} alt={item.title} />
              <div className="phimTitle">
                <p>{item.title}</p>
              </div>
            </a>
          ))}
        </div>

        <button className="phimNavBtn phimNavRight" ref={btnRightRef}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
