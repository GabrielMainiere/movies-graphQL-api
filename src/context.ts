import { prisma } from './prisma';
import { GenreRepository } from './genre/genre.repository';
import { GenreService } from './genre/genre.service';

export const createContext = () => {
  const genreRepository = new GenreRepository(prisma);
  const genreService = new GenreService(genreRepository);

  return { genreService };
};

export type Context = {
  genreService: GenreService;
};