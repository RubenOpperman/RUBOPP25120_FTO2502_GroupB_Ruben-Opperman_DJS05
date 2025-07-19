import React from "react";
import Episodes from "./Episodes";

export default function Seasons({ id, setOnEpisodeCount }) {
  const [loading, setLoading] = React.useState(true);
  const [podcast, setPodcast] = React.useState(null);
  const [selectedSeason, setSelectedSeason] = React.useState(null);

  function handleSelectedSeason(event) {
    const seasonId = Number(event.target.value);
    setSelectedSeason(seasonId);
  }

  React.useEffect(() => {
    async function loadPodcast() {
      setLoading(true);
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error("podcast not found");
      }
      const data = await response.json();

      const count = data.seasons.reduce(
        (sum, season) => sum + season.episodes.length,
        0
      );
      setOnEpisodeCount(count);

      setPodcast(data);
      setSelectedSeason(data.seasons[0]?.season);
      setLoading(false);
    }
    loadPodcast();
  }, [id]);

  if (loading)
    return <div className="p-6 text-3xl text-Podcast-card">Loading...</div>;
  if (!podcast)
    return (
      <div className="p-6 text-3xl text-Podcast-card">Podcast Not Found...</div>
    );

  return (
    <>
      <div>
        <div className="flex">
          <div className="text-white text-3xl">Current Season</div>

          <form className=" pr-10 ml-auto ">
            <select
              name="season"
              id="season"
              className="mb-4 p-2 border rounded bg-Podcast-card"
              onChange={handleSelectedSeason}
            >
              {podcast.seasons.map((season) => (
                <option key={season.season} value={season.season}>
                  {season.title}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className=" border-gray-400 border-2 rounded-xl bg-Podcast-card shadow-lg">
          <div className="  p-4 flex rounded-lg font-serif gap-4 mb-10">
            <img
              src={podcast.seasons[selectedSeason - 1].image}
              alt="podcast img"
              className="w-[10vw] rounded-2xl "
            />

            <div>
              <h1 className="font-bold text-xl mb-3">
                Season {selectedSeason}:{" "}
                {podcast.seasons[selectedSeason - 1].title}
              </h1>
              <p className="line-clamp-1 text-lg text-Font-primary-color mb-3">
                {podcast.description}
              </p>
              <div className="flex gap-10 text-secondary-font-color text-md font-medium ">
                <p>
                  {podcast.seasons[selectedSeason - 1].episodes.length} Episodes
                </p>
                <p>Released {new Date(podcast.updated).getFullYear()}</p>
              </div>
            </div>
          </div>
          <Episodes
            seasonImg={podcast.seasons[selectedSeason - 1].image}
            season={podcast.seasons[selectedSeason - 1].episodes}
          />
        </div>
      </div>
    </>
  );
}
