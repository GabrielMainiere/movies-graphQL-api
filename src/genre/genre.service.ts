import { GenreRepository } from './genre.repository';
import { CreateGenreInput } from './input';

export class GenreService {
  private genreRepository: GenreRepository;

  constructor(repository: GenreRepository) {
    this.genreRepository = repository;
  }

  async getAllGenres() {
    return await this.genreRepository.findAll();
  }

  async getGenreById(id: number) {
    const genre = await this.genreRepository.findById(id);
    if (!genre) throw new Error(`Genre with id ${id} not found in database`);
    return genre;
  }

  async createGenre(input: CreateGenreInput) {
    return await this.genreRepository.create(input);
  }
}