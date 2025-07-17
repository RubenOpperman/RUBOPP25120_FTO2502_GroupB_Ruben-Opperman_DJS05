import { useParams, Link } from "react-router-dom";

export default function PodcastDetail({ data }) {
  const { id } = useParams();
  const podcast = data.find((p) => p.id === id);

  if (!podcast) return <div className="p-4">Podcast not found</div>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline mb-4 block">
        ← Back
      </Link>
      <h1 className="text-2xl font-bold">{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} className="my-4" />
      <p>{podcast.description}</p>
      <p>Updated: {new Date(podcast.updated).toLocaleDateString()}</p>
    </div>
  );
}
