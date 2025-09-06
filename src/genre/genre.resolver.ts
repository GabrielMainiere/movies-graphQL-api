import { Context } from '../context';
import { CreateGenreInput } from './input';

export const genreResolver = {
  Query: {
    genres: (_: any, __: any, context: Context) => context.genreService.getAllGenres(),
    genre: (_: any, { id }: { id: number }, context: Context) => context.genreService.getGenreById(id),
  },
  Mutation: {
    createGenre: (_: any, { input }: { input: CreateGenreInput }, context: Context) => context.genreService.createGenre(input),
  },
};