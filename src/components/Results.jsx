import MovieCard from "./MovieCard";
export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <MovieCard result={result} key={result.id} />
        // <h2 key={result.id}>{result.title}</h2>
      ))}
    </div>
  );
}
