import { useParams, Link } from "react-router-dom";
import Genres from "./genres";
import { genres } from "../data/genreData";
import GetGenreIds from "../utils/getGenreIds";

import Seasons from "./Seasons";

export default function PodcastDetail({ data }) {
  const { id } = useParams();
  const podcast = data.find((p) => p.id === id);

  if (!podcast) return <div className="p-4">Podcast not found</div>;

  const genreList = GetGenreIds(podcast.genres, genres);

  return (
    <div className="p-6">
      <Link
        to="/"
        className="text-white text-4xl bg-NavBar-bg rounded-full px-4 mb-4 py-2"
      >
        ←
      </Link>
      <div className="flex my-10">
        <div className="px-5">
          <img src={podcast.image} alt={podcast.title} className="w-50 " />
        </div>
        <div>
          <div className="mb-5">
            <h1 className="text-2xl font-bold">{podcast.title}</h1>
            <p>{podcast.description}</p>
          </div>

          <div className="">
            <div className="gap-10 grid grid-cols-2">
              <div id="genre-container" className=" flex-wrap  mb-4">
                <p>GENRES</p>
                <Genres genreList={genreList} />
              </div>

              <div className=" flex-wrap  mb-4">
                <p>LAST UPDATED</p>
                <p> {new Date(podcast.updated).toLocaleDateString()}</p>
              </div>

              <div className=" flex-wrap  mb-4">
                <p>TOTAL SEASONS</p>
                <p>{podcast.seasons} Seasons</p>
              </div>

              <div className=" flex-wrap  mb-4">
                <p>TOTAL EPISODES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seasons id={id} />
    </div>
  );
}
