export default function Episodes({ season }) {
  return (
    <>
      {season.map((episode) => (
        <div
          key={episode.id}
          className="mb-4 mt-2 border-2 p-2 rounded-2xl border-gray-500"
        >
          <h1 className="mb-2">
            Episode {episode.episode}: {episode.title}
          </h1>
          <p className="line-clamp-1">{episode.description}</p>
        </div>
      ))}
    </>
  );
}
