export function MovieCard({ movie }: { movie: Movie }) {
    return (
      <div className="border rounded-lg p-4 bg-neutral-900 hover:bg-neutral-800 transition-colors">
        <img 
          src={movie.poster || '/film-placeholder.jpg'} 
          alt={movie.title}
          className="h-64 w-full object-cover mb-4 rounded-lg"
        />
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm">
            ★ {movie.rating}
          </span>
        </div>
        <p className="text-gray-400 mb-2">{movie.director} ({movie.year})</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.genres.map(genre => (
            <span key={genre} className="px-2 py-1 bg-blue-800 rounded-full text-xs">
              {genre}
            </span>
          ))}
        </div>
      </div>
    );
  }