import TimeUpdated from "../utils/formatDate";
import Genres from "./genres";
import { genres } from "../data/genreData";
import GetGenreIds from "../utils/getGenreIds";

/**
 * Podcast card component displaying:
 * - Cover image
 * - Title
 * - Number of seasons
 * - Genre tags
 * - Last updated date
 *
 * @component
 * @param {Object} props
 * @param {string} props.id - Podcast ID
 * @param {string} props.title - Podcast title
 * @param {string} props.description - Podcast description (unused here)
 * @param {number} props.seasons - Number of seasons
 * @param {string} props.img - Podcast cover image URL
 * @param {string} props.updated - ISO date string
 * @param {number[]} props.genres - Genre ID array
 * @returns {JSX.Element}
 */
export default function MainContent({
  id,
  title,
  description,
  seasons,
  image,
  updated,
  genres: genreIds,
}) {
  const updateDate = TimeUpdated(updated);
  const genreList = GetGenreIds(genreIds, genres);

  return (
    <div className="rounded-lg border-2 border-gray-400 bg-Podcast-card p-2 shadow-lg font-serif">
      <div className="p-2">
        <div className="w-full h-full mx-auto rounded-lg mb-2 overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover block rounded-2xl"
            alt={`Cover for ${title}`}
          />
        </div>

        <h2 className="text-lg font-bold p-1">{title}</h2>

        <div className="flex items-center mb-2">
          <img
            className="w-5 h-5 mr-2"
            src="src/assets/gray-calendar-25911.svg"
            alt="Calendar icon"
          />
          <p className="text-sm text-gray-700 font-medium">
            {seasons} season{seasons !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          <Genres genreList={genreList} />
        </div>

        <p className="text-xs text-gray-500 font-semibold">
          Updated: {updateDate}
        </p>
      </div>
    </div>
  );
}
