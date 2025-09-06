import { prisma } from './prisma';
import { GenreRepository } from './genre/genre.repository';
import { GenreService } from './genre/genre.service';

import { ActorRepository } from './actor/actor.repository';
import { ActorService } from './actor/actor.service';

export const createContext = () => {
  const genreRepository = new GenreRepository(prisma);
  const genreService = new GenreService(genreRepository);

  const actorRepository = new ActorRepository(prisma);
  const actorService = new ActorService(actorRepository);

  return { genreService, actorService };
};

export type Context = {
  genreService: GenreService;
  actorService: ActorService;
};
