import { GenreRepository } from './genre.repository';
import { CreateGenreInput } from './input';

export class GenreService {
  private repository: GenreRepository;

  constructor(repository: GenreRepository) {
    this.repository = repository;
  }

  async getAllGenres() {
    return this.repository.findAll();
  }

  async getGenreById(id: number) {
    const genre = await this.repository.findById(id);
    if (!genre) throw new Error('Genre not found');
    return genre;
  }

  async createGenre(input: CreateGenreInput) {
    return this.repository.create(input);
  }
}