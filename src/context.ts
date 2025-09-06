import { prisma } from './prisma';
import { GenreRepository } from './genre/genre.repository';
import { GenreService } from './genre/genre.service';

import { ActorRepository } from './actor/actor.repository';
import { ActorService } from './actor/actor.service';
import { MovieRepository } from './movie/movie.repository';
import { MovieService } from './movie/movie.service';

export const createContext = () => {
    const genreRepository = new GenreRepository(prisma);
    const genreService = new GenreService(genreRepository);
    
    const actorRepository = new ActorRepository(prisma);
    const actorService = new ActorService(actorRepository);

    const movieRepository = new MovieRepository(prisma);
    const movieService = new MovieService(movieRepository)

    return { genreService, actorService, movieService };
};

export type Context = {
    genreService: GenreService;
    actorService: ActorService;
    movieService: MovieService;
};
