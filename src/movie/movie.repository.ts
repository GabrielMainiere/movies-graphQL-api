import { PrismaClient } from '@prisma/client';
import { CreateMovieInput } from './createInput';
import { UpdateMovieInput } from './updateInput';

export class MovieRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll() {
    const movies = await this.prisma.movie.findMany();
    return movies;
  }

  async findById(id: number) {
    return await this.prisma.movie.findUnique({
      where: { id },
      include: { actors: true, genres: true },
    });
  }

  async create(data: CreateMovieInput) {
    return await this.prisma.movie.create({
      data: {
        title: data.title,
        year: data.year,
      },
      include: { actors: true, genres: true },
    });
  }

  async update(id: number, data: UpdateMovieInput) {
    return await this.prisma.movie.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.year && { year: data.year }),
      },
      include: { actors: true, genres: true },
    });
  }

  async delete(id: number) {
    return await this.prisma.movie.delete({ where: { id } });
  }

  async addActors(movieId: number, actorIds: number[]) {
    return await this.prisma.movie.update({
      where: { id: movieId },
      data: {
        actors: {
          connect: actorIds.map(id => ({ id })),
        },
      },
      include: { actors: true, genres: true },
    });
  }

  async removeActor(movieId: number, actorId: number) {
    return await this.prisma.movie.update({
      where: { id: movieId },
      data: {
        actors: {
          disconnect: { id: actorId },
        },
      },
      include: { actors: true, genres: true },
    });
  }

  async addGenres(movieId: number, genreIds: number[]) {
    return await this.prisma.movie.update({
      where: { id: movieId },
      data: {
        genres: {
          connect: genreIds.map(id => ({ id })),
        },
      },
      include: { actors: true, genres: true },
    });
  }

  async removeGenre(movieId: number, genreId: number) {
    return await this.prisma.movie.update({
      where: { id: movieId },
      data: {
        genres: {
          disconnect: { id: genreId },
        },
      },
      include: { actors: true, genres: true },
    });
  }
}
