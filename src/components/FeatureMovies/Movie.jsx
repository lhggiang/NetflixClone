import ImageComponent from "@/ImageComponent";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalContext } from "@context/ModalProvider";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const {
    data: { id, backdrop_path, title, release_date, overview },
    trailerVideoKey,
  } = props;

  console.log({ props });
  const { openPopup } = useModalContext();

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <ImageComponent
        src={
          backdrop_path && `https://image.tmdb.org/t/p/original${backdrop_path}`
        }
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
        width={900}
        height={500}
      />
      {/* Content */}
      <div className="absolute left-8 top-0 flex h-full w-1/2 flex-col justify-center text-white sm:w-1/3">
        <p className="mb-2 text-2xl font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                );
              }}
              className="mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg"
            >
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <Link to={`/movie/${id}`}>
              <button className="rounded bg-slate-300/35 px-4 py-2 text-white lg:text-lg">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
