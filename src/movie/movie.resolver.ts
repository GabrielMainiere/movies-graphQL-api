import { Context } from '../context';
import { CreateMovieInput } from './createInput';
import { UpdateMovieInput } from './updateInput';

export const movieResolver = {
  Query: {
    movies: (_: any, __: any, context: Context) => context.movieService.getAllMovies(),
    movie: (_: any, { id }: { id: number }, context: Context) => context.movieService.getMovieById(id),
  },
  Mutation: {
    createMovie: (_: any, { input }: { input: CreateMovieInput }, context: Context) =>
      context.movieService.createMovie(input),
    updateMovie: (_: any, { id, input }: { id: number; input: UpdateMovieInput }, context: Context) =>
      context.movieService.updateMovie(id, input),
    deleteMovie: (_: any, { id }: { id: number }, context: Context) => context.movieService.deleteMovie(id),
    addActorsToMovie: (_: any, { movieId, actorIds }: { movieId: number; actorIds: number[] }, context: Context) =>
      context.movieService.addActorsToMovie(movieId, actorIds),
    removeActorFromMovie: (_: any, { movieId, actorId }: { movieId: number; actorId: number }, context: Context) =>
      context.movieService.removeActorFromMovie(movieId, actorId),
    addGenresToMovie: (_: any, { movieId, genreIds }: { movieId: number; genreIds: number[] }, context: Context) =>
      context.movieService.addGenresToMovie(movieId, genreIds),
    removeGenreFromMovie: (_: any, { movieId, genreId }: { movieId: number; genreId: number }, context: Context) =>
      context.movieService.removeGenreFromMovie(movieId, genreId),
  },
};
