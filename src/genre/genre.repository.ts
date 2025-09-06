import { PrismaClient } from '@prisma/client';
import { CreateGenreInput } from './input';

export class GenreRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll() {
    return this.prisma.genre.findMany();
  }

  async findById(id: number) {
    return this.prisma.genre.findUnique({ where: { id }, include: { movies: true } });
  }

  async create(data: CreateGenreInput) {
    return this.prisma.genre.create({ data });
  }
}