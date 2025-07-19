export default function Episodes({ season, seasonImg }) {
  return (
    <>
      {season.map((episode) => (
        <div
          key={episode.episode}
          className="mb-4 mt-2 border-2 p-2 m-5  flex flex-wrap gap-2 rounded-lg  border-gray-400 bg-Podcast-card shadow-lg font-serif"
        >
          <img className="w-[7vw] rounded-xl" src={seasonImg} alt="cover img" />
          <div>
            <h1 className="mb-2 font-bold text-sm sm:text-lg">
              Episode {episode.episode}: {episode.title}
            </h1>
            <p className="line-clamp-1 sm:text-md text-sm font-medium text-Font-primary-color ">
              {episode.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
