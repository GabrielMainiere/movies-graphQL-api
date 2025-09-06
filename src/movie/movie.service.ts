import { MovieRepository } from './movie.repository';
import { CreateMovieInput } from './createInput';
import { UpdateMovieInput } from './updateInput';

export class MovieService {
  constructor(private movieRepository: MovieRepository) {}

  async getAllMovies() {
    const movies = await this.movieRepository.findAll();
    if (movies.length === 0) throw new Error(`No movies found in database`);
    return movies;
  }

  async getMovieById(id: number) {
    const movie = await this.movieRepository.findById(id);
    if (!movie) throw new Error(`Movie with id ${id} not found`);
    return movie;
  }

  async createMovie(input: CreateMovieInput) {
    return await this.movieRepository.create(input);
  }

  async updateMovie(id: number, input: UpdateMovieInput) {
    const movie = await this.movieRepository.findById(id);
    if (!movie) throw new Error(`Movie with id ${id} not found`);

    return await this.movieRepository.update(id, input);
  }

  async deleteMovie(id: number) {
    const movie = await this.movieRepository.findById(id);
    if (!movie) throw new Error(`Movie with id ${id} not found`);

    return await this.movieRepository.delete(id);
  }

  async addActorsToMovie(movieId: number, actorIds: number[]) {
    const movie = await this.movieRepository.findById(movieId);
    if (!movie) throw new Error(`Movie with id ${movieId} not found`);
    
    return await this.movieRepository.addActors(movieId, actorIds);
  }

  async removeActorFromMovie(movieId: number, actorId: number) {
    const movie = await this.movieRepository.findById(movieId);
    if (!movie) throw new Error(`Movie with id ${movieId} not found`);

    return await this.movieRepository.removeActor(movieId, actorId);
  }

  async addGenresToMovie(movieId: number, genreIds: number[]) {
    const movie = await this.movieRepository.findById(movieId);
    if (!movie) throw new Error(`Movie with id ${movieId} not found`);

    return await this.movieRepository.addGenres(movieId, genreIds);
  }

  async removeGenreFromMovie(movieId: number, genreId: number) {
    const movie = await this.movieRepository.findById(movieId);
    if (!movie) throw new Error(`Movie with id ${movieId} not found`);
    
    return await this.movieRepository.removeGenre(movieId, genreId);
  }
}
