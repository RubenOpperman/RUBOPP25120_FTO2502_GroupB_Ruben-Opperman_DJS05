import React from "react";

export default function Seasons({ id }) {
  const [loading, setLoading] = React.useState(true);
  const [podcast, setPodcast] = React.useState(null);
  const [selectedSeason, setSelectedSeason] = React.useState(null);

  function handleSelectedSeason(event) {
    const seasonId = Number(event.target.value);
    setSelectedSeason(seasonId);
    console.log("Selected Season ID:", seasonId);
  }

  React.useEffect(() => {
    async function loadPodcast() {
      setLoading(true);
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error("podcast not found");
      }
      const data = await response.json();
      setPodcast(data);
      setSelectedSeason(data.seasons[0]?.season);
      setLoading(false);
    }
    loadPodcast();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!podcast) return <div className="p-6">Podcast Not Found...</div>;

  return (
    <>
      <div>
        <div className="flex">
          <div>Current Season</div>

          <form className=" pr-10 ml-auto">
            <select
              name="season"
              id="season"
              className="mb-4 p-2 border rounded"
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

        <div className="border-gray-500 border-2 p-4 flex">
          <div className="">
            <img
              src={podcast.seasons[selectedSeason - 1].image}
              alt="podcast img"
              className="w-full"
            />
          </div>
          <div>
            <h1>
              Season {selectedSeason}:{" "}
              {podcast.seasons[selectedSeason - 1].title}
            </h1>
            <p className="line-clamp-1">{podcast.description}</p>
            <div>
              <p>Episodes</p>
              <p>Released {new Date(podcast.updated).getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
